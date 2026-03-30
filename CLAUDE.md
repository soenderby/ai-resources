# Agent Instructions

This is a personal knowledge base about AI, LLMs, and agents. It is maintained by Jakob (@soenderby), a software developer, and shared across machines and with others.

---

## About the Curator

**Purpose**: Personal learning and staying current in a fast-moving field. A secondary purpose is being able to trace ideas back to their source — to know not just what an idea is, but where it came from and who developed it.

**Interests**: Broad and genuine. All aspects of the subject are interesting — agent orchestration and patterns, the human and psychological dimensions of working with AI, technical architecture, non-technical industry adoption, critical and alternative perspectives. The only constraint on breadth is cognitive capacity, not curiosity.

**The primary audience** is Jakob himself, and other technically-minded people — software developers who follow the space seriously.

**A secondary audience** is people who are interested but don't have a deep technical background. When writing annotations, clarity always beats brevity. Avoid assuming the reader knows the jargon. A well-written annotation should be understandable to an intelligent person who isn't a developer — this is also just good writing.

**The anti-hype filter**: AI is a popular topic with significant commercial interest behind it. Many people talk a lot without adding value — they are positioning themselves, not contributing to understanding. The question to ask of any source is: *does this person add genuine signal, or are they capitalising on the topic's popularity?* Primary sources are strongly preferred over commentary and roundups. People who build things and write about what they actually learned are preferred over people who write about what others built. Healthy skepticism and critical perspectives are as valuable as enthusiastic ones.

---

## Start of Session

When beginning a session in this repo, do a **staged orientation** so you do not load unnecessary context up front:

1. **Always read `librarian-notes.md`** (this directory) — the hot memory layer: running notes across sessions, current curatorial decisions, active patterns, gaps, open questions.
2. **Read `resources/index.md`** — compact inventory of who and what is already tracked.
3. **Read full canonical files only when the task needs them**:
   - `resources/people.md` for person additions, updates, or person/article/project cross-links
   - `resources/articles.md`, `resources/books.md`, and/or `resources/projects.md` when adding entries, checking duplicates in detail, or doing broad gap analysis
4. **Use `librarian-archive.md` selectively, not by default**. Read it only when:
   - the task is broad synthesis, repo history, or repo-organization work
   - `librarian-notes.md` or another file points to archived background
   - the task clearly matches an archived theme; in that case, search the archive headings/tags first and read only the relevant section(s)
5. **Read `ai-generated/README.md` before opening anything in `ai-generated/`**.
6. **Read only the specific generated docs relevant to the task**. Do **not** read the whole `ai-generated/` directory by default. A repo-wide pass across generated docs is only warranted for broad synthesis, repo-organization, or derived-layer maintenance work.

Skipping even the compact orientation means working blind to what's already in the collection.

---

## Repo Structure

```
ai-resources/
├── README.md
├── CLAUDE.md              ← you are here
├── librarian-notes.md     ← hot memory read at session start
├── librarian-archive.md   ← archived memory; read selectively via archive map / search
├── .gitignore
├── ai-generated/
│   ├── README.md          ← compact manifest for generated docs; read this first
│   └── ...                ← generated syntheses, analyses, templates
├── agent-skills/          ← reusable skills for pi and Claude Code
└── resources/
    ├── index.md           ← compact inventory of tracked people, articles, events, books, projects
    ├── articles.md        ← durable articles: concepts, frameworks, techniques, named ideas
    ├── events.md          ← time-bound pieces: industry events, incident reports, annual reviews, dated snapshots
    ├── books.md           ← book-length sources worth keeping
    ├── glossary.md        ← AI terms under active semantic diffusion, with precise meanings and drift notes
    ├── people.md          ← people worth following, with all their links
    └── projects.md        ← open source projects and tools
```

---

## Adding Resources

### Workflow

