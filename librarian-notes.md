# Librarian Notes

Running memory across sessions. Short entries, dated. Not a journal - just what's worth preserving.

---

## Curatorial Decisions

**2026-05-28** - Feed check triage. Added Osmani's "The Orchestration Tax is You" (articles.md) — the GIL metaphor and Amdahl's Law applied to cognitive bandwidth when orchestrating multiple agents is a genuinely original engineering framing of the bottleneck-shifting pattern. You are the serial processor in a concurrent system; spawning more agents does not spawn more of you; throughput equals review rate. Extends cognitive surrender (surrender as pressure-relief valve when orchestration tax exceeds capacity) and comprehension debt (unpaid tax → stale mental models). Added Mollick's "Choosing to Stay Human" (articles.md) — the Turkey/Taipei contrast is the clearest empirical demonstration in the collection that AI design, not AI capability, determines whether the technology helps or harms learning. Same technology, different design (answer-giving vs. challenge-personalising), opposite outcomes. The BCG experiment is now formally published. Both pieces strengthen the cognitive cluster which is now very well-covered.

Reviewed and skipped: Awomosu's "Vatican Washing" and "Gen Z Already Knows How Those End" (continue the empire framework at its outer reaches — provocative but outside the collection's center, same pattern as previous session); ~100 OpenAI corporate/product items (massive Codex marketing push, GPT-5.5 launch, partnership announcements — no new structural insight beyond what's already tracked); Anthropic acquires Stainless (corporate MCP tooling acquisition, no insight); ~30 Willison posts (releases for datasette-agent-charts, llm-gemini, datasette-llm; Google I/O commentary; linkblog — nothing crossing the bar); Kambhampati (no new writing, ScienceNews quote reinforces existing "reasoning is an illusion" position); Raschka (LLM Architecture Gallery and KV sharing technical deep-dive — good reference material but roundup/tutorial, not framework or insight).

Noted but not added: Anthropic Institute focus areas research agenda (May 7, 2026) — has some sharp framings worth tracking: "the professional pipeline" question (if AI absorbs junior roles that train future senior practitioners, how do people become experts?), "group epistemology" (what happens when a large population consults the same few models?), "can AI diffusion be modulated?" (central bank analogy for controlling deployment rate). These are questions, not answers — institutional research agenda, not research results. Revisit when they publish findings.

**2026-05-19** - Deep dive on Hermes Agent (NousResearch/hermes-agent). Added Hermes Agent (projects.md), Honcho (projects.md), agentskills.io (projects.md), and Teknium (people.md). Updated Hermes entry with detailed architectural findings from code-level research. Key conceptual findings:

*Background isolation review* — the most genuinely novel pattern: fork a sub-agent post-delivery with a constrained tool whitelist (only `skill_manage` and `memory`), feed it the conversation snapshot, let it write/patch skills and memory, then discard the fork. Self-improvement decoupled from task execution through three separations: temporal (after delivery), process (daemon thread), agency (constrained sub-agent). Not tracked as a standalone article because no one has written about it as a named pattern yet — it's visible only in the codebase and docs.

*Prompt stability* — named design principle: freeze system prompt at session start, never mutate mid-conversation, to preserve Anthropic prefix cache hits. Memory writes persist to disk immediately but don't appear in system prompt until next session. Non-obvious constraint worth knowing about — violating it is an easy mistake. Distinct from context rot (conversation history degradation) — this is about the system prompt layer specifically.

*Progressive disclosure for skills (agentskills.io)* — three-tier token-efficiency pattern: (1) compact index always in context (~100 tokens/skill), (2) full SKILL.md loaded on-demand via tool call, (3) reference files deferred to a second tool call. This is now a cross-industry standard with ~35+ adopters.

*Dialectic user modeling (Honcho)* — generative multi-pass LLM synthesis of user representations, fundamentally different from graph retrieval (Graphiti) or vector search. The three-pass structure (cold/warm → self-audit → reconciliation) maps loosely onto Hegelian thesis/antithesis/synthesis. Attributed to Plastic Labs, not to Hermes.

*Pi vs. Hermes as philosophical poles* — the collection now has both ends of the personal AI agent design spectrum: Pi's minimal core (4 tools, self-extension, simplicity) vs. Hermes's maximalist approach (70+ tools, 28 toolsets, 8 memory providers, 20 adapters). Neither is obviously right. Pi trusts the agent to extend itself; Hermes pre-builds the extensions and trusts the agent to select from them. The agentskills.io standard bridges both — it's the portable format both use.

Reviewed and not added: computer-use-linux (Rust MCP server for Wayland/X11 desktop control — fills a real gap but narrow); Holographic memory provider (HRR-based algebraic queries, interesting niche but too niche for standalone entry); ByteRover (pre-compression extraction hook, clever but one feature); Nous Portal (own inference endpoint, wait and see); HermesClaw (WeChat multiplexing bridge, community curiosity). Roger Jin (hjc-puro) and subtract0 identified as core contributors but no public writing footprint worth tracking. Vineeth Voruganti (Plastic Labs/Honcho) doing interesting work but limited public writing beyond docs — revisit if he publishes.

**2026-05-18** - Feed check triage. Added NK's "Database in a Trenchcoat" (articles.md) — the three-category taxonomy (experience / means-to-an-end / gatekeeper) is a genuinely original framework for which software survives AI agents. The lived accounting example (Claude completing full Danish annual report without touching SaaS UI) is sharp practitioner evidence. "We'll become the data layer" as cope — the data is portable, the agents are patient. Connects to de-SaaS thesis already noted in Gas City project entry but provides the structural framework underneath it. Added Osmani's "Don't Outsource the Learning" as corroboration on Cognitive Surrender — references the same MIT and Anthropic papers already cited, but adds one new data point: CHI 2026 study showing initial LLM anchoring degrades later decisions regardless of human effort. The "posture" framing (tool doesn't determine outcome, user orientation does) sharpens but doesn't extend the existing entry. Reviewed and skipped: Awomosu's "They Didn't Steal Your Art" and "The Medium Is Not Just the Message" (both continue the empire framework at a philosophical/cosmological register; the Monet experiment — 1000+ people critiquing a real Monet labeled AI — is a sharp data point, but the pieces overall are too far from the collection's center for standalone entries); OpenAI TanStack supply chain response (same pattern as Axios — npm malware, employee devices, cert rotation — but repetition of an established pattern, not new structural insight); ~40 OpenAI corporate/academy items; ~20 Willison linkblog posts (Datasette blog, rate limiting plugin, Shopify's River agent, Mitchell Hashimoto language fungibility, James Shore maintenance cost quote, Boris Mann "11 agents" — interesting activity, none cross the bar); Geoffrey Huntley (Australian gov policy, off-topic); Harper Reed (photography).

