#!/usr/bin/env bash
set -euo pipefail

LOCAL="${1:-}"
REMOTE="${2:-}"

if [[ -z "$LOCAL" || -z "$REMOTE" ]]; then
  echo "Usage: $0 <local_folder/> <remote_folder/>"
  echo "Example: $0 /mnt/c/code/site/ public_html/"
  exit 1
fi

echo "[ssh-sync] dry-run"
echo "  local : $LOCAL"
echo "  remote: $REMOTE"

echo "[ssh-sync] running: sync-simply \"$LOCAL\" \"$REMOTE\" --dry-run"
sync-simply "$LOCAL" "$REMOTE" --dry-run
