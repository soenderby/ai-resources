#!/usr/bin/env bash
set -euo pipefail

HOST_ALIAS="${1:-}"
KEY_PATH="$HOME/.ssh/id_ed25519"
PUB_PATH="$KEY_PATH.pub"

if [[ -z "$HOST_ALIAS" ]]; then
  echo "Usage: $0 <host_alias>"
  echo "Example: $0 unoeuro-linux145"
  exit 1
fi

echo "[ssh-sync] SSH initialization for host: $HOST_ALIAS"

# 1) Generate key if missing
if [[ -f "$KEY_PATH" && -f "$PUB_PATH" ]]; then
  echo "- key exists: $KEY_PATH"
else
  echo "- generating new ed25519 key"
  ssh-keygen -t ed25519 -f "$KEY_PATH" -N ""
fi

# 2) Start agent and add key
if ! ssh-add -l >/dev/null 2>&1; then
  echo "- starting ssh-agent"
  eval "$(ssh-agent -s)" >/dev/null
fi

echo "- adding key to agent"
ssh-add "$KEY_PATH" >/dev/null 2>&1 || true

# 3) Install public key on remote
echo "- attempting to install public key on remote"
if command -v ssh-copy-id >/dev/null 2>&1; then
  ssh-copy-id -i "$PUB_PATH" "$HOST_ALIAS"
  echo "  OK: public key installed via ssh-copy-id"
else
  echo "  WARN: ssh-copy-id not found"
  echo "  Manual setup needed:"
  echo "    1) copy contents of: $PUB_PATH"
  echo "    2) append to remote: ~/.ssh/authorized_keys"
fi

# 4) Verify
set +e
ssh -o BatchMode=yes "$HOST_ALIAS" "echo '[ssh-sync] key auth ok'"
STATUS=$?
set -e

if [[ $STATUS -eq 0 ]]; then
  echo "[ssh-sync] SSH key setup verified"
else
  echo "[ssh-sync] Could not verify non-interactive key auth yet"
  echo "Try: ./scripts/test-ssh.sh $HOST_ALIAS"
fi
