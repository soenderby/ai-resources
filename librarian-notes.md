# Librarian Notes

Running memory across sessions. Short entries, dated. Not a journal - just what's worth preserving.

---

## Curatorial Decisions

**2026-03-26** - Added Mario Zechner (Pi creator) to people.md and his "Thoughts on slowing the fuck down" to articles.md. Reviewed and rejected five other feed items: Osmani's "Code Agent Orchestra" (conference talk roundup of already-tracked patterns), OpenAI's Model Spec blog post (corporate process documentation), OpenAI Safety Bug Bounty (program announcement), OpenAI teen safety policies (product release), OpenAI Foundation update (philanthropy press release). The Willison link blog post amplifying Zechner was skipped in favour of the primary source.

**2026-03-26** - Researched agent planning patterns across both threads: getting agents to produce good plans, and creating plans agents can execute well. Added Kambhampati (person + LLMs Can't Plan paper), ExecPlans/PLANS.md (Aaron Friel/OpenAI), Planning for Agents (Harrison Chase/LangChain), Scaling Long-Running Autonomous Coding (Cursor, events.md), and Spec Kit (GitHub, projects.md). Wrote synthesis in `ai-generated/agent-planning-patterns.md`. Rejected Osmani's "How to write a good spec for AI agents" (too roundup-ish — assembles GitHub's 2500-repo study, Willison, Anthropic, and others into a framework but adds little original insight; the primary sources are already tracked or easily findable). Also rejected Osmani's "Self-Improving Coding Agents" (describes Ralph/Compound Product techniques already well-covered in the collection). Osmani's "My LLM coding workflow going into 2026" considered — useful plan-critique-refine workflow detail — but deferred as the planning-specific content is thin relative to the full article; the key insight ("iterate on the plan, asking the AI to critique or refine it, until it's coherent") is captured in the synthesis doc.

**2026-03-26** - Introduced the "Also noted by" corroboration pattern. Sources that make the same point as an existing entry but don't add a new idea can now be recorded as lightweight corroboration lines on the canonical entry. The bar: must have been read, must come from a meaningfully different context or voice. Tested on three entries in the bottleneck-shifts-upward cluster (Human-in-the-Loop, Comprehension Debt, Zechner). Added to CLAUDE.md as a standing guideline.

**2026-03-23** - Added a writing and research cluster to the collection: Orwell, Graham, Zinsser, Booth et al., Adler & Van Doren, CGSC Writing Guide, and the cognitive offloading paper (Jazaieri et al.). These are adjacent to AI the same way the software engineering sources are - they inform how to work well, not what to work on. The scope creep is acknowledged; these sources serve the repo's self-understanding more than its stated subject.

**2026-03-23** - The cognitive offloading taxonomy (assistive → substitutive → disruptive) from Jazaieri et al. gives precise language for a risk this repo faces: AI-drafted annotations can look like analytical engagement while the curator only engaged inspectionally. The taxonomy is now referenced in the concept index under "writing as thinking." The CLAUDE.md engagement checkpoint is an encouragement, not a requirement - a deliberate choice accepting that the risk is real but enforcement would be performative.

**2026-03-23** - Created `resources/events.md` to structurally separate time-bound entries (industry events, incident reports, annual reviews, state-of-field assessments, empirical snapshots) from durable concept/framework/technique entries in `articles.md`. Moved 7 entries. The placement test: if the primary value depends on *when* it was written - if reading it in two years without that date would be misleading - it's an event. Events carry a `*YYYY-MM*` date line. Decision informed by research across six fields (Zettelkasten/evergreen notes, Wikipedia notability, intelligence classification, skills durability frameworks, information science half-life, legal digests) - all converge on structural separation as the standard solution. The bimodal observation (knowledge is either very durable or very perishable, with little genuine middle ground) makes a binary split workable.

**2026-03-22** - Dropbox triage: prioritize durable primary sources over broad secondary surveys when importing adjacent software-engineering material. Added a focused high-signal cluster (Refactoring, Team Topologies, GOOS, Accelerate, Software Engineering at Google, End-to-End Arguments, Conway's original paper). Deferred Dapper/Fundamentals for lower immediate fit; rejected the RAG survey for now as fast-aging synthesis relative to curation cost.

**2026-03-20** - Changed startup orientation from "read the full corpus" to a staged approach: `librarian-notes.md` + compact indexes/manifests first (`resources/index.md`, `ai-generated/README.md`), then full canonical or generated files only when the task needs them. Reason: the old literal startup read added ~28k tokens before `ai-generated/` and ~95k tokens if the whole generated directory was loaded, which is too much context to pay by default.

**2026-03-20** - Split librarian memory conceptually into **hot memory** (`librarian-notes.md`) and **archived memory** (`librarian-archive.md`). Archive only when entries are old enough that their value is mainly historical or thematic; keep startup-critical rules, active gaps, open questions, and repeatedly useful preferences in hot memory. Future agents should search the archive map / tags first and read only matching sections, not the whole archive.

**2026-03-20** - Expanded the hot-memory budget for `librarian-notes.md` to roughly **10k tokens**. The goal is not aggressive minimization; it is to keep startup context rich enough to be useful while moving only theme-heavy historical detail into the archive.

**2026-03-20** - Archived the detailed 2026-03-12 repo-memory / derived-layer experiment cluster to [`librarian-archive.md#derived-layer-design`](librarian-archive.md#derived-layer-design). Read that section for background on concept-index design, retrieval / representation / maintenance, `repo-query`, and why `ai-generated/` is treated as exploratory.

**2026-03-15** - For ecosystem patterns like Ralph loops, include the highest-signal independent implementations (real scripts, real usage evidence), and also include at least one official provider implementation as a separate reference even if it is not the strongest technical source. Rationale: official provider support is strategically important signal about standardization/adoption.

**2026-03-16** - Adjacent software-engineering sources are in scope when they sharpen the quality bar for agent-produced code. CUPID is worth keeping not as generic craft literature, but as a practical review lens for whether agent-generated software is composable, predictable, idiomatic, and shaped by the domain rather than by framework defaults.

**2026-03-09** - Actively filtering against people who write about AI primarily to be seen rather than to share genuine learning. The popularity of the topic has created a lot of noise from people capitalising on it. When evaluating new sources, ask: does this person build things and write about what they actually learned, or do they write about what others built?

---

## Patterns Noticed

**2026-03-13** - A useful cluster is forming around the idea that AI shifts the bottleneck upward rather than removing it: HBR on work intensification, Pydantic on supervision fatigue, HYBRD on replacing agent supervisors with deterministic code, and BeadHub on multi-human / multi-agent coordination. Common theme: generation gets cheaper, but oversight, coordination, and expectation management get more expensive.

**2026-03-13** - Anthropic's "How we built our multi-agent research system" and Cognition's "Don't Build Multi-Agents" are best read as task-specific, not contradictory. A useful lens: **multi-agent for breadth-first exploration**, **single-agent for depth-first coherence-heavy execution**. This seems like one of the clearest emerging distinctions in agent architecture.

**2026-03-13** - A productive tension is emerging between three kinds of evidence about AI's impact on work: (1) usage data like Anthropic's Economic Index, which shows where AI is actually being applied; (2) field experiments like METR, which show that real productivity effects can diverge sharply from user belief and benchmark performance; and (3) case-based writing like Mollick and Reyero, which shows how a single newly-viable task can still reshape a workflow or field. Worth keeping all three, because none is sufficient on its own.

Earlier pattern observations (2026-03-09: practitioner/research balance, alignment arc, gender diversity, Yegge/Emanuel/Huntley cluster, Gas Town stack) archived to [`librarian-archive.md#early-pattern-observations`](librarian-archive.md#early-pattern-observations).

---

## Gaps

**2026-03-09** - No coverage of the alignment/safety perspective beyond a passing mention in the patterns document. The collection is heavily weighted toward "how to use AI effectively" and light on "what are the risks of doing so." This is a genuine gap worth filling intentionally, not just because balance is good, but because the security and alignment questions are getting more practically relevant as agents are given more autonomy.

**2026-03-09** - *(partially addressed)* Added Yudkowsky, Bostrom, Russell, Christiano, and LeCun as people entries, and four alignment resources (Rationality/Sequences, AGI Ruin, If Anyone Builds It, The Alignment Forum). The alignment section now has both the case for existential risk (Yudkowsky, Bostrom, Russell, Christiano) and the most credible counter-voice (LeCun). Still missing: more technically active researchers (e.g. Anthropic interpretability, DeepMind safety), and perhaps a voice from the policy/governance side rather than the research side.

**2026-03-09** - No coverage of AI from a non-Western perspective. The collection is almost entirely US/European voices. Chinese open-weight model labs (DeepSeek, etc.) are mentioned in passing but nobody from that side of the field is tracked as a person or primary source.

**2026-03-09** - Light on the economics and business dimensions. Minotaur Capital is the only entry that looks at AI from an investment/capital perspective. The economic implications of agents (job displacement, cost curves, winner-takes-all dynamics) are underrepresented.

---

## Connections

**2026-03-23** - Appleton's Enlightenment essay inverts the framing of the cognitive offloading cluster. The existing sources (Jazaieri, Osmani, Pydantic) document what goes wrong when AI substitutes for thinking. Appleton asks the complementary question: what would it look like to design AI that *strengthens* thinking instead? The answer - AI as critic rather than as producer, challenging assumptions rather than generating output - is the assistive end of Jazaieri's offloading spectrum made concrete. This is the most constructive source in the cluster: not just "here's the risk" but "here's what the alternative could look like." The three cited studies showing reduced critical thinking with AI use are worth tracking as the empirical base for this argument grows.

**2026-03-17** - Completed judgment memory research (see `ai-generated/judgment-memory.md`). The concept names something real: durable captured judgment that changes how future agents plan, implement, review, or decide. No existing term covers it precisely - "agent context files" names the container, "codified context" is broader, "design rationale" is narrower. Keeping "judgment memory" as the repo's working label.

**2026-03-17** - The strongest new source discovered is the "Codified Context Infrastructure" paper (Vasilopoulos, arXiv:2602.20478) - a three-tier architecture (hot constitution + specialized agents + cold knowledge base) developed across 283 sessions on a 108k-line C# system. Reports maintenance cost (~1-2 hrs/week), failure modes (specification staleness), and a context drift detector. The companion repo has inspectable artifacts. This should be added to articles.md and projects.md.

**2026-03-17** - The "Agent READMEs" paper (arXiv:2511.12884) provides the best empirical data on agent context files: 2,303 files across Claude Code, Codex, and Copilot. Key finding: these are "living configuration artifacts" - 67% modified in multiple commits, with updates roughly daily. Instructions heavily skewed toward functional operations; non-functional requirements (security, performance) are rare.

**2026-03-17** - Four distinct production mechanisms for judgment memory emerged: (1) manually authored (CLAUDE.md, ADRs), (2) automatically captured by agents (auto memory), (3) automatically detected from codebase (Codebase Context MCP), (4) mined from human practice at scale (Awesome Reviewers). These have different effort/quality tradeoffs.

**2026-03-17** - The biggest gap in the judgment memory space is maintenance. Everyone agrees stale judgment is dangerous ("agents trust documentation absolutely"), but no source described systematic pruning. The Codified Context paper's biweekly review and drift detector are the closest, and the Codebase Context MCP's memory decay is the most automated. This gap is worth watching.

**2026-03-17** - Wrote `ai-generated/ensuring-code-quality-with-agents.md`, a thorough synthesis essay covering the full topic: why quality discipline increases with agents, the shift from producer to quality gate, planning before generation, feedback loops, design principles as review heuristics (Parnas, Ousterhout, Hickey, Evans, CUPID, Gabriel), context engineering, judgment memory, task shape, legacy code, multi-agent quality, and security. Draws on nearly every source cluster in the repo. Written long and dense for completeness; intended for a concision pass later.

**2026-03-17** - Polled all followed sources. Osmani's "Comprehension Debt" coined a term that extends the quality cluster in a distinct direction: not supervision fatigue (the feeling), not work intensification (the organizational pattern), but the growing gap between code that exists and code anyone understands. This is now a three-part cost model for cheap generation: fatigue + intensification + comprehension loss.

**2026-03-17** - Yegge's "AI Vampire" adds a fourth dimension to the above - the economics of extraction. Who captures the value of 10x productivity? The piece also takes unusual accountability: Yegge acknowledges that he and other early adopters are setting unrealistic standards.

**2026-03-17** - Mollick's "The Shape of the Thing" is the most significant new framing piece. The StrongDM Software Factory is the most radical production experiment tracked in the collection: no human code writing, no human code review, agents test agents. Recursive self-improvement is now explicitly on every major lab's roadmap, not a theoretical concern.

**2026-03-17** - Huntley's geopolitical cluster (economic warfare + cognitive security) addresses two gaps identified on 2026-03-09: non-Western perspective and economics/business dimensions. The pieces are more speculative than the collection's usual bar, but the underlying questions - who controls the models your business depends on, what happens if the spigot is turned off - are real dependency risks.

**2026-03-17** - Simon Willison's Agentic Engineering Patterns continues to grow: new chapters on "How Coding Agents Work" (mechanics explainer) and "Subagents" (explore, parallel, specialist patterns). The guide is becoming one of the most substantial references in the collection, as predicted on 2026-03-09.

**2026-03-17** - Karpathy's autoresearch (already in collection) went mainstream: Fortune coverage, Shopify's Lütke tried it and got 19% performance gain overnight, being called "the Karpathy Loop." His vibe-coded labor market exposure analysis (taken down after misinterpretation) is culturally interesting but not collection-worthy as a source.

---

**2026-03-19** - Researched context pruning for the Pi coding agent. The key finding is that the relationship between pruning and cost is non-obvious: pruning saves tokens but breaks prompt caches, and on API-billed plans the cache penalty can easily exceed the token savings. The math only works clearly in three cases: (1) subscription/flat-rate billing where tokens are free, (2) very large redundancies (>10k tokens), or (3) batching pruning with compaction events that already break the cache. OpenCode's DCP extension handles this correctly by only recalculating pruning during compress events. For Pi, the strongest first move is a diagnostic `/context` command, not automatic pruning. Full analysis in `ai-generated/context-pruning-research.md`.

**2026-03-19** - Discovered three relevant Pi packages during context-pruning research: pi-context (agent-driven git-like context management), pi-extension-observational-memory (custom compaction), and pi-mcp-adapter (token-efficient MCP). None do DCP-style automatic rule-based pruning. The opencode DCP plugin is the strongest existing implementation of the idea, with three zero-cost strategies (dedup, supersede writes, purge errors) and one LLM-driven strategy (compress). No direct port to Pi exists.

**2026-03-20** - NK Schjødt's "They Don't Feel It - Yet" adds a useful labor-market mechanism to the repo: AI's first employment effect may show up as **non-hiring and pipeline erosion**, not public layoffs. This sharpens the economics gap and complements the existing fatigue / intensification / comprehension-debt cluster by moving from workflow experience to hiring composition.

**2026-03-26** - The planning research surfaced a productive tension. Kambhampati's "LLMs Can't Plan" and Chase's "domain-specific cognitive architectures" converge on the same insight from different directions: the LLM should generate ideas, not plan the workflow. But this directly complicates the existing collection's "plan before you code" advice (NK, Harper Reed, Klaassen) — those workflows ask the LLM to produce the plan. The resolution is in the verification layer: human review of the plan artifact (NK's pre-mortem, Osmani's plan-critique loop) compensates for the LLM's unreliable planning by adding the external critic that Kambhampati's framework requires. In other words: having the agent draft a plan works, but only if you treat the draft as a candidate for critique, not a finished artifact. This connects the planning cluster directly to the supervision/oversight cluster.

**2026-03-26** - The ExecPlans format and the Spec Kit workflow are complementary, not competing. ExecPlans is a format specification for individual planning documents (what the plan looks like). Spec Kit is a workflow specification for the planning process (how you get from intent to plan to execution). ExecPlans could serve as the plan format within a Spec Kit workflow.

**2026-03-26** - Cursor's finding that planning and execution benefit from different models is notable. Planning requires big-picture understanding, instruction-following, and maintaining focus. Execution requires code generation, debugging, and test writing. This has implications for the multi-agent architecture discussion — it suggests the planner-worker separation is not just an organizational convenience but reflects genuinely different capability requirements.

Earlier connection observations (2026-03-11: Orca/Gas Town convergence; 2026-03-16: software quality stack, concept index, Every material) archived to [`librarian-archive.md#early-connection-observations`](librarian-archive.md#early-connection-observations).

---

## Open Questions

**2026-03-09** - The Anthropic Agent Skills standard is apparently being adopted broadly (Claude Code, pi, Cursor, VS Code, GitHub Copilot, and more). Worth tracking whether this consolidates into a genuine standard or fractures. The agentskills.io specification and the pi-skills repo are the current reference points.

**2026-03-23** - Researched agent roles, persistent identities, and memory systems. Added four sources: the Speakeasy "Prompting agents" article (best breakdown of prompt layering), the Animesis "Memory as Ontology" paper (most ambitious take on identity persistence), a role-prompting research compilation (contradictory evidence on whether personas help), and "From Biased Chatbots to Biased Agents" (personas can degrade agent task performance by up to 26.2%). Also added the Animesis project. The research surfaced a clear landscape: role prompting reliably controls style but does *not* reliably improve accuracy; persistent identity is being tackled at multiple levels (context files like CLAUDE.md/AGENTS.md, dedicated memory systems like Mem0/Zep/Letta, and the more radical ontological approach of Animesis); and multi-agent role frameworks (CrewAI, LangGraph, AutoGen) are converging on the "crew of specialized agents" pattern.

**2026-03-23** - The Animesis paper's four "missing dimensions" (governance, continuity, rights, cognition) connect to the repo's existing judgment memory cluster. The Codified Context paper's three-tier architecture (constitution + specialized agents + knowledge base) is a practical, production-validated version of roughly the first two Animesis governance layers. The Animesis paper pushes the idea further into identity and lifecycle territory that no production system addresses yet. Worth watching whether this paradigm gains traction or remains academic.

**2026-03-23** - Added Appleton's Gas Town critique, Anthropic's long-running agent harnesses, and Chroma's context rot research. Appleton's "code distance" framework (how far to stand from code depending on domain, risk, feedback loops, experience, collaborators, greenfield/brownfield) is a useful contribution that doesn't exist elsewhere in the collection. The Anthropic harnesses piece fills a gap: the collection had context engineering theory (Anthropic's earlier piece) but not the specific two-agent pattern (initializer + coder) for multi-session work. The context rot research is the primary source for a concept already referenced across several entries; worth having as the empirical anchor.

**2026-03-23** - Appleton's Gas Town piece strengthens a pattern across the collection: design and planning as the real bottleneck when generation is cheap. This now shows up from at least four angles: Appleton (design bottleneck in orchestration), Pydantic (supervision fatigue), HBR (work intensification), and Osmani (comprehension debt). The common thread: the costs of cheap generation are not primarily about code quality - they're about the human cognitive overhead of directing, reviewing, and maintaining coherence.

**2026-03-23** - Added stacked diffs cluster: Gabbard's primary argument (2018, pre-AI), Graphite's AI application (teaching Claude to stack), and a hypothesis document in `ai-generated/`. The hypothesis - that stacking can address the agent code review bottleneck - is plausible but thin on evidence. The strongest AI-specific source (Graphite) has commercial motivation. Flagged explicitly as early-stage. Worth revisiting if controlled studies or team-level reports appear. The Cursor/Graphite acquisition (Dec 2025) is the strongest industry signal that the connection is real.