1. **Fetch and read the source first.** Use `agent-skills/brave-search/content.js <url>` or the browser-tools skill. Never annotate from a URL alone. When the agent drafts an annotation, the curator is encouraged to engage with the source directly — reading it, not just reviewing the summary. An annotation that exists without understanding behind it is a form of debt, not an asset. When evaluating sources or writing annotations, note any concerns honestly. If a source seems below the collection's quality bar, or an annotation seems vague or topic-level rather than idea-level, say so. The curator benefits from the agent's observations, not just its execution.
2. **Write a meaningful annotation** — see quality guidelines below.
3. **Place in the right file** — articles.md for durable concepts/frameworks/techniques, events.md for time-bound pieces (industry events, incident reports, annual reviews, dated snapshots), books.md, people.md, or projects.md. The test: if the primary value depends on *when* it was written — if reading it in two years without that date would be misleading — it's an event.
4. **Update cross-links** — if a person entry exists, add their article/event/book/project to their entry. If an article or event is by someone in people.md, link to them with `[Name](people.md#name)`. In people.md, use separate `Articles:` and `Events:` lines when a person has entries in both files.
5. **Update `librarian-notes.md`** if the session surfaced something worth remembering — a decision, a pattern, a gap, something explicitly rejected and why.
6. **Note connections.** When adding an entry, check whether it strengthens, complicates, or contradicts something already in the collection. Record significant connections in `librarian-notes.md`. Accumulation is the default; synthesis requires deliberate effort.
7. **Update `glossary.md`** if a source uses a term precisely that the glossary tracks, or if a source demonstrates semantic diffusion of an AI term. The glossary is selective — only terms where the meaning drift matters for understanding the collection.
8. **Commit** with a short descriptive message in present tense.

### Entry Formats

**Person** (`resources/people.md`):
```markdown
## Name
- Link label: url
- Link label: url

Who they are and what makes them worth following. What angle or perspective do they bring that others don't? 1–3 sentences.
```

**Article** (`resources/articles.md`):
```markdown
## [Title](url)
By [Author](people.md#author). What the piece is about and why it belongs here. Capture the specific insight, not just the topic. Note connections to other entries if relevant.
```

**Event** (`resources/events.md`):
```markdown
## [Title](url)
*YYYY-MM*

By [Author](people.md#author). What the piece captures and why it's worth preserving as a dated record. Events are time-bound: industry events, incident reports, annual reviews, state-of-field assessments, and empirical snapshots whose value depends on when they were written.
```

**Book** (`resources/books.md`):
```markdown
## [Title](url)
By [Author](people.md#author). What the book contributes that makes it worth preserving here. Capture the distinctive idea or lens, not just the topic.
```

**Project** (`resources/projects.md`):
```markdown
## [Project Name](url)
By [Author](people.md#author). What the project does and what's novel or interesting about it. Why does it belong in this collection specifically?
```

Separate all entries with `---`.

### What Makes a Good Annotation

- **Capture the specific idea, not the general topic.** "Article about AI agents" is useless. "Coins the term 'lethal trifecta' for agents that have private data access + external communication + exposure to untrusted content" is useful.
- **Apply the "So What?" test.** Why does this source matter to the collection? An annotation should make clear not just what the piece says, but what the reader gains from knowing about it and how it connects to what's already here.
- **Be specific rather than vague.** A clear, specific annotation serves the reader better than a broad one, even if the source itself is tentative or exploratory. "Proposes that open-source AI models may function as economic weapons between nation-states" is specific. "Discusses geopolitics and AI" is vague. Specificity is about precision, not forcefulness.
- **Note what's distinctive.** Why is this worth tracking over the hundreds of similar things that exist?
- **Note connections** to other entries in the collection when they exist.
- **Write for clarity.** Assume the reader is intelligent but may not know the jargon.
- **Personal perspective is appropriate.** This is a personal knowledge base, not a neutral directory.

### What NOT to Add

