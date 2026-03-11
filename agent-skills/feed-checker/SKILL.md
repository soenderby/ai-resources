---
name: feed-checker
description: Check RSS feeds and GitHub releases for people and projects tracked in ai-resources. Reports new items since last run. Use when asked to check for updates, new posts, or new releases.
---

# Feed Checker

Fetches RSS/Atom feeds for tracked people and GitHub releases for tracked projects.
Compares against previous runs and reports only new items.
State is stored in `state.json` and committed to version control.

## Setup

Run once before first use:

```bash
cd {baseDir}
npm install
```

## Run

```bash
node {baseDir}/check.js
```

Or via npm:

```bash
cd {baseDir} && npm run check
```

No arguments required. Output is Markdown printed to stdout.

Optional environment variable:

- `GITHUB_TOKEN` — GitHub personal access token. Not required, but raises the API rate limit from 60 to 5,000 requests/hour. Useful if you're running this frequently.

## Output Format

```
# Feed Check Report — YYYY-MM-DD

## New Items

### Person Name
- 📄 **[Post title](https://url)** — YYYY-MM-DD
  > Brief excerpt from the post…

### Another Person
- 🏷 **[Project v1.2.0](https://github.com/...)** — YYYY-MM-DD
  > Release notes excerpt…

## Errors
- **Person Name** (`https://feed-url`): error message

---
_Checked with no new items: Person A (hostname) · Person B (hostname)_
```

- `📄` = blog post or article
- `🏷` = GitHub release

## First Run Behaviour

On the first run, all current feed items are silently marked as seen — nothing is reported. This prevents a flood of historical posts on setup. Subsequent runs report only items published after the first run.

When you add a new person or project to `feeds.yaml`, the same applies: their first check initialises silently, and new items appear from the next run onward.

## Adding People and Projects

Edit `feeds.yaml`. Feed URLs are annotated with `# needs-validation` where the URL is a reasonable guess but hasn't been confirmed live. To validate, fetch the URL manually and confirm it returns XML.

Common feed URL patterns:
- **Substack** (custom domain): `https://domain.com/feed`
- **Medium**: `https://medium.com/feed/@username`
- **Bearblog**: `https://username.bearblog.dev/feed/?type=rss`
- **Hugo blogs**: `https://domain.com/index.xml`
- **WordPress**: `https://domain.com/feed/`
- **Ghost**: `https://domain.com/rss/`

For people with no RSS-accessible writing (academic sites, LinkedIn-only), add a comment in `feeds.yaml` explaining why they're excluded.

## Resetting State

To force a re-scan of all sources (report everything currently in feeds as new):

```bash
# Reset everything
echo '{"feeds":{},"github":{}}' > {baseDir}/state.json
```

To reset a single source, edit `state.json` directly and remove the relevant key from `feeds` or `github`.

## Maintenance

After running, commit `state.json` so state is shared across machines:

```bash
git add agent-skills/feed-checker/state.json
git commit -m "Update feed checker state"
```