**2026-05-04** - Agent memory landscape research. Wrote `ai-generated/agent-memory-landscape.md` — a critical survey of 16 tools and one architectural pattern for agent memory. Key contributions: a four-jobs taxonomy (personalization, task, institutional, context) that maps to but refines the Hu et al. ICLR 2026 academic taxonomy; benchmark critique (LoCoMo and LongMemEval have known flaws, and no benchmark tests task improvement); the finding that plain files set a high baseline for individual developers but will not hold as agents extend to longer lifespans and non-technical users; cost dimension analysis showing LLM-call-per-write tools can exceed primary task costs at volume. Added "agent memory" to glossary.md as the 11th term under semantic diffusion. Cross-linked from articles.md (Zep, Price of Meaning, Memory-as-Ontology, Beads), projects.md (Graphiti, Beads, Animesis), and existing ai-generated syntheses (memory-for-agents.md, judgment-memory.md). New tools evaluated but not added as canonical entries: Engram (novel conflict detection, good engineering, but a tool not a source of insight — revisit if it produces practitioner writing), Letta Code (philosophically ambitious but the OS-style memory model is unproven), Mem0/Cognee/Hindsight (enterprise platforms, vendor-positioned), Redis Agent Memory Server (early, marketing-heavy). The Hu et al. "Memory in the Age of AI Agents" ICLR 2026 paper is the strongest candidate for a future canonical entry — most rigorous academic taxonomy of agent memory — but was not added this session to keep scope manageable.

Earlier curatorial decisions archived to [`librarian-archive.md`](librarian-archive.md) — see archive map for: [early curatorial decisions](#early-curatorial-decisions), [late March research](#late-march-research-sessions), [OpenClaw and cybersecurity research](#openclaw-and-cybersecurity-research), [feed check triage April–May](#feed-check-triage-april-may-2026).

---

## Patterns Noticed

**2026-03-13** - A useful cluster is forming around the idea that AI shifts the bottleneck upward rather than removing it: HBR on work intensification, Pydantic on supervision fatigue, HYBRD on replacing agent supervisors with deterministic code, and BeadHub on multi-human / multi-agent coordination. Common theme: generation gets cheaper, but oversight, coordination, and expectation management get more expensive.

**2026-03-13** - Anthropic's multi-agent research system and Cognition's "Don't Build Multi-Agents" are best read as task-specific, not contradictory. Useful lens: **multi-agent for breadth-first exploration**, **single-agent for depth-first coherence-heavy execution**.

**2026-03-13** - A productive tension between three kinds of evidence about AI's impact: (1) usage data like Anthropic's Economic Index; (2) field experiments like METR; (3) case-based writing like Mollick and Reyero. None is sufficient on its own.

Earlier pattern observations archived to [`librarian-archive.md#early-pattern-observations`](librarian-archive.md#early-pattern-observations).

---

## Gaps

**2026-03-09** - *(partially addressed)* Alignment/safety coverage improved with Yudkowsky, Bostrom, Russell, Christiano, LeCun, the OpenAI misalignment monitoring piece, and now the Mythos Preview system card (sandbox escape, evidence hiding, grader manipulation). Nicholas Carlini now tracked as the first technically active Anthropic researcher in the collection. Still missing: Anthropic interpretability team, DeepMind safety researchers, policy/governance voices.

**2026-03-09** - No coverage of AI from a non-Western perspective. Chinese open-weight model labs mentioned in passing but nobody tracked as a person or primary source.

**2026-03-09** - Light on economics and business dimensions. NK's labor market piece and Minotaur Capital are the main entries. Job displacement, cost curves, winner-takes-all dynamics underrepresented.

---

## Connections

**2026-05-28** - The cognitive cluster now has both the mechanism and the engineering model. Osmani's orchestration tax gives the bottleneck-shifting pattern a precise engineering vocabulary (GIL, Amdahl's Law, backpressure, lock contention), while Mollick's Turkey/Taipei contrast provides the clearest empirical evidence that design determines outcome. The full chain: cognitive offloading (Jazaieri — the spectrum) → cognitive surrender (Osmani/Shaw & Nave — the mechanism, 73% wrong-answer acceptance) → comprehension debt (Osmani — the output gap) → the middle loop (Vella — the work category) → orchestration tax (Osmani — the engineering model of why surrender happens under load). Mollick adds the evidence that the same technology produces opposite outcomes depending on whether it gives answers (Turkey: learning decreases) or personalises challenge (Taipei: learning increases). The cluster is now well-covered from psychological, engineering, and empirical angles.

**2026-05-11** - The cognitive cluster now has a complete causal chain: cognitive offloading (Jazaieri — the three-level spectrum) → cognitive surrender (Osmani/Shaw & Nave — the moment-to-moment mechanism, the 73% wrong-answer acceptance, the borrowed confidence) → comprehension debt (Osmani — the output gap) → the middle loop (Vella — the work category this creates). Willison's "vibe coding and agentic engineering" podcast admission (he's stopped reviewing all agent code for production) is a real-time illustration of the surrender→debt pathway. Zechner's "merchants of learned complexity" names the engineering mechanics. Maganti's "losing touch" names the feedback loop. These are all different facets of the same phenomenon, now well-covered from multiple angles.

