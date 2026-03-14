---
name: repo-query
description: Query a local markdown knowledge repository for matching concepts, source entries, and synthesis sections. Use when you need to answer questions from ai-resources or find relevant prior material without manual grepping.
---

# Repo Query

A small local retrieval helper for markdown knowledge repositories, designed for `ai-resources`.

It searches:
- `resources/articles.md`
- `resources/people.md`
- `resources/projects.md`
- `librarian-notes.md`
- `ai-generated/concept-index.md`
- other top-level files in `ai-generated/` (excluding `experiments/`)

Results are grouped into:
- matching concept entries
- matching source entries
- matching synthesis / notes sections

If a concept entry matches directly, adjacent concepts are shown too.

## Usage

From the repo root:

```bash
node {baseDir}/query.js "agent memory"
node {baseDir}/query.js "retrieval" --limit 12
```

Optional flags:

- `--limit N` — maximum results per section (default: 8)
- `--repo PATH` — query a different repo root instead of the current working directory

## Output

The script prints plain text grouped into:
- `## Concepts`
- `## Source Entries`
- `## Syntheses and Notes`

Each result includes:
- file path
- heading
- a short snippet
- adjacent concepts where available

## When to Use

Use this when:
- you want to find what the repo already knows about a topic
- you want to answer a question from the local corpus first
- you want to surface adjacent concepts before writing a synthesis

Do not use this as a substitute for reading the returned entries. It is a retrieval helper, not an authority.
