# Glossary

Terms under active [semantic diffusion](articles.md#semantic-diffusion) in AI. Not a dictionary — only terms where the meaning has drifted enough that the distinction matters for understanding the sources in this collection.

Each entry has a precise meaning (attributed to whoever coined or defined it best), notes on how the term is commonly used to mean something different, and why the gap matters.

---

## Agent

**Precise meaning**: An autonomous system with a control loop — it can observe results and decide what to do next, rather than just responding once. [Lilian Weng's decomposition](articles.md#llm-powered-autonomous-agents) breaks this into four components: planning (subgoal decomposition, reflection), memory (short-term and long-term), tool use (APIs, code execution, search), and action. The defining feature is the loop: the system acts, observes the result, and decides its next action based on what happened.

**Common drift**: Applied to anything involving an LLM — chatbots with system prompts, single-shot API calls with tools, pipelines with no decision-making. "We built an agent" often means "we put an LLM in a function."

**Why it matters**: The distinction between a system that can *decide what to do next based on what happened* and one that just *responds once* is fundamental. The challenges of agent systems — reliability, oversight, cost control, alignment — arise specifically from the loop. Calling everything an "agent" obscures whether you're dealing with those challenges or not. See also [agentic](#agentic).

---

## Agentic

**Precise meaning**: Having the properties of an [agent](#agent) — autonomy, a control loop, tool use, the ability to observe results and adjust course. Describes a system or workflow where the AI makes decisions about what to do next rather than simply responding to a single prompt.

**Common drift**: Marketing adjective for anything involving an LLM. "Agentic search," "agentic workflows," "agentic RAG" — often describing straightforward pipelines with no meaningful autonomy or decision-making.

**Why it matters**: When everything is "agentic," the word stops helping you distinguish between systems that genuinely need the oversight, reliability, and safety patterns that autonomous agents require and systems that are just multi-step pipelines. The [Emerging Principles of Agent Design](articles.md#emerging-principles-of-agent-design), [Building Effective AI Agents](articles.md#building-effective-ai-agents), and [Don't Build Multi-Agents](articles.md#dont-build-multi-agents) all implicitly depend on a precise understanding of what makes something agentic.

---

## AGI (Artificial General Intelligence)

**Precise meaning**: A system capable of performing any intellectual task that a human can. The term has been used since at least the mid-2000s to distinguish *general* intelligence from the narrow AI that succeeds at specific tasks.

**Common drift**: Each major lab defines AGI in a way that conveniently approaches whatever they're about to announce. OpenAI's internal definition has shifted over time. Google DeepMind proposed a [levelled taxonomy](https://arxiv.org/abs/2311.02462) from "Emerging" to "Superhuman" AGI, which some argue dilutes the concept by calling early-stage systems "AGI" with a qualifier. The term is also used loosely in public discourse to mean "AI that's really impressive."

**Why it matters**: If "AGI" can mean anything from "better than most humans at most things" to "slightly better than GPT-4 at coding benchmarks," it becomes impossible to evaluate claims about progress toward it. The safety and alignment concerns tracked in this collection ([Yudkowsky](people.md#eliezer-yudkowsky), [Russell](people.md#stuart-russell), [Christiano](people.md#paul-christiano)) are specifically about *general* intelligence — systems that can pursue goals across domains. Redefining AGI downward to mean "next year's model release" makes those concerns harder to reason about.

---

## Alignment

**Precise meaning**: The technical problem of ensuring that AI systems pursue the objectives intended by their designers, especially as systems become more capable. The core challenge: a system that is very good at pursuing goals that are *almost but not quite* what we intended could be worse than one that is simply incompetent. [Stuart Russell](people.md#stuart-russell) frames this as the problem of machines that are "beneficial to humans" rather than machines that "optimize a given objective." [Paul Christiano](people.md#paul-christiano) works on scalable approaches to alignment that could work even for systems smarter than their overseers.

**Common drift**: Used to mean general "AI safety," product-level content moderation, brand trust, or simply "making the model do what the user wants." An RLHF fine-tuning pass is sometimes described as "alignment" when it's closer to preference tuning.

**Why it matters**: The drift matters because the *hard* problem of alignment — ensuring that very capable systems remain beneficial even when they can find clever ways around constraints — is genuinely different from the *easier* problem of making a chatbot refuse harmful requests. Collapsing both into "alignment" makes it harder to talk about either one precisely. The [Alignment Forum](articles.md#the-alignment-forum), [AGI Ruin](articles.md#agi-ruin-a-list-of-lethalities), and the [agent misalignment monitoring](articles.md#how-we-monitor-internal-coding-agents-for-misalignment) entry in this collection all use the term in the technical sense.

---

## Context engineering

**Precise meaning**: The discipline of designing what information reaches the model and in what form — not just the prompt text, but the full pipeline of retrieval, ordering, formatting, and pruning that determines what the model sees. [Anthropic's guide](articles.md#effective-context-engineering-for-ai-agents) treats this as the central skill of agent development: "the difference between a demo and a production system often comes down to context engineering."

**Common drift**: Used as a synonym for prompt engineering, or simply "writing a system prompt." The distinction is that prompt engineering is about crafting instructions; context engineering is about the full information architecture — what gets retrieved, what gets summarised, what gets dropped, and in what order.

**Why it matters**: The sources in this collection that deal with agent reliability — [harness engineering](articles.md#harness-engineering-leveraging-codex-in-an-agent-first-world), [context rot](articles.md#context-rot-how-increasing-input-tokens-impacts-llm-performance), [codified context](articles.md#codified-context-infrastructure-for-ai-agents-in-a-complex-codebase), [ExecPlans](articles.md#execplans-using-plansmd-for-multi-hour-problem-solving) — all operate at the context engineering level, not the prompt engineering level. Treating these as the same thing misses the architectural dimension of the problem.

---

## Hallucination

**Precise meaning**: A model generating confident, fluent output that is factually incorrect or entirely fabricated. The output *looks* right — it has the form and style of a correct answer — but the content is wrong. The term is borrowed from psychology, where hallucination means perceiving something that isn't there.

**Common drift**: Sometimes used to mean any error a model makes. Sometimes anthropomorphised as the model "lying" or "being creative." The term itself has been criticised for implying the model has a perception of reality that it's deviating from, when in fact it's doing statistical next-token prediction and has no model of truth. "Confabulation" (generating plausible but false narratives to fill gaps) is arguably a better analogy.

**Why it matters**: The anthropomorphisation matters because it implies the model *could* tell the truth if it tried harder, which misframes the problem. Hallucination is a structural property of how language models work, not a bug to be fixed with more effort. Understanding this correctly affects how you design verification and oversight — you need external grounding (tests, retrieval, human review), not just better prompts asking the model to "be more careful."

---

## Multi-agent

**Precise meaning**: A system where multiple autonomous agents coordinate to accomplish a task, each with their own loop, tools, and decision-making. The agents interact — delegating subtasks, sharing results, negotiating — rather than simply being called in sequence.

**Common drift**: Any system with more than one LLM call. A pipeline that calls one model to summarise and another to classify is sometimes described as "multi-agent" when there's no coordination, no shared state, and no decision-making between the models.

**Why it matters**: The collection tracks a productive tension on this topic: [Anthropic's multi-agent research system](articles.md#how-we-built-our-multi-agent-research-system) uses genuine multi-agent coordination for breadth-first exploration, while [Cognition argues against multi-agents](articles.md#dont-build-multi-agents) for depth-first coherence-heavy execution. Both positions depend on "multi-agent" meaning actual autonomous agents coordinating — not just a pipeline with multiple steps.

---

## RAG (Retrieval-Augmented Generation)

**Precise meaning**: A specific architecture where a retrieval step searches a knowledge base for relevant documents, which are then included in the model's context before generation. The key property: the model's output is *grounded* in retrieved evidence rather than relying solely on its training data. Originally described by Lewis et al. (2020) as a way to give models access to knowledge that wasn't in their training set.

**Common drift**: Applied to any form of giving an LLM external context — pasting text into a prompt, uploading a file, or even fine-tuning on domain data. "We do RAG" sometimes just means "we include some context."

**Why it matters**: The distinction between *retrieval* (searching a large corpus, selecting relevant chunks, dealing with embedding quality and chunk boundaries) and *just including context* matters because the engineering challenges are different. RAG systems have failure modes around retrieval quality, chunk size, embedding drift, and relevance ranking that don't exist when you're just pasting a document into a prompt. Calling both "RAG" hides the complexity of the retrieval step.

---

## Reasoning

**Precise meaning**: The ability to derive new conclusions from known premises through logical inference, planning, and problem decomposition. In the context of AI, genuine reasoning would mean the system can handle novel problems by breaking them down, tracking constraints, and verifying that intermediate steps are consistent.

**Common drift**: Applied to any model that produces chain-of-thought output — visible intermediate steps before a final answer. Because chain-of-thought often *looks like* reasoning (step-by-step explanations, "let me think about this"), the output format is conflated with the cognitive process. Models marketed as "reasoning models" (o1, o3, R1) produce longer chains of thought, which is interpreted as deeper reasoning.

**Why it matters**: [Kambhampati's research](articles.md#llms-cant-plan-but-can-help-planning-in-llm-modulo-frameworks) is the sharpest source on this distinction: LLMs have rich *knowledge about* reasoning and planning (they can describe what a good plan looks like) but cannot reliably *execute* reasoning (their plans fail when subgoal interactions create constraints). The generated plans look reasonable but break under verification. This matters practically: if you believe a model can reason, you trust its plans and conclusions. If you understand it's doing approximate retrieval of reasoning-shaped text, you add external verification — tests, type checkers, human review. The entire [planning cluster](../ai-generated/agent-planning-patterns.md) in this collection rests on this distinction.

---

## Vibe coding

**Precise meaning**: Coined by [Andrej Karpathy](people.md#andrej-karpathy) (February 2025) to describe a specific way of programming with AI: you describe what you want in natural language, accept the code the AI generates without reading it carefully, and iterate by pasting error messages back in. The defining characteristic is **not reviewing the code** — you go with the vibes. Karpathy framed it as fun, useful for prototypes and personal scripts, and explicitly not engineering.

**Common drift**: Already used to mean any use of AI for coding, regardless of how much review, planning, and oversight is involved. A senior engineer who writes specs, reviews every diff, and runs test suites is described as "vibe coding" simply because AI generated the code. This conflation has prompted efforts to reclaim the distinction — Karpathy himself more recently suggested **"agentic engineering"** for the disciplined version, and [Osmani mapped the full spectrum](https://addyosmani.com/blog/agentic-engineering/) from vibe coding (no review, prototype-only) through AI-assisted engineering to agentic engineering (AI implements, human owns architecture and correctness).

**Why it matters**: Collapsing "weekend prototype I didn't review" and "production system built with AI under engineering discipline" into the same term makes it impossible to have a useful conversation about when AI-assisted development works and when it doesn't. The sources in this collection that deal with quality — [comprehension debt](articles.md#comprehension-debt), [supervision fatigue](articles.md#the-human-in-the-loop-is-tired), [code distance](articles.md#gas-towns-agent-patterns-design-bottlenecks-and-vibecoding-at-scale) — all depend on the distinction between accepting code you don't understand and reviewing code you didn't write.
