# Articles

Specific articles, posts, and reference sites worth reading.

---

## [LLM Powered Autonomous Agents](https://lilianweng.github.io/posts/2023-06-23-agent/)
By [Lilian Weng](people.md#lilian-weng). The canonical technical reference for agent system design. Breaks down agent architecture into four components — **planning** (subgoal decomposition, reflection, self-critique), **memory** (sensory/short-term/long-term, retrieval), **tool use**, and **action** — and surveys the research behind each. Written in 2023 but still the clearest framework for reasoning about what an agent actually is and what its parts do. Worth reading before building anything agent-shaped.

---

## [My LLM Codegen Workflow ATM](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/)
By [Harper Reed](people.md#harper-reed). Practical, no-hype walkthrough of a working LLM coding workflow. Three discrete loops: **brainstorm → spec** (one question at a time with a conversational model), **spec → plan** (reasoning model produces a sequenced set of implementation prompts), **plan → execute** (coding agent works through prompts step by step). Widely cited because the prompts are included verbatim and actually work. Complements the NK Cookbook well — same problem space, different style.

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

## [2025: The Year in LLMs](https://simonwillison.net/2025/Dec/31/the-year-in-llms/)
By [Simon Willison](people.md#simon-willison). Annual review of the LLM landscape. Essential reading. Coins several terms that are sticking: **"lethal trifecta"** (agent has private data + external comms + untrusted content exposure), **"context rot"** (quality degradation as context window fills), and **"YOLO mode"** (running agents without confirmations — framed as normalization of deviance). Also covers the rise of coding agents, async agents, MCP, and the competitive shift to Chinese open-weight models.

---

## [Agentic Engineering Patterns](https://simonwillison.net/guides/agentic-engineering-patterns/)
By [Simon Willison](people.md#simon-willison). A living, growing guide — structured like a book, published chapter by chapter. Distinguishes **agentic engineering** (professional engineers using coding agents to amplify expertise) from vibe coding (no attention paid to the code). Covers practical patterns for getting reliable results. Continuously updated.

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

## [The Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)
By Rich Sutton.

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
