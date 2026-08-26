#!/usr/bin/env bash
# Build the deployable site: the web book with the print PDF alongside it.
#
# The navbar carries a "PDF" button (see assets/custom.js) pointing at
# math13-skeletal-notes.pdf next to the HTML pages, so the PDF has to end up
# inside output/web before `pretext deploy` copies that directory to the
# staging area.
#
# It is copied rather than deployed as its own target on purpose.  Giving the
# print target a `deploy-dir` would make it a deploy target, which flips
# `pretext deploy` from the "default_target" strategy to Pelican and rebuilds
# the site around a generated landing page; it would also publish the whole of
# output/print -- 154 MB of .tex, .log and duplicated assets -- instead of the
# 3 MB PDF.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

PDF="math13-skeletal-notes.pdf"

pretext build web
pretext build print

cp "output/print/$PDF" "output/web/$PDF"

echo "Site ready in output/web (PDF: $(du -h "output/web/$PDF" | cut -f1))"
