#!/usr/bin/env bash
set -euo pipefail

LOCAL="${1:-}"
REMOTE="${2:-}"
CONFIRM="${3:-}"

if [[ -z "$LOCAL" || -z "$REMOTE" ]]; then
  echo "Usage: $0 <local_folder/> <remote_folder/> [--yes]"
  echo "Example: $0 /mnt/c/code/site/ public_html/ --yes"
  exit 1
fi

echo "[ssh-sync] live sync"
echo "  local : $LOCAL"
echo "  remote: $REMOTE"
echo "  WARNING: sync-simply uses --delete"

if [[ "$CONFIRM" != "--yes" ]]; then
  read -r -p "Continue with live sync? Type 'yes' to proceed: " ans
  [[ "$ans" == "yes" ]] || { echo "Cancelled."; exit 1; }
fi

sync-simply "$LOCAL" "$REMOTE"
echo "[ssh-sync] sync completed"
