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

# Keep the print build's transcript: pretext streams xelatex's console output
# (the LaTeX log, page by page) but discards the temporary build directory,
# so this file is the only copy of that log that survives the build.
mkdir -p output
TRANSCRIPT="output/print-build.log"
pretext build print 2>&1 | tee "$TRANSCRIPT"

cp "output/print/$PDF" "output/web/$PDF"

# A LaTeX abort leaves a truncated PDF behind, and `pretext build print` still
# exits 0 and prints "Success!  Built requested target(s) without errors."  That
# is how a 180-page PDF (of 388) once reached the deployed site: three math rows
# in Chapter 4 had their `\\` row separator written as a single `\`, LaTeX died
# on the resulting "Extra alignment tab has been changed to \cr", and nothing
# downstream noticed the book now stopped mid-sentence in 4.2 with the whole
# exercises chapter missing.  So check for the abort ourselves, twice over.

# Check one: LaTeX's own log, where an abort appears as a line beginning with
# "!".  This is the direct evidence, and it does not care how long the book is
# -- which now matters, because the Posting Desk toggles sections in and out of
# main.ptx, so the book's length is a moving target.
# pretext does not keep main.log, but it echoes xelatex's console output while
# building, and that output was captured above; a LaTeX error is a line
# beginning with "! " there, and the run ends with "Output written on ...".
LOG="$(find output/print -maxdepth 3 -name 'main.log' -print -quit 2>/dev/null || true)"
[ -n "$LOG" ] || LOG="$TRANSCRIPT"
if grep -q '^! ' "$LOG"; then
    echo "ERROR: LaTeX reported an error while building $PDF, so the PDF is" >&2
    echo "       almost certainly truncated even though pretext said Success." >&2
    echo "       From $LOG:" >&2
    grep -n -A3 '^! ' "$LOG" | head -40 >&2
    exit 1
fi
if [ "$LOG" = "$TRANSCRIPT" ] && ! grep -q '^Output written on main.pdf' "$LOG"; then
    echo "ERROR: the print build's transcript never reports 'Output written on" >&2
    echo "       main.pdf', so xelatex did not finish; see $LOG." >&2
    exit 1
fi
echo "LaTeX log clean: $LOG"

# Check two: a page floor, as a backstop in case the transcript check above is
# ever fooled.  A fixed floor cannot work any more -- an empty book is a
# legitimate state now -- so scale it to how much is actually posted.  Every
# <xi:include> reachable from main.ptx is one source file in the book;
# frontmatter and the placeholder chapter are fixtures that are always present
# and carry no course content, so they do not count.
#
# The assignment and review worksheets count for one page each: with their
# solutions SOLUTION-LOCKED (the norm until a due date passes) a worksheet is a
# single page of questions, and the guard once refused a perfectly good 33-page
# PDF because it expected six pages of a one-page Assignment 2.  Every other
# file counts PAGES_PER_FILE pages, set low enough that a chapter file holding
# only its introduction, or a short section, does not trip the guard.  Override
# either value for a one-off build: `PAGES_PER_FILE=... scripts/build-site.sh`,
# or MIN_PAGES=... to set the floor outright.
PAGES_PER_FILE="${PAGES_PER_FILE:-4}"

CONTENT_FILES="$(python3 - "$PAGES_PER_FILE" <<'PY'
import os, re, sys

SRC = "source"
FIXTURES = {"main.ptx", "frontmatter.ptx", "ch-coming-soon.ptx"}
WORKSHEET = re.compile(r"^(assignment-\d+-|review-problems-\d+)")
PAGES_PER_FILE = int(sys.argv[1])

def includes(path):
    text = re.sub(r"<!--.*?-->", "", open(path, encoding="utf8").read(), flags=re.S)
    return re.findall(r'<xi:include\s+href="\.?/?([^"]+)"\s*/>', text)

seen = set()

def walk(name):
    path = os.path.join(SRC, name)
    if name in seen or not os.path.exists(path):
        return
    seen.add(name)
    for href in includes(path):
        walk(href)

walk("main.ptx")
content = seen - FIXTURES
worksheets = {f for f in content if WORKSHEET.match(f)}
floor = len(worksheets) + PAGES_PER_FILE * len(content - worksheets)
print(len(content), len(worksheets), floor)
PY
)"
read -r CONTENT_FILES WORKSHEETS FLOOR <<<"$CONTENT_FILES"

MIN_PAGES="${MIN_PAGES:-$FLOOR}"

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
    echo "ERROR: $PDF has $PAGES pages, expected at least $MIN_PAGES" >&2
    echo "       ($CONTENT_FILES content files posted: $WORKSHEETS worksheets at one page," >&2
    echo "       the rest at $PAGES_PER_FILE pages each)." >&2
    echo "       LaTeX almost certainly aborted partway and the PDF is truncated," >&2
    echo "       even though pretext reported success.  To see the error it" >&2
    echo "       swallowed, build the latex target and compile it by hand:" >&2
    echo "         pretext build latex" >&2
    echo "         cd output/latex && xelatex -interaction=nonstopmode main.tex" >&2
    echo "         grep -n '^!' main.log" >&2
    exit 1
fi

echo "Site ready in output/web (PDF: $PAGES pages, floor $MIN_PAGES, $(du -h "output/web/$PDF" | cut -f1))"