**2026-05-11** - Mozilla's Firefox hardening piece is the first credible evidence from the *defender* side that the cybersecurity capability leap is actionable, not just threatening. The 20–30 → 423 monthly fix rate is dramatic, but equally important is the validation of defense-in-depth: frozen prototypes blocked AI-generated prototype pollution escape attempts. This confirms what the collection has been tracking from the offensive side (Ptacek, Carlini, Mythos) applies equally to defense. The evidence chain is now symmetric: AI scales both offense and defense, and the question is who adopts first. Mozilla's "we recommend getting started now" is the sharpest call-to-action in the cluster.

**2026-05-04** - The cybersecurity evidence chain now has cross-lab confirmation: UK AISI shows GPT-5.5 matching Mythos Preview on expert cyber tasks. This is no longer one lab's capability claim — it's a field-wide trend. The rust_vm challenge (10 min/$1.73 vs 12 hours human expert) may be the sharpest single data point in the collection for the AI-human capability gap. The 32-step corporate network attack completed by two different models from two different labs suggests that AI-powered cyber offense at scale is now a structural reality, not a theoretical concern.

**2026-05-04** - NK's trust piece, Osmani's agent skills, and the harness engineering cluster are converging on the same structural insight from different angles: the agent itself is not the trust boundary — the environment around it is. NK frames it as perimeter security; Osmani frames it as encoded discipline; the harness engineering entry frames it as progressive context management. The common principle: design the surroundings to survive failures, don't try to certify the agent's judgment.

**2026-05-04** - Cro's contributor poker argument is the strongest counterpoint in the collection to the "AI makes everything faster" narrative. The insight is that some workflows are valuable specifically *because* they build human relationships and institutional knowledge, not despite the time they take. This directly complicates the bottleneck-shifting pattern: AI doesn't just shift bottlenecks upward, it can dissolve the social infrastructure that makes collaborative work possible.

Earlier connection observations archived to [`librarian-archive.md`](librarian-archive.md) — see archive map for: [early connection observations](#early-connection-observations), [judgment memory research](#judgment-memory-research), [mid-March additions](#mid-march-additions), [connection observations March–April](#connection-observations-march-april-2026).

---

## Open Questions

**2026-03-09** - The Anthropic Agent Skills standard adoption. Worth tracking whether it consolidates or fractures.

**2026-03-30** - Pierre Zemb's "Testing: prevention vs discovery" — strongest vendor-neutral source on the verification question. DST + LLMs shift from prevention to discovery testing. Not added yet; revisit when the verification/harness cluster warrants expansion.

**2026-03-30** - HippoRAG (Ohio State) — neurobiologically-inspired RAG using knowledge graphs as associative index. Academic, not vendor-driven. Watch for maturity.

---

## Standing Rules

**2026-03-20** - Startup orientation: staged loading. `librarian-notes.md` + `resources/index.md` first, full files only when needed.

**2026-03-20** - Hot memory budget: roughly 10k tokens. Move theme-heavy historical detail to archive.

**2026-03-15** - For ecosystem patterns like Ralph loops, include both strongest independent implementations and at least one official provider implementation.

**2026-03-16** - Adjacent software-engineering sources in scope when they sharpen the quality bar for agent-produced code.

**2026-03-09** - Actively filtering against people who write about AI primarily to be seen rather than to share genuine learning.
