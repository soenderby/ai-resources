---
name: maintain
description: Run repo maintenance checks and fixes. Use after adding, editing, or removing entries in resources/ to keep index.md in sync and catch broken cross-links, missing separators, unlinked authors, and other structural issues.
---

# Maintain

Structural maintenance for the ai-resources repo. Fixes what can be fixed automatically (index sync) and reports what needs human attention.

No dependencies — uses only Node.js built-ins.

## When to Use

Run this after:
- Adding or removing entries in any canonical file (`articles.md`, `people.md`, etc.)
- Editing entry headings or By-lines
- Updating cross-links between people and their articles/events/books/projects
- Any session where multiple files were touched

Also useful as a pre-commit sanity check.

## Run

From the repo root:

```bash
node maintain.js
```

Or via npm:

```bash
npm run maintain
```

To preview without writing changes:

```bash
node maintain.js --dry-run
```

## What It Does

**Auto-fixes:**
- Syncs `resources/index.md` — updates entry counts and name lists to match canonical files

**Reports (human judgment needed):**

| Check | What it catches |
|---|---|
| `broken-link` | Internal `[text](file.md#anchor)` where the anchor doesn't exist in the target file |
| `missing-cross-link` | An entry has `By [Person](people.md#...)` but the person's entry doesn't list it |
| `unlinked-author` | A tracked person appears in a By-line as plain text instead of a `people.md` link |
| `missing-separator` | Consecutive `## ` entries without a `---` between them |
| `duplicate-url` | Same heading URL used in multiple entries |
| `archive-rotation` | `librarian-notes.md` exceeds the ~220 line threshold |

## Output

The report groups warnings by category with counts. Example:

```
✅ Fixed (2):
   index.md: articles.md count 116 → 117
   index.md: added to Articles tracked: "New Article Title"

⚠️  Warnings (1):

   unlinked-author (1):
   · articles.md: "New Article" mentions "Simon Willison" in By-line without a people.md link
```

## Exit Code

- `0` — no warnings
- `1` — warnings found (useful for CI or pre-commit hooks)

## After Running

If warnings are reported, address them manually:
- **broken-link**: fix the anchor to match the actual heading slug, or add the missing file prefix (e.g., `articles.md#...` instead of bare `#...`)
- **missing-cross-link**: add the entry to the person's `Articles:`, `Events:`, `Books:`, or `Projects:` line in `people.md`
- **unlinked-author**: change `By Author Name.` to `By [Author Name](people.md#author-name).`
- **missing-separator**: add a `---` line between the entries
- **archive-rotation**: move older entries from `librarian-notes.md` to `librarian-archive.md`

If the auto-fix changed `index.md`, commit it:

```bash
git add resources/index.md
git commit -m "Sync index"
```
