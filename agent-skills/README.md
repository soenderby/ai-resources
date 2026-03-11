# Agent Skills

Reusable skills for AI coding agents (pi, Claude Code, etc.). Each skill lives in its own subdirectory and contains a `SKILL.md` describing its purpose, setup, and usage.

## Skills

| Skill | Description |
|-------|-------------|
| [brave-search](brave-search/) | Web search and content extraction via Brave Search API. Lightweight, no browser required. |
| [browser-tools](browser-tools/) | Browser automation via DevTools Protocol (CDP). For interactive pages, frontend testing, and JS-rendered content. |
| [feed-checker](feed-checker/) | Check RSS feeds and GitHub releases for people and projects tracked in this repo. Reports only new items since the last run. |
| [ssh-sync](ssh-sync/) | SSH + rsync deployment workflow using sync-simply, with dry-run-first scripts and troubleshooting notes. |

## Upstream

These skills are based on [badlogic/pi-skills](https://github.com/badlogic/pi-skills) with local modifications.

## Installing a Skill

Pi looks for skills in `~/.pi/agent/skills/`. To install a skill from this repo:

```bash
cp -r agent-skills/<skill-name> ~/.pi/agent/skills/
cd ~/.pi/agent/skills/<skill-name>
npm install
```
