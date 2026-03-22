# Librarian Notes

Running memory across sessions. Short entries, dated. Not a journal — just what's worth preserving.

---

## Curatorial Decisions

**2026-03-09** — Decided against creating a dedicated agent skill for maintaining this repo. The structure is still evolving, and a skill would risk over-constraining it. Chose to put the relevant context in CLAUDE.md instead. Revisit when the format has been stable for longer.

**2026-03-09** — Minotaur Capital Quarterly (Dec 2025) added despite being JS-rendered and hard to extract. Worth keeping because it's a rare example of a non-tech industry (investment management) giving an honest account of crossing the "actually useful" threshold with LLMs. The quote that warranted it: *"If capable LLMs were free and infinitely fast, you'd always prefer brute force iteration over careful human design."*

**2026-03-09** — Actively filtering against people who write about AI primarily to be seen rather than to share genuine learning. The popularity of the topic has created a lot of noise from people capitalising on it. When evaluating new sources, ask: does this person build things and write about what they actually learned, or do they write about what others built?

**2026-03-15** — For ecosystem patterns like Ralph loops, include the highest-signal independent implementations (real scripts, real usage evidence), and also include at least one official provider implementation as a separate reference even if it is not the strongest technical source. Rationale: official provider support is strategically important signal about standardization/adoption.

**2026-03-16** — Adjacent software-engineering sources are in scope when they sharpen the quality bar for agent-produced code. CUPID is worth keeping not as generic craft literature, but as a practical review lens for whether agent-generated software is composable, predictable, idiomatic, and shaped by the domain rather than by framework defaults.

**2026-03-16** — Created `resources/books.md`. The adjacent software-quality material is now book-heavy enough to deserve its own file; future sessions on design, testing, XP, or complexity should read `books.md` alongside `articles.md`.

**2026-03-20** — Changed startup orientation from "read the full corpus" to a staged approach: `librarian-notes.md` + compact indexes/manifests first (`resources/index.md`, `ai-generated/README.md`), then full canonical or generated files only when the task needs them. Reason: the old literal startup read added ~28k tokens before `ai-generated/` and ~95k tokens if the whole generated directory was loaded, which is too much context to pay by default.

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

**2026-03-12** — Revised the concept index to include `retrieval`, `representation`, and `maintenance` as first-class concepts. These seem more useful as organizing functions for repo-memory design than treating "memory" as a single bucket. Worth watching whether these concepts actually help future retrieval and synthesis, or whether they are still one abstraction layer too high.

**2026-03-12** — The experiment task ledger passed a basic restart-friction test: `tasks.md` plus `sources.md` and `notes.md` were enough to recover project state and reasoning quickly. The main missing piece was a compact output index — easy to see task status, slightly harder to see all produced artifacts at a glance.

**2026-03-12** — Added a small `repo-query` skill as the first retrieval helper. Current behavior is intentionally simple: search concept entries, canonical resource entries, and synthesis sections, and show adjacent concepts when a concept matches. This is a retrieval aid, not an answer engine. Worth resisting feature creep until there is repeated evidence of what kinds of retrieval are actually missing.

**2026-03-12** — Wrote a dedicated maintenance protocol for derived layers. Strong emerging rule: generated structure should be easier to create than canonical structure, but also easier to prune. If `ai-generated/` artifacts stop being easier to trust than to ignore, maintenance is overdue.

**2026-03-12** — Final adjacent-fields experiment review: the structured research workflow was worth the overhead, mainly because it improved screening, resumption, and synthesis quality. The biggest gain was a better decomposition of the problem (`retrieval / representation / maintenance`); the biggest operational gap was the lack of a compact artifact index inside the experiment workspace.

**2026-03-12** — Document review process is now clear enough to write down explicitly. Recurring pattern: first drafts are usually strong on coverage but weak on concision and concreteness; the highest-value review passes add worked examples, sharpen distinctions, compress repetition, and force explicit uncertainty. Worth treating review as part of the normal generation workflow, not as optional polish.

**2026-03-16** — The strongest adjacent software-quality cluster now looks like a layered stack rather than a bag of craft slogans: Parnas on decomposition, Beck on feedback loops, Ousterhout on module depth, Evans and CUPID on domain fit, Nygard on decision memory, and Gabriel on habitability. Worth preserving and reading as a system.

**2026-03-16** — Added `Software quality with agents` to the concept index. It seems useful as a bridge concept between the repo's AI workflow material and the adjacent software-engineering sources, without needing to index every individual design virtue separately.

**2026-03-16** — Second pass on the concept index suggests **not** splitting `software quality with agents` yet into `changeability`, `domain fit`, `habitability`, etc. Those sub-ideas are real, but keeping them bundled is more consistent with the repo's current "small and use-driven" rule. Split only if repeated retrieval or synthesis work shows they need independent entries.

**2026-03-16** — The Every material was worth keeping mainly at the **artifact** level, not the branding level. The useful distinction it surfaced is between **task memory** (what work exists and its state) and **judgment memory** (review heuristics, architectural taste, solved-problem writeups). Every's plugin is strongest on judgment memory; keep the concrete workflow artifacts and filter out the grander claims about tests, docs, or review becoming unnecessary.

---

**2026-03-17** — Completed judgment memory research (see `ai-generated/judgment-memory-research/`). The concept names something real: durable captured judgment that changes how future agents plan, implement, review, or decide. No existing term covers it precisely — "agent context files" names the container, "codified context" is broader, "design rationale" is narrower. Keeping "judgment memory" as the repo's working label.

