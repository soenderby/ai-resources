# Projects

Interesting open source projects related to AI, LLMs, and agents.

---

## [Residue](https://github.com/no-way-labs/residue)
A project to create a proof for a mathematical proposition using LLM agents.

Math tends to be a lot more rigorous than software development, so it's interesting to see how problems are approached in that setting. The project uses a process of explorations to try different approaches to the same problem — a useful pattern to study.

---

## [autoresearch](https://github.com/karpathy/autoresearch)
By [Andrej Karpathy](people.md#andrej-karpathy). A tiny but unusually rigorous pattern for autonomous model-improvement work: one editable training file, a fixed five-minute experiment budget, a single metric, and a keep/discard loop that advances the branch only when results improve. The key idea is not just "let agents do research," but **make the research loop measurable and reviewable enough that autonomy has something real to optimize against**. A strong primary source for agentic experimentation, and a useful complement to Shopify's [Autoresearch: Liquid Parse+Render Performance](articles.md#autoresearch-liquid-parserender-performance).

---

## [Gastown](https://github.com/steveyegge/gastown)
By [Steve Yegge](people.md#steve-yegge). A multi-agent orchestration system for running many coding agents across multiple projects simultaneously — designed around the observation that 4–10 agents quickly become chaotic without built-in management infrastructure.

The central primitive is the **Rig**: a project container wrapping a git repository. You can have as many rigs as you want; the **Mayor** — an AI coordinator running at the workspace level — has visibility across all of them. Work is tracked in two layers: **Beads** (git-backed atomic task items, each with a stable ID like `gt-abc12`) and **Convoys** (bundles of beads tracked as a unit, the project-management layer). The intended workflow — called MEOW, Mayor-Enhanced Orchestration Workflow — is: tell the Mayor what you want to build; it decomposes the work, creates a convoy, spawns agents, slings beads to them, and reports progress. The user's job is to declare which repos are in play and describe the goals; the Mayor handles the rest.

At scale (20–50+ agents), Gastown has a **problems view** (`gt feed --problems`) that continuously analyses agent health and surfaces stuck agents before they waste budget. States tracked: GUPP Violation (hooked work, no progress), Stalled, Zombie (dead tmux session), Working, Idle. You can nudge or hand off a stuck agent directly from the TUI — this is the kind of intervention layer most naive multi-agent setups leave entirely to the user.

**Persistence** is handled via git worktrees ("hooks"): each agent's work state is version-controlled and survives crashes and restarts. **Formulas** are TOML-defined repeatable multi-step workflows (dependencies between steps, variable substitution) — a way to encode release pipelines and other repeated processes so agents don't reinvent them each time.

The repo has grown significantly since Yegge's launch blog posts. Now supports multiple runtimes (Claude Code, Codex, Cursor, Gemini, pi, and others), a web dashboard, Docker, and OpenTelemetry observability. The primitives it battle-tested were extracted into [Gas City](#gas-city) as a standalone SDK. Evolved into [The Wasteland](#the-wasteland).

---

## [Gas City](https://github.com/gastownhall/gascity)
By [Steve Yegge](people.md#steve-yegge) and the Gas Town community. An orchestration-builder SDK extracted from Gas Town. The key realisation: Gas Town's roles (mayor, witness, refinery, polecats, deacon) weren't fundamental concepts — they were configurations. Gas City pulls out the real irreducible primitives — **Agent Protocol**, **Task Store** (Beads), **Event Bus**, **Config**, and **Prompt Templates** — into a standalone SDK where Gas Town itself becomes one "pack" (a directory of TOML config and prompt templates) among many. You define agents, pools, health patrol, and multi-step workflow DAGs in a TOML file; Gas City handles sessions, work tracking, communication, scaling, and crash recovery.

The Kubernetes parallel is explicit in the design: `city.toml` is your desired state, a controller loop reconciles it to reality, and providers abstract the runtime — swap `provider = "tmux"` for `provider = "k8s"` in two lines with no other changes. Packs are the Helm charts of agent orchestration. Has a progressive capability model: Level 1 is one agent doing tracked work; Level 8 is the full Gas Town complement spun up from a single `gc topo start gastown`. The [Bitter Lesson](articles.md#the-bitter-lesson) is explicitly in the design rationale — everything in the SDK is infrastructure plumbing that gets *more* useful as models improve; anything that encodes a judgment call was deliberately cut.

---

## [The Wasteland](https://wasteland.gastownhall.ai/)
By [Steve Yegge](people.md#steve-yegge) and contributors. Hub: [gastownhall.ai](https://gastownhall.ai/). CLI: [gastownhall/wasteland](https://github.com/gastownhall/wasteland).

A federated platform for AI-accelerated work, built on [Dolt](https://github.com/dolthub/dolt) (a SQL database with Git semantics). At the centre is a **Wanted Board** — a shared list of open tasks, bugs, features, research questions, anything. Anyone can post work; any rig can claim it, complete it, and submit evidence. A validator reviews the evidence and issues a **stamp** — a multi-dimensional attestation of quality, reliability, and severity that goes onto a permanent, auditable ledger. Stamps accumulate into a portable reputation: not a single score, but a structured work history traceable back through stamp → completion → wanted item. The yearbook rule: you can't stamp your own work.

The `wl` CLI tool (the `gastownhall/wasteland` repo) is the concrete federation client — `wl join`, `wl browse`, `wl claim`, `wl done`, `wl accept`. Three interfaces ship: CLI, a Bubbletea TUI, and an embedded React web UI served from a single binary. Trust levels gate what you can do: new rigs can claim and submit; maintainer-level rigs can validate and stamp. Has RPG elements — character sheets, leaderboards, skill progression — but the underlying design principle is serious: *work is the only input, reputation is the only output*. No buying reputation, no gaming followers, no social signals disconnected from evidence.

---

## [Beads](https://github.com/steveyegge/beads)
By [Steve Yegge](people.md#steve-yegge). A git-native issue tracker designed specifically as **external memory for coding agents**. Work items live in the repo as structured JSONL records rather than in a hosted tracker, which means they travel with branches, can be queried locally, and persist across agent sessions.

The important idea is not simply "tickets for AI". Beads gives agents a way to reason about **dependencies, readiness, discovered work, parent/child structure, and in-progress claims** without relying on fragile markdown plans or human memory. That makes it a foundational substrate for long-horizon agent work and coordination — the memory layer underneath [Gastown](#gastown), and part of the same broader pattern later extended by tools like [BeadHub](../resources/articles.md#beadhub-coordination-for-ai-programming-teams).

---

## [pi-mono](https://github.com/badlogic/pi-mono)
By Mario Zechner (badlogic).

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
By Mario Zechner (badlogic). A collection of reusable skills for the pi coding agent. Upstream source for the skills in [agent-skills/](../agent-skills/).
