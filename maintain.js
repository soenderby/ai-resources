#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

// ── Configuration ──────────────────────────────────────────────────────────────

const REPO_ROOT = path.resolve(__dirname);
const RESOURCES = path.join(REPO_ROOT, 'resources');
const ARCHIVE_WARN_LINES = 220;
const CANONICAL_FILES = ['people.md', 'articles.md', 'events.md', 'books.md', 'projects.md', 'glossary.md'];
const ENTRY_FILES = ['articles', 'events', 'books', 'projects']; // files with By-lines

const INDEX_LABELS = {
  'people.md':   'tracked people',
  'articles.md': 'tracked articles / reference sites',
  'events.md':   'tracked events / dated snapshots',
  'books.md':    'tracked books',
  'projects.md': 'tracked projects',
  'glossary.md': 'terms under active semantic diffusion',
};

// ── Report accumulator ─────────────────────────────────────────────────────────

const report = { fixed: [], warnings: [] };

// ── Helpers ─────────────────────────────────────────────────────────────────────

function slugify(text) {
  let s = text;
  s = s.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');   // [text](url) → text
  s = s.replace(/[*_`]/g, '');                       // strip formatting
  s = s.toLowerCase();
  s = s.replace(/[^\p{L}\p{N}\s-]/gu, '');           // keep letters, digits, spaces, hyphens
  s = s.replace(/\s+/g, '-');                         // spaces → hyphens
  s = s.replace(/^-+|-+$/g, '');                      // trim edges
  return s;
}

function extractTitle(heading) {
  const match = heading.match(/^\[(.+)\]\(.+\)$/);
  return match ? match[1] : heading;
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

/** Parse H2 entries from markdown. Returns [{ heading, title, anchor, content, lineNumber }]. */
function parseEntries(content) {
  const entries = [];
  const lines = content.split('\n');
  let current = null;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('## ')) {
      if (current) entries.push(current);
      const heading = lines[i].slice(3).trim();
      current = { heading, title: extractTitle(heading), anchor: slugify(heading), content: '', lineNumber: i + 1 };
    } else if (current) {
      current.content += lines[i] + '\n';
    }
  }
  if (current) entries.push(current);
  return entries;
}

/**
 * Extract just the author portion from a "By ..." line.
 * The author portion ends at the first ". " (period + space) that isn't inside parentheses.
 * This separates "By [Author](people.md#anchor)" from the annotation text that follows.
 */
function extractAuthorPortion(content) {
  const byMatch = content.match(/^By\s+(.+)/m);
  if (!byMatch) return null;
  const line = byMatch[1];

  let depth = 0;
  let cutoff = line.length;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '(') depth++;
    else if (line[i] === ')') depth--;
    else if (line[i] === '.' && depth === 0 && i + 1 < line.length && line[i + 1] === ' ') {
      cutoff = i;
      break;
    }
  }
  return line.slice(0, cutoff);
}

/** Find [Name](people.md#anchor) references in the author portion of a "By ..." line. */
function findByLineRefs(content) {
  const authorPart = extractAuthorPortion(content);
  if (!authorPart) return [];
  const refs = [];
  const linkRegex = /\[([^\]]+)\]\(people\.md#([^)]+)\)/g;
  let m;
  while ((m = linkRegex.exec(authorPart)) !== null) {
    refs.push({ name: m[1], anchor: m[2] });
  }
  return refs;
}

/**
 * Find what a person entry claims to have authored.
 * Only scans lines containing "Articles:", "Events:", "Books:", or "Projects:" labels.
 */
function findPersonClaims(content) {
  const claims = { articles: [], events: [], books: [], projects: [] };
  const labels = ['Articles', 'Events', 'Books', 'Projects'];

  for (const line of content.split('\n')) {
    if (!labels.some(l => line.includes(`${l}:`))) continue;
    const linkRegex = /\[([^\]]+)\]\((articles|events|books|projects)\.md#([^)]+)\)/g;
    let m;
    while ((m = linkRegex.exec(line)) !== null) {
      claims[m[2]].push({ title: m[1], anchor: m[3] });
    }
  }
  return claims;
}

// ── Checks (report-only) ───────────────────────────────────────────────────────

function checkBrokenLinks(files, anchorMaps) {
  for (const [name, { content }] of Object.entries(files)) {
    const linkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
    let m;
    while ((m = linkRegex.exec(content)) !== null) {
      const href = m[2];
      if (/^https?:\/\//.test(href) || href.startsWith('../')) continue;

      let file, anchor;
      if (href.startsWith('#')) {
        file = name;
        anchor = href.slice(1);
      } else {
        const hashIdx = href.indexOf('#');
        if (hashIdx === -1) continue;
        file = href.slice(0, hashIdx);
        anchor = href.slice(hashIdx + 1);
      }

      if (!anchorMaps[file]) {
        report.warnings.push(`[broken-link] ${name}: links to unknown file "${file}" (from "${m[1]}")`);
      } else if (!anchorMaps[file].has(anchor)) {
        report.warnings.push(`[broken-link] ${name}: anchor "#${anchor}" not found in ${file} (from "${m[1]}")`);
      }
    }
  }
}

function checkCrossLinks(files, anchorMaps) {
  const peopleAnchors = anchorMaps['people.md'];

  // Build person → claims map
  const personClaimsMap = {};
  for (const person of files['people.md'].entries) {
    personClaimsMap[person.anchor] = findPersonClaims(person.content);
  }

  // For each authored entry, check that the author's people.md entry lists it
  for (const fileType of ENTRY_FILES) {
    const fileName = `${fileType}.md`;
    for (const entry of files[fileName].entries) {
      for (const ref of findByLineRefs(entry.content)) {
        if (!peopleAnchors.has(ref.anchor)) continue; // broken-link check covers this
        const claims = personClaimsMap[ref.anchor];
        if (claims && !claims[fileType].some(c => c.anchor === entry.anchor)) {
          report.warnings.push(
            `[missing-cross-link] people.md#${ref.anchor} (${ref.name}): does not list "${entry.title}" from ${fileName}`
          );
        }
      }
    }
  }
}

