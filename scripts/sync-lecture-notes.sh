#!/usr/bin/env bash
# Fetch (or refresh) a lightweight read-only copy of the full MATH 13
# lecture notes into .reference/lecture-notes/.
#
# The skeletal notes in source/ are derived from that book, so having its
# .ptx source on disk means the skeletal version of a section can be
# written by transforming the original rather than reconstructing it.
#
# Only source/ and publication/ are checked out, with a blobless, depth-1
# clone, so this costs ~2 MB instead of the repo's ~160 MB.
#
# .reference/ is gitignored: it is a cache, not part of this project.
set -euo pipefail

REPO="https://github.com/mahmadi-ops/M13-Mehdi.git"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST="$ROOT/.reference/lecture-notes"

if [ -d "$DEST/.git" ]; then
  git -C "$DEST" fetch --depth 1 origin main
  git -C "$DEST" reset --hard origin/main
else
  mkdir -p "$(dirname "$DEST")"
  git clone --depth 1 --filter=blob:none --sparse "$REPO" "$DEST"
  git -C "$DEST" sparse-checkout set source publication
fi

echo "Lecture notes at: $DEST"
git -C "$DEST" log -1 --format='Pinned to %h %ad %s' --date=short
