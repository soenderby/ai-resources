# AI-generated Index

Generated documents in this directory are **derived views**, not canonical source material.

Start here instead of reading the whole directory. Open only the files that are relevant to the current task.

## How to use this directory

- For **repo-organization / knowledge-garden design** work, start with:
  - `knowledge-gardening-for-ai-resources.md`
  - `retrieved-vs-represented-vs-maintained-for-this-repo.md`
  - `maintenance-rules-for-derived-layers.md`
  - `concept-index.md`
- For **context / memory / agent-infrastructure** work, start with the specific topic document rather than scanning everything.
- For **broad synthesis** tasks, use `concept-index.md` to find relevant adjacent concepts, then open the matching topic documents.
- Do **not** treat this directory as startup context by default. Most files are topic-specific and replaceable.

---

## Repo structure and retrieval

- `concept-index.md` — small concept layer connecting sources, syntheses, and adjacent ideas.
- `knowledge-gardening-for-ai-resources.md` — design note for treating the repo as a layered, local-first knowledge garden.
- `retrieved-vs-represented-vs-maintained-for-this-repo.md` — repo-specific guidance on what should be retrieved, represented, and actively maintained.
- `maintenance-rules-for-derived-layers.md` — maintenance protocol for `ai-generated/` artifacts.
- `document-review-process.md` — how generated long-form documents should be reviewed and tightened.

## Agent memory, context, and infrastructure

- `memory-for-agents.md` — synthesis on agent memory patterns in the collection.
- `judgment-memory.md` — synthesis on captured judgment, rationale, and taste for future agents.
- `agent-skills.md` — notes on agent skills as reusable context and workflow packaging.
- `context-pruning-research.md` — focused Pi research note on context pruning, caches, and extension points.
- `economics-of-forgetting.md` — longer empirical essay on when pruning saves money and when cache invalidation makes it worse.

## Agent patterns and ecosystem comparisons

- `llm-agent-patterns.md` — synthesis of recurring agent-usage patterns in the collection.
- `orca-gastown-gascity-comparison.md` — comparison of three multi-agent orchestration approaches.
- `ralph-loop-template.md` — reusable template / pattern summary for Ralph-style loops.

## Software quality with agents

- `software-quality-with-agents.md` — compact synthesis on software-quality concerns in agent-assisted development.
- `ensuring-code-quality-with-agents.md` — much longer essay covering the same broader topic in depth.
- `stacked-diffs-and-agents.md` — hypothesis that stacked diffs (small, dependent, independently reviewable commits) can address the review bottleneck created by agent-generated code. Explicitly flagged as early-stage: limited sources, one with commercial interest. Outlines plausible benefits, limitations, and what evidence would strengthen or weaken the case.

## Adjacent-field and topic-specific research

- `adjacent-fields-for-agent-memory.md` — synthesis of what information retrieval, knowledge representation, and knowledge management contribute to agent-memory thinking.
- `growing-the-garden.md` — essay on how the repo should evolve over time, informed by knowledge management research (Zettelkasten, digital gardens, information foraging, library science, intelligence classification). Covers the source/concept tension, human-AI curation failure modes, the case against curation, growth pathologies, and what to resist.
- `writing-research-ai.md` — synthesis on writing, research, and AI assistance. Part 1: what good writing and research look like (canonical sources — Orwell, Graham, Zinsser, Booth, Adler, CGSC guide). Part 2: what AI assistance does to the output and to the human (cognitive offloading taxonomy, empirical evidence). Part 3: what we don't know (four stated gaps — no validated AI-writing methodology, no validated AI-research methodology, no evidence on human vs. AI curation value, no longitudinal cognitive data). Ready for review.

## Experiments

- `experiments/agent-memory-adjacent-fields-2026-03/` — 2026-03-12 experiment testing whether adjacent disciplines (information retrieval, knowledge representation, knowledge management) improve how the repo thinks about agent memory. Contains task log, source selection rubric, raw notes, and synthesized results. The results fed into `adjacent-fields-for-agent-memory.md`.

---

## Rule of thumb

If a task can be completed from `librarian-notes.md`, `resources/index.md`, and one or two specific files, prefer that over loading full directories.
