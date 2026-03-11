# Projects

Interesting open source projects related to AI, LLMs, and agents.

---

## [Residue](https://github.com/no-way-labs/residue)
A project to create a proof for a mathematical proposition using LLM agents.

Math tends to be a lot more rigorous than software development, so it's interesting to see how problems are approached in that setting. The project uses a process of explorations to try different approaches to the same problem — a useful pattern to study.

---

## [Gastown](https://github.com/steveyegge/gastown)
By [Steve Yegge](people.md#steve-yegge). An agent orchestration system — a "factory" for coding agents rather than a single worker. Agents take on roles (Deacon, Refinery, Dogs, etc.) and collaborate to chew through large backlogs of work. The primitives it battle-tested — session management, work assignment, health patrol, communication — were extracted into [Gas City](#gas-city). Evolved into [The Wasteland](#the-wasteland).

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
By [Steve Yegge](people.md#steve-yegge).

---

## [pi-mono](https://github.com/badlogic/pi-mono)
By Mario Zechner (badlogic).

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
