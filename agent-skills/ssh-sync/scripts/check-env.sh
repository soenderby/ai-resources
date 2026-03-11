#!/usr/bin/env bash
set -euo pipefail

echo "[ssh-sync] Environment check"

echo "- checking sync-simply"
command -v sync-simply >/dev/null || { echo "ERROR: sync-simply not found in PATH"; exit 1; }
echo "  OK: $(command -v sync-simply)"

echo "- checking ssh"
command -v ssh >/dev/null || { echo "ERROR: ssh not found"; exit 1; }
echo "  OK: $(command -v ssh)"

echo "- checking rsync"
command -v rsync >/dev/null || { echo "ERROR: rsync not found"; exit 1; }
echo "  OK: $(command -v rsync)"

echo "- checking ssh config"
if [[ -f "$HOME/.ssh/config" ]]; then
  echo "  OK: $HOME/.ssh/config exists"
else
  echo "  WARN: $HOME/.ssh/config not found (host aliases may fail)"
fi

echo "[ssh-sync] check complete"