function checkUnlinkedAuthors(files) {
  const personNames = files['people.md'].entries.map(e => e.title);

  for (const fileType of ENTRY_FILES) {
    const fileName = `${fileType}.md`;
    for (const entry of files[fileName].entries) {
      const authorPart = extractAuthorPortion(entry.content);
      if (!authorPart) continue;

      for (const name of personNames) {
        if (!authorPart.includes(name)) continue;

        // Check if it's already inside a [Name](people.md#...) link
        const linkedPattern = new RegExp(`\\[${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\]\\(people\\.md#`);
        if (linkedPattern.test(authorPart)) continue;

        report.warnings.push(
          `[unlinked-author] ${fileName}: "${entry.title}" mentions "${name}" in By-line without a people.md link`
        );
      }
    }
  }
}

function checkSeparators(files) {
  for (const [name, { content }] of Object.entries(files)) {
    const lines = content.split('\n');
    let lastH2Line = -10;

    for (let i = 0; i < lines.length; i++) {
      if (!lines[i].startsWith('## ')) continue;

      if (lastH2Line >= 0) {
        let found = false;
        for (let j = lastH2Line + 1; j < i; j++) {
          if (lines[j].trim() === '---') { found = true; break; }
        }
        if (!found) {
          const title = extractTitle(lines[i].slice(3).trim());
          report.warnings.push(`[missing-separator] ${name} line ${i + 1}: no "---" before "${title.substring(0, 60)}"`);
        }
      }
      lastH2Line = i;
    }
  }
}

function checkDuplicateUrls(files) {
  const urlMap = {};
  for (const [name, { entries }] of Object.entries(files)) {
    for (const entry of entries) {
      const m = entry.heading.match(/^\[.+?\]\((.+?)\)$/);
      if (!m) continue;
      const url = m[1];
      (urlMap[url] ??= []).push({ file: name, title: entry.title });
    }
  }
  for (const [url, locs] of Object.entries(urlMap)) {
    if (locs.length > 1) {
      report.warnings.push(`[duplicate-url] ${url} appears in: ${locs.map(l => `${l.file} ("${l.title}")`).join(', ')}`);
    }
  }
}

function checkArchiveRotation() {
  const content = readFile(path.join(REPO_ROOT, 'librarian-notes.md'));
  const lines = content.split('\n').length;
  if (lines > ARCHIVE_WARN_LINES) {
    report.warnings.push(
      `[archive-rotation] librarian-notes.md is ${lines} lines (threshold: ${ARCHIVE_WARN_LINES}). Consider archiving older entries.`
    );
  }
}

// ── Auto-fix: Index sync ────────────────────────────────────────────────────────

function parseIndexNames(content, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`## ${escaped}\\n\\n([\\s\\S]*?)(?=\\n---|\\n## |$)`);
  const m = content.match(regex);
  if (!m) return [];
  return m[1].split('\n').filter(l => l.startsWith('- ')).map(l => l.slice(2).trim());
}

function parseIndexCount(content, fileName) {
  const escaped = fileName.replace('.', '\\.');
  const m = content.match(new RegExp(`\`${escaped}\` — (\\d+)`));
  return m ? parseInt(m[1]) : null;
}

