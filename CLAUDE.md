# MATH 13 — Skeletal Notes

PreTeXt book of *skeletal* (fill-in) lecture notes for SCU's MATH 13.
Students complete them by hand — printed, or annotated on an iPad over
the PDF — while the derivation is done in class.

## The Posting Desk

This book is one of three repos driven by the instructor's Posting Desk
panel (https://claude.ai/code/artifact/806060e5-7cc7-41fe-bee1-014bc1fbc2aa).
**Skeletal notes, the ten assignments, the four review problem sets, and
solution locking/releasing are all posted from here**; the completed
lecture notes are posted from `mahmadi-ops/M13-Mehdi`, whose `CLAUDE.md`
holds the full desk rulebook (request kinds, standing authorization to
commit panel-initiated changes to `main`, the SOLUTION-LOCKED
convention). Repo-specific facts:

- `scripts/desk_action.py` maps every section, assignment, and review
  set to its `<xi:include>` and toggles it with the UNPOSTED wrapper;
  `.github/workflows/desk-requests.yml` applies `desk-requests/*.json`
  committed by the panel and dispatches `pretext-deploy.yml`.
- The self-contained assignments (all but 7) and review sets 1/3/4
  toggle instantly; the sections and the pairs A7↔RP3, A5→RP2 are
  cross-referenced from other live pages, so those requests queue for
  Claude, who takes the referencing worksheets down or up together.
- Chapters 2-4 and the Exercises chapter are wrappers holding only
  `<xi:include>`s, and PreTeXt rejects an empty chapter or an empty book.
  `sync_containers()` therefore drops a chapter from `main.ptx` once its last
  section is unposted, brings it back when a section is posted, and swaps in
  `ch-coming-soon.ptx` (a contentless placeholder chapter) while nothing else
  is live. Never hand-edit those chapter includes; run the script.
- `frontmatter.ptx` is always live, so it must never `<xref>` anything that
  can be unposted -- its two references to the Exercises chapter were made
  plain text for exactly that reason.
- `scripts/build-site.sh` guards against a truncated PDF with a page floor
  that scales with the number of content files reachable from `main.ptx`
  (six pages each, so zero for the empty book and 252 for the full one).
  Do not put a fixed floor back: the empty book is a legitimate state.
- Locking wraps blocks in XML comments, which may not contain `--`. Where a
  solution holds TikZ (`\draw a -- b`) the lock escapes each `--`: inside
  `CDATA` as `]]>&#45;&#45;<![CDATA[`, elsewhere as `&#45;&#45;`. Both parse
  back to `--` as soon as the two marker lines come off, so release stays a
  two-line deletion and the LaTeX the build sees is unchanged. A comment
  nested inside a block is illegal whatever the escaping, so the lock hoists
  it above the block instead of dropping it.
- Solutions here are **public by default** (`publication.ptx` shows
  divisional solutions; the AI tutor in the Exercises introduction
  assumes that). A `lock` request wraps an assignment's
  `<solution>`/`<answer>`/`<hint>` blocks in SOLUTION-LOCKED markers;
  `release` (after the due date) removes only the marker lines; `relock`
  re-wraps.
- Postings are tracked only on the desk panel — the syllabus's
  posted-materials table was removed at the instructor's request, so no
  posting action touches the syllabus repo. Page filenames come from
  xml:ids (assignments are `worksheet-assignment-<n>.html`).

## Where the content comes from

Every section here is a transformation of a section of the **full
lecture notes**, a separate public repo: `mahmadi-ops/M13-Mehdi`.

```bash
scripts/sync-lecture-notes.sh      # clone/refresh .reference/lecture-notes/
```

That puts the book's `source/` and `publication/` in
`.reference/lecture-notes/` (gitignored; ~2 MB, shallow + sparse).
**Read the original before writing a skeletal section** — do not
reconstruct the mathematics from scratch. The original supplies the
wording, the numbering, the figures, the `latex-image` code, the
prefigure diagrams and their accessibility annotations.

Chapter map (full notes → this book):

| Full notes                          | Source files                          | Skeletal |
| ----------------------------------- | ------------------------------------- | -------- |
| Ch 1 · Hyperbolic Functions (7.3)    | `ch-7-3.ptx`                          | `ch-hyperbolic-skeletal.ptx` |
| Ch 2 · Series and Sequences          | `ch-10-2`, `ch-10-8`, `ch-10-10`      | `ch-series-skeletal.ptx` + `sec-skel-series-*.ptx` |
| Ch 3 · 3D Space and Vector Algebra   | `ch-12-1`, `ch-12-2`, `Dotproduct`, `the-cross-product`, `Parametrization`, `ch-12-5`, `Conics`, `QuadricSurface` | `ch-geometry-skeletal.ptx` + `sec-skel-geom-*.ptx` |
| Ch 4 · Functions of Multiple Variables | `ch-14-1`…`ch-14-4`, `directional-derivatives`, `TangentPlanesDifferentials`, `extreme-values-saddle-points`, `LagrangeMultipliers` | `ch-functions-multiple-variables-skeletal.ptx` + `sec-skel-fmv-*.ptx` |

The sparse checkout covers `source/` and `publication/` only, so a
section that keeps a video or an interactive needs its asset pulled
separately and copied into `assets/`:

```bash
git -C .reference/lecture-notes sparse-checkout set --no-cone \
    source publication assets/videos/<name>.mp4
```

Reset it to `source publication` afterwards so the cache stays small.

Where a section of the full notes `xi:include`s a file of its own, the
skeletal section includes a skeletal copy of it too:
`art11-projectile-incline.ptx` → `act-skel-geom-projectile-incline.ptx`,
and 4.5/4.7's three companion files → `subsec-skel-fmv-scalar-fields.ptx`,
`exercises-skel-fmv-gradient-applications.ptx`, and
`subsec-skel-fmv-why-second-derivative-test.ptx`.

Three traps when writing a new section, each of which costs a build:

- XML comments may not contain `--` (use parentheses instead).
- A bare `<` or `>` inside a `latex-image` that is not wrapped in `CDATA`
  has to be written `&lt;` / `&gt;`.
- `\$` in a `latex-image` is a *literal* dollar, not math mode, so any
  `\Delta`, `\to` etc. after it lands in text mode and LaTeX fails. Easy
  to introduce when generating a tikz box from a script that escapes `$`.

## The skeletonizing recipe

See `.claude/skills/skeletonize/SKILL.md` for the full rules. In short:

- **Keep** objectives, definitions, theorems, `assemblage` summaries,
  problem statements, real-world applications, videos and interactives.
- **Replace** every derivation, computation and solution with a blank
  `latex-image` workspace box, preceded by a **one-line parenthetical
  instruction** naming what to do — not how. Terse. The calibration
  target is `source/sec-skel-series-binomial.ptx`.
- **Graphs**: complex plots are reproduced in full, then followed by
  blank boxes that ask the student to read properties off them. Simple
  shapes are left as empty space or an empty grid to draw on. The
  calibration target is the `sec-skel-hyp-graphs` section of
  `ch-hyperbolic-skeletal.ptx`.
- Every `xml:id` is prefixed `skel-` (or is `sec-skel-…` / `fig-skel-…`)
  so this book and the full notes can coexist.
- A header comment in each file records which original it mirrors and
  what was done with the figures.

## Runestone interactive exercises

A handful of auto-gradable Runestone problems live in `review-problems-2.ptx`
(three Chapter 3 ones) and `review-problems-3.ptx` (three Chapter 4 ones).
They came from a sampler worksheet, `exercises-runestone-samples.ptx`, that
held one example of each question type; the sampler was dissolved into the
review sets once the formats had been evaluated. What it established:

| Type | Markup that triggers it |
| ---- | ----------------------- |
| `truefalse` | `statement/@correct` |
| `multiplechoice` | `statement` + `choices` (2+ correct choices give checkboxes) |
| `fillin-basic` | `statement//var` (answers live in a sibling `setup`) |
| `parson` | `statement` + `blocks` |
| `cardsort` | `statement` + `cardsort` |
| `clickablearea` | `statement` + `areas` |

(see `pretext-assembly.xsl`, `mode="exercise-interactive-attribute"`).

Three types are unused. **`matching`** is unusable here: PreTeXt emits no
static representation for it, so on the web target the exercise renders as a
bare title with no statement and no items — reproduced with a minimal example
under both 2.44.0 and 2.45.0. A multiple-select `multiplechoice` is the
substitute. **`coding`** (an ActiveCode cell) has no role in this course.
**`shortanswer`** (`statement` + `response`, instructor-graded) shows its
response box only on Runestone — the static template in
`pretext-runestone-static.xsl` skips the `response` element, so a web build
shows the prompt alone. That is PreTeXt's design, not a defect.

Two more things to know:

- All but `truefalse` are **dev-schema** elements, so the two review-problems
  files that hold them must be validated with the CLI's dev schema option;
  the stable schema reports false positives on them.
- A Parsons block is line-oriented: keep the content of each `<m>` on one
  source line, or the newline splits the `\( \)` delimiters and MathJax
  leaves the LaTeX as literal text.

Hints, answers and solutions are suppressed in the Runestone build by
`publication/publication-runestone.ptx`; due dates and release are set in the
Runestone instructor dashboard, not in the source.

## Building

```bash
pretext build web      # output/web
pretext build print    # output/print (PDF — this is what students annotate)
pretext view web

scripts/build-site.sh  # both, with the PDF copied into output/web
```

Validate XML before building: `xmllint --noout source/<file>.ptx`
(or `python3 -c "import xml.etree.ElementTree as ET; ET.parse('source/<file>.ptx')"`
where xmllint is not installed).

### The PDF button

The navbar carries a **PDF** button linking to `math13-skeletal-notes.pdf`
next to the HTML pages. Three pieces have to stay in step:

- `project.ptx` — the print target's `output-filename`.
- `scripts/build-site.sh` — copies that file into `output/web/`.
- `assets/custom.js` — `PDF_HREF`, the button it injects into the navbar.

`scripts/build-site.sh` is what CI runs, so a plain `pretext build web`
leaves the button pointing at a file that is not there. That is only a
local-preview wrinkle; use the script when you want to check the button.

Do **not** give the print target a `deploy-dir` to publish the PDF: that
makes it a deploy target, which switches `pretext deploy` from its
"default_target" strategy to Pelican and would publish all 154 MB of
`output/print` rather than the 3 MB PDF.

Deployed to GitHub Pages by `.github/workflows/pretext-deploy.yml`
at https://mahmadi-ops.github.io/M13-Skeletal-Notes/
