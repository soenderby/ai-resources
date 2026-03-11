---
name: ssh-sync
description: SSH + rsync deployment workflow using sync-simply. Use when publishing local files to a remote server, setting up SSH keys, testing connectivity, running safe dry-runs, and troubleshooting sync failures.
---

# SSH Sync

Deploy files over SSH with a safe, repeatable flow built around `sync-simply`.

## When to use

- You need to sync a local folder to a remote server
- You need to set up SSH key auth for first-time deploy
- You need dry-run previews before real deploy
- You need troubleshooting for SSH/rsync issues

## Safety defaults

1. Always run `--dry-run` first
2. Confirm both local and remote paths before live sync
3. `sync-simply` uses `--delete` (remote files not in local may be removed)

## Quick workflow

```bash
# 1) Verify tooling + config
./scripts/check-env.sh

# 2) (Optional first-time setup) Create and install SSH key
./scripts/init-ssh.sh unoeuro-linux145

# 3) Test remote access
./scripts/test-ssh.sh unoeuro-linux145

# 4) Preview changes
./scripts/sync-dry-run.sh "/path/local/" "remote/path/"

# 5) Execute real sync
./scripts/sync-run.sh "/path/local/" "remote/path/"
```

## Main command

`sync-simply` syntax:

```bash
sync-simply <local_folder/> <remote_folder/> [--dry-run]
```

Example:

```bash
sync-simply "/mnt/c/code/hastis website/" "public_html/" --dry-run
sync-simply "/mnt/c/code/hastis website/" "public_html/"
```

## SSH key setup guidance

If SSH key auth is not ready:

1. Generate key (if missing)
2. Add key to ssh-agent
3. Install public key on remote
4. Verify login

Use:

```bash
./scripts/init-ssh.sh <host_alias>
```

If `ssh-copy-id` is unavailable, copy `~/.ssh/id_ed25519.pub` manually into remote `~/.ssh/authorized_keys`.

## Troubleshooting

See `references/troubleshooting.md` for common fixes:

- `Permission denied (publickey)`
- host alias not found
- connection timeout/refused
- bad remote path
- unexpected deletions from `--delete`
- exclude behavior from `.gitignore`

## Notes for agent behavior

- Ask user before running live sync
- Prefer dry-run output summary first
- Do not expose private keys
- If login needs interactive OTP/hosting panel steps, pause and let user complete it