function syncIndex(files, dryRun) {
  const indexPath = path.join(RESOURCES, 'index.md');
  const oldContent = readFile(indexPath);

  const counts = {};
  for (const name of CANONICAL_FILES) {
    counts[name] = files[name].entries.length;
  }

  const lists = {
    people:   files['people.md'].entries.map(e => e.title),
    articles: files['articles.md'].entries.map(e => e.title),
    events:   files['events.md'].entries.map(e => e.title),
    books:    files['books.md'].entries.map(e => e.title),
    projects: files['projects.md'].entries.map(e => e.title),
  };

  const renderList = names => names.map(n => `- ${n}`).join('\n');

  const newContent = `# Resource Index

Compact startup inventory for this repository.

Read this file first to see what is already tracked. Open the full canonical files in \`resources/\` only when the task needs their annotations, cross-links, or exact wording.

## Canonical files

- \`people.md\` — ${counts['people.md']} ${INDEX_LABELS['people.md']}
- \`articles.md\` — ${counts['articles.md']} ${INDEX_LABELS['articles.md']}
- \`events.md\` — ${counts['events.md']} ${INDEX_LABELS['events.md']}
- \`books.md\` — ${counts['books.md']} ${INDEX_LABELS['books.md']}
- \`projects.md\` — ${counts['projects.md']} ${INDEX_LABELS['projects.md']}
- \`glossary.md\` — ${counts['glossary.md']} ${INDEX_LABELS['glossary.md']}

---

## People tracked

${renderList(lists.people)}

---

## Articles tracked

${renderList(lists.articles)}

---

## Events tracked

${renderList(lists.events)}

---

## Books tracked

${renderList(lists.books)}

---

## Projects tracked

${renderList(lists.projects)}
`;

  if (oldContent === newContent) return;

  // ── Report what changed ──

  // Count changes
  for (const name of CANONICAL_FILES) {
    const oldCount = parseIndexCount(oldContent, name);
    if (oldCount !== null && oldCount !== counts[name]) {
      report.fixed.push(`index.md: ${name} count ${oldCount} → ${counts[name]}`);
    }
  }

  // Name list changes
  const sectionHeadings = {
    people:   'People tracked',
    articles: 'Articles tracked',
    events:   'Events tracked',
    books:    'Books tracked',
    projects: 'Projects tracked',
  };

  for (const [key, heading] of Object.entries(sectionHeadings)) {
    const oldNames = new Set(parseIndexNames(oldContent, heading));
    const newNames = new Set(lists[key]);

    const added = lists[key].filter(n => !oldNames.has(n));
    const removed = [...oldNames].filter(n => !newNames.has(n));

    for (const name of added)   report.fixed.push(`index.md: added to ${heading}: "${name}"`);
    for (const name of removed) report.fixed.push(`index.md: removed from ${heading}: "${name}"`);
  }

  // If we detected changes but nothing was reported above (e.g. reordering), note it
  if (report.fixed.length === 0) {
    report.fixed.push('index.md: content reordered to match canonical files');
  }

  if (!dryRun) {
    fs.writeFileSync(indexPath, newContent, 'utf-8');
  }
}

// ── Report output ───────────────────────────────────────────────────────────────

function printReport(dryRun, entryCounts) {
  console.log('');
  console.log('══════════════════════════════════════════════');
  console.log('  ai-resources maintenance report');
  console.log('══════════════════════════════════════════════');

  // Collection summary
  console.log('');
  console.log('  Collection:');
  for (const [file, count] of Object.entries(entryCounts)) {
    console.log(`    ${file}: ${count} entries`);
  }

  // Fixed
  if (report.fixed.length > 0) {
    console.log('');
    console.log(`  ✅ Fixed (${report.fixed.length}):`);
    for (const f of report.fixed) console.log(`     ${f}`);
  }

  // Warnings grouped by category
  if (report.warnings.length > 0) {
    const grouped = {};
    for (const w of report.warnings) {
      const m = w.match(/^\[([^\]]+)\]/);
      const cat = m ? m[1] : 'other';
      (grouped[cat] ??= []).push(w.replace(/^\[[^\]]+\]\s*/, ''));
    }

    console.log('');
    console.log(`  ⚠️  Warnings (${report.warnings.length}):`);
    for (const [cat, items] of Object.entries(grouped)) {
      console.log('');
      console.log(`     ${cat} (${items.length}):`);
      for (const item of items) console.log(`     · ${item}`);
    }
  }

  if (report.fixed.length === 0 && report.warnings.length === 0) {
    console.log('');
    console.log('  ✨ Everything looks good.');
  }

  console.log('');
  console.log('──────────────────────────────────────────────');
  console.log(`  ${report.fixed.length} fixed · ${report.warnings.length} warnings`);
  if (dryRun) console.log('  (dry run — no files were modified)');
  console.log('──────────────────────────────────────────────');
  console.log('');
}

// ── Main ────────────────────────────────────────────────────────────────────────

function main() {
  const dryRun = process.argv.includes('--dry-run');

  // Parse all canonical files
  const files = {};
  for (const name of CANONICAL_FILES) {
    const filePath = path.join(RESOURCES, name);
    const content = readFile(filePath);
    files[name] = { content, entries: parseEntries(content), filePath };
  }

  // Build anchor maps
  const anchorMaps = {};
  for (const [name, { entries }] of Object.entries(files)) {
    anchorMaps[name] = new Set(entries.map(e => e.anchor));
  }

  // Run checks
  checkBrokenLinks(files, anchorMaps);
  checkCrossLinks(files, anchorMaps);
  checkUnlinkedAuthors(files);
  checkSeparators(files);
  checkDuplicateUrls(files);
  checkArchiveRotation();

  // Auto-fix
  syncIndex(files, dryRun);

  // Entry counts for summary
  const entryCounts = {};
  for (const name of CANONICAL_FILES) entryCounts[name] = files[name].entries.length;

  printReport(dryRun, entryCounts);

  // Exit code: 0 if no warnings, 1 if warnings found
  process.exit(report.warnings.length > 0 ? 1 : 0);
}

main();
