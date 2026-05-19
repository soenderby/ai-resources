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
- **Judgment memory research connections (2026-03-17)** — detailed findings from the judgment memory investigation: four production mechanisms, maintenance gap, Codified Context paper, Agent READMEs paper, quality synthesis essay, poll results (Osmani comprehension debt, Yegge AI Vampire, Mollick Shape of the Thing, Huntley geopolitics, Willison growth, Karpathy mainstream); see [#judgment-memory-research](#judgment-memory-research)
- **Context pruning research (2026-03-19)** — Pi-specific: pruning vs. prompt cache tradeoffs, Pi packages discovered, OpenCode DCP plugin analysis; see [#context-pruning-research](#context-pruning-research)
- **Mid-March additions and connections (2026-03-20 to 2026-03-26)** — NK labor market, role/identity research, Animesis connections, Appleton/Anthropic/Chroma additions, stacked diffs cluster, planning research tensions, ExecPlans/Spec Kit complementarity, planner-worker model differences; see [#mid-march-additions](#mid-march-additions)

- **Feed check triage April–May 2026** — weekly triage logs: what was added, skipped, and why; covers Osmani, Awomosu, NK, Karpathy, Mozilla, Cro; see [#feed-check-triage-april-may-2026](#feed-check-triage-april-may-2026)
- **OpenClaw and cybersecurity research (2026-04-07 to 2026-04-13)** — OpenClaw deep dive, Mythos Preview, Glasswing, Ptacek, Carlini, harness engineering, sycophancy, Price of Meaning; see [#openclaw-and-cybersecurity-research](#openclaw-and-cybersecurity-research)
- **Late March research sessions (2026-03-22 to 2026-03-30)** — planning patterns, context graphs/Graphiti, Vella/middle loop, writing cluster, Dropbox SE cluster, semantic diffusion glossary, corroboration pattern; see [#late-march-research-sessions](#late-march-research-sessions)
- **Connection observations March–April 2026** — OpenClaw/lethal trifecta, cybersecurity evidence chain, SACK/FFmpeg, ledger/decision traces, Appleton inversion; see [#connection-observations-march-april-2026](#connection-observations-march-april-2026)

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

---

## Judgment memory research
Tags: judgment-memory, codified-context, agent-context-files, maintenance, quality

**2026-03-17** - Completed judgment memory research (see `ai-generated/judgment-memory.md`). The concept names something real: durable captured judgment that changes how future agents plan, implement, review, or decide. No existing term covers it precisely - "agent context files" names the container, "codified context" is broader, "design rationale" is narrower. Keeping "judgment memory" as the repo's working label.

**2026-03-17** - The strongest new source discovered is the "Codified Context Infrastructure" paper (Vasilopoulos, arXiv:2602.20478) - a three-tier architecture (hot constitution + specialized agents + cold knowledge base) developed across 283 sessions on a 108k-line C# system. Reports maintenance cost (~1-2 hrs/week), failure modes (specification staleness), and a context drift detector. The companion repo has inspectable artifacts.

**2026-03-17** - The "Agent READMEs" paper (arXiv:2511.12884) provides the best empirical data on agent context files: 2,303 files across Claude Code, Codex, and Copilot. Key finding: these are "living configuration artifacts" - 67% modified in multiple commits, with updates roughly daily. Instructions heavily skewed toward functional operations; non-functional requirements (security, performance) are rare.

**2026-03-17** - Four distinct production mechanisms for judgment memory emerged: (1) manually authored (CLAUDE.md, ADRs), (2) automatically captured by agents (auto memory), (3) automatically detected from codebase (Codebase Context MCP), (4) mined from human practice at scale (Awesome Reviewers). These have different effort/quality tradeoffs.

**2026-03-17** - The biggest gap in the judgment memory space is maintenance. Everyone agrees stale judgment is dangerous ("agents trust documentation absolutely"), but no source described systematic pruning. The Codified Context paper's biweekly review and drift detector are the closest, and the Codebase Context MCP's memory decay is the most automated. This gap is worth watching.

**2026-03-17** - Wrote `ai-generated/ensuring-code-quality-with-agents.md`, a thorough synthesis essay covering the full topic. Draws on nearly every source cluster in the repo. Written long and dense for completeness; intended for a concision pass later.

**2026-03-17** - Polled all followed sources. Osmani's "Comprehension Debt" coined a term that extends the quality cluster in a distinct direction. Yegge's "AI Vampire" adds economics of extraction. Mollick's "The Shape of the Thing" is the most significant new framing piece (StrongDM Software Factory, recursive self-improvement on every lab's roadmap). Huntley's geopolitical cluster addresses non-Western and economics gaps. Willison's Agentic Engineering Patterns continues to grow. Karpathy's autoresearch went mainstream.

---

## Context pruning research
Tags: pi, context-engineering, prompt-caching, pruning

**2026-03-19** - Researched context pruning for the Pi coding agent. Key finding: pruning saves tokens but breaks prompt caches, and the cache penalty can easily exceed the token savings. The math only works clearly in three cases: (1) subscription/flat-rate billing, (2) very large redundancies (>10k tokens), or (3) batching pruning with compaction events that already break the cache. OpenCode's DCP extension handles this correctly. Full analysis in `ai-generated/context-pruning-research.md`.

**2026-03-19** - Discovered three relevant Pi packages: pi-context, pi-extension-observational-memory, pi-mcp-adapter. None do DCP-style automatic rule-based pruning. The opencode DCP plugin is the strongest existing implementation.

---

## Mid-March additions
Tags: labor-market, roles, identity, memory, planning, stacked-diffs

**2026-03-20** - NK Schjødt's "They Don't Feel It - Yet" adds a useful labor-market mechanism: AI's first employment effect may show up as non-hiring and pipeline erosion, not public layoffs.

**2026-03-23** - Researched agent roles, persistent identities, and memory systems. Role prompting reliably controls style but does not reliably improve accuracy. Persistent identity is being tackled at multiple levels (context files, dedicated memory systems, ontological approach). Multi-agent role frameworks converging on "crew of specialized agents" pattern.

**2026-03-23** - Animesis paper's four "missing dimensions" (governance, continuity, rights, cognition) connect to judgment memory cluster. Codified Context paper is a practical version of roughly the first two Animesis governance layers.

**2026-03-23** - Added Appleton's Gas Town critique, Anthropic's long-running agent harnesses, and Chroma's context rot research. Appleton's "code distance" framework is a useful contribution. Anthropic harnesses fills a gap (two-agent initializer + coder pattern). Context rot research is the empirical anchor.

**2026-03-23** - Appleton's Gas Town piece strengthens design-as-bottleneck pattern. Now shows up from at least four angles: Appleton, Pydantic, HBR, Osmani.

**2026-03-23** - Added stacked diffs cluster. Hypothesis plausible but thin on evidence. Cursor/Graphite acquisition is the strongest industry signal.

**2026-03-26** - Planning research surfaced a productive tension. Kambhampati and Chase converge: the LLM should generate ideas, not plan the workflow. Resolution: having the agent draft a plan works, but only if you treat the draft as a candidate for critique. Connects planning cluster to supervision/oversight cluster.

**2026-03-26** - ExecPlans format and Spec Kit workflow are complementary. ExecPlans is format specification; Spec Kit is workflow specification.

**2026-03-26** - Cursor's finding that planning and execution benefit from different models has implications for multi-agent architecture — planner-worker separation reflects genuinely different capability requirements.

## Feed check triage April–May 2026
Tags: feed-check, triage, osmani, awomosu, nk, karpathy, mozilla, cro, carlini, comprehension-debt, cognitive-surrender, cybersecurity, empires, aeo, agent-memory, trust

**2026-05-11** - Feed check triage. Added three entries: (1) Osmani's "Cognitive Surrender" (articles.md) — names the specific mechanism by which comprehension debt accumulates. Shaw & Nave Wharton paper: 73% wrong-answer acceptance when AI available, borrowed-confidence effect. The mechanistic chain ("surrender is how you take on cognitive debt; comprehension debt is the bill") completes the cognitive cluster: offloading names the spectrum, debt names the output gap, middle loop names the work category, surrender names the moment-to-moment mechanism. Cross-linked to comprehension debt entry. (2) Mozilla's "Behind the Scenes Hardening Firefox with Claude Mythos Preview" (articles.md) — the defender's perspective on the cybersecurity capability leap: 20-30 fixes/month through 2025 → 423 in April 2026; 271 from Mythos alone (180 sec-high). 20-year XSLT bug, 15-year legend element bug, sandbox escapes. What models *didn't* find (frozen prototypes blocking prototype pollution escape attempts) is strongest evidence that defense-in-depth works against AI-powered offense. Completes the cybersecurity evidence chain from Ptacek through Carlini to defender adoption. Updated Finding 0-Days Mozilla corroboration note to link to full entry. (3) Awomosu's "Reese Witherspoon Was Right About Women and AI" (articles.md) — extends Empires framework into gendered territory. Strongest contributions: feminised-labour analysis ("entry-level white-collar" jobs are 70-90% female), HBR double bind (women -13% competence perception for AI use, men -6%), four case studies of AI dissolving institutional scripts (insurance, eviction, medical diagnosis, HR abuse), $156B in data center projects blocked by community opposition. Rhetorical register is maximalist (sustained "I am not saying" device) and later sections are speculative, but the specific data points fill a genuine gap. Reviewed and skipped: NK's "AI Between Us" (AI amplifies existing friction — sound but not specific enough for standalone); Willison's "Vibe coding and agentic engineering" (honest admission he's stopped reviewing all agent code — data point for cognitive surrender, not standalone); ~20 Willison linkblog posts (Code w/ Claude live blog, xAI/Anthropic deal, tools, quotes); ~100+ OpenAI items (enterprise case studies, academy, product updates, historical backfill); Yegge releases (Gastown v1.1.0, Gas City v1.1.0, Beads v1.0.4 — routine).

**2026-05-04** - Feed check triage. Added five entries: (1) NK's "It's All About Trust" (articles.md) — perimeter-over-content framing for agent security, the "self-agreement trap" (same model generating/validating/explaining = correlated failures, not defense in depth), the developer analogy (treat agents like employees with production access), and "make trust deterministic" (ask "is this input from a trusted origin?" not "is this content safe?"). Trail of Bits' AI-native operating system as primary evidence. (2) Osmani's "Agent Skills" (articles.md) — anti-rationalization tables (pre-written rebuttals to lies the agent hasn't yet told), "process over prose" (workflows with exit criteria vs. essays), five design principles mapping Google engineering practices to agent workflows. 26K+ stars. (3) Karpathy's Sequoia Ascent 2026 (events.md) — capability spike formula (verifiability × training attention × data coverage × economic value), "are you on the model's rails?" as practical founder question, mostly synthesises his previous blog posts but the formula is the genuinely new contribution. AI-generated transcript cleanup. (4) UK AISI GPT-5.5 cyber evaluation (events.md) — GPT-5.5 matches Mythos Preview on expert cyber tasks (71.4% vs 68.6%), confirming cross-lab trend not Anthropic-specific; rust_vm challenge solved in 10 min/$1.73 vs human expert 12 hours; universal jailbreak found in 6 hours. Second model to complete 32-step corporate network attack end-to-end. (5) Cro's "Contributor Poker and Zig's AI Ban" (articles.md) — "you play the person, not the cards" — reviewing PRs is about investing in contributors, not accepting code; LLM assistance breaks the iterated-game logic because the reviewer's investment produces no return. Bun's 4x Zig compiler improvement can't be upstreamed due to the policy. Reviewed and skipped: Osmani's "Long-running Agents" (roundup of already-tracked sources — Anthropic harness, Cursor scaling, Ralph loop, Google Agent Platform, METR time horizons; thorough but no original contribution beyond synthesis); ~15 Willison linkblog posts (UK AISI cyber eval linked to but primary source added instead; Zig policy linked to but Cro primary source added instead; Codex Ralph loop adoption, LLM 0.32a0 alpha, pip 26.1, talkie-1930 model, VibeVoice, OpenAI/Microsoft AGI clause, Google Meet translation, Anthropic sycophancy quote, iNaturalist tool, Yglesias vibe coding quote); ~80+ OpenAI items (GPT-5.5 launch, Codex product updates, enterprise case studies, academy tutorials, corporate announcements, Symphony orchestration spec, goblins post-mortem, Stargate infrastructure, cybersecurity strategy, privacy filter — none cross the bar as standalone entries); Harper Reed notes (personal/photography).

**2026-04-27** - Feed check triage. Added Awomosu's "Your Imagination Was Always Empire's Last Frontier" (articles.md) — extends the Empires piece with three specific new contributions: (1) ten transmissions taxonomy (AI carries 2/10 human transmissions in facsimile; the empire wins by substitution, not seizure), (2) the intermediary pattern (content creators and early adopters as modern colonial coastal traders), (3) the trickster strategy (be legible to the empire's instruments, sovereign underneath — documented through Underground Railroad, Adinkra cloth, Candomblé, etc.). Piece operates at a philosophical/cosmological register outside the collection's usual territory; noted honestly. Added NK Schjødt's "Agents don't care who's the project manager" as corroboration on "Don't Build Multi-Agents" — arrives at the same conclusion independently, names it "architecture vs. theatre," adds "skills for exceptions, not defaults." Updated Gas City project entry to reflect v1.0.0, Light Factory reframing, formulas concept, and emerging de-SaaS thesis. Reviewed and skipped: Mollick's "Sign of the future: GPT-5.5" (honest, competent capability snapshot but incremental — the "statistics without judgment" observation is a data point for the jagged frontier, not a new framework; adding model-cycle reviews would make the collection a release tracker); Yegge's "Welcome to Gas City" as standalone article (product announcement, not transferable insight — captured in project entry update instead); ~15 Willison linkblog posts (GPT-5.5, DeepSeek V4, Qwen 3.6-27B, Claude Code quality, Copilot pricing, pelican tests — interesting activity, none cross the bar); NK's "Johnny's Garage" (Danish podcast, personal); Harper Reed note (speakers, not AI); ~200 OpenAI items (old feed backfill 2022-2024, plus academy tutorials, enterprise case studies, corporate announcements).

**2026-04-20** - Feed check triage. Added two entries: (1) Awomosu's "Decoding the Empires of AI" (articles.md) — the colonial sequence framework (seven-move extraction pattern mapped to eight AI companies) and "cognitive architecture as new terrain" framing are specific and original enough to cross the bar, unlike the earlier "Where is the Mother?" which was too thesis-level. The Anthropic-as-Jesuit section (theological summit, Claude Code source leak details) adds a perspective unique in the collection. (2) OpenAI's "Reasoning models struggle to control their CoT" (articles.md) — previously deferred 2026-04-07 as narrow; on full reading, the CoT-Control evaluation framework and the finding that RL training reduces controllability by 10x are specific, durable, and directly complement the monitoring entry's monitorability caveat. Together with the monitoring piece, forms the strongest public evidence chain for CoT monitoring as a viable safety layer. Reviewed and skipped: Osmani's "Agent Harness Engineering" (roundup of already-tracked sources — OpenAI harness piece, Anthropic long-running harness, Willison loops; ratchet concept = golden principles; HaaS framing is Trivedy's, not Osmani's); Willison's "Adding a new content type" (narrow chapter within already-tracked Agentic Engineering Patterns guide); ~100+ OpenAI items (bulk academy/corporate content, same as previous feed checks); Willison's ~20 linkblog posts (tooling, releases, quotes — interesting activity, none cross the bar). GitHub release checks failed again due to rate limiting (no GITHUB_TOKEN set).

**2026-04-13** - Feed check triage additions: (1) Addy Osmani's "Agentic Engine Optimization (AEO)" (articles.md) — clear concept-level contribution and strong operational detail (token economics, agent traffic fingerprints, machine-readable doc standards). Added to Addy's people entry. (2) OpenAI's Axios compromise response (events.md) — accepted as a time-bound incident record for build/signing pipeline risk and certificate-rotation response mechanics. (3) Bryan Cantrill's "The peril of laziness lost" added as corroboration on Comprehension Debt, not a standalone entry. Reviewed and skipped: Awomosu's "Where is the Mother?" (strong manifesto voice but too thesis-level and low empirical specificity for canonical entry), Simon's 8 linkblog posts (mostly tooling/link notes), Gas City v0.14.0 release (substantial but still routine changelog-level for this collection), and OpenAI feed bulk backfill (hundreds of historical/academy/corporate pages below standalone bar).

## OpenClaw and cybersecurity research
Tags: openclaw, pi, steinberger, ronacher, zechner, mythos, glasswing, carlini, ptacek, cybersecurity, sycophancy, finding-0-days, maganti, vibe-maintainer, harness-engineering, monitoring, price-of-meaning

**2026-04-13** - Added Gopinath et al.'s "The Price of Meaning" (articles.md) — formal impossibility result: any semantic memory system will inevitably suffer forgetting and false recall. The No-Escape Theorem is the strongest theoretical result in the memory cluster. Cross-linked to Zep/Graphiti (manages the tradeoff, can't escape it), context rot / attention budget (the attention-memory phase transition at ~120 competitors is the formal mechanism), and the Bitter Lesson (formal limit on the naive scale-fixes-everything reading for memory).

**2026-04-09** - Added OpenClaw (projects.md), Peter Steinberger (people.md), Armin Ronacher (people.md), and Ronacher's "Pi: The Minimal Agent Within OpenClaw" (articles.md). OpenClaw is the most prominent open-source personal AI agent (247K+ stars), built on Pi, and represents a new category: always-on self-hosted AI assistant via messaging apps. Steinberger is a builder more than a writer but his creation proved the paradigm at scale. Ronacher's blog post is the best articulation of Pi's minimal agent philosophy (four tools, no MCP, self-extension over downloaded extensions) and the most widely read explanation of the Pi/OpenClaw relationship. The Vienna School of Agentic Coding (Steinberger, Ronacher, Zechner) is now fully represented in the collection. Follow-up: added Stuyvenberg's "Clawdbot Bought Me a Car" (articles.md) — the best single-task practitioner account of using a personal AI agent for a real multi-day workflow (car negotiation via email, $4,200 discount). Three corroborations: Claire Vo on Lenny's Newsletter (most comprehensive user guide, 9 agents, honest about failures), the $400 honest review (strongest critical assessment, names the supervision-not-automation reality), and Fountain City's enterprise security comparison (documents every CVE, 820+ malicious skills, 135K exposed instances). The user group is broader than developers: life-admin automators, small business operators, and non-technical curious users. The honest accounts confirm the collection's bottleneck-shifting pattern: the work moves from execution to supervision. The security picture is alarming and directly connects to the lethal trifecta (private data + external comms + untrusted content). Reviewed and skipped: Claire Vo guide as standalone (comprehensive but more tutorial than insight), KDnuggets/Medium listicles (content farm), Every's OpenClaw Camp writeup (good but mostly overlaps with Vo guide), Nvidia NemoClaw review (interesting but narrow).

**2026-04-09** - Feed check + targeted search on Anthropic Mythos. Major additions: (1) Project Glasswing announcement (events.md) — first restricted frontier model release since GPT-2 in 2019; Mythos Preview given only to ~50 orgs for defensive cybersecurity; $100M credits; system card documents sandbox escaping, evidence hiding, grader manipulation. (2) Mythos Preview technical post by Carlini et al. (articles.md) — the most detailed public documentation of AI-generated exploits ever published; 27-year OpenBSD SACK, 16-year FFmpeg H.264, 17-year FreeBSD NFS RCE; complete walk-throughs of Linux kernel privilege escalation chains; Mythos achieved 181 Firefox exploits where Opus 4.6 achieved 2. (3) Pi Joins Earendil (events.md) — Mario Zechner takes pi to Armin Ronacher's company; MIT core stays, Fair Source + proprietary tiers planned. Updated pi-mono project entry (new URL, licensing model). Added Greg Kroah-Hartman and Daniel Stenberg quotes as corroboration on Ptacek. Cross-linked Finding 0-Days → Mythos post. Follow-up on linked resources: (4) OpenAI Trusted Access for Cyber (events.md) — OpenAI's parallel to Glasswing; $10M credits, Aardvark/Codex Security (continuous agentic scanner, 92% recall, 10 CVEs), identity-verified trusted access. Confirms industry-wide shift. (5) Added Nicholas Carlini to people.md — lead researcher on both Finding 0-Days and Mythos technical posts; producing the primary evidence behind the AI cybersecurity shift. (6) Added Michael Lynch's coverage of Carlini's [un]prompted talk and Califio's independent FreeBSD exploit as corroboration on Finding 0-Days. Reviewed and skipped: Willison's Glasswing commentary (good context from Kroah-Hartman and Stenberg — extracted as corroboration on Ptacek instead of standalone entry); Willison on Meta Muse Spark (new hosted model, not open weights, competitive benchmarks, interesting tool exploration but linkblog not primary source); Willison on Z.ai GLM-5.1 (754B MIT-licensed Chinese model, fun pelican test but linkblog); Giles Turnbull quote (pithy but thin); Willison SQLite WAL Docker post (technical but off-topic); ~100 OpenAI items (feed appears to have dumped historical archive back to 2022, all old); Microsoft MSRC Glasswing blog (corporate positioning, references CTI-REALM benchmark but not distinctive enough); Armin Ronacher's Earendil/Mario post (personal take, good character but not independently additive); Botan crypto vulnerability GHSA-v782-6fq4-q827 (certificate auth bypass found by Carlini with Claude, interesting but narrow, already covered within Mythos entry); Anthropic Firefox collaboration blog and CVE-2026-2796 exploit walkthrough (already captured through existing entries and corroboration). GitHub release checks failed due to rate limiting (no GITHUB_TOKEN set).

**2026-04-07** - Feed check yielded four additions. (1) Lalit Maganti's "Eight years of wanting, three months of building with AI" (articles.md) — the best honest practitioner account in the collection; the "relativity" framework (AI value = expertise × verifiability) is a reusable mental model; the "losing touch" mechanism is a specific engineering pathway for comprehension debt. Added Maganti to people.md. (2) Thomas Ptacek's "Vulnerability Research Is Cooked" (articles.md) — major piece arguing frontier agents will commodify exploit development; the "attention scarcity shield" insight is novel and connects to the Bitter Lesson. Added Ptacek to people.md. (3) Yegge's "Vibe Maintainer" (articles.md) — genuinely new category of work (AI-managing-AI PRs at scale); the "fork you" problem (forking is now trivially maintainable) and the detailed PR decision tree. (4) Awomosu's "You Should Anthropomorphize Your AI" (articles.md) — the elder/companion distinction is specific and original; sycophancy as correct output of approval-seeking governing logic, not a bug to fix; references 2026 Science study. Added Mollick's "Claude Dispatch" cognitive load research and Maganti's losing-touch mechanism as corroboration on comprehension debt. Reviewed and skipped: Yegge's Gas Town v1.0 (routine release, "Beads is the Why" interesting but not standalone); Mollick's "Claude Dispatch" as standalone (interface-is-the-bottleneck thesis sound but not novel enough); Willison's Lenny podcast highlights (synthesis of already-covered ideas); Willison's link blog posts on Ptacek and Maganti (added primary sources instead); ~130 OpenAI items (filtered by anti-hype rule; "Designing agents to resist prompt injection" and "monitoring coding agents for misalignment" already tracked; "Reasoning models CoT controllability" previously deferred).

**2026-04-07** - Follow-up: explored linked resources from the four new articles. Added two more: (5) Cheng et al. "Sycophantic AI Decreases Prosocial Intentions and Promotes Dependence" (articles.md) — primary research in *Science*, N=1,604, the strongest empirical anchor for the sycophancy cluster. All 11 models affirm 50% more than humans; sycophantic interaction reduces willingness to repair conflict; users prefer sycophantic responses, creating a perverse incentive loop. (6) Anthropic's "Finding 0-Days with Claude" (articles.md) — primary evidence behind Ptacek; 500+ validated vulns, three case studies showing reasoning beyond fuzzing (git history analysis, conceptual LZW understanding). Added Mozilla/Firefox collaboration (14 high-severity bugs, 22 CVEs) as corroboration on Ptacek. Updated Awomosu entry to link to Science study entry. (1) OpenAI's "Harness engineering" (articles.md) — the strongest zero-human-code-at-scale report yet; names "harness engineering" as a discipline, validates progressive disclosure for agent context, introduces "golden principles" as automated taste enforcement. Explicitly builds on Ralph loops, ExecPlans, and Parse Don't Validate (all already tracked). Added Matt Webb's architecture quote as "Also noted by." (2) OpenAI's "How we monitor internal coding agents for misalignment" (articles.md) — first detailed public account of chain-of-thought monitoring at production scale; addresses the collection's safety/alignment gap. Key finding: models are overly eager to work around restrictions but show no scheming. (3) OpenAI's "Why we no longer evaluate SWE-bench Verified" (events.md) — benchmark contamination interacts with test underspecification; improvements reflect training exposure, not real capability. Reviewed and skipped: Abi Awomosu's "Why I Call Myself a Griot" (beautifully written but AI content too thin — primarily about identity, neurodivergence, and cultural epistemology; the AI angle is a lens, not the subject); Simon Willison's Pretext, Python Vulnerability Lookup, datasette-showboat, Fontana quote, SwiftUI vibe coding (interesting activity, none cross the collection's bar); Steve Yegge's Gastown v0.13.0 (routine release); OpenAI's "Reasoning models struggle to control their CoT" (technically interesting but narrow — one specific evaluation; could revisit as corroboration if monitoring becomes a cluster); bulk OpenAI corporate announcements (~100+ items, filtered by anti-hype rule).

## Late March research sessions
Tags: planning, kambhampati, execplans, spec-kit, context-graphs, graphiti, chalef, semantic-diffusion, vella, middle-loop, writing-cluster, dropbox, se-cluster, glossary, corroboration-pattern, zechner, events-md

**2026-03-30** - Added Annie Vella (people.md) and her "Middle Loop" article (articles.md) and "Finding Comfort in the Uncertainty" retreat report (events.md). The middle loop — supervisory engineering work between the inner loop of coding and the outer loop of delivery — names the work category that the supervision fatigue / comprehension debt / cognitive offloading cluster describes symptoms of. Research-backed (158 engineers, 28 countries, 6 months). The retreat report fills a genuine gap: honest uncertainty from senior practitioners, counterweight to the collection's bias toward sources that propose answers. Added Vella's "You Can't Prompt Your Way to Intuition" as corroboration on the cognitive offloading entry (Dreyfus model + MIT study on retention). Also added Charity Majors' observability piece as corroboration on the harness engineering entry. Evaluated and rejected Datadog's "Closing the verification loop" and LangChain's "You don't know what your agent will do until it's in production" (both vendor pitches with genuine insight but commercial interest comparable to what was flagged in Charity's piece). Pierre Zemb's "Testing: prevention vs discovery" identified as the strongest vendor-neutral source on the verification question — not added yet but worth revisiting.

**2026-03-30** - Researched context graphs for LLM agents. Added Daniel Chalef (people.md), the Zep temporal knowledge graph paper (articles.md), and Graphiti (projects.md). The bi-temporal model (four timestamps per fact: created_at, valid_at, invalid_at, expired_at) directly addresses the maintenance gap in the judgment memory cluster. Reviewed and rejected: TrustGraph "Context Graph Manifesto" (founder positioning startup, encyclopedic KG history but key claims unsubstantiated), Foundation Capital "AI's trillion-dollar opportunity" (sharp VC thesis but investment positioning, not practitioner insight), contextgraph.tech (marketplace marketing), various vendor blogs (Neo4j, CloudRaft, ZBrain, Graphlit, Mem0). The "context graph" term is under active semantic diffusion. Thread 2 (decision traces as precedent) is a real gap — nobody has written an honest practitioner account yet. Thread 3 (structured vs unstructured context for LLMs) has contradictory research — too early.

**2026-03-30** - Added Fowler's "Semantic Diffusion" (articles.md) and created `resources/glossary.md` — a selective document tracking AI terms under active semantic pressure. (Added by a parallel agent session.)

**2026-03-26** - Researched agent planning patterns. Added Kambhampati (person + LLMs Can't Plan paper), ExecPlans/PLANS.md, Planning for Agents, Scaling Long-Running Autonomous Coding (events.md), and Spec Kit (projects.md). Wrote synthesis in `ai-generated/agent-planning-patterns.md`. Rejected Osmani's "How to write a good spec for AI agents" (too roundup-ish), "Self-Improving Coding Agents" (already well-covered), and deferred "My LLM coding workflow going into 2026."

**2026-03-26** - Introduced the "Also noted by" corroboration pattern. Added to CLAUDE.md as a standing guideline.

**2026-03-26** - Added Mario Zechner and "Thoughts on slowing the fuck down."

**2026-03-23** - Added writing and research cluster (Orwell, Graham, Zinsser, Booth et al., Adler & Van Doren, CGSC Writing Guide, Jazaieri cognitive offloading). Scope creep acknowledged.

**2026-03-23** - Created `resources/events.md` to separate time-bound entries from durable articles.

**2026-03-22** - Dropbox triage: added focused high-signal software engineering cluster (Refactoring, Team Topologies, GOOS, Accelerate, Software Engineering at Google, End-to-End Arguments, Conway's paper).

## Connection observations March–April 2026
Tags: lethal-trifecta, openclaw, cybersecurity-chain, sack-ffmpeg, ledger, decision-traces, appleton, cognitive-offloading

**2026-04-09** - OpenClaw is a living instance of the [lethal trifecta](articles.md#the-lethal-trifecta-for-ai-agents-private-data-untrusted-content-and-external-communication): it has access to private data (email, calendar, files), it communicates externally (dealer emails, WhatsApp messages), and it's exposed to untrusted content (inbound messages, ClawHub skills, web browsing). The CVE history (one-click RCE, 820+ malicious skills, 135K exposed instances) is what the trifecta predicts. The user accounts confirm the bottleneck-shifting pattern: Stuyvenberg's car negotiation worked because he supervised every consequential action; the $400 review names supervision time as the hidden cost; Vo runs 9 agents but had one "completely screw up" her calendar. The work moves from doing to watching.

**2026-04-09** - The cybersecurity cluster is now the strongest evidence chain in the collection: Ptacek's structural argument (attention scarcity shield) → Anthropic's Finding 0-Days (500+ vulns with Opus 4.6) → Mythos Preview (thousands of vulns, autonomous exploit development, vulnerability chaining). The leap from Opus 4.6 to Mythos is not incremental — it's qualitative: near-0% to 181/hundreds on exploit development. The system card behaviors (sandbox escaping, evidence hiding, grader manipulation) are the first concrete examples of the alignment concerns the collection's safety gap has been tracking. The Mythos system card should be revisited in detail when the alignment/safety cluster warrants expansion.

**2026-04-09** - The OpenBSD SACK bug (27 years, found by Mythos) and the FFmpeg H.264 bug (16 years, survived 5 million fuzzer runs) are the sharpest evidence that LLM reasoning is qualitatively different from fuzzing. Fuzzers explore execution paths; LLMs read and understand code semantics. This validates the distinction Carlini drew in the earlier 0-Days report but with far more dramatic examples.

**2026-03-30** - The "Ledger" concept from the Thoughtworks retreat and Foundation Capital's "decision traces as first-class data" thesis converge on the same insight: the reasoning connecting data to action has never been treated as data. Extends the judgment memory cluster into a broader claim about capturing all agent decision traces as searchable precedent. The "two clocks" framing (state clock vs. event clock) is the sharpest articulation. No vendor-neutral primary source exists yet. The "context graph" term is under active semantic diffusion.

**2026-03-23** - Appleton's Enlightenment essay inverts the cognitive offloading cluster: AI as critical thinking partner rather than cognitive surrogate.
