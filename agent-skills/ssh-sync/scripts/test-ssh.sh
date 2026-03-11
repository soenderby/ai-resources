#!/usr/bin/env bash
set -euo pipefail

HOST_ALIAS="${1:-}"
if [[ -z "$HOST_ALIAS" ]]; then
  echo "Usage: $0 <host_alias>"
  echo "Example: $0 unoeuro-linux145"
  exit 1
fi

echo "[ssh-sync] testing SSH connection to $HOST_ALIAS"
ssh "$HOST_ALIAS" "echo '[ssh-sync] connected to:'; hostname; echo '[ssh-sync] user:'; whoami"
echo "[ssh-sync] SSH test successful"
