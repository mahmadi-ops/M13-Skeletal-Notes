---
name: skeletonize
description: Turn a section of the full MATH 13 lecture notes into a skeletal (fill-in) section for this book. Use when asked to make skeletal notes, fill-in notes, or a student workbook version of a chapter or section — e.g. "make skeletal notes for Ch 3", "skeletonize the dot product section".
---

# Skeletonize a lecture-notes section

## 1. Get the original

The full notes live in `.reference/lecture-notes/` (run
`scripts/sync-lecture-notes.sh` if absent). Find the source file from
the chapter map in `CLAUDE.md`, and **read it end to end** before
writing. The skeletal version is a transformation of that file, not a
fresh composition: reuse its wording, its section and subsection
structure, its figures, its `latex-image` and `<prefigure>` code, its
`<shortdescription>`s and accessibility annotations verbatim.

## 2. What survives, what is hollowed out

| Keep verbatim | Replace with a workspace box |
| --- | --- |
| `<objectives>` | Every worked computation |
| Definitions, theorems, `<assemblage>` summaries | Every proof and derivation |
| Example/exercise **statements** | Every `<solution>` and `<answer>` |
| Real-world applications and their setup | Any algebra the student can do |
| `<video>`, `<interactive>`, complex figures | — |

Numbered results the student will cite later (`<md number="yes">` with
an `xml:id`) stay in full — they are the tools, not the exercise.

## 3. The workspace box

A blank box, sized to the work it holds, with faint rules separating the
steps and italic row labels naming what goes on each line:

```xml
<sidebyside width="97%">
<image>
<latex-image>
\begin{tikzpicture}
\draw[rounded corners=8pt, draw=gray!55, thick] (0,0) rectangle (15,13);
\draw[gray!35] (0,8.5) -- (15,8.5);
\node[anchor=north west, font=\small\itshape] at (0.35,12.7) {first step:};
\node[anchor=north west, font=\small\itshape] at (0.35,8.2) {result:};
\end{tikzpicture}
</latex-image>
<shortdescription>Blank box in two rows, for … and for … .</shortdescription>
</image>
</sidebyside>
```

- Width is always `15`. Height is the judgement call: ~4–6 for a short
  step, 13–14 for a multi-part computation.
- A box with nothing to label is a plain rectangle with a grey
  `workspace` note at the top left.
- `<shortdescription>` is required — it is what a screen-reader user
  gets. Describe the rows, never the answer.

## 4. The instruction line

Immediately before the box, in the paragraph that would have held the
solution:

```xml
<p>
<em>Solution.</em>
(Apply <xref ref="eq-skel-binomial-series"/> with <m>m = -2</m>. In the
general coefficient every factor is negative, so pull the signs out.
State where the series converges.)
</p>
```

Calibration — this is the part that is easy to get wrong:

- **One to three sentences, parenthesised.** Name the tool to use and
  the form of the answer. Do not walk through the steps.
- Point at the numbered result to use by `<xref>`, rather than restating
  it.
- Flag the one thing that trips students up ("every factor is
  negative"), and nothing else.
- Ask for the conclusion explicitly when there is one ("State where the
  series converges").
- Never give away a value the student is meant to produce.

`source/sec-skel-series-binomial.ptx` is the reference for this level of
detail. Match it.

## 5. Graphs

- **A plot that would take the student ten minutes to draw** (an
  exponential, a conic, a quadric surface, a parametric curve) is
  **reproduced in full** from the original — prefigure, annotations and
  all — and is then followed by boxes that ask the student to read
  properties off it. See `sec-skel-hyp-graphs` in
  `ch-hyperbolic-skeletal.ptx`.
- The standard read-off box after a graph:

```xml
\node[anchor=north west, font=\small\itshape] at (0.25,5.15) {Domain:};
\node[anchor=north west, font=\small\itshape] at (0.25,3.35) {Range:};
\node[anchor=north west, font=\small\itshape] at (0.25,1.55) {Symmetry:};
```

  Adapt the row labels to the object: for a conic, *Vertex / Focus /
  Directrix*; for a plane, *Normal vector / Intercepts*; for a quadric,
  *Traces / Axis*.
- **A shape the student should draw themselves** (a point in an octant,
  a vector sum, a sketch of a region) becomes an empty axes grid or
  blank space, with a one-line instruction saying what to draw.
- Keep every `<video>` and `<interactive>` — they carry the motion the
  static page cannot. Mark web-only interactives `component="web"` so
  the print target drops them.

## 6. Mechanics

- Prefix every `xml:id` with `skel-` (`sec-skel-…`, `fig-skel-…`,
  `ex-skel-…`, `eq-skel-…`) so both books can be built together.
- Rewrite every internal `<xref>` to the prefixed id. An `<xref>` to an
  id that does not exist in this book is a build warning — check them.
- One `<section>` per file, named `sec-skel-<chapter>-<topic>.ptx`,
  included from a chapter wrapper `ch-<name>-skeletal.ptx`.
- Open each file with a comment recording the original it mirrors and
  the decision made about its figures.
- `xmllint --noout source/<file>.ptx`, then `scripts/build-site.sh`, and
  read the log for `PTX:ERROR` and unresolved-xref warnings.
- Two XML traps that each cost a full build: a comment may not contain a
  double hyphen (write the aside in parentheses instead), and a bare `<`
  or `>` inside a `latex-image` that is not wrapped in `CDATA` must be
  written `&lt;` / `&gt;` — easy to hit in a tikz label such as
  `{$H < 0$:}`.
- Check every `<xref>` resolves before building, which is far faster than
  waiting for the log:

```bash
python3 - <<'EOF'
import re, glob
ids, refs = set(), {}
for f in glob.glob('source/*.ptx'):
    s = open(f).read()
    ids |= set(re.findall(r'xml:id="([^"]+)"', s))
    for m in re.finditer(r'<xref ref="([^"]+)"', s):
        refs.setdefault(m.group(1), set()).add(f)
for r, v in sorted((r, v) for r, v in refs.items() if r not in ids):
    print("UNRESOLVED", r, sorted(v))
EOF
```

## 7. Reusing figures instead of retyping them

A figure kept in full should be copied out of the original rather than
retyped: the prefigure and tikz blocks run to hundreds of lines, and the
`<shortdescription>`s and accessibility annotations must survive intact.
Write the draft with `{{FIG:<source-file>:<figure-id>}}` placeholders and
expand them with `splice-figures.py`, alongside this file, which splices
the named `<figure>` in and rewrites its identifiers into this book's
convention — `fig-skel-x`, not `skel-fig-x`:

```bash
python3 .claude/skills/skeletonize/splice-figures.py source/<draft>.ptx
```

Chapters 3 and 4 were both built this way.
