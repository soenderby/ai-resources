# Librarian Archive

Archived memory for this repo.

This file holds older librarian notes whose value is mainly historical, thematic, or explanatory rather than startup-critical.

## How to use this file

Do **not** read this file by default at session start.

Read from the archive only when one of these is true:

1. The task is about **repo history, repo organization, or broad synthesis**.
2. `librarian-notes.md` or another file points here for background.
3. The task clearly matches an archived theme in the archive map below.
4. You need to answer **why** a past curatorial or structural decision was made.

When using the archive:
- search headings and tags first
- read only the matching section(s)
- pull relevant conclusions back into the working context, rather than loading the whole file

---

## Archive map

- **Derived-layer design (2026-03-12 experiment cluster)** — read for repo-organization, concept-index, retrieval / representation / maintenance, `repo-query`, and why `ai-generated/` is treated as exploratory; see [#derived-layer-design](#derived-layer-design)

---

## Tagging convention

Use thematic headings with explicit tags so the archive is searchable.

Suggested heading format:

```markdown
## Theme name
Tags: tag-one, tag-two, tag-three
```

Tags should be short and concrete: people names, project names, repo areas, or recurring concepts.

---

## Archived sections

## Derived-layer design
Tags: ai-generated, concept-index, retrieval, representation, maintenance, repo-query, knowledge-gardening, adjacent-fields

**2026-03-12** — Harper Reed's meeting-transcript knowledge-graph post suggests a useful adjacent pattern to coding-agent infrastructure: **agentic knowledge gardening**. The stack is simple and durable — local files, transcript sync, LLM extraction, wiki-links, graph view — but the result is a form of personal / organizational memory that can later feed agents. Worth watching tools in this area (Granola, muesli, Obsidian, transcript-to-note skills) as part of the broader "memory for agents" theme.

**2026-03-12** — The same knowledge-gardening pattern appears applicable to this repo itself. The most promising path is not a graph UI or heavy restructure, but a new layer of **derived views** over the curated collection: concept indexes, thematic syntheses, reading paths, query tools, and gap reports. Important constraint: keep `resources/` and `librarian-notes.md` as the canonical human-curated layer; let `ai-generated/` be exploratory and replaceable.

**2026-03-12** — Created a first experimental `ai-generated/concept-index.md` with a small set of cross-cutting concepts (memory for agents, context engineering, multi-agent orchestration, agentic knowledge gardening, local-first knowledge, zero-framework cognition, human as quality gate, supervision fatigue, anti-hype curation). Keep it small and use-driven; revise concepts based on whether they genuinely improve retrieval and synthesis.

**2026-03-12** — Wrote a first synthesis on `memory-for-agents`. Current evidence in the collection is strongest for **external task memory** (Beads / Gas Town / Gas City / BeadHub) and weaker for broader claims about rich long-term semantic memory. Important gap if the topic is to grow: more direct sources on memory architectures, long-context vs external-memory tradeoffs, evaluation methods, and failure modes.

**2026-03-12** — For the adjacent-fields experiment, the useful move was to stop searching for the word **memory** and instead search for the underlying functions: **retrieval, representation, and maintenance**. First batch suggests a clean division of labor: information retrieval contributes evaluation and query refinement; knowledge representation contributes scope, structure, and minimal commitment; knowledge management contributes ownership, lifecycle, and hygiene.

**2026-03-12** — Process lesson from adjacent-fields research: separate **finding** from **accepting** sources, and require every accepted source to produce an explicit operational takeaway plus a note on what does **not** transfer. This made the synthesis cleaner and reduced drift toward elegant but low-utility material.

**2026-03-12** — The concept index proved useful less as a direct answer source and more as an **adjacency engine**: it surfaced neighboring frames (`context engineering`, `local-first knowledge`, `agentic knowledge gardening`) that prevented the repo-memory design question from collapsing back into the single word "memory." This suggests future concept work should optimize first for navigation and framing, not completeness.

**2026-03-12** — Revised the concept index to include `retrieval`, `representation`, and `maintenance` as first-class concepts. These seem more useful as organizing functions for repo-memory design than treating "memory" as a single bucket. Worth watching whether these concepts actually help future retrieval and synthesis, or whether they are still one abstraction layer too high.

**2026-03-12** — The experiment task ledger passed a basic restart-friction test: `tasks.md` plus `sources.md` and `notes.md` were enough to recover project state and reasoning quickly. The main missing piece was a compact output index — easy to see task status, slightly harder to see all produced artifacts at a glance.

**2026-03-12** — Added a small `repo-query` skill as the first retrieval helper. Current behavior is intentionally simple: search concept entries, canonical resource entries, and synthesis sections, and show adjacent concepts when a concept matches. This is a retrieval aid, not an answer engine. Worth resisting feature creep until there is repeated evidence of what kinds of retrieval are actually missing.

**2026-03-12** — Wrote a dedicated maintenance protocol for derived layers. Strong emerging rule: generated structure should be easier to create than canonical structure, but also easier to prune. If `ai-generated/` artifacts stop being easier to trust than to ignore, maintenance is overdue.

**2026-03-12** — Final adjacent-fields experiment review: the structured research workflow was worth the overhead, mainly because it improved screening, resumption, and synthesis quality. The biggest gain was a better decomposition of the problem (`retrieval / representation / maintenance`); the biggest operational gap was the lack of a compact artifact index inside the experiment workspace.

**2026-03-12** — Document review process is now clear enough to write down explicitly. Recurring pattern: first drafts are usually strong on coverage but weak on concision and concreteness; the highest-value review passes add worked examples, sharpen distinctions, compress repetition, and force explicit uncertainty. Worth treating review as part of the normal generation workflow, not as optional polish.
