# Librarian Notes

Running memory across sessions. Short entries, dated. Not a journal — just what's worth preserving.

---

## Curatorial Decisions

**2026-03-09** — Decided against creating a dedicated agent skill for maintaining this repo. The structure is still evolving, and a skill would risk over-constraining it. Chose to put the relevant context in CLAUDE.md instead. Revisit when the format has been stable for longer.

**2026-03-09** — Minotaur Capital Quarterly (Dec 2025) added despite being JS-rendered and hard to extract. Worth keeping because it's a rare example of a non-tech industry (investment management) giving an honest account of crossing the "actually useful" threshold with LLMs. The quote that warranted it: *"If capable LLMs were free and infinitely fast, you'd always prefer brute force iteration over careful human design."*

**2026-03-09** — Actively filtering against people who write about AI primarily to be seen rather than to share genuine learning. The popularity of the topic has created a lot of noise from people capitalising on it. When evaluating new sources, ask: does this person build things and write about what they actually learned, or do they write about what others built?

---

## Patterns Noticed

**2026-03-09** — The collection has a strong concentration of practitioner-builders (Yegge, Huntley, Emanuel, Reed) and is lighter on academic/research perspectives (Mollick, Weng added recently). Worth actively seeking more voices from the research side.

**2026-03-09** — The alignment cluster added today (Yudkowsky → Bostrom → Russell → Christiano) has an internal progression worth noting: Yudkowsky is the originator and most pessimistic; Bostrom brought the argument to mainstream philosophy and policy; Russell brought it into mainstream CS academia; Christiano is the most technically active and most optimistic of the four. Together they cover the full arc from founding intuition to current research practice.

**2026-03-09** — Most sources are male. Abi Awomosu is currently the only exception and brings a distinctly different perspective. Worth being conscious of this when evaluating new sources.

**2026-03-09** — There is a cluster of interconnected people: Yegge → Emanuel (credits Emanuel's MCP Agent Mail discovery as seeding Gas Town's agent-village pattern) → Huntley (building parallel "Loom" project, references Gas Town). These people are actively influencing each other's work. Worth watching this cluster.

**2026-03-09** — The Gas Town ecosystem has clarified into a proper stack: Dolt (Tim Sehn) → Beads (Yegge) → Gas City (community SDK) → Gas Town (reference pack) → The Wasteland (federation layer). Gas City is the newest layer — extracted from Gas Town to make the orchestration primitives reusable. The Wasteland `wl` CLI is the concrete federation client. Yegge's article "Welcome to the Wasteland" (already in articles.md) covers the launch; the GitHub repos now annotated separately.

**2026-03-09** — Simon Willison's *Agentic Engineering Patterns* is a living document being updated weekly. It will likely become one of the most substantial references in the collection over time. Worth revisiting periodically.

**2026-03-13** — A useful cluster is forming around the idea that AI shifts the bottleneck upward rather than removing it: HBR on work intensification, Pydantic on supervision fatigue, HYBRD on replacing agent supervisors with deterministic code, and BeadHub on multi-human / multi-agent coordination. Common theme: generation gets cheaper, but oversight, coordination, and expectation management get more expensive.

**2026-03-13** — Anthropic's "How we built our multi-agent research system" and Cognition's "Don't Build Multi-Agents" are best read as task-specific, not contradictory. A useful lens: **multi-agent for breadth-first exploration**, **single-agent for depth-first coherence-heavy execution**. This seems like one of the clearest emerging distinctions in agent architecture.

**2026-03-13** — A productive tension is emerging between three kinds of evidence about AI's impact on work: (1) usage data like Anthropic's Economic Index, which shows where AI is actually being applied; (2) field experiments like METR, which show that real productivity effects can diverge sharply from user belief and benchmark performance; and (3) case-based writing like Mollick and Reyero, which shows how a single newly-viable task can still reshape a workflow or field. Worth keeping all three, because none is sufficient on its own.

---

## Gaps

**2026-03-09** — No coverage of the alignment/safety perspective beyond a passing mention in the patterns document. The collection is heavily weighted toward "how to use AI effectively" and light on "what are the risks of doing so." This is a genuine gap worth filling intentionally, not just because balance is good, but because the security and alignment questions are getting more practically relevant as agents are given more autonomy.

