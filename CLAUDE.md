# MATH 13 — Skeletal Notes

PreTeXt book of *skeletal* (fill-in) lecture notes for SCU's MATH 13.
Students complete them by hand — printed, or annotated on an iPad over
the PDF — while the derivation is done in class.

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
| Ch 4 · Functions of Multiple Variables | `ch-14-1`…`ch-14-4`, `directional-derivatives`, `extreme-values-saddle-points` | `ch-functions-multiple-variables-skeletal.ptx` + `sec-skel-fmv-*.ptx` |

Where a section of the full notes `xi:include`s a file of its own, the
skeletal section includes a skeletal copy of it too:
`art11-projectile-incline.ptx` → `act-skel-geom-projectile-incline.ptx`,
and 4.5/4.7's three companion files → `subsec-skel-fmv-scalar-fields.ptx`,
`exercises-skel-fmv-gradient-applications.ptx`, and
`subsec-skel-fmv-why-second-derivative-test.ptx`.

**Not yet written:** 4.6 Tangent Planes and Differentials
(`TangentPlanesDifferentials.ptx`) and 4.8 Lagrange Multipliers
(`LagrangeMultipliers.ptx`). Chapter 4 therefore numbers 4.1–4.6 here,
which does not line up with the full notes.

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
