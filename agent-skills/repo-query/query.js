#!/usr/bin/env node

import { readFileSync, existsSync, readdirSync, statSync } from 'fs'
import { join, relative, resolve } from 'path'

function parseArgs(argv) {
  const args = [...argv]
  let limit = 8
  let repo = process.cwd()
  const terms = []

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (arg === '--limit') {
      limit = Number(args[++i] || 8)
      continue
    }
    if (arg === '--repo') {
      repo = resolve(args[++i] || process.cwd())
      continue
    }
    terms.push(arg)
  }

  return {
    term: terms.join(' ').trim(),
    limit: Number.isFinite(limit) && limit > 0 ? limit : 8,
    repo,
  }
}

function sectionizeMarkdown(content) {
  const lines = content.split(/\r?\n/)
  const sections = []
  let current = { heading: '(top)', level: 0, lines: [] }

  for (const line of lines) {
    const match = line.match(/^(#{1,6})\s+(.*)$/)
    if (match) {
      sections.push(current)
      current = {
        heading: match[2].trim(),
        level: match[1].length,
        lines: [],
      }
    } else {
      current.lines.push(line)
    }
  }
  sections.push(current)
  return sections.filter(s => s.heading !== '(top)' || s.lines.join(' ').trim())
}

function stripMarkdown(text) {
  return text
    .replace(/\!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/[>*_#-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function makeSnippet(text, term, max = 180) {
  const cleaned = stripMarkdown(text)
  if (!cleaned) return ''
  const lower = cleaned.toLowerCase()
  const idx = lower.indexOf(term.toLowerCase())
  if (idx === -1) return cleaned.slice(0, max) + (cleaned.length > max ? '…' : '')
  const start = Math.max(0, idx - 60)
  const end = Math.min(cleaned.length, idx + term.length + 100)
  const snippet = cleaned.slice(start, end)
  return (start > 0 ? '…' : '') + snippet + (end < cleaned.length ? '…' : '')
}

function extractAdjacentConcepts(sectionText) {
  const lines = sectionText.split(/\r?\n/)
  const idx = lines.findIndex(line => line.trim() === '**Adjacent concepts**')
  if (idx === -1) return []
  const results = []
  for (let i = idx + 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) continue
    if (line.startsWith('**') || line.startsWith('## ')) break
    const match = line.match(/^-\s+\[([^\]]+)\]\(/)
    if (match) results.push(match[1].trim())
  }
  return results
}

function scanFile(path, kind, term) {
  const content = readFileSync(path, 'utf8')
  const sections = sectionizeMarkdown(content)
  const matches = []

  for (const section of sections) {
    const body = section.lines.join('\n')
    const haystack = `${section.heading}\n${body}`.toLowerCase()
    if (!haystack.includes(term.toLowerCase())) continue

    matches.push({
      path,
      kind,
      heading: section.heading,
      snippet: makeSnippet(`${section.heading}\n${body}`, term),
      adjacent: kind === 'concept' ? extractAdjacentConcepts(body) : [],
    })
  }

  return matches
}

function targetFiles(repo) {
  const files = [
    ['resources/articles.md', 'source'],
    ['resources/people.md', 'source'],
    ['resources/projects.md', 'source'],
    ['librarian-notes.md', 'note'],
    ['ai-generated/concept-index.md', 'concept'],
  ]

  const aiGenerated = join(repo, 'ai-generated')
  if (existsSync(aiGenerated)) {
    for (const name of readdirSync(aiGenerated)) {
      const full = join(aiGenerated, name)
      if (name === 'concept-index.md') continue
      if (name === 'experiments') continue
      if (statSync(full).isFile() && name.endsWith('.md')) {
        files.push([`ai-generated/${name}`, 'synthesis'])
      }
    }
  }

  return files
}

function formatGroup(title, items, repo, limit) {
  if (items.length === 0) return []
  const lines = [`## ${title}`, '']
  for (const item of items.slice(0, limit)) {
    lines.push(`- ${relative(repo, item.path)} — ${item.heading}`)
    if (item.snippet) lines.push(`  ${item.snippet}`)
    if (item.adjacent?.length) lines.push(`  Adjacent: ${item.adjacent.join(' · ')}`)
  }
  if (items.length > limit) lines.push(`- … ${items.length - limit} more`)
  lines.push('')
  return lines
}

const { term, limit, repo } = parseArgs(process.argv.slice(2))

if (!term) {
  console.error('Usage: node query.js "search term" [--limit N] [--repo PATH]')
  process.exit(1)
}

const files = targetFiles(repo)
const allMatches = []

for (const [relPath, kind] of files) {
  const fullPath = join(repo, relPath)
  if (!existsSync(fullPath)) continue
  allMatches.push(...scanFile(fullPath, kind, term))
}

const concepts = allMatches.filter(m => m.kind === 'concept')
const sources = allMatches.filter(m => m.kind === 'source')
const syntheses = allMatches.filter(m => m.kind === 'synthesis' || m.kind === 'note')

const lines = [`# Repo Query — ${term}`, '']
if (allMatches.length === 0) {
  lines.push('No matches found.')
} else {
  lines.push(...formatGroup('Concepts', concepts, repo, limit))
  lines.push(...formatGroup('Source Entries', sources, repo, limit))
  lines.push(...formatGroup('Syntheses and Notes', syntheses, repo, limit))
}

console.log(lines.join('\n'))
