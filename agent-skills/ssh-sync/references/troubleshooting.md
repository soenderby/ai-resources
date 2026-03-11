# SSH Sync Troubleshooting

## 1) Permission denied (publickey)

Symptoms:
- `Permission denied (publickey)`

Checks:
```bash
./scripts/init-ssh.sh <host_alias>
./scripts/test-ssh.sh <host_alias>
```

Manual key install fallback:
1. Print local public key:
```bash
cat ~/.ssh/id_ed25519.pub
```
2. Add it to remote `~/.ssh/authorized_keys`
3. Ensure remote permissions:
```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

## 2) Could not resolve hostname / bad host alias

Symptoms:
- `Could not resolve hostname ...`

Checks:
```bash
cat ~/.ssh/config
```
Ensure a matching `Host <alias>` block exists, with valid `HostName`, `User`, and `Port`.

## 3) Connection timeout or refused

Symptoms:
- timeout or refused connection

Checks:
- Confirm network/VPN/firewall
- Confirm SSH port and host
- Try direct verbose test:
```bash
ssh -vvv <host_alias>
```

## 4) rsync path errors

Symptoms:
- `No such file or directory`

Checks:
- Ensure local path exists and usually ends with `/`
- Ensure remote destination exists and is writable

Helpful command:
```bash
ssh <host_alias> "pwd; ls -la"
```

## 5) Unexpected deletions on remote

Cause:
- `sync-simply` includes `--delete`

Mitigation:
1. Always run dry-run first:
```bash
./scripts/sync-dry-run.sh <local/> <remote/>
```
2. Review delete lines carefully before live sync

## 6) Some files not syncing

Cause:
- Excludes from script and optional `.gitignore` are applied

Checks:
- Review top-level `.gitignore` in source folder
- Check built-in excludes: `.git/`, `.jj/`

## 7) Interactive auth challenges

If host requires OTP/interactive login, do manual login first:
```bash
ssh <host_alias>
```
Then re-run dry-run and sync.
