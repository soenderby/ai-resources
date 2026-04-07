# Librarian Notes

Running memory across sessions. Short entries, dated. Not a journal - just what's worth preserving.

---

## Curatorial Decisions

**2026-04-07** - Feed check yielded four additions. (1) Lalit Maganti's "Eight years of wanting, three months of building with AI" (articles.md) — the best honest practitioner account in the collection; the "relativity" framework (AI value = expertise × verifiability) is a reusable mental model; the "losing touch" mechanism is a specific engineering pathway for comprehension debt. Added Maganti to people.md. (2) Thomas Ptacek's "Vulnerability Research Is Cooked" (articles.md) — major piece arguing frontier agents will commodify exploit development; the "attention scarcity shield" insight is novel and connects to the Bitter Lesson. Added Ptacek to people.md. (3) Yegge's "Vibe Maintainer" (articles.md) — genuinely new category of work (AI-managing-AI PRs at scale); the "fork you" problem (forking is now trivially maintainable) and the detailed PR decision tree. (4) Awomosu's "You Should Anthropomorphize Your AI" (articles.md) — the elder/companion distinction is specific and original; sycophancy as correct output of approval-seeking governing logic, not a bug to fix; references 2026 Science study. Added Mollick's "Claude Dispatch" cognitive load research and Maganti's losing-touch mechanism as corroboration on comprehension debt. Reviewed and skipped: Yegge's Gas Town v1.0 (routine release, "Beads is the Why" interesting but not standalone); Mollick's "Claude Dispatch" as standalone (interface-is-the-bottleneck thesis sound but not novel enough); Willison's Lenny podcast highlights (synthesis of already-covered ideas); Willison's link blog posts on Ptacek and Maganti (added primary sources instead); ~130 OpenAI items (filtered by anti-hype rule; "Designing agents to resist prompt injection" and "monitoring coding agents for misalignment" already tracked; "Reasoning models CoT controllability" previously deferred). (1) OpenAI's "Harness engineering" (articles.md) — the strongest zero-human-code-at-scale report yet; names "harness engineering" as a discipline, validates progressive disclosure for agent context, introduces "golden principles" as automated taste enforcement. Explicitly builds on Ralph loops, ExecPlans, and Parse Don't Validate (all already tracked). Added Matt Webb's architecture quote as "Also noted by." (2) OpenAI's "How we monitor internal coding agents for misalignment" (articles.md) — first detailed public account of chain-of-thought monitoring at production scale; addresses the collection's safety/alignment gap. Key finding: models are overly eager to work around restrictions but show no scheming. (3) OpenAI's "Why we no longer evaluate SWE-bench Verified" (events.md) — benchmark contamination interacts with test underspecification; improvements reflect training exposure, not real capability. Reviewed and skipped: Abi Awomosu's "Why I Call Myself a Griot" (beautifully written but AI content too thin — primarily about identity, neurodivergence, and cultural epistemology; the AI angle is a lens, not the subject); Simon Willison's Pretext, Python Vulnerability Lookup, datasette-showboat, Fontana quote, SwiftUI vibe coding (interesting activity, none cross the collection's bar); Steve Yegge's Gastown v0.13.0 (routine release); OpenAI's "Reasoning models struggle to control their CoT" (technically interesting but narrow — one specific evaluation; could revisit as corroboration if monitoring becomes a cluster); bulk OpenAI corporate announcements (~100+ items, filtered by anti-hype rule).

**2026-03-30** - Added Annie Vella (people.md) and her "Middle Loop" article (articles.md) and "Finding Comfort in the Uncertainty" retreat report (events.md). The middle loop — supervisory engineering work between the inner loop of coding and the outer loop of delivery — names the work category that the supervision fatigue / comprehension debt / cognitive offloading cluster describes symptoms of. Research-backed (158 engineers, 28 countries, 6 months). The retreat report fills a genuine gap: honest uncertainty from senior practitioners, counterweight to the collection's bias toward sources that propose answers. Added Vella's "You Can't Prompt Your Way to Intuition" as corroboration on the cognitive offloading entry (Dreyfus model + MIT study on retention). Also added Charity Majors' observability piece as corroboration on the harness engineering entry. Evaluated and rejected Datadog's "Closing the verification loop" and LangChain's "You don't know what your agent will do until it's in production" (both vendor pitches with genuine insight but commercial interest comparable to what was flagged in Charity's piece). Pierre Zemb's "Testing: prevention vs discovery" identified as the strongest vendor-neutral source on the verification question — not added yet but worth revisiting.