**2026-03-09** — *(partially addressed)* Added Yudkowsky, Bostrom, Russell, Christiano, and LeCun as people entries, and four alignment resources (Rationality/Sequences, AGI Ruin, If Anyone Builds It, The Alignment Forum). The alignment section now has both the case for existential risk (Yudkowsky, Bostrom, Russell, Christiano) and the most credible counter-voice (LeCun). Still missing: more technically active researchers (e.g. Anthropic interpretability, DeepMind safety), and perhaps a voice from the policy/governance side rather than the research side.

**2026-03-09** — No coverage of AI from a non-Western perspective. The collection is almost entirely US/European voices. Chinese open-weight model labs (DeepSeek, etc.) are mentioned in passing but nobody from that side of the field is tracked as a person or primary source.

**2026-03-09** — Light on the economics and business dimensions. Minotaur Capital is the only entry that looks at AI from an investment/capital perspective. The economic implications of agents (job displacement, cost curves, winner-takes-all dynamics) are underrepresented.

---

## Connections

**2026-03-11** — The local Orca project and Gas Town / Gas City share the same core architecture (tmux sessions, git worktrees, Beads for work tracking, prompt-template-based agent contracts) despite being built independently. This convergence suggests these are the irreducible building blocks of multi-agent orchestration for coding. The most interesting difference is in intelligence location: Orca pushes all reasoning to the model (the harness is a "thin, deterministic shell"), while Gas Town distributes intelligence across specialized roles, and Gas City decouples it entirely into user-supplied prompt templates. The Orca project is also notably self-improving — agents running inside it have authored ~60% of its commits.

**2026-03-12** — Harper Reed's meeting-transcript knowledge-graph post suggests a useful adjacent pattern to coding-agent infrastructure: **agentic knowledge gardening**. The stack is simple and durable — local files, transcript sync, LLM extraction, wiki-links, graph view — but the result is a form of personal / organizational memory that can later feed agents. Worth watching tools in this area (Granola, muesli, Obsidian, transcript-to-note skills) as part of the broader "memory for agents" theme.

**2026-03-12** — The same knowledge-gardening pattern appears applicable to this repo itself. The most promising path is not a graph UI or heavy restructure, but a new layer of **derived views** over the curated collection: concept indexes, thematic syntheses, reading paths, query tools, and gap reports. Important constraint: keep `resources/` and `librarian-notes.md` as the canonical human-curated layer; let `ai-generated/` be exploratory and replaceable.

**2026-03-12** — Created a first experimental `ai-generated/concept-index.md` with a small set of cross-cutting concepts (memory for agents, context engineering, multi-agent orchestration, agentic knowledge gardening, local-first knowledge, zero-framework cognition, human as quality gate, supervision fatigue, anti-hype curation). Keep it small and use-driven; revise concepts based on whether they genuinely improve retrieval and synthesis.

**2026-03-12** — Wrote a first synthesis on `memory-for-agents`. Current evidence in the collection is strongest for **external task memory** (Beads / Gas Town / Gas City / BeadHub) and weaker for broader claims about rich long-term semantic memory. Important gap if the topic is to grow: more direct sources on memory architectures, long-context vs external-memory tradeoffs, evaluation methods, and failure modes.

**2026-03-12** — For the adjacent-fields experiment, the useful move was to stop searching for the word **memory** and instead search for the underlying functions: **retrieval, representation, and maintenance**. First batch suggests a clean division of labor: information retrieval contributes evaluation and query refinement; knowledge representation contributes scope, structure, and minimal commitment; knowledge management contributes ownership, lifecycle, and hygiene.

**2026-03-12** — Process lesson from adjacent-fields research: separate **finding** from **accepting** sources, and require every accepted source to produce an explicit operational takeaway plus a note on what does **not** transfer. This made the synthesis cleaner and reduced drift toward elegant but low-utility material.

**2026-03-12** — The concept index proved useful less as a direct answer source and more as an **adjacency engine**: it surfaced neighboring frames (`context engineering`, `local-first knowledge`, `agentic knowledge gardening`) that prevented the repo-memory design question from collapsing back into the single word "memory." This suggests future concept work should optimize first for navigation and framing, not completeness.

---

## Open Questions

**2026-03-09** — Steve Yegge's *Beads* project (memory system for coding agents) is listed as a project but has no annotation. Worth reading properly and annotating — it's foundational to Gas Town and Emanuel's work.

**2026-03-09** — The Anthropic Agent Skills standard is apparently being adopted broadly (Claude Code, pi, Cursor, VS Code, GitHub Copilot, and more). Worth tracking whether this consolidates into a genuine standard or fractures. The agentskills.io specification and the pi-skills repo are the current reference points.
