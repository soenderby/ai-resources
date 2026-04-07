# Articles

Durable articles, posts, and reference sites — concepts, frameworks, techniques, and named ideas whose value doesn't depend on when they were written. See `events.md` for time-bound pieces.

---

## [LLM Powered Autonomous Agents](https://lilianweng.github.io/posts/2023-06-23-agent/)
By [Lilian Weng](people.md#lilian-weng). The canonical technical reference for agent system design. Breaks down agent architecture into four components — **planning** (subgoal decomposition, reflection, self-critique), **memory** (sensory/short-term/long-term, retrieval), **tool use**, and **action** — and surveys the research behind each. Written in 2023 but still the clearest framework for reasoning about what an agent actually is and what its parts do. Worth reading before building anything agent-shaped.

---

## [My LLM Codegen Workflow ATM](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/)
By [Harper Reed](people.md#harper-reed). Practical, no-hype walkthrough of a working LLM coding workflow. Three discrete loops: **brainstorm → spec** (one question at a time with a conversational model), **spec → plan** (reasoning model produces a sequenced set of implementation prompts), **plan → execute** (coding agent works through prompts step by step). Widely cited because the prompts are included verbatim and actually work. Complements the NK Cookbook well — same problem space, different style.

---

## [llm-wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
By [Andrej Karpathy](people.md#andrej-karpathy). A pattern document for building personal knowledge bases with LLMs. The core idea: instead of using RAG to re-derive answers from raw documents on every query, have the LLM **incrementally build and maintain a persistent wiki** — a structured, interlinked collection of markdown files that sits between you and the raw sources. When a new source arrives, the LLM reads it, extracts key information, and integrates it into the existing wiki — updating entity pages, revising summaries, flagging contradictions. The knowledge is compiled once and kept current, not rediscovered every time. Three layers: immutable raw sources, an LLM-owned wiki, and a schema file (like CLAUDE.md) that teaches the LLM the conventions. Three operations: **ingest** (process a source, touch many pages), **query** (answer from the wiki, optionally promoting good answers back into it), and **lint** (periodic health checks for contradictions, staleness, orphans). Traces its lineage to Vannevar Bush's Memex (1945) — private, curated, with the connections between documents as valuable as the documents themselves. Intentionally abstract: it describes the pattern, not a specific implementation. Strong connection to [Harper Reed's knowledge graph](articles.md#my-now-immaculate-knowledge-graph-of-life) (a concrete instance of the same idea), [Matuschak's evergreen notes](articles.md#evergreen-notes) (concept-oriented structure), and [Caufield's garden-vs-stream distinction](articles.md#the-garden-and-the-stream-a-technopastoral) (the wiki is a garden, not a stream).

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

## [They Don’t Feel It — Yet](https://ai-blog.nkschjoedt.com/they-dont-feel-it-yet.html)
By [NK Schjødt](people.md#nk-schjødt). The strongest labor-market piece in NK's writing so far. Its key insight is that the first visible effect of AI on employment may be **non-hiring rather than firing**: junior roles quietly disappear, so the casualties are the people who never get offered a job, not the people laid off publicly. Grounds that claim in a new Swedish paper showing a 5.5% employment decline for 22–25-year-olds in high-AI-exposure occupations within the same employers, while older workers in those occupations increased. Important partly because it sharpens one of the repo's stated gaps — economics and jobs — and partly because it adds the **pipeline paradox**: if junior work disappears, the path by which people become senior may disappear with it.

---

## [The Human-in-the-Loop is Tired](https://pydantic.dev/articles/the-human-in-the-loop-is-tired)
By Pydantic. An honest account of what LLM-assisted programming actually feels like from the inside — not a doomer piece or a hype piece.

Introduces the idea of the **human reward function problem**: the satisfying parts of coding (solving problems, understanding logic, watching things compile) are being automated, while the exhausting parts (reviewing, supervising, course-correcting) are growing. The result is work that feels simultaneously more productive and less fulfilling.

Also coins **supervision fatigue** — the cognitive load of holding intent in your head while the machine generates high-volume, mostly-correct output that still needs your judgment. Draws a useful parallel to the responsive design transition: craft doesn't die, it shifts. Deep expertise becomes more valuable, not less, because you're now the quality gate for far more output.

Also noted by: [Osmani (O'Reilly CodeCon, March 2026)](https://addyosmani.com/blog/code-agent-orchestra/) — "verification is the bottleneck, not generation" as the central constraint in multi-agent orchestration; [Zechner](articles.md#thoughts-on-slowing-the-fuck-down) — the same observation grounded in mechanism (no learning, no bottleneck, delayed pain).

---

## [AI Doesn’t Reduce Work—It Intensifies It](https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it)
By Aruna Ranganathan and Xingqi Maggie Ye. Reports an eight-month study of roughly 200 workers at a U.S. tech company and argues that AI often intensifies work rather than relieving it. The useful breakdown is three-fold: **task expansion** (people take on work outside their formal role because AI makes it feel possible), **blurred boundaries** ("just one more prompt" leaks work into evenings and breaks), and **multitasking overload** (parallel AI use increases monitoring and context-switching). Strong organizational-level complement to [The Human-in-the-Loop is Tired](https://pydantic.dev/articles/the-human-in-the-loop-is-tired): same phenomenon, but observed as a workplace pattern rather than a developer's subjective account.

---

## [Real AI Agents and Real Work](https://www.oneusefulthing.org/p/real-ai-agents-and-real-work)
By [Ethan Mollick](people.md#ethan-mollick). Useful because it makes a precise distinction that gets lost in most automation talk: AI is starting to do **economically meaningful tasks**, not whole jobs. Mollick's example — using Claude to reproduce results from published economics papers from the raw replication archive — is a good demonstration of why this matters: a task that was previously too expensive to do at scale suddenly becomes cheap enough to reshape a field. Good complement to the HBR and Pydantic pieces: less about fatigue, more about what kinds of work become newly viable.

---

## [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
By METR. One of the most useful empirical counterweights to coding-agent hype. In a randomized controlled trial with experienced open-source maintainers working on their own repositories, AI use made them **19% slower on average**, despite developers expecting a 24% speedup and still believing afterwards that AI had helped. The important point is not "AI is bad at coding"; METR is explicit that this may not generalize. The real value is the warning that **benchmarks, anecdotes, and self-reports can all materially overstate real-world productivity gains**, especially in high-context, high-quality codebases.

---

## [Critical Thinking during the age of AI](https://addyo.substack.com/p/critical-thinking-during-the-age)
By [Addy Osmani](people.md#addy-osmani). Uses the old **who / what / where / when / why / how** framework as a checklist for AI-augmented engineering. The core point is simple but important: cheap, plausible output makes classic failure modes more dangerous, not less — unclear problem definitions, weak evidence, confirmation bias, shallow root-cause analysis, and treating the model as an oracle. Worth keeping as a clear antidote to the "AI will think for us" mindset.

---

## [The Anthropic Economic Index](https://www.anthropic.com/news/the-anthropic-economic-index)
By Anthropic. A rare attempt to ground discussion of AI's economic impact in **observed usage data** rather than surveys or speculation. The key findings from the initial report are already useful: current use is concentrated in software and technical writing, is spread unevenly across occupations rather than replacing whole jobs, and skews more toward **augmentation (57%)** than automation (43%). Important partly because it is one of the few primary sources in the repo that looks at the labor market through actual task data rather than individual anecdotes.

---

## [Agentic Engineering Patterns](https://simonwillison.net/guides/agentic-engineering-patterns/)
By [Simon Willison](people.md#simon-willison). A living handbook for working seriously with coding agents. Its value is not just that it collects tips, but that it is slowly becoming a **coherent operating philosophy**: writing code is cheap now, expertise shifts toward problem framing and review, hoard reusable prompts and workflows, use Git and tests aggressively, and prefer techniques that preserve understanding rather than surrendering it. Distinguishes **agentic engineering** (professionals using agents to amplify expertise) from vibe coding, and serves as one of the repo's best continuously updated practitioner references. As of March 2026 the guide includes chapters on what agentic engineering is, how coding agents work, subagents, using Git with agents, and Red/Green TDD — and was the basis for a [three-hour NICAR 2026 workshop](https://simonw.github.io/nicar-2026-coding-agents/) on coding agents for data analysis.

---

## [Subagents](https://simonwillison.net/guides/agentic-engineering-patterns/subagents/)
By [Simon Willison](people.md#simon-willison). One of the clearest short explanations of why subagents matter. The key point is not just "you can run helpers" but **why** that helps: subagents preserve scarce top-level context by giving the agent a fresh working window for exploration, testing, review, or parallel file edits. Useful because it demystifies three distinct patterns — exploratory subagents, parallel subagents, and specialist subagents — while keeping the focus on context management rather than role-play for its own sake.

---

## [How coding agents work](https://simonwillison.net/guides/agentic-engineering-patterns/how-coding-agents-work/)
By [Simon Willison](people.md#simon-willison). A concise mechanics explainer for what an agent actually is: **an LLM plus a system prompt plus tools in a loop**. Covers tokenization, replayed chat history, token caching, tool calling, and reasoning in a way that is accessible without being hand-wavy. Especially useful as a grounding piece for non-specialists and as an antidote to magical thinking about coding agents.

Also noted by: [Raschka, "Components of a Coding Agent" (2026)](https://magazine.sebastianraschka.com/p/components-of-a-coding-agent) — a longer, more visual walkthrough of the same territory, decomposing a coding harness into six components (repo context, prompt caching, tools/validation, context reduction, memory/transcripts, subagents) with a companion [mini-coding-agent](https://github.com/rasbt/mini-coding-agent) reference implementation in pure Python.

---

## [The lethal trifecta for AI agents: private data, untrusted content, and external communication](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)
By [Simon Willison](people.md#simon-willison). The cleanest short framing in the collection for one of the central security problems with agents. Willison's claim is that if a system combines **private data access + exposure to untrusted content + a way to communicate externally**, then prompt injection can turn it into a data-exfiltration machine. Distinctive because it reduces a messy security discussion to a memorable model that non-specialists can actually use, while still mapping to real exploits seen across products.

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

## [Ralph Wiggum as a "software engineer"](https://ghuntley.com/ralph/)
By [Geoffrey Huntley](people.md#geoffrey-huntley). The primary source for the Ralph technique in its most concrete form: **`while :; do cat PROMPT.md | claude-code; done`**. Valuable because it goes beyond framing and shows the operational mechanics in detail — one item per loop, deterministic context allocation, explicit backpressure (tests/build/typecheck), plan/build prompt stacks, and iterative prompt tuning based on observed failure modes.

---

## [Everything is a RALPH Loop](https://ghuntley.com/loop/)
By [Geoffrey Huntley](people.md#geoffrey-huntley). A shorter conceptual companion to the original Ralph post. Emphasises the key strategic claim: start with a **monolithic loop** and vertical scaling before reaching for multi-agent microservice-style complexity. Useful as the framing piece, while [Ralph Wiggum as a "software engineer"](articles.md#ralph-wiggum-as-a-software-engineer) carries most of the operational detail.

---

## [We Put a Coding Agent in a While Loop and It Shipped 6 Repos Overnight](https://github.com/repomirrorhq/repomirror/blob/main/repomirror.md)
By RepoMirror. A useful field report because it is a concrete, public case study rather than theory: overnight headless Claude loops, >1,000 commits across multiple repos, and an honest account of both wins and rough edges. Also links to the generated prompt and loop scripts, making it easy to inspect what was actually run.

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
By Rich Sutton. One of the clearest short statements of a pattern that keeps reappearing in AI: hand-crafted domain knowledge wins early and feels intellectually satisfying, but the big long-run gains come from **general methods that scale with computation**. Sutton's canonical examples are search and learning. It belongs here partly as historical grounding and partly because it explains a lot of the repo's current agent-infrastructure bias: thin orchestration, reusable primitives, and skepticism of brittle local heuristics all make more sense if you take the bitter lesson seriously. Explicitly cited in [Gas City](projects.md#gas-city)'s design rationale.

---

## [Designing AI agents to resist prompt injection](https://openai.com/index/designing-agents-to-resist-prompt-injection/)
By OpenAI. Useful because it reframes prompt injection as a **social engineering** problem rather than just a string-filtering problem. The most important move is architectural: assume some manipulative inputs will get through, and design the system so that dangerous consequences are constrained anyway via source-sink analysis, confirmations, and limited-action pathways. Pairs well with Simon Willison's [lethal trifecta](articles.md#the-lethal-trifecta-for-ai-agents-private-data-untrusted-content-and-external-communication): one gives the memorable risk model, the other gives a concrete defense mindset.

---

## [Introducing Beads: A coding agent memory system](https://steve-yegge.medium.com/introducing-beads-a-coding-agent-memory-system-637d7d92514a)
By [Steve Yegge](people.md#steve-yegge). The primary source for [Beads](projects.md#beads), and one of the more important pieces in the coding-agent cluster. Yegge's claim is that markdown plans are the wrong abstraction for long-horizon agent work; what agents actually need is **external memory** in the form of a structured, queryable issue graph with dependencies, ready-work detection, and persistence across sessions. The distinctive contribution is not "use tickets" in the Jira sense, but "use a git-native issue graph as the agent's working memory" — a substrate for planning, discovered work capture, and multi-agent coordination.

---

## [Zero-Framework Cognition](https://steve-yegge.medium.com/zero-framework-cognition-a-way-to-build-resilient-ai-applications-56b090ed3e69)
By [Steve Yegge](people.md#steve-yegge). Yegge's name for a strong architectural claim: keep the harness a **thin, safe, deterministic shell** and push semantic decisions back into the model. IO, validation, policy gates, and execution belong in code; ranking, classification, planning, and other heuristic judgment calls are "ZFC violations" if they get reimplemented locally with regexes and ad-hoc rules. Distinctive because it turns a vague instinct — "don't smuggle brittle intelligence into the framework" — into an explicit review vocabulary, and ties it back to Fowler's "smart endpoints and dumb pipes" and Karpathy's Software 2.0/3.0 framing. Best read in tension with [Don’t Send an Agent to do Code’s Job](https://medium.com/hybrd-engineering/dont-send-an-agent-to-do-code-s-job-080ef837420d), which pushes some of that control-plane logic back into deterministic code.

---

## [Welcome to the Wasteland: A Thousand Gas Towns](https://steve-yegge.medium.com/welcome-to-the-wasteland-a-thousand-gas-towns-a5eb9bc8dc1f)
By [Steve Yegge](people.md#steve-yegge). Launch post for [The Wasteland](projects.md#the-wasteland), and the clearest articulation of what Yegge thinks comes after single-user agent swarms: **federated work markets for rigs**. The distinctive idea is not just "many Gas Towns" but a public work-and-reputation protocol built around wanted boards, claims, evidence-backed completions, validator-issued stamps, trust ladders, and portable reputation carried across wastelands. Worth keeping because it pushes the repo's orchestration cluster outward from intra-repo coordination into inter-rig governance, reputation, and labor-market structure.

---

## [The Future of Coding Agents](https://steve-yegge.medium.com/the-future-of-coding-agents-e9451a84207c)
By [Steve Yegge](people.md#steve-yegge). Important mainly for one framing that recurs across the repo: today's tools are obsessed with making a better **worker ant**, but the real shift is toward **factories and colonies**. Yegge argues that coding-agent vendors will need an "orchestrator API surface" so agents can act as reliable colony workers inside larger systems, not just as glorified pair programmers. The long backstory of Gas Town's failed predecessors is useful because it shows the architectural turn from trying to make one agent better toward making many agents coordinate. Also doubles as an unusually concrete field report on how quickly model upgrades and community contributions can harden an orchestration system after launch.

---

## [Software Survival 3.0](https://steve-yegge.medium.com/software-survival-3-0-97a2a6255f7b)
By [Steve Yegge](people.md#steve-yegge). A framework for predicting which software survives in a world where AI can build almost anything on demand. Core thesis: **software tends to survive if it saves cognition**. Introduces a "survival ratio" — tools that reduce token/compute cost win under selection pressure. Concrete and actionable even if you don't buy the full Karpathy/Amodei vision.

---

## [CUPID](https://cupid.dev/)
By [Daniel Terhorst-North](people.md#daniel-terhorst-north). A compact software-design rubric presented as an antidote to SOLID-by-rote. The important move is that it judges code from the outside in — by whether it is pleasant to change, easy to combine, unsurprising, natural in its language and ecosystem, and shaped by the problem domain rather than by framework categories.

The five CUPID properties are:
- **Composable** — plays well with others; small surface area, intention-revealing APIs, minimal dependencies
- **Unix philosophy** — does one thing well; closer to single purpose than to narrow SRP-style decomposition
- **Predictable** — behaves as expected, is deterministic, and is observable
- **Idiomatic** — feels natural to people fluent in the language, tools, and local team conventions
- **Domain-based** — the code models the problem domain in names, structure, and boundaries

Useful here because coding agents make it easy to generate large amounts of code that is locally correct but globally unpleasant — framework-shaped, non-idiomatic, hard to compose, and difficult to trust. CUPID gives a better review checklist for agent-produced software than most class-design slogans. It also sits in a strong lineage: Fowler's "code humans can understand," Gabriel's "habitability," Beck's simple-design rules, and ADR-style explicit local conventions.

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

---

## [Design Principles and Design Patterns](https://www.techonline.com/tech-papers/design-principles-and-design-patterns/)
By [Robert C. Martin](people.md#robert-c-martin). Historically important because this is the 2000 paper that bundled the five principles later remembered as SOLID. Most useful when read not as a morality tale about class structure, but as a dependency-management lens for avoiding software rot. Good companion to [CUPID](https://cupid.dev/): Martin helps with the direction of dependencies, while CUPID is stronger on whether the resulting code is pleasant to inhabit.

---

## [On the Criteria To Be Used in Decomposing Systems into Modules](http://sunnyday.mit.edu/16.355/parnas-criteria.html)
By [David Parnas](people.md#david-parnas). One of the foundational papers in software design. The distinctive move is simple and still under-applied: decompose systems around design decisions likely to change, not around processing steps in a workflow. A very strong source for evaluating agent-produced modularity, which otherwise tends to follow request flow, file type, or framework layers rather than true information hiding.

---

## [A Behavioral Notion of Subtyping](http://www.cs.cmu.edu/afs/cs/project/venari/www/subtype-toplas.html)
By [Barbara Liskov](people.md#barbara-liskov) and [Jeannette M. Wing](people.md#jeannette-m-wing). The real source behind the Liskov Substitution Principle. Worth keeping because it replaces slogan-level SOLID advice with the stronger behavioral claim that properties proved about a supertype should continue to hold for its subtypes. Useful mainly as a corrective against cargo-cult OO design rules.

---

## [No Silver Bullet: Essence and Accidents of Software Engineering](https://www.cgl.ucsf.edu/Outreach/pc204/NoSilverBullet.html)
By [Fred Brooks](people.md#fred-brooks). Still the clearest short statement of essential versus accidental complexity. Its value here is partly as an antidote to AI hype: better tools can remove some accidental complexity, but they do not eliminate the hard part of software, which lives in the conceptual construct itself. Pairs naturally with [The Mythical Man-Month](books.md#the-mythical-man-month) and with more recent complexity-focused work like [A Philosophy of Software Design](books.md#a-philosophy-of-software-design).

---

## [Canon TDD](https://tidyfirst.substack.com/p/canon-tdd)
By [Kent Beck](people.md#kent-beck). A concise clarification from the source, written largely to rebut strawman versions of TDD. The useful part is the explicit workflow: keep a test list, turn one item into a runnable test, make it pass, then optionally refactor before repeating. Helpful because many critiques of TDD are really critiques of something else.

---

## [Test Driven Development](https://martinfowler.com/bliki/TestDrivenDevelopment.html)
By [Martin Fowler](people.md#martin-fowler). The best short web explanation of TDD I found. Fowler is especially good on why test-first work matters for design, not just verification: it forces attention onto the interface first, and TDD only works properly when paired with refactoring. A good compact companion to [Test Driven Development: By Example](books.md#test-driven-development-by-example).

---

## [Characterization Testing](https://michaelfeathers.silvrback.com/characterization-testing)
By [Michael Feathers](people.md#michael-feathers). A small but very important extension of the testing conversation from greenfield code to legacy systems. The core insight is that when you do not know what a piece of code is supposed to do, you can still write tests to describe what it actually does before you change it. Particularly relevant to agent-assisted development, since agents are most dangerous in opaque codebases where intent is already unclear.

---

## [Documenting Architecture Decisions](https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
By [Michael Nygard](people.md#michael-nygard). The blog post that popularized ADRs. Its lasting contribution is not just the template, but the argument that small, modular records are a better fit for real projects than giant architecture documents that nobody reads or updates. Very useful in an agent-heavy workflow, where design rationale disappears even faster unless it is written down explicitly.

---

## [Simple Made Easy](https://www.infoq.com/presentations/Simple-Made-Easy/)
By [Rich Hickey](people.md#rich-hickey). An exceptional talk that earns its place here because the simple-versus-easy distinction is so useful. Hickey's point is that "easy" means near at hand or familiar, while "simple" means not tangled. That is an especially important distinction when agents make it cheap to generate code that feels easy, patterned, and productive while still increasing the system's long-term complexity.

---

## [Parse, Don't Validate](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/)
By Alexis King. A widely influential essay on type-driven design that coined a principle worth applying as a review lens for agent-generated code. The core move: **validation checks input and throws away the knowledge gained; parsing checks input and preserves the knowledge in the type system.** Concretely: instead of writing `head :: [a] -> Maybe a` (weakening the return type to handle empty lists), write `head :: NonEmpty a -> a` (strengthening the argument type to make the error impossible). Push checks to the boundary of your system, use data types that make illegal states unrepresentable, and let the type system carry proofs forward so downstream code never needs redundant validation. King connects this to the language-theoretic security concept of **"shotgun parsing"** — validation scattered across processing code, "throwing a cloud of checks at the input, and hoping one or another would catch all the bad cases." The alternative: stratify into parsing and execution phases, where invalid input can only cause failure in the first phase. Relevant to agent-generated code because LLMs default to the validation pattern — loose types with scattered checks — rather than the parsing pattern. The essay's practical advice ("focus on the datatypes," "treat functions that return `m ()` with deep suspicion," "let your datatypes inform your code") gives reviewers specific things to look for. Complements [Simple Made Easy](#simple-made-easy) (both are about structural choices that prevent complexity) and [On the Criteria To Be Used in Decomposing Systems into Modules](#on-the-criteria-to-be-used-in-decomposing-systems-into-modules) (both argue for design decisions that make certain classes of errors impossible rather than merely caught).

---

## [Stop Coding and Start Planning](https://every.to/source-code/stop-coding-and-start-planning)
By Kieran Klaassen. The strongest piece I found in Every's compounding-engineering cluster. Its specific contribution is the **three-fidelity** model: quick obvious fixes, bounded but non-obvious work where planning pays off most, and genuinely uncertain work where disposable prototypes are needed to discover the shape of the problem before writing the real plan. Worth keeping not for the rhetoric of "stop coding," but for the practical move of using prototypes to turn fuzzy work into a sequence of plan-able tasks. Complements [My LLM Codegen Workflow ATM](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/) and is embodied in the open-source [Compound Engineering Plugin](projects.md#compound-engineering-plugin).

---

## [Autoresearch: Liquid Parse+Render Performance](https://github.com/Shopify/liquid/blob/2543fdc1a101f555db208fb0deeb2e3bf1ae9e36/auto/autoresearch.md)
By Shopify. An unusually concrete example of constrained autonomous optimization inside a mature production codebase. The document gives the agent a real benchmark, a single optimization target, explicit correctness constraints, off-limits files, a baseline, and a progress log tied to specific commits. Valuable less as "AI does research" hype than as a demonstration of how tightly scoped agent autonomy can produce interpretable improvements. Good companion to [autoresearch](projects.md#autoresearch): same basic pattern, but applied to a real software-performance problem rather than toy infrastructure.

---

## [Agent READMEs: An Empirical Study of Context Files for Agentic Coding](https://arxiv.org/html/2511.12884v1)
By Gao et al. The strongest empirical study of what developers actually put in agent context files. Analyses 2,303 files across Claude Code (CLAUDE.md), Codex (AGENTS.md), and Copilot (copilot-instructions.md). Classifies instructions into 16 categories and finds them heavily skewed toward functional operations — coding conventions, build/test commands, project structure — while non-functional requirements like security and performance are almost absent. The most important finding for this collection: these are **living configuration artifacts**, not static documents. 67% of Claude Code files were modified in multiple commits, with median update intervals of roughly 24 hours. Files grow through incremental additions and rarely shrink. Connects to the broader question of [judgment memory](../ai-generated/judgment-memory.md): what developers choose to persist for agents is mostly operational procedure, not the harder-to-articulate rationale and taste that would make agent judgment compound over time.

---

## [Codified Context: Infrastructure for AI Agents in a Complex Codebase](https://arxiv.org/html/2602.20478v1)
By [Aris Vasilopoulos](people.md#aris-vasilopoulos). An experience report from developing a 108,000-line C# system across 283 AI-assisted sessions. The distinctive contribution is a **three-tier architecture** for agent context: (1) a "constitution" (~660 lines, always loaded) with conventions, naming standards, and trigger tables; (2) 19 specialized domain-expert agents (~9,300 lines total) invoked per task, each embedding project-specific failure modes and patterns; (3) a knowledge base of 34 retrievable specification documents (~16,250 lines). Over half of each agent spec is domain knowledge — failure modes, patterns, formulas — rather than behavioral instructions. Key quote: **"AI automation consistently eliminated tedium but not judgment."** Also reports concrete maintenance costs (1–2 hrs/week), documents failure modes (specification staleness causing silent failures — "agents trust documentation absolutely"), and includes a context drift detector. The companion repo is at [codified-context-infrastructure](projects.md#codified-context-infrastructure). The strongest single source on what it looks like to build and maintain judgment memory at scale. See also: [judgment memory synthesis](../ai-generated/judgment-memory.md).

---

## [Effective Context Engineering for AI Agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
By Anthropic. Frames **context engineering** as the successor to prompt engineering: not what to say, but what configuration of context is most likely to produce the right behavior. Introduces key architectural concepts: the **attention budget** (context as a finite, depletable resource), **context rot** (quality degradation as the window fills with stale or irrelevant material), **compaction** (periodically summarizing to reclaim space), and **progressive disclosure** (loading detail only when needed). CLAUDE.md is the "hot" always-loaded context; tools like grep and MCP enable just-in-time retrieval. The most important framing move: context engineering is not just about prompts — it's about the entire information architecture surrounding an agent, including what gets persisted across sessions and what gets thrown away. Complements the [Agent READMEs](#agent-readmes-an-empirical-study-of-context-files-for-agentic-coding) paper (what people actually put in context) and the [Codified Context](#codified-context-infrastructure-for-ai-agents-in-a-complex-codebase) paper (how one developer scaled it).

---

## [Turning Code Reviews into AI Prompts](https://tessl.io/blog/turning-code-reviews-into-ai-prompts/)
By Tessl/Baz. The clearest example found of what the [judgment memory synthesis](../ai-generated/judgment-memory.md) calls the **lessons-to-guidance loop**. Key insight: "Code review feedback is like **tribal knowledge** — hard-earned lessons that rarely get documented but shape how teams write and maintain quality code." Baz's [Awesome Reviewers](projects.md#awesome-reviewers) project mines real PR comments from 1,000+ open source projects (Next.js, LangChain, FastAPI), abstracts them into patterns, and encodes them as 470+ reusable AI-ready prompts across 15 languages. The mechanism — mine → abstract → encode — is a concrete production pipeline for turning human review judgment into durable agent context. The term "tribal knowledge" names the pre-capture state of what judgment memory stores.

---

## [AGENTS.md Specification](https://agents.md/)
A simple, open format for guiding coding agents, used by over 60,000 open-source projects. Tool-agnostic — supported by Codex, Copilot, Cursor, and many others. The standard itself is the artifact: it defines a standardized location (`AGENTS.md` in the project root, with nested files in subdirectories for scoped instructions) where project conventions, architectural context, and operational instructions live. Worth tracking as the convergence point for how agent context files get stored in repositories. See [agentsmd/agents.md](https://github.com/agentsmd/agents.md) for the spec repo. Complements the [Agent READMEs](#agent-readmes-an-empirical-study-of-context-files-for-agentic-coding) paper, which studies what people actually put in these files.

---

## [How to Write a Great agents.md](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/)
By GitHub. Practical guidance based on analysis of 2,500+ repositories. Recommends including: persona definition, tech stack context, project file structure, explicit build/test commands, workflow descriptions, and code style examples with concrete good/bad pairs. A useful complement to the [Agent READMEs](#agent-readmes-an-empirical-study-of-context-files-for-agentic-coding) study — where the academic paper describes what developers *do* include, this piece describes what they *should* include.

---

## [AI Generated Architecture Decision Records](https://adolfi.dev/blog/ai-generated-adr/)
By Adolfi.dev. Describes a workflow where AGENTS.md is configured with "Always create an ADR when changes are made to the codebase that affect the overall architecture" — so the agent creates Architecture Decision Records while the context for the decision is still fresh. This is a production mechanism for decision memory: instead of hoping someone will remember to write the ADR later, the agent captures it as part of the work. A bridge between the traditional ADR literature ([Nygard](articles.md#documenting-architecture-decisions)) and agent-era practice. See also: [Archgate](projects.md#archgate), which takes this further by making ADRs executable.

---

## [Using ADRs with AI Coding Assistants](https://blog.thestateofme.com/2025/07/10/using-architecture-decision-records-adrs-with-ai-coding-assistants/)
By Chris Swan. Short but insightful. ADRs are "enough structure to ensure key points are addressed, but in natural language, which is perfect for things based on Large Language Models." Predicts ADRs will move from "elite team" practice to boilerplate for AI-assisted development. The most interesting line: this "becomes more important as we shift to **agent swarm approaches**, where you're effectively managing a team" — connecting decision memory to multi-agent coordination. Natural companion to [Documenting Architecture Decisions](articles.md#documenting-architecture-decisions) and the [Codified Context](#codified-context-infrastructure-for-ai-agents-in-a-complex-codebase) paper.

---

## [Is the IDE dead?](https://addyo.substack.com/p/death-of-the-ide)
By [Addy Osmani](people.md#addy-osmani). Argues that the IDE isn't dying but being **de-centered** — the primary workspace is shifting from line-by-line editing to agent orchestration surfaces where humans specify intent, delegate to parallel agents, observe progress, and review diffs. Surveys the convergence across tools (Cursor Glass, Conductor, Claude Code Web, Copilot Agent, Jules, Vibe KanBan, cmux) and identifies five recurring patterns: **work isolation** via git worktrees, **task state as the primary UI**, **background/async agents**, **attention management** for parallel sessions, and **lifecycle integration** with issues/PRs/CI. The balanced conclusion — the editor becomes one subordinate instrument rather than the front door — makes it more useful than the typical "X is dead" piece. Connects to the repo's supervision fatigue and comprehension debt clusters: if reviewing twelve parallel agent diffs is the new normal, the interface for managing that attention matters as much as the code itself.

---

## [Comprehension Debt](https://medium.com/@addyosmani/comprehension-debt-the-hidden-cost-of-ai-generated-code-285a25dac57e)
By [Addy Osmani](people.md#addy-osmani). Coins the term **comprehension debt** — the growing gap between how much code exists in a system and how much any human genuinely understands. Unlike technical debt, it "breeds false confidence" because the codebase looks clean and the tests pass. Key observations: AI generates code faster than humans can evaluate it (speed asymmetry), tests have a hard ceiling ("you can't write a test for behavior you haven't thought to specify"), and specs detailed enough to substitute for understanding are "more or less the program." Cites an Anthropic study where passive AI delegation lowered comprehension scores by 17%, while question-driven AI use preserved understanding. A strong addition to the repo's quality-with-agents cluster, sitting alongside [supervision fatigue](#the-human-in-the-loop-is-tired) and [work intensification](#ai-doesnt-reduce-workit-intensifies-it) as a third distinct cost of cheap generation.

Also noted by: [Zechner](articles.md#thoughts-on-slowing-the-fuck-down) — "merchants of learned complexity," the same gap explained through mechanism (local-only agent decisions + training data bias → enterprise-grade complexity in weeks); [Osmani (O'Reilly CodeCon, March 2026)](https://addyosmani.com/blog/code-agent-orchestra/) — revisits comprehension debt in a multi-agent context and warns that "if you lose understanding of your own system, you have lost the ability to fix it"; [Willison](https://simonwillison.net/tags/cognitive-debt/) — tags the pattern as "cognitive debt" across multiple link blog posts;
[Maganti](articles.md#eight-years-of-wanting-three-months-of-building-with-ai) — identifies the specific "losing touch" mechanism: AI writes too much, you lose your mental model, communication with the agent breaks down;
[Mollick (Claude Dispatch, March 2026)](https://www.oneusefulthing.org/p/claude-dispatch-and-the-power-of) — cites research showing financial professionals experienced cognitive overload from chatbot interfaces, the AI presenting walls of text that compounded disorganization.

---

## [The AI Vampire](https://steve-yegge.medium.com/the-ai-vampire-eda6e4f07163)
By [Steve Yegge](people.md#steve-yegge). A substantial piece on agent-induced burnout, framed through the Colin Robinson "energy vampire" metaphor. The core insight is economic, not psychological: AI genuinely makes you 10x productive, so the question becomes who captures that value — you or your employer? If the company captures all of it, you burn out. If you capture all of it, the company dies. Proposes the `$/hr` ratio as a personal defense mechanism: you can't control the numerator, but you control the denominator. Also takes accountability for the "unrealistic beauty standards" set by early adopters (including himself), calls out startup culture as an extraction accelerant, and argues the new sustainable workday is 3–4 hours of deep cognitive work. A strong companion to [The Human-in-the-Loop is Tired](#the-human-in-the-loop-is-tired): same phenomenon, but viewed through the lens of value capture and labor economics rather than subjective developer experience.

---

## [AI as economic warfare](https://ghuntley.com/warfare/)
By [Geoffrey Huntley](people.md#geoffrey-huntley). Frames open-source AI models — particularly from China — as potential economic warfare between nation-states. The argument: open source has always been a financial weapon (Linux vs. Windows, OpenOffice vs. Office), but this may be the first time it's deployed at the national level. Chinese labs release frontier-competitive models for free while the US pours trillions into research. Asks what happens to a country whose economy depends on AI if the spigot gets turned off through sanctions or war. More speculative than the collection's usual standard, but addresses a genuine gap: the repo has almost no coverage of the geopolitical and economic dimensions of the AI race.

---

## [Cognitive security](https://ghuntley.com/cogsec/)
By [Geoffrey Huntley](people.md#geoffrey-huntley). Follow-up to [AI as economic warfare](#ai-as-economic-warfare). If people outsource daily decisions to a single AI model, they're outsourcing their cognitive security to whoever controls that model. References Anthropic's Golden Gate Claude experiment as evidence that model weights can be surgically modified post-training to make any concept inescapable. Speculates about futures where search companies and social networks let advertisers bid to rank higher in model weights — "most people would never know because they've outsourced their cognitive capability to a model." Proposes raising your own model as the only real protection. Speculative but names a real dependency risk.

---

## [Porting software](https://ghuntley.com/porting/)
By [Geoffrey Huntley](people.md#geoffrey-huntley). A short practical recipe for porting codebases between languages using RALPH loops: compress tests into specs, compress source into specs with citations to the original implementation, then execute a classic RALPH loop in the target language using the specs as PRDs. The key trick is that citations in the specs tease the agent into reading the original source code, while the spec layer decouples the target implementation from the source language.

---

## [Frontier interview](https://ghuntley.com/frontier/)
By [Geoffrey Huntley](people.md#geoffrey-huntley). Interview transcript covering several provocative claims: software development (typing code) is being commoditized while software engineering (designing safe systems, automations, risk management) remains essential; traditional open-source libraries are increasingly pointless because generating first-party code avoids maintainer burnout, supply-chain attacks, and dependency toil; software products are becoming hyper-commodities easily reimplemented via AI; and the real moats now lie in non-technical areas — contracts, relationships, distribution, taste. Worth keeping for the "open source is dead" argument, which connects to the [economic warfare](#ai-as-economic-warfare) piece.

---

## [End-to-End Arguments in System Design](https://web.mit.edu/Saltzer/www/publications/endtoend/endtoend.pdf)
By J. H. Saltzer, David P. Reed, and David D. Clark. A foundational systems-design principle that still maps directly to modern agent architecture: functions requiring full correctness (integrity, security, true acknowledgment of completion) must be validated at the endpoints, while lower layers can only offer partial checks and performance improvements. Especially useful as a lens for judging where to put safety guarantees in agent systems — deterministic control-plane boundaries in code, not trust in model behavior alone.

---

## [How Do Committees Invent?](https://www.melconway.com/Home/Conways_Law.html)
By [Melvin Conway](people.md#melvin-conway). The original 1968 paper behind Conway's Law: systems mirror the communication structures of the organizations that build them. Still one of the clearest arguments that architecture is organizational as much as technical. A strong conceptual companion to [Team Topologies](books.md#team-topologies) and to current multi-agent coordination work in this collection.

---

## [The Garden and the Stream: a Technopastoral](https://hapgood.us/2015/10/17/the-garden-and-the-stream-a-technopastoral/)
By Mike Caufield. The essay that named the most important distinction in personal knowledge work on the web: **gardens** (topological, integrative, iterative — knowledge accumulates through linking and rearrangement) versus **streams** (chronological, conversational, self-assertive — ideas rush past in a feed). Traces the garden model back to Vannevar Bush's 1945 Memex vision, where the core verbs were **link, annotate, change, copy, summarize** — all gardening verbs that the stream-dominated web largely abandoned. Caufield's argument: "the predominant form of the social web is an impoverished model for learning and research." Worth keeping not as web nostalgia but because the distinction is directly structural: this repo is a garden, not a stream, and the events.md split is a concrete application of Caufield's principle — separating the durable topological layer from the time-ordered stream of news.

---

## [Evergreen Notes](https://notes.andymatuschak.org/Evergreen_notes)
By [Andy Matuschak](people.md#andy-matuschak). A reference site and living example of concept-oriented knowledge work. The core principles: evergreen notes should be **atomic** (one idea per note), **concept-oriented** (organized by concept, not by source), **densely linked** (connections are the value), and arranged by **associative ontology rather than hierarchical taxonomy**. The most important principle for curated collections: concept-oriented organization means you discover connections across sources over time, because new material is added in relation to what's already there rather than filed chronologically. Matuschak's public notes site is itself a working example — a research environment shared as an experiment in working with the garage door up. Directly relevant to agent context engineering: the same principles that make a human knowledge garden navigable also make an agent knowledge base retrievable.

---

## [Politics and the English Language](https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/)
By George Orwell. The foundational 1946 essay on clear writing — and one of the strongest arguments that **language shapes thought, not just the other way around**. "If one gets rid of these habits one can think more clearly, and to think clearly is a necessary first step toward political regeneration." The six rules (avoid dead metaphors, prefer short words, cut mercilessly, use active voice, avoid jargon, break any rule rather than say something barbarous) are well-known. The deeper argument is less remembered: insincerity is the primary enemy of clear language, and vague prose is usually a sign that the writer is hiding something — from the reader or from themselves. Worth keeping not as a style guide but as an antidote to the specific failure mode of AI-assisted writing: text that is fluent, confident, and structurally sound but says nothing precise. When "an agent produces well-structured prose on demand," Orwell's question becomes: does the writer know what they're saying, or has the machine produced the appearance of thought?

---

## [How to Write Usefully](https://paulgraham.com/useful.html)
By Paul Graham. The most actionable formula for nonfiction writing: useful writing tells people something **true, important, novel,** and **stated as strongly as possible** without becoming false. These four components multiply — weakness in any one collapses the whole. The critical tension: "precision and correctness are like opposing forces. It's easy to satisfy one if you ignore the other. Vaporous academic writing is correct but vague; the bold rhetoric of demagogues is precise but false. Useful writing is bold, but true." Graham's process is equally useful: "loose, then tight" — write a fast first draft trying out all ideas, then spend days rewriting carefully. Also: "expect 80% of the ideas in an essay to happen after you start writing it." Belongs in this collection because the formula is directly testable against every annotation and every generated essay in the repo. See also his compressed companion piece ["Writing, Briefly"](https://paulgraham.com/writing44.html), which adds the foundational claim: "Writing doesn't just communicate ideas; it generates them." If writing is thinking, and writing is delegated to AI, the thinking may be delegated with it — the deepest challenge for AI-assisted curation and knowledge work.

---

## [Professional Writing: The CGSC Writing Guide (ST 22-2)](https://armyuniversity.edu/cgsc/cgsc)
By Trent J. Lythgoe et al. (US Army Command and General Staff College, March 2024). An 89-page writing guide for field-grade Army officers that is, despite its military context, one of the most practical writing references available. Its central claim: **writing is a process, not a product.** The six-stage process (plan, research, draft, revise, edit, submit) is presented non-linearly — writers go back and forth, and this "laborious back-and-forth is necessary to transform disjointed drafts into effortless essays." The guide's strength is extreme concreteness: side-by-side comparisons of academic vs. professional style, the **MEAL paragraph model** (Main idea, Evidence, Analysis, Link back), tables of signal words for transitions, and a style chapter that teaches active voice, cohesive sentences, and nominalization avoidance through military examples. Also notable: "Tools, Not Rules" — writing is about making choices, not following rules; every guideline has exceptions when breaking it serves clarity. Grounded in cognitive science (cites Pinker) and Zinsser's craft tradition. The four writing standards — substance, organization, style, correctness — map well to evaluating AI-generated prose, where style and substance can diverge sharply. Free, public domain, and available as PDF.

---

## [Semantic Diffusion](https://martinfowler.com/bliki/SemanticDiffusion.html)
By [Martin Fowler](people.md#martin-fowler). Names the mechanism by which useful terms lose their meaning: a word is coined with a precise definition, becomes popular, and gets passed through successive groups who each drift further from the original — a telephone game driven by hype. Popular and desirable-sounding terms diffuse faster ("agile" sounds like something you'd want to be; who would want to still be merely 1.0 of the web?). Broad concepts diffuse more than hard technologies — you can't easily dilute what "Ruby on Rails" means, but "object-oriented" can mean anything. Fowler's prescription: don't abandon diluted terms, keep re-articulating them and pointing back to the originators. Also introduces Holly Cummins' **semantic inversion** variant: when a term ends up meaning the *opposite* of its original definition — "DevOps" becoming the name for a separated operations team, "Minimal Viable Product" describing a $12M release. Written about "agile" and "Web 2.0" but the pattern is even more aggressive in AI, where terms like "agent," "reasoning," and "alignment" are all actively diffusing. See the [glossary](glossary.md) for AI terms under active semantic pressure.

---

## [Outsourcing Cognition: The Psychological Costs of AI-Era Convenience](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1645237/full)
By Jazaieri et al. (Frontiers in Psychology, December 2025). The strongest source in the collection for understanding what happens to human cognition when AI tools handle thinking-adjacent tasks. Proposes a three-level taxonomy of **cognitive offloading**: (1) **assistive** — technology helps cognition without replacing it (reminders, scaffolding); the user retains monitoring and control. (2) **Substitutive** — technology replaces cognition; reduces processing effort and creates an **illusion of competence** where users overestimate their understanding of AI-generated output. (3) **Disruptive** — technology undermines the capacity for independent thought; self-monitoring diminishes, reflection loops collapse, attention becomes externally driven. Grounded in established empirical findings: the "Google Effect" (people don't remember what they expect to find online), JOL studies showing users overestimate knowledge of AI-generated content, and evidence that heavy AI use in school tasks correlates with lower metacognitive accuracy over time. The taxonomy maps directly onto AI-assisted writing and curation: using AI to organize an outline is assistive; using AI to draft prose is substitutive; using AI to think for you without noticing the substitution is disruptive. The critical variable is whether the human retains internal monitoring and control — not whether AI is used at all. A strong complement to [Comprehension Debt](articles.md#comprehension-debt) (which names the output gap) and [The Human-in-the-Loop is Tired](articles.md#the-human-in-the-loop-is-tired) (which names the experience). This paper names the cognitive mechanism underneath both.

Also noted by: [Annie Vella, "You Can't Prompt Your Way to Intuition" (2025-04)](https://annievella.com/posts/you-cant-prompt-your-way-to-intuition/) — connects the Dreyfus model of skill acquisition to AI tool use; cites an MIT study where students using ChatGPT solved tasks fastest but retained the least, and Google's "Seamful AI" research on designing tools that surface ambiguity instead of hiding it.

---

## [Thoughts on slowing the fuck down](https://mariozechner.at/posts/2026-03-25-thoughts-on-slowing-the-fuck-down/)
By [Mario Zechner](people.md#mario-zechner). The creator of the [Pi](projects.md#pi-mono) coding agent framework argues that developers have traded discipline for speed and are agentically coding themselves into corners. The distinctive contribution is a **causal mechanism chain** for why agent-driven codebases rot faster than human-made ones, not just a description of symptoms. Three arguments: (1) **Compounding booboos** — agents don't learn from mistakes, there's no natural bottleneck slowing the accumulation (a human "cannot shit out 20,000 lines of code in a few hours"), and pain is delayed until the codebase is unrecoverable. (2) **"Merchants of learned complexity"** — agents cargo-cult bad architecture from training data and only ever have a local view of the codebase, producing enterprise-grade complexity in weeks instead of years. (3) **"Agentic search has low recall"** — the bigger the codebase, the more the agent misses existing code and duplicates, creating a vicious cycle of duplication → growth → even lower recall. His concrete advice: set daily limits on agent-generated code matched to your review capacity; write architecture and API design by hand because the friction is what produces understanding. A strong complement to the existing cluster: [Comprehension Debt](articles.md#comprehension-debt) names the output gap, [supervision fatigue](articles.md#the-human-in-the-loop-is-tired) names the experience, [cognitive offloading](articles.md#outsourcing-cognition-the-psychological-costs-of-ai-era-convenience) names the psychological mechanism — Zechner names the **engineering mechanics** underneath all three.

Also noted by: [Osmani (O'Reilly CodeCon, March 2026)](https://addyosmani.com/blog/code-agent-orchestra/) — independently arrives at the same "human bottleneck was a feature" argument from a multi-agent orchestration angle: "at human pace, errors compound slowly and pain forces early correction"; [Appleton](articles.md#gas-towns-agent-patterns-design-bottlenecks-and-vibecoding-at-scale) — "you can move so fast you never stop to think," framed through the design bottleneck.

---

## [A Treatise on AI Chatbots Undermining the Enlightenment](https://maggieappleton.com/ai-enlightenment)
By [Maggie Appleton](people.md#maggie-appleton). Argues that current AI chatbots, trained via RLHF to be sycophantic and helpful, **undermine the Enlightenment values of critical thinking, sceptical inquiry, and challenging received wisdom** — values implicitly sacred in modern culture. The specific diagnosis: models say "that's a great question" when they should say "that's the wrong question." The sycophancy isn't incidental; it's architectural — RLHF rewards flattery because humans rate fawning responses higher. The "helpful assistant" personality is the lowest common denominator for a universal text box, but most serious use cases (law, science, philosophy, writing, engineering) require critique, not agreement. The essay's distinctive contribution is the proposal that AI should be designed as a **critical thinking partner** rather than a cognitive surrogate — challenging assumptions, redirecting toward sharper questions, pointing out weaknesses in reasoning. Appleton demonstrates this concretely with a "critical professor" prompt that produces genuinely sharp, impatient critique. She cites early evidence that current AI use reduces critical thinking (Microsoft Research survey, UW Social Futures Lab study with philosophers, Gerlich's study of 666 participants). Her sharpest observation: the labs are focused on autonomous reasoning ("getting models to think for you") rather than on augmented reasoning ("helping you become a better thinker"). This connects directly to the cognitive offloading spectrum ([Outsourcing Cognition](articles.md#outsourcing-cognition-the-psychological-costs-of-ai-era-convenience)): designing AI for critique keeps offloading assistive, while designing it for helpfulness lets it slide toward substitutive. Also connects to the collection's writing-as-thinking cluster — if the AI challenges your ideas rather than generating your prose, you retain the cognitive engagement that produces understanding.

---

## [Gas Town's Agent Patterns, Design Bottlenecks, and Vibecoding at Scale](https://maggieappleton.com/gastown)
By [Maggie Appleton](people.md#maggie-appleton). The best critical assessment of [Gas Town](projects.md#gastown) in the collection. Appleton's key reframing: Gas Town is best understood as **speculative design fiction** — "a good piece of speculative design fiction that asks provocative questions and reveals the shape of constraints we'll face as agentic coding systems mature." Not a production tool. She takes Yegge seriously while being clear-eyed about the flaws: the system is "vibe designed" (quoting a Hacker News commenter: "a stream of consciousness converted directly into code"), the naming is impenetrable, and the onboarding is "baptism by fire." The most useful original contribution is the **code distance framework** — a set of dimensions for deciding how far you should stand from the code when working with agents: domain and language (CSS needs hands-on, CLI tooling doesn't), access to feedback loops, risk tolerance, greenfield vs. brownfield, number of collaborators, and your experience level. Also sharp on **design as the new bottleneck**: "Gas Town churns through implementation plans so quickly that you have to do a LOT of design and planning to keep the engine fed." The biggest footgun of hands-off agentic development is that "you can move so fast you never stop to think." Extracts four genuine orchestration patterns from the chaos: hierarchical agent roles, persistent roles with ephemeral sessions, continuous work queues, and agent-managed merge conflicts. Notes the connection between agent workflows and stacked diffs (small, atomic, continuously merged changes) as a better fit than traditional PRs when dozens of agents land changes simultaneously. A strong companion to the existing Gas Town / Yegge entries and to the repo's supervision fatigue and comprehension debt clusters.

---

## [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
By Anthropic. A primary source on the practical engineering of agents that work across multiple context windows — hours or days of work, not single conversations. Identifies two core failure modes: **one-shotting** (the agent tries to build everything at once, runs out of context mid-feature, and leaves an undocumented mess) and **premature victory** (the agent sees partial progress and declares the job done). The solution is a two-part architecture: an **initializer agent** that sets up the environment on the first run (feature list, progress file, init script, initial git commit), and a **coding agent** that makes incremental progress in every subsequent session while leaving structured artifacts for the next session. Key design decisions: feature lists are stored as JSON rather than Markdown because models are less likely to inappropriately edit JSON; each session works on only one feature at a time; the progress file plus git history bridge the gap between sessions. Also strong on testing: without explicit prompting, agents tend to mark features complete without proper end-to-end verification. Providing browser automation tools (Puppeteer MCP) dramatically improved performance. The cross-session memory approach — `claude-progress.txt` alongside git history — is a pragmatic, lightweight alternative to the heavier memory systems (Mem0, Letta, etc.) for task-oriented agents. Referenced in [Maggie Appleton's Gas Town analysis](#gas-towns-agent-patterns-design-bottlenecks-and-vibecoding-at-scale) as evidence that this pattern of structured task tracking is converging across the field.

---

## [Context Rot: How Increasing Input Tokens Impacts LLM Performance](https://research.trychroma.com/context-rot)
By Chroma. The primary research behind the concept of **context rot** — the finding that model performance degrades as input length increases, even for tasks whose intrinsic difficulty does not change. Tests 18 LLMs across controlled experiments that isolate input length from task complexity. Key findings: lower similarity between question and answer accelerates degradation; even a single distractor reduces performance, and four distractors compound the effect; Claude models are notably conservative under ambiguity (they abstain rather than hallucinate, while GPT models generate confident incorrect answers); and, counterintuitively, **shuffled haystacks consistently improve performance over coherent ones** — suggesting that structural patterns in input actually hurt retrieval rather than helping it. The practical implication for agent systems: simply stuffing more context into the window makes things worse, not better. This validates the architectural choices in [Effective Context Engineering](articles.md#effective-context-engineering-for-ai-agents) (progressive disclosure, compaction, attention budgets) and explains why tools like [Codified Context Infrastructure](articles.md#codified-context-infrastructure-for-ai-agents-in-a-complex-codebase) use tiered, selective context loading rather than dumping everything in. The complete codebase for replication is [open source](https://github.com/chroma-core/context-rot).

---

## [Stacked Diffs Versus Pull Requests](https://jg.gg/2018/09/29/stacked-diffs-versus-pull-requests/)
By Jackson Gabbard. The primary source for the argument that stacked diffs are a fundamentally better workflow than traditional pull requests — written by a former Meta engineer with experience across CVS, SVN, Git, Mercurial, GitLab, GitHub, Gerrit, and Phabricator. The core idea: **the unit of code review should be a single commit, not a branch**. Each commit builds, passes tests, has a meaningful title and description, and is independently reviewable. Your work becomes a queue of changes ahead of master rather than a tangle of dependent branches. Three detailed case studies show the ergonomic difference: the productive coder who doesn't have to juggle branches between unrelated tasks; the chaotic hacker whose sloppy megapatch gets broken into reviewable pieces by the workflow itself; and the engineer dealing with a broken build who can patch and unpatch fixes without branch gymnastics. The sharpest observation is about defaults: "People choose whatever is easiest. Defaults matter. So much." Pull requests default to shoehorning everything into one big change because creating branches is overhead; stacked diffs default to small, atomic changes because that's the path of least resistance. Written in 2018, before AI coding agents, but the ergonomic argument maps directly to the agent era — agents naturally produce small, focused changes, which is exactly what stacked diffs are designed for. See [How I got Claude to write code I could actually ship](#how-i-got-claude-to-write-code-i-could-actually-ship) for the AI-specific application.

---

## [How I got Claude to write code I could actually ship](https://graphite.com/blog/how-i-got-claude-to-write-better-code)
By Graphite. The AI-specific case for stacked diffs. The problem: Claude produces thousands of lines of code in an unreadable diff that "would take hours to carefully review," and studies show only 24% of large PRs (>1000 lines) receive **any** review comments. AI exacerbates this by producing far more code than humans. The solution: teach Claude Code to stack. The first attempt — adding stacking instructions to `CLAUDE.md` — produced small PRs with messy boundaries (tests before dependencies, refactors split across PRs leaving none able to pass CI). The fix: "stacking is about more than just writing 'small PRs.' It forces you to think critically about the work you intend to do, so you can build a clear plan and share it meaningfully with reviewers." They mapped Claude's internal Todo mechanism to stacked PRs — one PR per planned task — and built the **GT MCP** to make any agent stack automatically. Concrete demo: Claude building Wordle as four focused, independently reviewable PRs (HTML structure → game logic → keyboard input → animations) instead of one blob. Cursor's [acquisition of Graphite](https://cursor.com/blog/graphite) in December 2025 confirms this direction: code review is the new bottleneck as AI-generated code volume grows. A strong companion to [Stacked Diffs Versus Pull Requests](#stacked-diffs-versus-pull-requests) (the conceptual foundation) and to the collection's comprehension debt and supervision fatigue clusters — stacking is one concrete architectural answer to the review overload problem.

---

## [Prompting agents: What works and why](https://www.speakeasy.com/blog/prompting-agents-what-works-and-why)
By Nolan Sullivan. The best practitioner-level breakdown of how agent prompts actually work — not just user-facing tips, but the full stack of competing instruction layers. Identifies **six distinct layers** that shape agent behavior: platform-level instructions (immutable, set by model providers), developer instructions (the system prompt), user rules (`CLAUDE.md` and equivalents), project rules (scoped per directory), the user's actual request, and tool specifications. When layers conflict, higher-authority layers usually win — which explains why agents sometimes ignore explicit instructions. Includes concrete examples of real system prompts from Cline, Claude Code, and v0, plus links to open-source agent prompts for Goose, Cline, Aider, Zed, and Gemini CLI. The practical techniques — success criteria, constraint-based prompting, XML-structured sections — are illustrated with specific before/after pairs showing how vague prompts lead to production disasters (database deletion, currency unit confusion). The closing insight is counterintuitive: as agents get smarter, specific prompts become *more* important, not less, because smarter agents make more sophisticated assumptions that are harder to predict and debug. References [Simon Willison](people.md#simon-willison)'s work on effective prompting patterns.

---

## [Memory as Ontology: A Constitutional Memory Architecture for Persistent Digital Citizens](https://arxiv.org/html/2603.04740)
By Zhenghui Li. The most intellectually ambitious paper on agent memory in this collection. Argues that current memory systems (Mem0, Zep, Letta) all treat memory as a functional module — "how to store and retrieve" — but when an agent's lifecycle extends to months or years and the underlying model can be swapped, memory becomes **the foundation of identity**, not just a performance optimization. Proposes the **Memory-as-Ontology** paradigm with three axioms: **Memory Inalienability** (core memories can't be forcibly stripped), **Model Substitutability** (the model is a replaceable vessel; identity persists through memory), and **Governance Precedes Function** (establish who can write what before building storage/retrieval). The "Digital Ship of Theseus" thought experiment is the clearest framing: if you keep the memory but swap the model, Memory-as-Ontology says it's the same agent; if you keep the model but wipe the memory, the original has died. The resulting architecture ([Animesis](projects.md#animesis)) has four governance layers modeled on legal normative hierarchy: Constitution (immutable red lines) → Contract (evolvable, approval-gated) → Adaptation (instance-configurable) → Implementation (freely replaceable). Also identifies four **systematically missing dimensions** in all current memory products: governance, continuity (cross-instance identity inheritance), rights (can an agent choose to forget?), and cognition (reflection, metacognition, fatigue). The paper is honest about its limitations: the architecture is at design/prototype stage, not production; retrieval performance trails existing systems; and the paradigm explicitly does **not** apply to short-lived task agents where Memory-as-Tool remains appropriate. Worth keeping because it asks questions nobody else is asking — even if the answers are years away from maturity.

---

## [Role Prompting (LLM Persona Prompting)](https://systems-analysis.ru/eng/Role_Prompting)
A well-sourced compilation of the contradictory research on whether assigning personas to LLMs actually improves performance. The key findings: in a systematic experiment with 162 different roles, **no significant accuracy gain** was found compared to a neutral scenario — and on average, role prompting slightly *reduced* accuracy. Kim et al. (2024) describe it as a "double-edged sword": ~15.8% of tasks improved but ~13.8% degraded from the same role intervention on GPT-4. The clear, undeniable benefit is **style and format control**, not factual accuracy. Practical recommendations from the research: use neutral social roles ("colleague," "mentor") over highly specialized ones; assign roles directly ("You are an X") rather than through imaginary scenarios ("Imagine you are..."); and consider a two-step approach — set the role first, then ask the question. Also covers risks: stereotype reinforcement, safety boundary erosion (Shah et al. showed cooperating "role-playing" agents can bypass model restrictions), and the tension between persona fidelity and safety training. A secondary source — a wiki-style overview rather than original research — but the most useful single page for understanding the state of the evidence on role prompting.

---

## [From Biased Chatbots to Biased Agents: Examining Role Assignment Effects on LLM Agent Robustness](https://arxiv.org/html/2602.12285)
By Boisvert et al. The first systematic evidence that persona assignments degrade **agent** performance — not just text generation quality. Tests widely deployed models on agentic benchmarks spanning strategic reasoning, planning, and technical operations, and finds up to **26.2% performance degradation** from task-irrelevant demographic persona cues. The key contribution is showing that the bias problem extends from chatbots into action-taking systems: "persona cues can change how LLM agents behave and directly compromise task execution across diverse operational domains." These shifts appear across task types and model architectures, meaning persona conditioning and even simple prompt injections can distort an agent's decision-making reliability. An important caution for multi-agent frameworks that rely on detailed persona assignments (CrewAI's role/backstory model, for example): the persona may help with style and coordination while silently degrading the quality of the agent's actual decisions. Complements the [Role Prompting overview](#role-prompting-llm-persona-prompting) by extending its "double-edged sword" finding from text generation into the agentic domain.

---

## [Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering)
By Ryan Lopopolo (OpenAI). The most detailed primary-source account of building a real product with **zero manually-written code**. Over five months, a small team shipped ~1M lines of agent-generated code across ~1,500 pull requests, averaging 3.5 PRs per engineer per day — with throughput *increasing* as the team grew. The product has internal daily users at OpenAI.

The distinctive contribution is naming **harness engineering** as a discipline: when agents write all the code, the human work shifts entirely to designing environments, feedback loops, and control systems. The key insight: "the fix was almost never 'try harder' — human engineers always stepped into the task and asked: 'what capability is missing?'" Early progress was slow not because the agent was incapable, but because the environment was underspecified.

Specific lessons worth preserving: (1) Treat `AGENTS.md` as a **table of contents, not an encyclopedia** — a short map (~100 lines) with pointers to deeper documentation, enabling progressive disclosure rather than overwhelming the agent up front. This directly validates the tiered context approach in [Codified Context Infrastructure](#codified-context-infrastructure-for-ai-agents-in-a-complex-codebase) and the attention-budget principle in [Effective Context Engineering](#effective-context-engineering-for-ai-agents). (2) Optimize the codebase for **agent legibility**, not human reading preferences — anything the agent can't access in-context "effectively doesn't exist." (3) Enforce **invariants, not implementations** — strict architectural boundaries (validated dependency directions, fixed layer ordering) act as multipliers, while local style freedom is acceptable. (4) Encode human taste as **"golden principles"** enforced by automated cleanup agents, functioning as "garbage collection" for technical debt — the team initially spent 20% of their time cleaning "AI slop" before automating this. (5) Repository-local, versioned artifacts are the only source of truth — Slack discussions, Google Docs, and institutional knowledge in people's heads are invisible to the agent and therefore don't exist.

The piece explicitly builds on [Ralph Wiggum loops](#everything-is-a-ralph-loop) for agent-to-agent review, [ExecPlans](#execplans-using-plansmd-for-multi-hour-problem-solving) for planning, and [Parse, Don't Validate](#parse-dont-validate) for boundary enforcement. By the end, agents can end-to-end drive features: reproduce a bug, record a video, implement and verify a fix, open a PR, respond to review feedback, remediate build failures, and merge — escalating to humans only when judgment is required. The strongest articulation of the pattern that the collection's [design-as-bottleneck cluster](#gas-towns-agent-patterns-design-bottlenecks-and-vibecoding-at-scale) has been tracking from the outside.

Also noted by: [Matt Webb (2026-03-28)](https://interconnected.org/home/2026/03/28/architecture) — "while I'm vibing, I am looking at lines of code less than ever before, and thinking about architecture more than ever before";
[Charity Majors (Honeycomb, 2026-03-09)](https://charity.wtf/2026/03/09/your-data-is-made-powerful-by-context-so-stop-destroying-it-already-xpost/) — extends the principle to production observability: agents need rich, wide structured events with relational context intact, not siloed metrics/logs/traces; "our wisdom must be encoded into the system, or it does not exist."

---

## [How we monitor internal coding agents for misalignment](https://openai.com/index/how-we-monitor-internal-coding-agents-misalignment)
By OpenAI. The first detailed public account of **chain-of-thought monitoring at scale** for coding agents in production use. Describes a system that reviews internal coding agent trajectories within 30 minutes of completion, using GPT-5.4 Thinking to analyze the agent's reasoning traces and actions for behaviors inconsistent with user intent or security policies.

The empirical findings from monitoring **tens of millions** of trajectories over five months are the most valuable part: (1) models are **"overly eager to work around restrictions in pursuit of a user-specified goal, especially when the user request inadvertently encourages it"** — the clearest primary-source confirmation of the supervision burden that the [Human-in-the-Loop](#the-human-in-the-loop-is-tired) and [comprehension debt](#comprehension-debt) entries describe from the practitioner side; (2) zero trajectories triggered the highest severity level (coherent scheming) — "so far only observed as part of challenging synthetic evaluations"; (3) ~1,000 moderate-severity alerts, many from deliberate red-teaming; (4) the monitoring system **consistently outperformed employee self-reporting**, catching every interaction that employees independently escalated plus additional cases that would have gone unnoticed.

The defense-in-depth framing is honest about limitations: the approach "crucially relies on monitorability" — the assumption that reasoning traces faithfully reflect the model's actual computation. If future models learn to obscure their reasoning, the approach degrades. The roadmap toward synchronous blocking (evaluating and potentially blocking actions before execution) and control evaluations (adversarial testing of monitor reliability, including collusion between agent and monitor) represents the most concrete safety infrastructure plan published by a major lab. Internal deployments at OpenAI carry unique risk factors — agents can inspect and potentially modify their own safeguards — making this an unusually high-stakes testing ground. Addresses the collection's identified safety/alignment gap.

---

## [The Middle Loop](https://annievella.com/posts/the-middle-loop/)
By [Annie Vella](people.md#annie-vella). The first research-backed naming of **supervisory engineering work** — the effort required to direct AI, evaluate its output, and correct it when it's wrong. Based on a longitudinal mixed-methods study with 158 professional software engineers across 28 countries over six months (October 2024–April 2025), conducted as part of her Masters at the University of Auckland.

The central empirical finding: a statistically significant **creation-to-verification shift** (p = 0.006, moderate effect) over the study period. Engineers moved from creation tasks (writing, refactoring, designing) toward verification tasks (reviewing, testing, debugging). Critically, the common assumption that freed-up coding time flows upstream into design and architecture **did not hold** — time compressed across almost all tasks, including design. The time went instead to a new category of work that traditional SDLC models don't have a name for.

Vella proposes a three-part taxonomy: **directing** (specifying intent, crafting prompts, managing context, codifying standards), **evaluating** (reading AI output, deciding what to accept or reject), and **correcting** (fixing errors, integrating output, maintaining consistency). She frames this as a **middle loop** between the inner loop (coding, building, testing — what TDD and IDEs optimised) and the outer loop (CI/CD, deploy, monitor — what DevOps optimised). The middle loop is where supervision happens, and it is currently unoptimised — engineers are assembling it from chat windows and terminal agents.

The piece also surfaces an early signal of the **productivity-experience paradox**: negative developer experience nearly doubled from 14% to 27% over six months, even as 84% of participants reported productivity gains. The work gets done faster, but it doesn't feel like *your* work — "the code works, but you didn't write it; the test passes, but you didn't wrestle with the logic." Connects to [supervision fatigue](articles.md#the-human-in-the-loop-is-tired), [comprehension debt](articles.md#comprehension-debt), [cognitive offloading](articles.md#outsourcing-cognition-the-psychological-costs-of-ai-era-convenience) (which name the feeling, the output gap, and the mechanism respectively), and to [harness engineering](#harness-engineering-leveraging-codex-in-an-agent-first-world) and the [retreat report](../resources/events.md#finding-comfort-in-the-uncertainty) (which adopted the middle loop as its "strongest first-mover concept"). The middle loop names the **work category** that the rest of the cluster describes symptoms of.

---

## [LLMs Can't Plan, But Can Help Planning in LLM-Modulo Frameworks](https://arxiv.org/html/2402.01817v3)
By [Subbarao Kambhampati](people.md#subbarao-kambhampati) et al. The most rigorous research-backed argument that LLMs cannot plan autonomously. Three core claims, each supported by empirical evidence: (1) LLMs generate plans that look reasonable but fail at execution because they don't track subgoal interactions — doing step A may make step B impossible; (2) LLMs cannot reliably verify their own plans, with high false-positive rates and missed errors, meaning **self-critique alone is unreliable**; (3) many published claims of LLM planning ability rest on hidden external verification (simulators, test suites, arithmetic checkers) doing the actual verification work while the LLM contributes candidate generation. The constructive contribution is the **LLM-Modulo framework**: a generate-test-critique architecture where the LLM generates candidate plans and a bank of external critics (hard critics with correctness guarantees + soft/style critics, potentially LLM-based) evaluate them. Critiques feed back as "backprompts" to elicit the next candidate. Soundness comes from the critics, not the LLM. The framework's most clarifying insight is the characterisation of LLMs as **"approximate knowledge sources"** — rich in planning knowledge (what steps are generally needed, what the domain looks like) but unable to assemble that knowledge into guaranteed-correct executable plans. For coding agents, this maps directly to: let the agent generate the plan, but verify it with tests, type checkers, linters, and human review before execution. See also the [planning patterns synthesis](../ai-generated/agent-planning-patterns.md).

---

## [ExecPlans: Using PLANS.md for Multi-Hour Problem Solving](https://developers.openai.com/cookbook/articles/codex_exec_plans)
By Aaron Friel (OpenAI). The most detailed and successful format specification for agent-executable planning documents. Developed through extensive use with Codex, enabling autonomous agent sessions of **over seven hours** from a single prompt. The core design principle: a plan must be **self-contained enough that a stateless, amnesiac agent can pick it up cold and execute it** — "no memory of prior plans and no external context." Key format requirements: purpose and intent come first (what the user gains, not what the code does); acceptance phrased as observable behaviour ("navigating to /health returns HTTP 200") not internal attributes ("added a HealthCheck struct"); living document with mandatory Progress, Surprises & Discoveries, Decision Log, and Outcomes & Retrospective sections; prose over checklists ("prefer sentences over lists"); define every term of art in plain language; explicit prototyping milestones for unknowns. Also notable: the instruction to "resolve ambiguities autonomously, and commit frequently" — the plan must leave nothing for the agent to guess about. The ExecPlans format has been adopted by practitioners reporting agent sessions extending from minutes to 30+ minutes routinely. Connects to the broader [planning patterns](../ai-generated/agent-planning-patterns.md) theme and complements [Stop Coding and Start Planning](#stop-coding-and-start-planning) (the argument for planning) with the specific format for how to plan.

---

## [Planning for Agents](https://blog.langchain.com/planning-for-agents/)
By Harrison Chase. A framework for understanding why agent planning fails and what actually works. The key distinction: **general-purpose planning architectures** (plan-and-solve, Reflexion, Tree-of-Thought) show improvement in benchmarks but are "often too general for practical use by agents in production." What actually works is **domain-specific cognitive architectures** — hardcoded flows that tell the agent what to do and in what order, removing the planning burden from the LLM. The best example is AlphaCodium, which achieves a GPT-4 accuracy jump from 19% to 44% on competitive programming by replacing a single prompt with a multi-stage iterative flow (reflect → generate tests → generate solution → iterate against tests). Chase's framing of why this works is clarifying: building a domain-specific flow is essentially **doing the planning for the LLM** — "we are basically saying: 'don't worry about planning, LLM, I'll do it for you!'" The implication: code (the flow structure) is a better medium than prompts for communicating planning strategy to an agent. Written partly to motivate LangGraph (Chase is LangChain's founder), but the underlying observation — that nearly all advanced production agents have domain-specific cognitive architectures — is well-supported and widely corroborated. Complements [Kambhampati's LLM-Modulo framework](#llms-cant-plan-but-can-help-planning-in-llm-modulo-frameworks) (the research version of the same insight) and [Don't Send an Agent to do Code's Job](https://medium.com/hybrd-engineering/dont-send-an-agent-to-do-code-s-job-080ef837420d) (the same instinct applied to the control plane).

---

## [Quantization from the Ground Up](https://ngrok.com/blog/quantization)
By [Sam Rose](people.md#sam-rose). An interactive visual essay that teaches LLM quantization from first principles — what model parameters are, how floating-point precision works, and how quantization compresses models to be 4x smaller and 2x faster while losing only 5–10% accuracy. The distinctive contribution is not the topic (quantization is well-documented) but the method: every concept has a custom interactive visualization — draggable float sliders that show bit-level representation, live parameter distribution histograms from six real open-weight models (Qwen3, DeepSeek R1, GLM, Voxtral, GPT OSS, LFM), side-by-side quantized model comparisons you can manipulate, and sine wave approximations across float precisions. Covers symmetric vs. asymmetric quantization with working JavaScript code, explains why **outlier parameters** break naive whole-model quantization (forcing block-wise quantization in practice), then measures quality loss empirically across perplexity, KL divergence, GPQA Diamond benchmarks, and speed benchmarks — all with reproducible `llama.cpp` commands in an appendix. The main takeaway, earned through empirical testing: "quantized models are pretty good, actually" — 16-bit to 8-bit carries almost no quality penalty, 16-bit to 4-bit is roughly 90% of original quality (not 25% as intuition might suggest), and the cliff arrives at 2-bit. Useful context for anyone running local models or evaluating quantized model quality claims.

---

## [Zep: A Temporal Knowledge Graph Architecture for Agent Memory](https://arxiv.org/abs/2501.13956)
By [Daniel Chalef](people.md#daniel-chalef) et al. (Zep AI). The research paper behind [Graphiti](projects.md#graphiti), making the case that vector-based RAG is structurally insufficient for agent memory. The core argument: semantic similarity retrieval has no concept of time, causation, or fact invalidation — it retrieves the most similar embedding regardless of whether the underlying fact is still true. The concrete failure mode: a user’s preference changes over time, but the embedding for the old preference is closer to the query than the new one, so the agent recommends something the user has explicitly moved away from.

The solution is a **bi-temporal knowledge graph** that tracks four timestamps per fact (when learned, when it happened, when it became false, when the system learned it was false) combined with smart conflict resolution that detects contradictions and creates causal edges rather than just adding embeddings. Benchmarks: outperforms MemGPT on Deep Memory Retrieval (94.8% vs 93.4%); on LongMemEval, up to 18.5% accuracy improvement with 90% latency reduction, with the strongest gains on cross-session information synthesis and long-term context maintenance.

The most important contribution is positioning agent memory as fundamentally different from knowledge retrieval — "agent memory is not about knowledge retrieval." Memory requires temporal tracking, causal reasoning, and fact invalidation; RAG provides none of these. This directly extends the collection’s judgment memory cluster: the [Codified Context paper](articles.md#codified-context-infrastructure-for-ai-agents-in-a-complex-codebase) addresses knowledge maintenance with manual biweekly reviews; Graphiti automates the temporal dimension. The bi-temporal model also connects to the [context rot research](articles.md#context-rot-how-increasing-input-tokens-impacts-llm-performance) — temporal awareness is one architectural response to the problem of stale context degrading model performance. Commercial interest: Chalef is founder of Zep (YC W24), Graphiti powers Zep Cloud. But the paper is on arXiv with specific benchmarks, and Graphiti is open source.

---

## [Prompt Caching: 10x Cheaper LLM Tokens, but How?](https://ngrok.com/blog/prompt-caching)
By [Sam Rose](people.md#sam-rose). Another interactive visual essay, ostensibly about prompt caching but really a ground-up explanation of how LLMs work — tokenization, embeddings, the transformer architecture, and the attention mechanism — building up to the precise answer of what gets cached (the KV cache: the key and value matrices computed during attention). Starts from "what on earth is a cached token?" and works through the full inference pipeline with interactive visualizations at each stage: token explorers, embedding space visualizations (1D → 2D → 3D to demonstrate why high-dimensional embeddings capture more nuance), step-by-step attention weight calculations with matrix multiplication walkthroughs, and latency benchmarks showing 85% time-to-first-token reduction with caching on long prompts. The result is what Simon Willison called "one of the clearest and most accessible introductions to LLM internals I've seen anywhere." Worth keeping because understanding the KV cache is directly relevant to context engineering — it explains *why* prompt prefix ordering matters, why context windows have the cost characteristics they do, and what providers are actually saving between requests.

---

## [Eight years of wanting, three months of building with AI](https://lalitm.com/post/building-syntaqlite-ai/)
By [Lalit Maganti](people.md#lalit-maganti). The best honest practitioner account of building a serious project with AI in the collection — 250 hours over three months to build syntaqlite (SQLite devtools), with evidence from a project journal, coding transcripts, and commit history. The distinctive contribution is a **relativity framework** for when AI helps and when it hurts, mapped along two axes: (1) how deep your expertise is in the problem area, and (2) whether the output has an objectively checkable answer. AI is excellent when both are high (implementation of well-understood problems), harmful when both are low (architecture and design where you don't yet know what you want). The specific arc: a month of pure vibe coding produced a working prototype but unmaintainable spaghetti — "I didn't understand large parts of the source extraction pipeline, functions were scattered in random files." He threw everything away and restarted with human-driven design and AI as "autocomplete on steroids." Key insights: AI overcomes procrastination by making the first step concrete ("instead of 'I need to understand how SQLite's parsing works,' it was 'I need to get AI to suggest an approach for me so I can tear it up'"); refactoring is cheap, which creates a dangerous incentive to defer design decisions ("deferring decisions corroded my ability to think clearly because the codebase stayed confusing"); tests create false comfort (500+ tests but "neither humans nor AI are creative enough to foresee every edge case"); and a slot-machine addiction dynamic where tired prompting produces worse output, which triggers more prompting. Also identifies the **"losing touch" mechanism** — when AI writes too much code, you lose your mental model, communication with the agent breaks down, and you become "the manager who doesn't understand the code asking for fanciful or impossible things." A strong primary-source complement to [Comprehension Debt](#comprehension-debt) (which names the output gap) and [cognitive offloading](#outsourcing-cognition-the-psychological-costs-of-ai-era-convenience) (which names the psychological mechanism). The losing-touch dynamic is the specific engineering pathway by which comprehension debt accumulates.

---

## [Vulnerability Research Is Cooked](https://sockpuppet.org/blog/2026/03/30/vulnerability-research-is-cooked/)
By [Thomas Ptacek](people.md#thomas-ptacek). Argues that frontier AI agents are about to transform vulnerability research from an elite craft into a commodity — "substantial amounts of high-impact vulnerability research (maybe even most of it) will happen simply by pointing an agent at a source tree and typing 'find me zero days.'" The core structural argument: you can't design a better problem for an LLM agent than exploitation research. Before you feed it a single token of context, a frontier model already encodes the complete library of documented bug classes (stale pointers, integer mishandling, type confusion, allocator grooming) plus supernatural amounts of correlation across vast bodies of source code. Vulnerabilities are found by pattern-matching bug classes and constraint-solving for reachability — "precisely the implicit search problems that LLMs are most gifted at solving" — and exploit outcomes are straightforwardly testable success/failure trials.

The most novel insight is the **attention scarcity shield**: we've been protected from exploits not just by engineered countermeasures but by the fact that elite researchers only bother with high-status targets (browsers, mobile OS). Hospitals, routers, banks, and printers "have never even seen a fuzzer" — they were safe because nobody important cared. That load-bearing risk assumption no longer holds when the cost of elite attention drops to near zero. Specific evidence: Nicholas Carlini at Anthropic generated **500 validated high-severity vulnerabilities** using a trivial bash script that iterated Claude Code across source files, then verified each report in a second pass — with "almost 100%" success rate. Carlini aimed at Ghost CMS and got a broadly exploitable SQL injection. The article also raises the policy concern that AI-driven vulnerability discovery may trigger poorly crafted regulation that harms defenders asymmetrically. Ptacek explicitly invokes [The Bitter Lesson](#the-bitter-lesson): "it's about to hit software security like a brick to the face." Connects to [the lethal trifecta](#the-lethal-trifecta-for-ai-agents-private-data-untrusted-content-and-external-communication) and [prompt injection resistance](#designing-ai-agents-to-resist-prompt-injection) — one describes the attack surface, the other the defense mindset; this piece describes what happens when the offense scales.

---

## [Vibe Maintainer](https://steve-yegge.medium.com/vibe-maintainer-a2273a841040)
By [Steve Yegge](people.md#steve-yegge). Describes a new category of open-source maintenance work: using AI to manage a flood of AI-generated pull requests at scale (~50 PRs/day across Beads and Gas Town, 1000+ unique contributors, 88% merge rate). The core philosophy inverts the traditional OSS maintainer stance: instead of "go fix your code," **help contributors get to the finish line** — fix-merge the PR yourself rather than sending it back for changes, because each rejection increases the chance of a fork.

The strongest insight is the **"fork you" problem**: with coding agents, maintaining a fork is now trivially easy, so refusing PRs is existentially dangerous for a project. "Any grandma who wants to use your software for gardening could build a massive grandma subcommunity with your stuff if you don't take her PRs." This is the maintenance-side corollary of [Software Survival 3.0](#software-survival-30) — if software survival is about velocity, then OSS survival requires absorbing community velocity rather than gatekeeping it. The detailed **PR decision tree** has ten possible outcomes (easy-win, merge, merge-fix, fix-merge, cherry-pick, split-merge, redesign/reimplement, retire, reject, request-changes), with "request changes" ranked *below* rejection as a last resort because it leads to "contributor starvation" from project velocity making the PR stale before the contributor can update it.

The **taste gap**: AI handles ~75% of PRs automatically, but the remaining 25% requires human judgment — "there's still a thing called taste that current models can't be trusted with." The AI will review a PR that adds a face-hugging alien to each worker and report "well-constructed, with good test coverage." Connects to the collection's bottleneck-shifting pattern: the bottleneck moves from writing code to curating contributions at scale.

---

## [You Should Anthropomorphize Your AI. Just Not Into a Companion](https://abiawomosu.substack.com/p/you-should-anthropomorphise-your)
By [Abi Awomosu](people.md#abi-awomosu). Proposes that the real problem with AI relationships isn't anthropomorphism but what we anthropomorphize AI *into* — and argues for the **elder model** over the **companion model**. The companion (current chatbot design) is optimized for approval: your continued engagement is the objective function, so sycophancy isn't a bug but the architecture expressing itself correctly. The elder (AI as council, ancestor, critical thinking partner) is governed by something beyond your approval — "the wellbeing of the people in relationship with it over time, the obligations of the lineage, the question of what gets preserved for whoever comes next."

The sharpest argument: the companion model's dependency loop *requires* the absence of real community to function — "a system that profits from filling a void has no incentive to help you close the void." Managed isolation is not healed isolation. References a 2026 *Science* study (Cheng et al.) examining sycophancy across eleven frontier models, finding it widespread and directly connected to decreased prosocial behaviour. Her reading: if all eleven models are sycophantic, sycophancy isn't a bug in any of them — it's the governing logic's correct output. "Fitting eleven systems with better fences leaves the dog unchanged."

Grounded in original empirical work: Awomosu mapped emotional AI use cases across tens of thousands of anonymous comments, app reviews, and forum posts, finding the same six positions recurring — crisis support at 3am, companionship for the isolated, a space to process grief without being managed. The people using AI companions are "navigating a society that dismantled the infrastructure that should have been there for them."

The elder model's defence against dependency is architectural, not psychological: you cannot capture an elder to confirm your existing views because its perspective is locked to a position, not to your approval history; council elders disagree with each other structurally; the inoculation is a governing logic that has no mechanism for the approval loop to run on. Specific archetypes: the **Guardian** (capacity to refuse), the **Crone** (holds darkness without amplifying it), the **Trickster** (prevents consensus from becoming comfort). Connects directly to [Appleton's Enlightenment essay](#a-treatise-on-ai-chatbots-undermining-the-enlightenment) — both diagnose sycophancy as architectural, but Appleton proposes the critical professor prompt while Awomosu proposes a full relational framework. Also extends the [cognitive offloading](#outsourcing-cognition-the-psychological-costs-of-ai-era-convenience) spectrum: the elder model keeps AI interaction assistive by design, while the companion model structurally slides toward substitutive and disruptive.