**2026-03-30** - Researched context graphs for LLM agents. Added Daniel Chalef (people.md), the Zep temporal knowledge graph paper (articles.md), and Graphiti (projects.md). The bi-temporal model (four timestamps per fact: created_at, valid_at, invalid_at, expired_at) directly addresses the maintenance gap in the judgment memory cluster. Reviewed and rejected: TrustGraph "Context Graph Manifesto" (founder positioning startup, encyclopedic KG history but key claims unsubstantiated), Foundation Capital "AI's trillion-dollar opportunity" (sharp VC thesis but investment positioning, not practitioner insight), contextgraph.tech (marketplace marketing), various vendor blogs (Neo4j, CloudRaft, ZBrain, Graphlit, Mem0). The "context graph" term is under active semantic diffusion. Thread 2 (decision traces as precedent) is a real gap — nobody has written an honest practitioner account yet. Thread 3 (structured vs unstructured context for LLMs) has contradictory research — too early.

**2026-03-30** - Added Fowler's "Semantic Diffusion" (articles.md) and created `resources/glossary.md` — a selective document tracking AI terms under active semantic pressure. (Added by a parallel agent session.)

**2026-03-26** - Researched agent planning patterns. Added Kambhampati (person + LLMs Can't Plan paper), ExecPlans/PLANS.md, Planning for Agents, Scaling Long-Running Autonomous Coding (events.md), and Spec Kit (projects.md). Wrote synthesis in `ai-generated/agent-planning-patterns.md`. Rejected Osmani's "How to write a good spec for AI agents" (too roundup-ish), "Self-Improving Coding Agents" (already well-covered), and deferred "My LLM coding workflow going into 2026."

**2026-03-26** - Introduced the "Also noted by" corroboration pattern. Added to CLAUDE.md as a standing guideline.

**2026-03-26** - Added Mario Zechner and "Thoughts on slowing the fuck down."

**2026-03-23** - Added writing and research cluster (Orwell, Graham, Zinsser, Booth et al., Adler & Van Doren, CGSC Writing Guide, Jazaieri cognitive offloading). Scope creep acknowledged.

**2026-03-23** - Created `resources/events.md` to separate time-bound entries from durable articles.

**2026-03-22** - Dropbox triage: added focused high-signal software engineering cluster (Refactoring, Team Topologies, GOOS, Accelerate, Software Engineering at Google, End-to-End Arguments, Conway's paper).

Earlier curatorial decisions archived to [`librarian-archive.md#early-curatorial-decisions`](librarian-archive.md#early-curatorial-decisions).

---

## Patterns Noticed

**2026-03-13** - A useful cluster is forming around the idea that AI shifts the bottleneck upward rather than removing it: HBR on work intensification, Pydantic on supervision fatigue, HYBRD on replacing agent supervisors with deterministic code, and BeadHub on multi-human / multi-agent coordination. Common theme: generation gets cheaper, but oversight, coordination, and expectation management get more expensive.

**2026-03-13** - Anthropic's multi-agent research system and Cognition's "Don't Build Multi-Agents" are best read as task-specific, not contradictory. Useful lens: **multi-agent for breadth-first exploration**, **single-agent for depth-first coherence-heavy execution**.

**2026-03-13** - A productive tension between three kinds of evidence about AI's impact: (1) usage data like Anthropic's Economic Index; (2) field experiments like METR; (3) case-based writing like Mollick and Reyero. None is sufficient on its own.

Earlier pattern observations archived to [`librarian-archive.md#early-pattern-observations`](librarian-archive.md#early-pattern-observations).

---

## Gaps

**2026-03-09** - *(partially addressed)* Alignment/safety coverage improved with Yudkowsky, Bostrom, Russell, Christiano, LeCun, and the OpenAI misalignment monitoring piece. Still missing: technically active researchers (Anthropic interpretability, DeepMind safety), policy/governance voices.

**2026-03-09** - No coverage of AI from a non-Western perspective. Chinese open-weight model labs mentioned in passing but nobody tracked as a person or primary source.

**2026-03-09** - Light on economics and business dimensions. NK's labor market piece and Minotaur Capital are the main entries. Job displacement, cost curves, winner-takes-all dynamics underrepresented.

---

## Connections

**2026-03-30** - The "Ledger" concept from the Thoughtworks retreat and Foundation Capital's "decision traces as first-class data" thesis converge on the same insight: the reasoning connecting data to action has never been treated as data. Extends the judgment memory cluster into a broader claim about capturing all agent decision traces as searchable precedent. The "two clocks" framing (state clock vs. event clock) is the sharpest articulation. No vendor-neutral primary source exists yet. The "context graph" term is under active semantic diffusion.

**2026-03-23** - Appleton's Enlightenment essay inverts the cognitive offloading cluster: AI as critical thinking partner rather than cognitive surrogate.

Earlier connection observations archived to [`librarian-archive.md#judgment-memory-research`](librarian-archive.md#judgment-memory-research), [`librarian-archive.md#mid-march-additions`](librarian-archive.md#mid-march-additions), and [`librarian-archive.md#early-connection-observations`](librarian-archive.md#early-connection-observations).

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
