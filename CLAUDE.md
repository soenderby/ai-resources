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

1. **Always read `librarian-notes.md`** (this directory) — running notes across sessions: curatorial decisions, patterns noticed, gaps, open questions. This is the closest thing to memory across sessions.
2. **Read `resources/index.md`** — compact inventory of who and what is already tracked.
3. **Read full canonical files only when the task needs them**:
   - `resources/people.md` for person additions, updates, or person/article/project cross-links
   - `resources/articles.md`, `resources/books.md`, and/or `resources/projects.md` when adding entries, checking duplicates in detail, or doing broad gap analysis
4. **Read `ai-generated/README.md` before opening anything in `ai-generated/`**.
5. **Read only the specific generated docs relevant to the task**. Do **not** read the whole `ai-generated/` directory by default. A repo-wide pass across generated docs is only warranted for broad synthesis, repo-organization, or derived-layer maintenance work.

Skipping even the compact orientation means working blind to what's already in the collection.

---

## Repo Structure

```
ai-resources/
├── README.md
├── CLAUDE.md              ← you are here
├── librarian-notes.md     ← memory across sessions
├── .gitignore
├── ai-generated/
│   ├── README.md          ← compact manifest for generated docs; read this first
│   └── ...                ← generated syntheses, analyses, templates
├── agent-skills/          ← reusable skills for pi and Claude Code
└── resources/
    ├── index.md           ← compact inventory of tracked people, articles, books, projects
    ├── articles.md        ← specific articles, posts, and reference sites
    ├── books.md           ← book-length sources worth keeping
    ├── people.md          ← people worth following, with all their links
    └── projects.md        ← open source projects and tools
```

---

## Adding Resources

### Workflow

1. **Fetch and read the source first.** Use `agent-skills/brave-search/content.js <url>` or the browser-tools skill. Never annotate from a URL alone.
2. **Write a meaningful annotation** — see quality guidelines below.
3. **Place in the right file** — articles.md, books.md, people.md, or projects.md.
4. **Update cross-links** — if a person entry exists, add their article/book/project to their entry. If an article or book is by someone in people.md, link to them with `[Name](people.md#name)`.
5. **Update `librarian-notes.md`** if the session surfaced something worth remembering — a decision, a pattern, a gap, something explicitly rejected and why.
6. **Commit** with a short descriptive message in present tense.

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

---

## Librarian Memory

`librarian-notes.md` is a running file updated across sessions. Update it when:

- A curatorial decision is made that isn't obvious from the guidelines — especially rejections and why
- A connection between entries is noticed that isn't captured in the files themselves
- A gap in the collection is identified worth tracking
- Something significant is learned about the field that should inform future curation
- The curator explicitly says something that reveals taste or preference worth preserving

Keep entries short. This file is a memory aid, not a journal. Date each entry.

---

## ai-generated/ Directory

Documents produced by AI agents — synthesis, analysis, pattern extraction. Each file should include at the top:

```markdown
> Generated by <model> on <YYYY-MM-DD>.
```

File names: descriptive, lowercase, hyphen-separated. These are snapshots of understanding at a point in time and will become outdated as the field moves.

---

## General Conventions

- **Prefer simplicity.** Content here is meant to be readable and shareable.
- **Suggest structure organically.** Only propose new directories when there is actual content that warrants them. Don't create empty scaffolding.
- **Use Markdown** for all documentation and notes.
- **File names:** lowercase, hyphen-separated (e.g. `rag-overview.md`).
- **Branch:** `main`
- **Commit messages:** short, descriptive, present tense (e.g. `Add Karpathy 2025 year in review`).
