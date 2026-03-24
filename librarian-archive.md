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
- **Early pattern observations (2026-03-09)** — practitioner/research balance, alignment arc, gender diversity, Yegge/Emanuel/Huntley cluster, Gas Town stack, Willison living doc; see [#early-pattern-observations](#early-pattern-observations)
- **Early connection observations (2026-03-11 / 2026-03-16)** — Orca/Gas Town convergence, software quality stack, concept index design, Every/judgment memory distinction; see [#early-connection-observations](#early-connection-observations)
- **Early curatorial decisions (2026-03-09 / 2026-03-16)** — agent skill deferral, Minotaur Capital inclusion, books.md creation; see [#early-curatorial-decisions](#early-curatorial-decisions)

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

## Early pattern observations
Tags: patterns, alignment, gender, yegge, emanuel, huntley, gas-town, willison, practitioner-research-balance

**2026-03-09** — The collection has a strong concentration of practitioner-builders (Yegge, Huntley, Emanuel, Reed) and is lighter on academic/research perspectives (Mollick, Weng added recently). Worth actively seeking more voices from the research side.

**2026-03-09** — The alignment cluster added today (Yudkowsky → Bostrom → Russell → Christiano) has an internal progression worth noting: Yudkowsky is the originator and most pessimistic; Bostrom brought the argument to mainstream philosophy and policy; Russell brought it into mainstream CS academia; Christiano is the most technically active and most optimistic of the four. Together they cover the full arc from founding intuition to current research practice.

**2026-03-09** — Most sources are male. Abi Awomosu is currently the only exception and brings a distinctly different perspective. Worth being conscious of this when evaluating new sources. *(Note: Maggie Appleton, Nicole Forsgren, Barbara Liskov, Jeannette Wing, and Lilian Weng have since been added.)*

**2026-03-09** — There is a cluster of interconnected people: Yegge → Emanuel (credits Emanuel's MCP Agent Mail discovery as seeding Gas Town's agent-village pattern) → Huntley (building parallel "Loom" project, references Gas Town). These people are actively influencing each other's work. Worth watching this cluster.

**2026-03-09** — The Gas Town ecosystem has clarified into a proper stack: Dolt (Tim Sehn) → Beads (Yegge) → Gas City (community SDK) → Gas Town (reference pack) → The Wasteland (federation layer). Gas City is the newest layer — extracted from Gas Town to make the orchestration primitives reusable. The Wasteland `wl` CLI is the concrete federation client. Yegge's article "Welcome to the Wasteland" (already in articles.md) covers the launch; the GitHub repos now annotated separately.

**2026-03-09** — Simon Willison's *Agentic Engineering Patterns* is a living document being updated weekly. It will likely become one of the most substantial references in the collection over time. Worth revisiting periodically. *(Confirmed by 2026-03-17: continues to grow.)*

---

## Early connection observations
Tags: orca, gas-town, gas-city, software-quality, concept-index, every, judgment-memory

**2026-03-11** — The local Orca project and Gas Town / Gas City share the same core architecture (tmux sessions, git worktrees, Beads for work tracking, prompt-template-based agent contracts) despite being built independently. This convergence suggests these are the irreducible building blocks of multi-agent orchestration for coding. The most interesting difference is in intelligence location: Orca pushes all reasoning to the model (the harness is a "thin, deterministic shell"), while Gas Town distributes intelligence across specialized roles, and Gas City decouples it entirely into user-supplied prompt templates. The Orca project is also notably self-improving — agents running inside it have authored ~60% of its commits.

**2026-03-16** — The strongest adjacent software-quality cluster now looks like a layered stack rather than a bag of craft slogans: Parnas on decomposition, Beck on feedback loops, Ousterhout on module depth, Evans and CUPID on domain fit, Nygard on decision memory, and Gabriel on habitability. Worth preserving and reading as a system.

**2026-03-16** — Added `Software quality with agents` to the concept index. It seems useful as a bridge concept between the repo's AI workflow material and the adjacent software-engineering sources, without needing to index every individual design virtue separately.

**2026-03-16** — Second pass on the concept index suggests **not** splitting `software quality with agents` yet into `changeability`, `domain fit`, `habitability`, etc. Those sub-ideas are real, but keeping them bundled is more consistent with the repo's current "small and use-driven" rule. Split only if repeated retrieval or synthesis work shows they need independent entries.

**2026-03-16** — The Every material was worth keeping mainly at the **artifact** level, not the branding level. The useful distinction it surfaced is between **task memory** (what work exists and its state) and **judgment memory** (review heuristics, architectural taste, solved-problem writeups). Every's plugin is strongest on judgment memory; keep the concrete workflow artifacts and filter out the grander claims about tests, docs, or review becoming unnecessary.

---

## Early curatorial decisions
Tags: agent-skill, minotaur-capital, books-file

**2026-03-09** — Decided against creating a dedicated agent skill for maintaining this repo. The structure is still evolving, and a skill would risk over-constraining it. Chose to put the relevant context in CLAUDE.md instead. Revisit when the format has been stable for longer.

**2026-03-09** — Minotaur Capital Quarterly (Dec 2025) added despite being JS-rendered and hard to extract. Worth keeping because it's a rare example of a non-tech industry (investment management) giving an honest account of crossing the "actually useful" threshold with LLMs. The quote that warranted it: *"If capable LLMs were free and infinitely fast, you'd always prefer brute force iteration over careful human design."*

**2026-03-16** — Created `resources/books.md`. The adjacent software-quality material is now book-heavy enough to deserve its own file; future sessions on design, testing, XP, or complexity should read `books.md` alongside `articles.md`.

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
