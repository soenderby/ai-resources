#!/usr/bin/env node
// Feed checker for ai-resources
// Fetches RSS feeds and GitHub releases for tracked people/projects,
// reports items not seen on previous runs.
// All sources are fetched concurrently to keep runtime short.

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import yaml from 'js-yaml'
import Parser from 'rss-parser'

const __dirname = dirname(fileURLToPath(import.meta.url))
const FEEDS_FILE = join(__dirname, 'feeds.yaml')
const STATE_FILE = join(__dirname, 'state.json')

// Cap seen IDs per source to prevent state file growing indefinitely
const MAX_SEEN_IDS = 200

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

// --since YYYY-MM-DD  Report all items published on or after this date,
//                     regardless of prior state. State is still updated normally.
const sinceIndex = process.argv.indexOf('--since')
const sinceDate = sinceIndex !== -1 ? new Date(process.argv[sinceIndex + 1]) : null

if (sinceDate && isNaN(sinceDate)) {
  console.error('Error: --since requires a valid date, e.g. --since 2026-03-04')
  process.exit(1)
}

// ---------------------------------------------------------------------------
// Load config and state
// ---------------------------------------------------------------------------

const config = yaml.load(readFileSync(FEEDS_FILE, 'utf8'))

let state = { feeds: {}, github: {} }
if (existsSync(STATE_FILE)) {
  try {
    state = JSON.parse(readFileSync(STATE_FILE, 'utf8'))
  } catch {
    // Corrupt state file — start fresh
  }
}

// ---------------------------------------------------------------------------
// RSS helpers
// ---------------------------------------------------------------------------

const parser = new Parser({
  headers: { 'User-Agent': 'ai-resources-feed-checker/1.0 (github.com/soenderby/ai-resources)' },
  customFields: { item: ['summary', 'content:encoded'] },
})

const FETCH_TIMEOUT_MS = 10000

async function fetchFeed(url) {
  try {
    // Use native fetch + AbortSignal for a reliable timeout, then parse the text.
    // rss-parser.parseURL() uses axios internally and its timeout is unreliable on some platforms.
    const res = await fetch(url, {
      headers: { 'User-Agent': 'ai-resources-feed-checker/1.0 (github.com/soenderby/ai-resources)' },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    })
    if (!res.ok) return { ok: false, error: `HTTP ${res.status}` }
    const text = await res.text()
    const feed = await parser.parseString(text)
    return { ok: true, feed }
  } catch (err) {
    return { ok: false, error: err.message }
  }
}

function itemId(item) {
  return item.guid || item.link || null
}

function itemExcerpt(item) {
  const raw =
    item.contentSnippet ||
    item.summary ||
    item['content:encoded'] ||
    item.content ||
    item.description ||
    ''
  const text = raw.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  return text.length > 220 ? text.substring(0, 220).trimEnd() + '…' : text
}

// ---------------------------------------------------------------------------
// GitHub helpers
// ---------------------------------------------------------------------------

async function fetchGithubReleases(ownerRepo) {
  const token = process.env.GITHUB_TOKEN
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'ai-resources-feed-checker/1.0',
    'X-GitHub-Api-Version': '2022-11-28',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }
  try {
    const res = await fetch(
      `https://api.github.com/repos/${ownerRepo}/releases?per_page=10`,
      { headers, signal: AbortSignal.timeout(8000) }
    )
    if (!res.ok) {
      const body = await res.text().catch(() => '')
      return { ok: false, error: `HTTP ${res.status}${body ? ': ' + body.slice(0, 100) : ''}` }
    }
    const releases = await res.json()
    return { ok: true, releases }
  } catch (err) {
    return { ok: false, error: err.message }
  }
}

// ---------------------------------------------------------------------------
// Build task list and fetch everything concurrently
// ---------------------------------------------------------------------------

// Each task is { kind: 'feed'|'github', person, source, fetchPromise }
const tasks = []

for (const person of config.people ?? []) {
  for (const feedUrl of person.feeds ?? []) {
    tasks.push({
      kind: 'feed',
      person: person.name,
      source: feedUrl,
      fetchPromise: fetchFeed(feedUrl),
    })
  }
}

for (const project of config.projects ?? []) {
  if (!project.github) continue
  tasks.push({
    kind: 'github',
    person: project.owner || project.name,
    projectName: project.name,
    source: project.github,
    fetchPromise: fetchGithubReleases(project.github),
  })
}

// Wait for all fetches to complete
const results = await Promise.all(tasks.map(t => t.fetchPromise))

// ---------------------------------------------------------------------------
// Process results
// ---------------------------------------------------------------------------

const report = {
  newItems: [],  // { person, source, type, title, url, date, excerpt }
  errors: [],    // { name, source, error }
  quiet: [],     // sources checked with nothing new
}

