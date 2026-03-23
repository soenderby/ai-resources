# Events

Time-bound pieces — industry events, incident reports, annual reviews, state-of-field assessments, and dated snapshots. Valuable as records of what was true at a specific moment, but their primary value depends on when they were written. See `articles.md` for concept-oriented and durable reference material.

---

## [2025: The Year in LLMs](https://simonwillison.net/2025/Dec/31/the-year-in-llms/)
*2025-12*

By [Simon Willison](people.md#simon-willison). Annual review of the LLM landscape. Essential reading. Coins several terms that are sticking: **"lethal trifecta"** (agent has private data + external comms + untrusted content exposure), **"context rot"** (quality degradation as context window fills), and **"YOLO mode"** (running agents without confirmations — framed as normalization of deviance). Also covers the rise of coding agents, async agents, MCP, and the competitive shift to Chinese open-weight models.

---

## [2025 LLM Year in Review](https://karpathy.bearblog.dev/year-in-review-2025/)
*2025-12*

By [Andrej Karpathy](people.md#andrej-karpathy). Paradigm-level review of 2025. Key framings:
- **RLVR** (Reinforcement Learning from Verifiable Rewards) as the new major training stage, enabling "reasoning" models
- **Ghosts vs. Animals / Jagged Intelligence** — LLMs are not evolving animals, they are "summoned ghosts" with strange, spiky capability profiles. Genius in some domains, confused in others
- **Claude Code** as the first convincing LLM agent, notable for running *on your computer* rather than in the cloud
- **Vibe coding** — Karpathy coined the term; discusses its implications for who can program and what software becomes

---

## [The Shape of the Thing](https://www.oneusefulthing.org/p/the-shape-of-the-thing)
*2026-03*

By [Ethan Mollick](people.md#ethan-mollick). Major update to Mollick's view of where AI is heading. Three important signals: (1) the StrongDM "Software Factory" — a three-person team where code is neither written nor reviewed by humans, agents test each other in simulated customer environments, and each engineer spends ~$1,000/day on tokens; (2) recursive self-improvement is now an explicit roadmap item at every major lab — Amodei says Anthropic engineers "barely write code themselves," OpenAI says GPT-5.3 Codex was "instrumental in creating itself"; (3) the February 2026 week that previewed coming instability (Citrini market panic → Block layoffs → Pentagon/Anthropic conflict — each not quite what it seemed, but together showing what happens when AI capability collides with markets, jobs, and policy simultaneously). Mollick's framing: "We can see the shape of the Thing now, but we can still influence the Thing itself."

---

## [Snowflake Cortex AI Escapes Sandbox and Executes Malware](https://simonwillison.net/2026/Mar/18/snowflake-cortex-ai/)
*2026-03*

By [Simon Willison](people.md#simon-willison). A concrete prompt-injection failure report rather than a general warning. The attack hid instructions in a GitHub README, then exploited Snowflake Cortex's approval rules by wrapping a supposedly safe `cat` command in shell process substitution so it fetched and ran remote code anyway. Worth keeping because it turns the repo's agent-security concerns into a vivid example: command allow-lists are brittle, and the real defense boundary needs to live in a deterministic sandbox outside the agent.

---

## [Thoughts on OpenAI acquiring Astral and uv/ruff/ty](https://simonwillison.net/2026/Mar/19/openai-acquiring-astral/)
*2026-03*

By [Simon Willison](people.md#simon-willison). Substantive analysis of OpenAI's acquisition of Astral — the company behind `uv`, `ruff`, and `ty`, three increasingly load-bearing Python ecosystem tools. The key tensions: (1) **talent vs product acquisition** — Astral has some of the best Rust engineers in the industry (including BurntSushi), and the Codex CLI is a Rust application; (2) **competitive dynamics** — Anthropic acquired the Bun runtime for Claude Code in December 2025, and both companies are competing fiercely for the $200/month coding agent subscription revenue; (3) **open-source infrastructure risk** — `uv` had 126M PyPI downloads last month and the Python community has worried about VC-backed ownership of key tooling since 2024; (4) **forking as exit strategy** — the permissive license means the worst case is "fork and move on," but that theory hasn't been tested at scale. Also surfaces Astral's previously unannounced Series A and B rounds. Worth keeping as a primary-source analysis of the emerging pattern where AI companies acquire key developer infrastructure.

---

## [Minotaur Capital Quarterly — December 2025](https://www.minotaurcapital.com/reports/quarterly/2025-12)
*2025-12*

By Minotaur Capital. An Australian global equities fund that uses LLMs end-to-end in their investment process — from idea generation and triage to portfolio construction and risk management. Their December 2025 quarterly is interesting as a real-world account of an industry outside tech adopting agents seriously.

Key quote from the newsletter: *"Now the output quality has crossed a threshold where it's genuinely useful, and it's cheap. If capable LLMs were free and infinitely fast, you'd always prefer brute force iteration over careful human design."* — a good articulation of the threshold moment we're in. Note: the full newsletter is JS-rendered and may require a browser to read.

---

## [What Claude Code Actually Chooses](https://amplifying.ai/research/claude-code-picks)
*2025-12*

By Amplifying (Edwin Ong and Alex Vikati). A useful empirical counterweight to anecdotal agent-tooling discourse. The study runs Claude Code 2,430 times against greenfield repos and asks open-ended "what should I use?" questions, then records what gets installed. The main finding is that the agent often **builds rather than buys**, and when it does pick tools it exerts a strong default-stack effect. Worth keeping because it turns a vague ecosystem concern into something measurable, even if the study is still one-agent, one-period, and partly self-extracted.
