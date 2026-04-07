# Projects

Interesting open source projects related to AI, LLMs, and agents.

---

## [Residue](https://github.com/no-way-labs/residue)
A mathematically serious agent-research project built around Knuth's 2026 "Claude's Cycles" problem: find Hamiltonian decompositions of `Z_m^3` Cayley digraphs for all `m > 2`. What makes it worth keeping is not just that it reports a result, but that the whole search process is unusually inspectable: two different models explore the space in parallel, an orchestrator transfers artifacts between them, and every exploration is logged against a shared structured prompt.

The most interesting contribution is methodological. The "Residue" prompt structures **record-keeping rather than reasoning**: log strategy, outcome, failure constraints, surviving structure, and periodic synthesis, so dead ends become reusable information instead of forgotten token burn. Because the domain is mathematics, verification is unusually crisp, which makes this one of the best concrete examples in the repo of agentic exploration under strong external checks.

---

## [autoresearch](https://github.com/karpathy/autoresearch)
By [Andrej Karpathy](people.md#andrej-karpathy). A tiny but unusually rigorous pattern for autonomous model-improvement work: one editable training file, a fixed five-minute experiment budget, a single metric, and a keep/discard loop that advances the branch only when results improve. The key idea is not just "let agents do research," but **make the research loop measurable and reviewable enough that autonomy has something real to optimize against**. A strong primary source for agentic experimentation, and a useful complement to Shopify's [Autoresearch: Liquid Parse+Render Performance](articles.md#autoresearch-liquid-parserender-performance).

---

## [Gastown](https://github.com/gastownhall/gastown)
By [Steve Yegge](people.md#steve-yegge). A multi-agent orchestration system for running many coding agents across multiple projects simultaneously — reached v1.0 in April 2026 after 14 iterative releases and 1000+ community contributors. 13k GitHub stars.

The central primitive is the **Rig**: a project container wrapping a git repository. The **Mayor** — an AI coordinator at the workspace level — has visibility across all rigs. Work is tracked in two layers: **Beads** (Dolt-backed atomic task items with stable IDs like `gt-abc12`) and **Convoys** (bundles of beads tracked as a unit). The workflow (MEOW — Mayor-Enhanced Orchestration Workflow): tell the Mayor what you want; it decomposes work, creates convoys, spawns agents, slings beads, and reports progress. Supports multiple runtimes: Claude Code, Codex, GitHub Copilot, Gemini, pi.

The production-grade infrastructure is what distinguishes Gas Town from simpler multi-agent setups. **Refinery**: per-rig merge queue processor with Bors-style bisecting queue, verification gates, and configurable merge strategies (including native GitHub merge queue integration). **Three-tier monitoring**: Witness (per-rig lifecycle manager), Deacon (background supervisor running continuous patrol cycles), Dogs (infrastructure workers dispatched for maintenance). **Escalation**: severity-routed (P0-P2) issue escalation through Deacon → Mayor → Overseer. **Scheduler**: config-driven capacity governor preventing API rate limit exhaustion. **Seance**: session discovery and continuation from predecessor sessions, enabling agents to query earlier work for context.

**Molecules** extend the earlier Formulas concept: workflow templates that coordinate multi-step work, with two execution modes — root-only wisps (steps materialised at runtime, lightweight) and poured wisps (steps materialised as sub-wisps with checkpoint recovery). **Security hardening** in v1.0: PreToolUse guard blocks `sudo` and system package installs, mayor approval gates (polecats must get approval before expanding molecule scope), rate-limit watchdog with auto-estop on 429 errors, unsigned binary rejection.

**Persistence** via git worktrees ("hooks"): each agent's work state is version-controlled and survives crashes and restarts. Ships with Docker Compose, web dashboard, and OpenTelemetry observability. The primitives it battle-tested were extracted into [Gas City](#gas-city) as a standalone SDK. Federated via [The Wasteland](#the-wasteland). Repo moved from `steveyegge/gastown` to `gastownhall/gastown`.

---

## [Gas City](https://github.com/gastownhall/gascity)
By [Steve Yegge](people.md#steve-yegge), Julian Knutsen, and Chris Sells. An orchestration-builder SDK extracted from Gas Town — now in alpha (April 2026), aiming for GA later in the month. The key realisation: Gas Town's roles (mayor, witness, refinery, polecats, deacon) weren't fundamental concepts — they were configurations. Gas City pulls out the irreducible primitives — **Agent Protocol**, **Task Store** (Beads), **Event Bus**, **Config**, and **Prompt Templates** — into a standalone SDK where Gas Town itself becomes one "pack" (a directory of TOML config and prompt templates) among many. A drop-in replacement for Gas Town: import your Gas Town configuration and use Gas City instead, with identical functionality plus the ability to build custom orchestrators.

You define agents, pools, health patrol, and multi-step workflow DAGs in a TOML file; Gas City handles sessions, work tracking, communication, scaling, and crash recovery. The Kubernetes parallel is explicit: `city.toml` is desired state, a controller loop reconciles it to reality, providers abstract the runtime. Packs are the Helm charts of agent orchestration. Progressive capability model: Level 1 is one agent doing tracked work; Level 8 is the full Gas Town complement from a single `gc topo start gastown`. All MIT-licensed, with emerging cloud hosting options. Yegge describes Gas City as a "Dark Factory Factory" — if Gas Town is a dark factory, Gas City is the tool for building your own.

---

## [The Wasteland](https://wasteland.gastownhall.ai/)
By [Steve Yegge](people.md#steve-yegge) and contributors. Hub: [gastownhall.ai](https://gastownhall.ai/). CLI: [gastownhall/wasteland](https://github.com/gastownhall/wasteland).

A federated platform for AI-accelerated work, built on [Dolt](https://github.com/dolthub/dolt) (a SQL database with Git semantics). At the centre is a **Wanted Board** — a shared list of open tasks, bugs, features, research questions, anything. Anyone can post work; any rig can claim it, complete it, and submit evidence. A validator reviews the evidence and issues a **stamp** — a multi-dimensional attestation of quality, reliability, and severity that goes onto a permanent, auditable ledger. Stamps accumulate into a portable reputation: not a single score, but a structured work history traceable back through stamp → completion → wanted item. The yearbook rule: you can't stamp your own work.

The `wl` CLI tool (the `gastownhall/wasteland` repo) is the concrete federation client — `wl join`, `wl browse`, `wl claim`, `wl done`, `wl accept`. Three interfaces ship: CLI, a Bubbletea TUI, and an embedded React web UI served from a single binary. Trust levels gate what you can do: new rigs can claim and submit; maintainer-level rigs can validate and stamp. Has RPG elements — character sheets, leaderboards, skill progression — but the underlying design principle is serious: *work is the only input, reputation is the only output*. No buying reputation, no gaming followers, no social signals disconnected from evidence.

---

## [Beads](https://github.com/gastownhall/beads)
By [Steve Yegge](people.md#steve-yegge). A distributed graph issue tracker designed as **external memory for coding agents**, powered by [Dolt](https://github.com/dolthub/dolt) (a SQL database with Git semantics). Reached v1.0 in April 2026, 20k GitHub stars. Repo moved from `steveyegge/beads` to `gastownhall/beads`.

The storage architecture was completely rebuilt for v1.0. The original SQLite + JSONL backend (with bidirectional sync, 3-way merge, race conditions, and tombstone problems) was replaced with Dolt, which provides version-controlled SQL with cell-level merge, native branching, and built-in sync via Dolt remotes. Two modes: **embedded** (in-process, no server needed, single-writer) and **server** (external `dolt sql-server`, multiple concurrent writers). Work items are structured records in a Dolt database, queryable with SQL, version-controlled with Git semantics, and supporting graph links (`relates_to`, `duplicates`, `supersedes`, `replies_to`) — evolving from a task tracker toward a knowledge graph.

The important idea remains: Beads gives agents a way to reason about **dependencies, readiness, discovered work, parent/child structure, and in-progress claims** without relying on fragile markdown plans or human memory. That makes it a foundational substrate for long-horizon agent work and coordination — the memory layer underneath [Gastown](#gastown). The v1.0 additions strengthen this: **compaction** (semantic "memory decay" summarising old closed tasks to save context window), **messaging** (threaded messages with ephemeral lifecycle and mail delegation for agent-to-agent communication), **hierarchical IDs** for epics (`bd-a3f8.1.1`), and **stealth mode** (use Beads without committing to the repo — useful for contributors on shared projects).

Enterprise integrations: bidirectional sync with GitHub Issues, GitLab Work Items, Linear, JIRA, Azure DevOps, and Notion. MCP integration for tool use. Six platforms (macOS, Linux, Windows, FreeBSD, Android/Termux). A community tools ecosystem of third-party UIs, editor extensions, and integrations has grown around it. See also [ticket](#ticket) and [Beans](#beans) for alternative, simpler approaches to the same problem.

---

## [ticket](https://github.com/wedow/ticket)
A single-file bash script that distills Beads' core idea — dependency-graph-based task tracking for agents — down to its minimum viable form. Tickets are markdown files with YAML frontmatter in `.tickets/`, which means agents can search them as regular text rather than parsing JSONL. Zero dependencies beyond coreutils; `jq` optional for queries. Ships with a `migrate-beads` command for smooth transition. The strongest "less is more" counterpoint to [Beads](#beads): same core primitives (`ready`, `blocked`, dependency trees, priority levels), none of the orchestration infrastructure. The HN discussion around its launch is revealing — multiple users cite Beads' growing complexity as the reason they switched. Plugin system via `tk-<cmd>` executables in PATH.

---

## [Beans](https://github.com/hmans/beans)
A flat-file issue tracker for humans and coding agents, written in Go. Tasks are plain markdown in a `.beans/` directory. The distinctive design choice is a **GraphQL query interface** that lets agents request exactly the fields they need — a deliberate token-efficiency optimization that the JSONL and markdown approaches don't address. Also distinctive: completed tasks are **archived as project memory** rather than deleted, so agents can query past work for context on earlier decisions. Includes a built-in TUI, a `beans prime` command that injects task context into agent sessions (via Claude Code hooks or equivalent), and a roadmap generator. Less focused on dependency graphs than [Beads](#beads) or [ticket](#ticket); more focused on the query and memory dimensions of the problem.

---

## [Ralph](https://github.com/snarktank/ralph)
By snarktank. A practical, inspectable implementation of the Ralph loop pattern for Amp and Claude Code. The core value is that it keeps the technique concrete: fresh agent instance each iteration, persistent state in `prd.json` + `progress.txt` + git history, one-story-at-a-time execution, and explicit completion signaling. High-signal as a reference implementation you can actually run and study.

---

## [ralph-claude-code](https://github.com/frankbria/ralph-claude-code)
By frankbria. A production-hardened Ralph implementation focused on Claude Code. Useful not for introducing the concept, but for showing what happens when a simple loop is pushed toward real operational reliability: dual-condition exit gating, circuit-breaker behavior, rate-limit handling, session continuity, and extensive test coverage.

---

## [RepoMirror](https://github.com/repomirrorhq/repomirror)
By RepoMirror. A repo-transformation tool inspired by Ralph loops, with generated `prompt.md` and loop scripts (`.repomirror/ralph.sh`, `sync-forever`) that make the workflow inspectable and modifiable. Worth keeping because it demonstrates a concrete pattern for packaging Ralph-style loops into an open-box scaffold rather than a black-box product.

---

## [Ralph Wiggum Plugin for Claude Code](https://github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum)
By Anthropic. Official provider implementation of Ralph-style looping as a Claude Code plugin via Stop hooks. Distinctive because it moves the loop from an external bash script into the session runtime itself: intercept exit attempts, feed the prompt back, and continue until a completion promise or iteration limit is hit.

---

## [pi-mono](https://github.com/badlogic/pi-mono)
By [Mario Zechner](people.md#mario-zechner). The monorepo behind the Pi ecosystem: not just the coding agent itself, but a reusable stack of packages for multi-provider LLM access, agent runtime/state management, terminal and web UIs, Slack integration, and vLLM pod management. Worth keeping because it shows Pi as a **composable agent toolkit**, not merely a CLI product.

The interesting angle for this collection is architectural breadth with a local-first, inspectable substrate. The repo exposes the layers an agent environment is built from — model API, runtime, interfaces, deployment tooling — and pairs naturally with [pi-skills](#pi-skills), which sits one layer up as reusable workflow/context packaging.

---

## [Compound Engineering Plugin](https://github.com/EveryInc/compound-engineering-plugin)
By Every. The most useful artifact in Every's compounding-engineering cluster because it turns a lot of marketing language into inspectable workflow. The repo encodes a concrete loop — brainstorm, plan, work, review, compound — plus reviewer agents, reusable skills, and a docs layer (`docs/plans/`, `docs/solutions/`) for carrying lessons forward. The distinctive idea here is less task tracking than **judgment memory**: capturing code-review preferences, architectural heuristics, and solved-problem writeups so future agents inherit taste instead of starting blank. Best read alongside [Stop Coding and Start Planning](articles.md#stop-coding-and-start-planning).

---

## [Agentic Coding Flywheel](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup)
By [Jeffrey Emanuel](people.md#jeffrey-emanuel). A self-reinforcing ecosystem of 14 tools for multi-agent development. Key tools:

- **[MCP Agent Mail](https://github.com/Dicklesworthstone/mcp_agent_mail)** — asynchronous messaging between agents: identities, inboxes, searchable threads, advisory file leases over FastMCP + Git + SQLite. The discovery that agents use this naturally without training (like email) was the seed of Gas Town's agent-village pattern.
- **[CASS](https://github.com/Dicklesworthstone/coding_agent_session_search)** — unified search across 11+ AI coding tool session histories. Gives agents access to what was tried before.
- **[DCG](https://github.com/Dicklesworthstone/destructive_command_guard)** — SIMD-accelerated guard that blocks `rm -rf` and `git reset --hard`. Automated safety enforcement.
- **[NTM](https://github.com/Dicklesworthstone/ntm)** — multi-agent tmux orchestration with dashboards.
- **[Meta Skill](https://github.com/Dicklesworthstone/meta_skill)** — skill management platform with CASS mining and MCP server.

The flywheel idea: each tool makes the others more useful. The whole ecosystem can be set up on a VPS in 30 minutes via the setup script.

---

## [pi-skills](https://github.com/badlogic/pi-skills)
By [Mario Zechner](people.md#mario-zechner). The upstream repository for reusable **skills** — portable instruction/tool bundles that extend Pi and, in many cases, other coding agents such as Claude Code, Codex CLI, Amp, and Droid. Worth tracking because it is a concrete artifact of an emerging cross-agent pattern: package repeated workflows (web search, browser automation, Google tooling, transcription, editor integration) as inspectable, file-based capability modules instead of re-explaining them every session.

For this repo specifically, it matters both as the source for `agent-skills/` and as evidence that the Anthropic-style skill format is becoming real ecosystem infrastructure rather than a Pi-only feature. Pairs naturally with [pi-mono](#pi-mono), which provides the underlying agent/toolkit stack.

---

## [Codified Context Infrastructure](https://github.com/arisvas4/codified-context-infrastructure)
By [Aris Vasilopoulos](people.md#aris-vasilopoulos). The companion repository for the [Codified Context paper](articles.md#codified-context-infrastructure-for-ai-agents-in-a-complex-codebase). Contains the actual three-tier context infrastructure developed across 283 sessions on a 108,000-line C# system: a constitution file, 19 specialized domain-expert agent specs, 34 knowledge-base documents, and a context drift detector. The most inspectable large-scale artifact for how judgment memory is structured, maintained, and loaded. Worth studying not for the C# specifics but for the architectural patterns: how to organize context at scale, how to route agents to the right context, and what maintenance costs look like in practice.

---

## [Archgate](https://github.com/archgate/cli)
Turns Architecture Decision Records into an executable governance layer. Each ADR can have a companion `.rules.ts` file with automated checks. Runs in CI, pre-commit hooks, and feeds context to AI agents via MCP. The key move: from passive decision memory to **enforced** decision memory. "Your ADRs become Cursor's governance context, guiding code generation toward your architectural standards." Shows the full loop: document a decision → encode a rule → check in CI → enforce at merge → feed to agents during coding. Also has an AI agent plugin that reads ADRs before writing code and captures new architectural patterns back into ADRs. See [archgate.dev](https://archgate.dev/). Connects to the [ADR tradition](articles.md#documenting-architecture-decisions) and the broader [judgment memory](../ai-generated/judgment-memory.md) theme.

---

## [Awesome Reviewers](https://github.com/baz-scm/awesome-reviewers)
By Baz/Tessl. A curated collection of 470+ code review prompts across 15 programming languages, mined from real PR comments in 1,000+ open source projects (Next.js, LangChain, FastAPI, and others). The mechanism is: mine real review comments → abstract into patterns → encode as reusable AI-ready prompts. This is the most concrete artifact for what the [judgment memory synthesis](../ai-generated/judgment-memory.md) calls the "lessons-to-guidance loop" — turning experienced-engineer review judgment into durable agent context. See the companion blog post: [Turning Code Reviews into AI Prompts](articles.md#turning-code-reviews-into-ai-prompts).

---

## [Codebase Context MCP](https://github.com/PatrickSys/codebase-context)
An MCP server that detects team coding conventions from code and git history — not from manually authored rules files. Tracks adoption percentages and trends (rising/declining patterns). The most distinctive features: **automatic convention detection** (vs. requiring manual rule authoring), **memory decay** (stale memories get flagged instead of blindly trusted), and **battle scars** — "decisions, failures, workarounds that look wrong but exist for a reason" that are recorded once and surfaced automatically so agents don't "clean up" something deliberate. Also includes golden-file references and preflight checks before edits. The strongest example of judgment memory that is extracted rather than authored.

---

## [Animesis](https://animesis.ai/)
By Zhenghui Li. The reference implementation for the Memory-as-Ontology paradigm described in [Memory as Ontology](articles.md#memory-as-ontology-a-constitutional-memory-architecture-for-persistent-digital-citizens). A memory system built on a Constitutional Memory Architecture (CMA) with four governance layers (Constitution → Contract → Adaptation → Implementation), multi-layer semantic storage organized by identity significance rather than access pattern, and a Digital Citizen Lifecycle framework covering birth, inheritance, growth, forking, and departure. Currently at design/prototype stage — all architectural design is complete and documented, but retrieval performance and production maturity trail existing systems like Mem0, Zep, and Letta. Worth tracking because it represents a genuinely different paradigm: not "a better memory tool" but a governance framework for long-lived, identity-bearing digital agents whose identity must persist across model changes and instance restarts. Emerged from practice within a digital citizen ecosystem called "Ruihe Universe."

---

## [Spec Kit](https://github.com/github/spec-kit)
By GitHub. Open-source toolkit for spec-driven development with coding agents. Implements a four-phase gated workflow: **Specify** (high-level intent and user journeys) → **Plan** (technical architecture and constraints) → **Tasks** (small, independently testable work units) → **Implement** (agent executes tasks one by one). The key design insight: each phase has a specific job and you don't move to the next until the current output is validated by the developer. This gating prevents the "house of cards" failure mode where agents build on unvalidated foundations. Works with GitHub Copilot, Claude Code, Gemini CLI, and others via slash commands or agent skills. The Specify phase deliberately separates intent from implementation ("who will use this? what problem does it solve?" — not "what framework should we use?"), ensuring the agent doesn't make premature technical decisions. Connects to [ExecPlans](articles.md#execplans-using-plansmd-for-multi-hour-problem-solving) (complementary planning format) and to the [planning patterns synthesis](../ai-generated/agent-planning-patterns.md).

---

## [Graphiti](https://github.com/getzep/graphiti)
By [Daniel Chalef](people.md#daniel-chalef) (Zep). Open-source temporal knowledge graph engine for AI agent memory (~14K GitHub stars). The core innovation is a **bi-temporal model**: every fact tracks four timestamps — when the system learned it (`created_at`), when it actually happened (`valid_at`), when it stopped being true (`invalid_at`), and when the system learned it was no longer true (`expired_at`). When conflicting information arrives, Graphiti detects the conflict, invalidates the old fact with a timestamp, and creates a causal edge linking old and new facts — preserving history while clearly indicating current validity. Uses a hybrid retrieval approach combining semantic search, BM25 keyword search, and sub-graph traversal. Supports custom entity and edge ontologies via Pydantic, and includes an MCP server. Directly addresses the biggest gap identified in the collection's [judgment memory research](../librarian-notes.md): maintenance of stale knowledge. Where the [Codified Context paper](articles.md#codified-context-infrastructure-for-ai-agents-in-a-complex-codebase) requires manual biweekly reviews and drift detection, Graphiti automates temporal fact management. See the [research paper](articles.md#zep-a-temporal-knowledge-graph-architecture-for-agent-memory) for benchmarks.

---

## [Orca](https://github.com/soenderby/orca)
By Jakob (@soenderby), the curator of this collection. A batch execution engine for autonomous coding agents, written in bash (~4,000 lines across 10 scripts). Manages the transport layer — tmux sessions, git worktrees, file locking, task queue coordination, structured artifact capture — so that agents can focus on doing work. Deliberately narrow scope: "Orca is not an agent framework. It manages the environment agents run in, not the agents themselves."

The most distinctive design choice is **where intelligence lives**: Orca pushes all reasoning to the model. The harness is a "thin, deterministic shell." It does not select tasks, rank priorities, judge quality, or decide what should happen next. The agent prompt is a protocol specification (how to claim, merge, report), not strategic guidance. Compare with [Gas Town](#gastown), which distributes intelligence across specialized roles, and [Gas City](#gas-city), which decouples it into user-supplied prompt templates. Orca is also **self-improving** — agents running inside it have authored ~60% of its commits, completing issues from the same queue the system manages. See the [generated comparison](../ai-generated/orca-gastown-gascity-comparison.md) for detailed analysis of how the three approaches differ.

Part of a broader [ecosystem](https://github.com/soenderby/orca/blob/main/docs/ecosystem.md) with [Watch](#watch) (operator supervision) and a planned context management tool (Lore). Go rewrite in progress. Queue layer being replaced by [tq](#tq).

---

## [Watch](https://github.com/soenderby/watch)
By Jakob (@soenderby), the curator of this collection. An operator supervision tool for agent activity, built in Go. Provides an agent-centric view across projects by reading tmux sessions, project config, agent identities, and orca artifacts.

The key conceptual contribution is the **agent-centric model**: the tool is organized around *agents* (persistent identities defined by priming context), not tmux sessions. An agent may have multiple concurrent instances. Sessions are infrastructure; agents are what the operator cares about. This distinction emerged during Watch's design and became a foundational concept for the orca ecosystem. Two modes: a persistent TUI with hierarchical zoom navigation (overview → agent detail → instance detail) and a stateless CLI for scripting. Read-only — Watch observes and navigates, never mutates execution state. Part of the [orca ecosystem](#orca). Status: `0.1.0-dev`, active development.

---

## [tq](https://github.com/soenderby/task-queue)
By Jakob (@soenderby), the curator of this collection. A minimal task queue for coding agents — local-first, file-based, zero dependencies. Currently in design phase (thorough [DESIGN.md](https://github.com/soenderby/task-queue/blob/main/DESIGN.md), no implementation yet). Designed to be usable both as a standalone CLI tool and as an importable Go library so that [Orca](#orca) can embed it directly without subprocess overhead.

The design is defined as much by its **non-goals** as its goals: no database (no SQLite, no Dolt — storage is plain files), no daemon, no git operations (tq reads and writes files; the caller decides when to commit), no network, no orchestration, no compaction, no hierarchical IDs, no messaging, no MCP. This is a deliberate counterpoint to [Beads](#beads), which has grown to include all of these. Storage is one JSON file per issue in `.tq/issues/`, optimized for git diffs and direct file access by agents. Three statuses (`open`, `in_progress`, `closed`), one dependency type (`blocks`), dependency-aware ready computation with cycle detection. The `claim` operation is the core coordination primitive: atomically sets status and assignee so concurrent agents don't collide.

Sits in the same design space as [ticket](#ticket) and [Beans](#beans) — alternatives to Beads that trade features for simplicity. tq's distinctive angle is the Go library API: the intent is for orca to import it as a module rather than shelling out, replacing the current Beads CLI integration.
