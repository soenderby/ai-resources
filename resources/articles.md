# Articles

Specific articles, posts, and reference sites worth reading.

---

## [LLM Powered Autonomous Agents](https://lilianweng.github.io/posts/2023-06-23-agent/)
By [Lilian Weng](people.md#lilian-weng). The canonical technical reference for agent system design. Breaks down agent architecture into four components — **planning** (subgoal decomposition, reflection, self-critique), **memory** (sensory/short-term/long-term, retrieval), **tool use**, and **action** — and surveys the research behind each. Written in 2023 but still the clearest framework for reasoning about what an agent actually is and what its parts do. Worth reading before building anything agent-shaped.

---

## [My LLM Codegen Workflow ATM](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/)
By [Harper Reed](people.md#harper-reed). Practical, no-hype walkthrough of a working LLM coding workflow. Three discrete loops: **brainstorm → spec** (one question at a time with a conversational model), **spec → plan** (reasoning model produces a sequenced set of implementation prompts), **plan → execute** (coding agent works through prompts step by step). Widely cited because the prompts are included verbatim and actually work. Complements the NK Cookbook well — same problem space, different style.

---

## [My now immaculate knowledge graph of life](https://harper.blog/2026/03/11/2026-immaculate-knowledge-graph/)
By [Harper Reed](people.md#harper-reed). A great example of **agentic knowledge gardening** rather than agentic coding. Reed takes ~600 meeting transcripts from Granola, syncs them to local markdown with his Rust CLI [muesli](https://github.com/harperreed/muesli), then uses a Claude Code skill to turn them into Obsidian-friendly notes with extracted people, concepts, and wiki-links. The distinctive idea is not "LLMs can summarize meetings" — that's generic — but that messy conversational exhaust can be converted into a **file-based personal knowledge graph** that surfaces clusters and relationships you already live inside but can't easily see. Strong connection to Steph Ango's bottom-up "file over app" / emergent-structure Obsidian philosophy, but pushed one step further: the structure is not hand-maintained, it's grown from transcripts.

---

## [NK's AI Cookbook](https://ai-blog.nkschjoedt.com/ai-cookbook)
By [NK Schjødt](people.md#nk-schjødt). A senior developer's practical guide to AI-assisted development. Central metaphor: **AI is an excavator, you are the operator** — it amplifies skilled operators and is dangerous for unskilled ones.

Covers four core principles (context is everything, plan before coding, build a skills library, avoid burnout) plus a dense tactics section. Particularly good on:
- The **barcoding pattern** for avoiding burnout: strict black zones (deep work) and white zones (genuine rest), eliminating the grey (waiting in front of the screen while the agent runs)
- **Input-to-output ratio** as a quality signal — if your input is less than 20% of total conversation tokens, you're under-specifying
- **Skills as permanent context injection** — encode repeated instructions as skills so the model auto-selects them instead of you reconstructing context every session

Complements the Pydantic article well: same problem space (developer experience with AI), more tactical and less reflective.

---

## [The Human-in-the-Loop is Tired](https://pydantic.dev/articles/the-human-in-the-loop-is-tired)
By Pydantic. An honest account of what LLM-assisted programming actually feels like from the inside — not a doomer piece or a hype piece.

Introduces the idea of the **human reward function problem**: the satisfying parts of coding (solving problems, understanding logic, watching things compile) are being automated, while the exhausting parts (reviewing, supervising, course-correcting) are growing. The result is work that feels simultaneously more productive and less fulfilling.

Also coins **supervision fatigue** — the cognitive load of holding intent in your head while the machine generates high-volume, mostly-correct output that still needs your judgment. Draws a useful parallel to the responsive design transition: craft doesn't die, it shifts. Deep expertise becomes more valuable, not less, because you're now the quality gate for far more output.

---

## [AI Doesn’t Reduce Work—It Intensifies It](https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it)
By Aruna Ranganathan and Xingqi Maggie Ye. Reports an eight-month study of roughly 200 workers at a U.S. tech company and argues that AI often intensifies work rather than relieving it. The useful breakdown is three-fold: **task expansion** (people take on work outside their formal role because AI makes it feel possible), **blurred boundaries** ("just one more prompt" leaks work into evenings and breaks), and **multitasking overload** (parallel AI use increases monitoring and context-switching). Strong organizational-level complement to [The Human-in-the-Loop is Tired](https://pydantic.dev/articles/the-human-in-the-loop-is-tired): same phenomenon, but observed as a workplace pattern rather than a developer's subjective account.

---

## [Critical Thinking during the age of AI](https://addyo.substack.com/p/critical-thinking-during-the-age)
By [Addy Osmani](people.md#addy-osmani). Uses the old **who / what / where / when / why / how** framework as a checklist for AI-augmented engineering. The core point is simple but important: cheap, plausible output makes classic failure modes more dangerous, not less — unclear problem definitions, weak evidence, confirmation bias, shallow root-cause analysis, and treating the model as an oracle. Worth keeping as a clear antidote to the "AI will think for us" mindset.

---

## [2025: The Year in LLMs](https://simonwillison.net/2025/Dec/31/the-year-in-llms/)
By [Simon Willison](people.md#simon-willison). Annual review of the LLM landscape. Essential reading. Coins several terms that are sticking: **"lethal trifecta"** (agent has private data + external comms + untrusted content exposure), **"context rot"** (quality degradation as context window fills), and **"YOLO mode"** (running agents without confirmations — framed as normalization of deviance). Also covers the rise of coding agents, async agents, MCP, and the competitive shift to Chinese open-weight models.

---

## [Agentic Engineering Patterns](https://simonwillison.net/guides/agentic-engineering-patterns/)
By [Simon Willison](people.md#simon-willison). A living, growing guide — structured like a book, published chapter by chapter. Distinguishes **agentic engineering** (professional engineers using coding agents to amplify expertise) from vibe coding (no attention paid to the code). Covers practical patterns for getting reliable results. Continuously updated.

---

## [Emerging Principles of Agent Design](https://www.jonvet.com/blog/principles-of-agent-design)
By Jon Vet. One of the better synthesis pieces on agent architecture, mainly because it gives a simple lens for reconciling apparently conflicting advice: **use multi-agents for breadth-first problems** (research, parallel exploration) and **single agents for depth-first problems** (coding, coherence-heavy execution). Also pulls together context management, tool-description design, and the move toward ambient / proactive agents. Secondary rather than primary, but a useful map of where the 2025 agent-design conversation seems to be converging.

---

## [Building Effective AI Agents](https://www.anthropic.com/engineering/building-effective-agents)
By Anthropic. One of the canonical framing pieces for agent system design. Its enduring value is the clean taxonomy: **workflows vs agents**, plus five composable patterns — prompt chaining, routing, parallelization, orchestrator-workers, and evaluator-optimizer. The underlying bias is useful too: start with the simplest thing that works, avoid frameworks until you need them, and only add agentic complexity when it demonstrably improves outcomes.

---

## [A practical guide to building agents](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/)
By OpenAI. A practical deployment-oriented complement to Anthropic's workflow taxonomy. Distinguishes single-agent from multi-agent systems, lays out **manager** vs **decentralized handoff** patterns, and puts unusual emphasis on **guardrails**, tool risk, and human intervention for high-stakes actions. Less distinctive than Anthropic's piece conceptually, but useful as a major-lab reference for how agent systems are being framed for real product teams.

---

## [How we built our multi-agent research system](https://www.anthropic.com/engineering/built-multi-agent-research-system)
By Anthropic. Valuable not just because Anthropic says multi-agent systems work, but because it is unusually specific about **when** they work: high-value, breadth-first research tasks where many search directions can be explored independently in parallel. Also strong on production detail — token economics, prompt heuristics for delegation, tool-description quality, observability, and evaluation. Best read alongside Cognition's [Don’t Build Multi-Agents](https://cognition.ai/blog/dont-build-multi-agents), since the tension between them mostly resolves once you separate exploratory search from coherence-heavy coding.

---

## [Don’t Build Multi-Agents](https://cognition.ai/blog/dont-build-multi-agents)
By Cognition. One of the clearest arguments against naive multi-agent coding systems. The key concept is **context engineering**: reliability depends on preserving the full chain of relevant decisions, and parallel agents easily diverge because **actions carry implicit decisions** that other agents cannot see. The article's core recommendation — prefer a single-threaded agent with explicit context compression over parallel worker swarms for coherence-heavy tasks — is an important counterweight to orchestration enthusiasm.

---

## [Building proactive AI agents](https://bryanhoulton1.substack.com/p/building-proactive-ai-agents)
By Bryan Houlton. A genuinely novel architectural piece. Instead of request/response agents or fixed cron workflows, Houlton proposes long-lived **entities** that control their own wake schedule, can be interrupted by external events, use human-style tools ("your inbox", "your calendar"), and maintain **decaying-resolution memory** that gets more compressed as it ages. Especially worth keeping because it pushes beyond coding-agent patterns into what persistent, semi-autonomous agent systems might actually look like.

---

## [2025 LLM Year in Review](https://karpathy.bearblog.dev/year-in-review-2025/)
By [Andrej Karpathy](people.md#andrej-karpathy). Paradigm-level review of 2025. Key framings:
- **RLVR** (Reinforcement Learning from Verifiable Rewards) as the new major training stage, enabling "reasoning" models
- **Ghosts vs. Animals / Jagged Intelligence** — LLMs are not evolving animals, they are "summoned ghosts" with strange, spiky capability profiles. Genius in some domains, confused in others
- **Claude Code** as the first convincing LLM agent, notable for running *on your computer* rather than in the cloud
- **Vibe coding** — Karpathy coined the term; discusses its implications for who can program and what software becomes

---

## [Everything is a RALPH Loop](https://ghuntley.com/loop/)
By [Geoffrey Huntley](people.md#geoffrey-huntley). Introduces the **RALPH** orchestration pattern: a monolithic loop (not microservices) that runs a single task per iteration, throwing tokens at it until done. Argues for vertical scaling over multi-agent complexity at this stage. Companion thinking to Gas Town — where Gas Town focuses on orchestration/spinning plates, Huntley's "Loom" project aims for evolutionary software that optimises itself autonomously.

---

## [With the Rise of AI-Assisted Programming We'll Want More Programmers, Not Fewer](https://juanreyero.com/article/ai/we-need-more-programmers/)
By Juan Reyero. A clear Jevons-paradox argument for software engineering: if capable developers become dramatically more productive with LLMs, the backlog expands, ambition expands, and demand shifts upward toward people who can direct that new capacity well. The most useful part is where the bottleneck moves: away from individual code production and toward **coordination** among LLM-augmented engineers. Pairs naturally with Reyero's later [BeadHub](https://juanreyero.com/article/ai/beadhub/) piece, which treats that coordination problem as the next thing to build infrastructure for.

---

## [Don’t Send an Agent to do Code’s Job](https://medium.com/hybrd-engineering/dont-send-an-agent-to-do-code-s-job-080ef837420d)
By HYBRD Engineering. A useful countercurrent to agent-everything orchestration. The argument is that supervision is too deterministic a job to leave to an LLM: task slinging, dependency checks, nudging stuck workers, and policy enforcement are better implemented in code for lower token burn, better observability, and less behavioral drift. Their Village V3 replaces agentic supervisors with a single Rust process while keeping agents as workers, and uses [Beads](projects.md#beads) as the persistent work ledger. Good concrete example of the pattern "use code for the control plane, agents for the work plane."

---

## [BeadHub: Coordination for AI Programming Teams](https://juanreyero.com/article/ai/beadhub/)
By Juan Reyero. Sharp statement of the next coordination problem after single-user agent swarms: not one programmer with many agents, but many programmers with many agents across machines and repositories. BeadHub layers claims, advisory file reservations, mail/chat, and human escalation on top of [Beads](projects.md#beads), turning the repo-local task ledger into a networked coordination fabric. Strong connection to [Gastown](projects.md#gastown): same core insight that memory / work tracking is the substrate, but pushed from one-machine orchestration to multi-human, multi-machine teams.

---

## [The Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)
By Rich Sutton.

---

## [Introducing Beads: A coding agent memory system](https://steve-yegge.medium.com/introducing-beads-a-coding-agent-memory-system-637d7d92514a)
By [Steve Yegge](people.md#steve-yegge). The primary source for [Beads](projects.md#beads), and one of the more important pieces in the coding-agent cluster. Yegge's claim is that markdown plans are the wrong abstraction for long-horizon agent work; what agents actually need is **external memory** in the form of a structured, queryable issue graph with dependencies, ready-work detection, and persistence across sessions. The distinctive contribution is not "use tickets" in the Jira sense, but "use a git-native issue graph as the agent's working memory" — a substrate for planning, discovered work capture, and multi-agent coordination.

---

## [Zero-Framework Cognition](https://steve-yegge.medium.com/zero-framework-cognition-a-way-to-build-resilient-ai-applications-56b090ed3e69)
By [Steve Yegge](people.md#steve-yegge). A way to build resilient AI applications.

---

## [Welcome to the Wasteland: A Thousand Gas Towns](https://steve-yegge.medium.com/welcome-to-the-wasteland-a-thousand-gas-towns-a5eb9bc8dc1f)
By [Steve Yegge](people.md#steve-yegge). Launch post for [The Wasteland](../resources/projects.md#the-wasteland). Explains the vision: federating Gas Towns at scale to solve the "ideas > capacity" problem. Interesting framing — every major AI tooling breakthrough has involved a ~100x increase in token spend, and federating Gas Towns is how you get another 100x.

---

## [The Future of Coding Agents](https://steve-yegge.medium.com/the-future-of-coding-agents-e9451a84207c)
By [Steve Yegge](people.md#steve-yegge). Written three days after launching Gas Town. Predictions for 2026: models will get smarter, coding agent shops will shift from building workers to building factories, and big companies that haven't leaned in are in trouble. Also explains the backstory of Gas Town through four failed orchestrator attempts.

---

## [Software Survival 3.0](https://steve-yegge.medium.com/software-survival-3-0-97a2a6255f7b)
By [Steve Yegge](people.md#steve-yegge). A framework for predicting which software survives in a world where AI can build almost anything on demand. Core thesis: **software tends to survive if it saves cognition**. Introduces a "survival ratio" — tools that reduce token/compute cost win under selection pressure. Concrete and actionable even if you don't buy the full Karpathy/Amodei vision.

---

## [Minotaur Capital Quarterly — December 2025](https://www.minotaurcapital.com/reports/quarterly/2025-12)
By Minotaur Capital. An Australian global equities fund that uses LLMs end-to-end in their investment process — from idea generation and triage to portfolio construction and risk management. Their December 2025 quarterly is interesting as a real-world account of an industry outside tech adopting agents seriously.

Key quote from the newsletter: *"Now the output quality has crossed a threshold where it's genuinely useful, and it's cheap. If capable LLMs were free and infinitely fast, you'd always prefer brute force iteration over careful human design."* — a good articulation of the threshold moment we're in. Note: the full newsletter is JS-rendered and may require a browser to read.

---

## [CUPID](https://cupid.dev/)
A set of software design properties, started as a response to SOLID. Likely contains useful framing for thinking about agent and tool design.

The five CUPID properties:
- **Composable** — plays well with others
- **Unix philosophy** — does one thing well
- **Predictable** — does what you expect
- **Idiomatic** — feels natural
- **Domain-based** — the code models the problem domain in language and structure

---

## [Rationality: From AI to Zombies](https://www.readthesequences.com/)
By [Eliezer Yudkowsky](people.md#eliezer-yudkowsky). A compilation of over 300 blog posts written between 2006 and 2009, organized into a coherent sequence and available free online. Not directly about AI alignment — it's about how to think: Bayesian reasoning, cognitive biases, epistemology, and decision theory. It became foundational reading for the AI safety community because Yudkowsky's case for taking AI risk seriously rests on a prior argument about how to reason correctly about low-probability, high-stakes events. Warning: very long (roughly 2,000 pages in book form), and written with the conviction of someone who believed he was producing the most important document in human history. Yudkowsky himself has since acknowledged this was too much.

---

## [AGI Ruin: A List of Lethalities](https://www.alignmentforum.org/posts/uMQ3cqWDPHhjtiesc/agi-ruin-a-list-of-lethalities)
By [Eliezer Yudkowsky](people.md#eliezer-yudkowsky). Written in 2022, after years of failed attempts to produce a more structured document. Yudkowsky lays out roughly 47 distinct reasons — not all independent — why he believes alignment is extremely difficult, why current approaches don't address the real problems, and why the default outcome of building powerful AI is human extinction. The writing is blunt and at times exasperated. Not a persuasion piece for newcomers — more like a final-form statement of the argument for people who have already engaged with the basics and want the strongest version of the case.

---

## [If Anyone Builds It, Everyone Dies](https://ifanyonebuildsit.com/)
By [Eliezer Yudkowsky](people.md#eliezer-yudkowsky) and Nate Soares. The 2025 book-length public case for why building superintelligent AI without solved alignment is likely to end humanity. Co-authored with Nate Soares, president of MIRI. A *New York Times* bestseller. The core technical argument: AI systems are not engineered but grown, their internal workings are not understood, and optimising for a proxy metric does not guarantee the outcome you actually want — just as natural selection optimised for reproduction but humans invented birth control. Training AI to *appear* aligned does not mean it *is* aligned. Intended for a general audience; more accessible than the Sequences or AGI Ruin.

---

## [The Alignment Forum](https://www.alignmentforum.org/)
The central online hub for technical AI alignment research. Launched in 2018 from the LessWrong community. Writing from researchers at Anthropic, DeepMind, OpenAI, MIRI, and the Alignment Research Center appears here, alongside independent contributors. Includes writing by [Eliezer Yudkowsky](people.md#eliezer-yudkowsky) and [Paul Christiano](people.md#paul-christiano). The depth varies — some posts are research papers in blog form, others are speculative — but the signal-to-noise ratio is higher than most AI writing online. The sister site [LessWrong](https://www.lesswrong.com/) is broader in scope and is where new contributors typically start.
