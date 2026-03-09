# Projects

Interesting open source projects related to AI, LLMs, and agents.

---

## [Residue](https://github.com/no-way-labs/residue)
A project to create a proof for a mathematical proposition using LLM agents.

Math tends to be a lot more rigorous than software development, so it's interesting to see how problems are approached in that setting. The project uses a process of explorations to try different approaches to the same problem — a useful pattern to study.

---

## [Gastown](https://github.com/steveyegge/gastown)
By [Steve Yegge](people.md#steve-yegge). An agent orchestration system — a "factory" for coding agents rather than a single worker. Agents take on roles (Deacon, Refinery, Dogs, etc.) and collaborate to chew through large backlogs of work. Evolved into [The Wasteland](#the-wasteland).

---

## [The Wasteland](https://wasteland.gastownhall.ai/)
By [Steve Yegge](people.md#steve-yegge). Hub: [gastownhall.ai](https://gastownhall.ai/).

The next step beyond Gas Town: a federated platform linking thousands of Gas Towns together in a shared trust network. At the center is a **Wanted Board** — people post ideas, others use their Gas Towns to build them, and contributors earn stamps and reputation (implemented as a portable ledger, structured like a CV). Uses Git's fork/pull/merge semantics for accepting work, and [Dolt](https://github.com/dolthub/dolt) (a SQL database with Git semantics) as the backing store.

Has RPG elements: character sheets, leaderboards, skill progression that maps to real skills. Genuinely novel experiment in federated, AI-accelerated open source work.

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