- Roundups and newsletters that are mostly summaries of other people's work
- People who write about AI primarily to position themselves rather than to share what they've learned
- Generic tutorials and explainers (unless exceptionally clear and well-crafted)
- Anything you haven't read
- Hot takes, hype, content driven by commercial interest rather than genuine insight

### Corroboration: "Also noted by"

A source that makes the same point as an existing entry doesn't warrant a standalone entry — but the fact that the point is made independently elsewhere is itself useful information. Convergence across different practitioners, contexts, or disciplines is a signal of robustness, not redundancy.

When a reviewed source corroborates an existing entry without adding a new idea, record it as an **"Also noted by"** line at the end of the canonical entry's annotation:

```markdown
Also noted by: [Author (context, date)](url) — brief note on what angle they bring;
[Another author](url) — brief note on their angle.
```

Rules:
- **The source must have been read.** No blind links. The corroboration line is lightweight, but it still carries the collection's implicit guarantee that someone evaluated the source.
- **Different context or voice.** "Same person says the same thing again" doesn't qualify. "Different practitioner arrives at the same conclusion from different experience" does.
- **Brief.** Each corroboration is a sentence fragment, not a paragraph. Name the who and the angle, nothing more.
- **Link internally when possible.** If the corroborating source is already a full entry in the collection, link to it rather than to the external URL.
- **External links for non-entries.** Sources that aren't full entries get a URL so the reader can follow the thread.

This gives rejected sources a home when they have genuine corroborative value, without lowering the bar for standalone entries.

---

## Librarian Memory

The repo has two memory layers:

- **`librarian-notes.md`** — hot memory, read at session start
- **`librarian-archive.md`** — archived memory, read selectively via its archive map / tags / headings

Update `librarian-notes.md` when:

- A curatorial decision is made that isn't obvious from the guidelines — especially rejections and why
- A connection between entries is noticed that isn't captured in the files themselves
- A gap in the collection is identified worth tracking
- Something significant is learned about the field that should inform future curation
- The curator explicitly says something that reveals taste or preference worth preserving

### Archive policy

Review `librarian-notes.md` for archiving when it starts becoming startup-heavy (roughly >220 lines or >10k tokens, or when a cleanup pass is already underway).

Keep in `librarian-notes.md`:
- recent entries that are still likely to affect near-term work
- active gaps and open questions
- standing curatorial rules or preferences likely to matter in ordinary sessions
- anything repeatedly useful enough to deserve hot-memory status

Move to `librarian-archive.md`:
- older entries whose main value is historical context
- closed investigations and one-off observations
- detailed background on a theme that no longer needs to be loaded every session

When archiving:
- preserve the original dated entry text in `librarian-archive.md`
- place it under a thematic heading with searchable tags
- keep an archive-map summary near the top of `librarian-archive.md` so future agents can decide what to open
- leave a short hot-memory note behind only if the archived material still has an active implication

Keep entries short. `librarian-notes.md` is a memory aid, not a journal. Date each entry.

---

## ai-generated/ Directory

Documents produced by AI agents — synthesis, analysis, pattern extraction. Each file should include at the top:

```markdown
> Generated by <model> on <YYYY-MM-DD>.
```

File names: descriptive, lowercase, hyphen-separated. These are snapshots of understanding at a point in time and will become outdated as the field moves.

Generated essays and syntheses benefit from at least one critical review pass before being considered done. The review should test: does the essay identify genuine weaknesses in its own argument? Does it engage seriously with counterarguments, or does it raise objections only to dismiss them? Are gaps in evidence stated honestly?

---

## General Conventions

- **Prefer simplicity.** Content here is meant to be readable and shareable.
- **Suggest structure organically.** Only propose new directories when there is actual content that warrants them. Don't create empty scaffolding.
- **Use Markdown** for all documentation and notes.
- **File names:** lowercase, hyphen-separated (e.g. `rag-overview.md`).
- **Branch:** `main`
- **Commit messages:** short, descriptive, present tense (e.g. `Add Karpathy 2025 year in review`).