**2026-03-17** — The strongest new source discovered is the "Codified Context Infrastructure" paper (Vasilopoulos, arXiv:2602.20478) — a three-tier architecture (hot constitution + specialized agents + cold knowledge base) developed across 283 sessions on a 108k-line C# system. Reports maintenance cost (~1-2 hrs/week), failure modes (specification staleness), and a context drift detector. The companion repo has inspectable artifacts. This should be added to articles.md and projects.md.

**2026-03-17** — The "Agent READMEs" paper (arXiv:2511.12884) provides the best empirical data on agent context files: 2,303 files across Claude Code, Codex, and Copilot. Key finding: these are "living configuration artifacts" — 67% modified in multiple commits, with updates roughly daily. Instructions heavily skewed toward functional operations; non-functional requirements (security, performance) are rare.

**2026-03-17** — Four distinct production mechanisms for judgment memory emerged: (1) manually authored (CLAUDE.md, ADRs), (2) automatically captured by agents (auto memory), (3) automatically detected from codebase (Codebase Context MCP), (4) mined from human practice at scale (Awesome Reviewers). These have different effort/quality tradeoffs.

**2026-03-17** — The biggest gap in the judgment memory space is maintenance. Everyone agrees stale judgment is dangerous ("agents trust documentation absolutely"), but no source described systematic pruning. The Codified Context paper's biweekly review and drift detector are the closest, and the Codebase Context MCP's memory decay is the most automated. This gap is worth watching.

**2026-03-17** — Wrote `ai-generated/ensuring-code-quality-with-agents.md`, a thorough synthesis essay covering the full topic: why quality discipline increases with agents, the shift from producer to quality gate, planning before generation, feedback loops, design principles as review heuristics (Parnas, Ousterhout, Hickey, Evans, CUPID, Gabriel), context engineering, judgment memory, task shape, legacy code, multi-agent quality, and security. Draws on nearly every source cluster in the repo. Written long and dense for completeness; intended for a concision pass later.

**2026-03-17** — Polled all followed sources. Osmani's "Comprehension Debt" coined a term that extends the quality cluster in a distinct direction: not supervision fatigue (the feeling), not work intensification (the organizational pattern), but the growing gap between code that exists and code anyone understands. This is now a three-part cost model for cheap generation: fatigue + intensification + comprehension loss.

**2026-03-17** — Yegge's "AI Vampire" adds a fourth dimension to the above — the economics of extraction. Who captures the value of 10x productivity? The piece also takes unusual accountability: Yegge acknowledges that he and other early adopters are setting unrealistic standards.

**2026-03-17** — Mollick's "The Shape of the Thing" is the most significant new framing piece. The StrongDM Software Factory is the most radical production experiment tracked in the collection: no human code writing, no human code review, agents test agents. Recursive self-improvement is now explicitly on every major lab's roadmap, not a theoretical concern.

**2026-03-17** — Huntley's geopolitical cluster (economic warfare + cognitive security) addresses two gaps identified on 2026-03-09: non-Western perspective and economics/business dimensions. The pieces are more speculative than the collection's usual bar, but the underlying questions — who controls the models your business depends on, what happens if the spigot is turned off — are real dependency risks.

**2026-03-17** — Simon Willison's Agentic Engineering Patterns continues to grow: new chapters on "How Coding Agents Work" (mechanics explainer) and "Subagents" (explore, parallel, specialist patterns). The guide is becoming one of the most substantial references in the collection, as predicted on 2026-03-09.

**2026-03-17** — Karpathy's autoresearch (already in collection) went mainstream: Fortune coverage, Shopify's Lütke tried it and got 19% performance gain overnight, being called "the Karpathy Loop." His vibe-coded labor market exposure analysis (taken down after misinterpretation) is culturally interesting but not collection-worthy as a source.

---

**2026-03-19** — Researched context pruning for the Pi coding agent. The key finding is that the relationship between pruning and cost is non-obvious: pruning saves tokens but breaks prompt caches, and on API-billed plans the cache penalty can easily exceed the token savings. The math only works clearly in three cases: (1) subscription/flat-rate billing where tokens are free, (2) very large redundancies (>10k tokens), or (3) batching pruning with compaction events that already break the cache. OpenCode's DCP extension handles this correctly by only recalculating pruning during compress events. For Pi, the strongest first move is a diagnostic `/context` command, not automatic pruning. Full analysis in `ai-generated/context-pruning-research.md`.

**2026-03-19** — Discovered three relevant Pi packages during context-pruning research: pi-context (agent-driven git-like context management), pi-extension-observational-memory (custom compaction), and pi-mcp-adapter (token-efficient MCP). None do DCP-style automatic rule-based pruning. The opencode DCP plugin is the strongest existing implementation of the idea, with three zero-cost strategies (dedup, supersede writes, purge errors) and one LLM-driven strategy (compress). No direct port to Pi exists.

**2026-03-20** — NK Schjødt's "They Don’t Feel It — Yet" adds a useful labor-market mechanism to the repo: AI's first employment effect may show up as **non-hiring and pipeline erosion**, not public layoffs. This sharpens the economics gap and complements the existing fatigue / intensification / comprehension-debt cluster by moving from workflow experience to hiring composition.

---

## Open Questions

**2026-03-09** — Steve Yegge's *Beads* project (memory system for coding agents) is listed as a project but has no annotation. Worth reading properly and annotating — it's foundational to Gas Town and Emanuel's work.

**2026-03-09** — The Anthropic Agent Skills standard is apparently being adopted broadly (Claude Code, pi, Cursor, VS Code, GitHub Copilot, and more). Worth tracking whether this consolidates into a genuine standard or fractures. The agentskills.io specification and the pi-skills repo are the current reference points.