for (let i = 0; i < tasks.length; i++) {
  const task = tasks[i]
  const result = results[i]

  if (task.kind === 'feed') {
    const feedUrl = task.source
    const hostname = new URL(feedUrl).hostname

    if (!result.ok) {
      report.errors.push({ name: task.person, source: feedUrl, error: result.error })
      continue
    }

    const feedState = state.feeds[feedUrl] ?? { seenIds: [] }
    const seenSet = new Set(feedState.seenIds)
    const isFirstRun = !feedState.lastChecked
    const newForFeed = []

    for (const item of result.feed.items ?? []) {
      const id = itemId(item)
      if (!id) continue
      const itemDate = item.isoDate ? new Date(item.isoDate) : null
      const isNew = sinceDate
        ? (itemDate && itemDate >= sinceDate)
        : (!seenSet.has(id) && !isFirstRun)

      if (isNew) {
        newForFeed.push({
          person: task.person,
          source: hostname,
          type: 'article',
          title: item.title?.trim() || '(untitled)',
          url: item.link || id,
          date: item.isoDate ? item.isoDate.substring(0, 10) : '',
          excerpt: itemExcerpt(item),
        })
      }
      seenSet.add(id)
    }

    state.feeds[feedUrl] = {
      lastChecked: new Date().toISOString(),
      seenIds: [...seenSet].slice(-MAX_SEEN_IDS),
    }

    if (isFirstRun) {
      report.quiet.push(`${task.person} (${hostname}) — initialised`)
    } else if (newForFeed.length > 0) {
      report.newItems.push(...newForFeed)
    } else {
      report.quiet.push(`${task.person} (${hostname})`)
    }
  }

  if (task.kind === 'github') {
    const ownerRepo = task.source

    if (!result.ok) {
      report.errors.push({ name: task.projectName, source: `github:${ownerRepo}`, error: result.error })
      continue
    }

    const repoState = state.github[ownerRepo] ?? { seenIds: [] }
    const seenSet = new Set(repoState.seenIds)
    const isFirstRun = !repoState.lastChecked
    const newForRepo = []

    for (const release of result.releases ?? []) {
      if (release.draft || release.prerelease) continue
      const id = release.tag_name
      const releaseDate = release.published_at ? new Date(release.published_at) : null
      const isNew = sinceDate
        ? (releaseDate && releaseDate >= sinceDate)
        : (!seenSet.has(id) && !isFirstRun)

      if (isNew) {
        const body = (release.body || '').replace(/\r?\n/g, ' ').trim()
        newForRepo.push({
          person: task.person,
          source: `github.com/${ownerRepo}`,
          type: 'release',
          title: `${task.projectName} ${release.name || release.tag_name}`,
          url: release.html_url,
          date: release.published_at ? release.published_at.substring(0, 10) : '',
          excerpt: body.length > 220 ? body.substring(0, 220).trimEnd() + '…' : body,
        })
      }
      seenSet.add(id)
    }

    state.github[ownerRepo] = {
      lastChecked: new Date().toISOString(),
      seenIds: [...seenSet].slice(-MAX_SEEN_IDS),
    }

    if (isFirstRun) {
      report.quiet.push(`${task.projectName} (${ownerRepo}) — initialised`)
    } else if (newForRepo.length > 0) {
      report.newItems.push(...newForRepo)
    } else {
      report.quiet.push(`${task.projectName} (${ownerRepo})`)
    }
  }
}

// ---------------------------------------------------------------------------
// Save state
// ---------------------------------------------------------------------------

writeFileSync(STATE_FILE, JSON.stringify(state, null, 2))

// ---------------------------------------------------------------------------
// Output — clean Markdown
// ---------------------------------------------------------------------------

const today = new Date().toISOString().substring(0, 10)
const lines = [`# Feed Check Report — ${today}`, '']

if (report.newItems.length === 0 && report.errors.length === 0) {
  lines.push('No new items found.', '')
} else {
  if (report.newItems.length > 0) {
    lines.push('## New Items', '')

    const byPerson = {}
    for (const item of report.newItems) {
      ;(byPerson[item.person] ??= []).push(item)
    }

    for (const [person, items] of Object.entries(byPerson)) {
      lines.push(`### ${person}`)
      for (const item of items) {
        const icon = item.type === 'release' ? '🏷' : '📄'
        const dateStr = item.date ? ` — ${item.date}` : ''
        lines.push(`- ${icon} **[${item.title}](${item.url})**${dateStr}`)
        if (item.excerpt) {
          lines.push(`  > ${item.excerpt}`)
        }
      }
      lines.push('')
    }
  }

  if (report.errors.length > 0) {
    lines.push('## Errors', '')
    for (const err of report.errors) {
      lines.push(`- **${err.name}** (\`${err.source}\`): ${err.error}`)
    }
    lines.push('')
  }
}

if (report.quiet.length > 0) {
  const label = sinceDate
    ? `_Nothing published since ${sinceDate.toISOString().substring(0, 10)}: ${report.quiet.join(' · ')}_`
    : `_Checked with no new items: ${report.quiet.join(' · ')}_`
  lines.push('---', label, '')
}

console.log(lines.join('\n'))
