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

# A LaTeX abort leaves a truncated PDF behind, and `pretext build print` still
# exits 0 and prints "Success!  Built requested target(s) without errors."  That
# is how a 180-page PDF (of 388) once reached the deployed site: three math rows
# in Chapter 4 had their `\\` row separator written as a single `\`, LaTeX died
# on the resulting "Extra alignment tab has been changed to \cr", and nothing
# downstream noticed the book now stopped mid-sentence in 4.2 with the whole
# exercises chapter missing.  So check the page count ourselves.
#
# MIN_PAGES is a floor, not the book's true length -- it only has to be high
# enough that a build which died partway trips it.  Raise it when the book has
# grown enough that the current value stops being a meaningful guard.  Override
# for a one-off build with `MIN_PAGES=... scripts/build-site.sh`.
MIN_PAGES="${MIN_PAGES:-350}"

# pretext depends on pyMuPDF, so it is present wherever this script can run.
# The module was renamed from `fitz` to `pymupdf` in 1.24.3; accept either.
PAGES="$(python3 - "output/web/$PDF" <<'PY'
import sys
try:
    import pymupdf
except ImportError:
    import fitz as pymupdf
print(pymupdf.open(sys.argv[1]).page_count)
PY
)"

if [ "$PAGES" -lt "$MIN_PAGES" ]; then
    echo "ERROR: $PDF has $PAGES pages, expected at least $MIN_PAGES." >&2
    echo "       LaTeX almost certainly aborted partway and the PDF is truncated," >&2
    echo "       even though pretext reported success.  To see the error it" >&2
    echo "       swallowed, build the latex target and compile it by hand:" >&2
    echo "         pretext build latex" >&2
    echo "         cd output/latex && xelatex -interaction=nonstopmode main.tex" >&2
    echo "         grep -n '^!' main.log" >&2
    exit 1
fi

echo "Site ready in output/web (PDF: $PAGES pages, $(du -h "output/web/$PDF" | cut -f1))"
