#!/usr/bin/env python3
"""Posting Desk mechanical action: post or unpost a topic's notes.

Usage: desk_action.py post-notes|unpost-notes <topic-xml-id>

Toggles the topic's <xi:include> between live and the UNPOSTED comment
wrapper defined in CLAUDE.md. Unposting also wraps any exercise-set
include whose cross-references would dangle (marked UNPOSTED-WITH so the
matching post restores it); if a dangling reference cannot be fixed by
wrapping an include, the script restores every file it touched and exits
nonzero so nothing half-done gets committed.

Exit 0: repo now in the requested state (possibly with no change).
Exit 1: bad invocation. Exit 2: cannot be done mechanically.
"""
import os
import re
import sys

SRC = "source"
MAIN = "source/main.ptx"

# Chapter wrapper -> its include href in main.ptx.  These chapters hold only
# <xi:include>s, so once every section inside one is unposted the chapter is
# empty and PreTeXt rejects it; it therefore has to leave the book too, and
# come back as soon as one of its sections is posted again.  exercises.ptx is
# the same story for the assignments and review sets.
CONTAINERS = {
    "source/ch-series-skeletal.ptx": "ch-series-skeletal.ptx",
    "source/ch-geometry-skeletal.ptx": "ch-geometry-skeletal.ptx",
    "source/ch-functions-multiple-variables-skeletal.ptx": "ch-functions-multiple-variables-skeletal.ptx",
    "source/exercises.ptx": "exercises.ptx",
}

# A book needs a chapter, so this placeholder stands in while every real
# chapter is unposted, and is dropped again as soon as one is posted.
PLACEHOLDER = "ch-coming-soon.ptx"
FIXTURES = {PLACEHOLDER, "frontmatter.ptx"}

# topic key -> (file holding its include, include href)
TOPICS = {
    # skeletal chapters/sections
    "ch-hyperbolic-skeletal": ("source/main.ptx", "ch-hyperbolic-skeletal.ptx"),
    "sec-skel-series-infinite": ("source/ch-series-skeletal.ptx", "sec-skel-series-infinite.ptx"),
    "sec-skel-series-taylor": ("source/ch-series-skeletal.ptx", "sec-skel-series-taylor.ptx"),
    "sec-skel-series-taylor-convergence": ("source/ch-series-skeletal.ptx", "sec-skel-series-taylor-convergence.ptx"),
    "sec-skel-series-binomial": ("source/ch-series-skeletal.ptx", "sec-skel-series-binomial.ptx"),
    "sec-skel-geom-3d-coordinates": ("source/ch-geometry-skeletal.ptx", "sec-skel-geom-3d-coordinates.ptx"),
    "sec-skel-geom-vectors": ("source/ch-geometry-skeletal.ptx", "sec-skel-geom-vectors.ptx"),
    "sec-skel-geom-dot-product": ("source/ch-geometry-skeletal.ptx", "sec-skel-geom-dot-product.ptx"),
    "sec-skel-geom-cross-product": ("source/ch-geometry-skeletal.ptx", "sec-skel-geom-cross-product.ptx"),
    "sec-skel-geom-parametrization": ("source/ch-geometry-skeletal.ptx", "sec-skel-geom-parametrization.ptx"),
    "sec-skel-geom-lines-planes": ("source/ch-geometry-skeletal.ptx", "sec-skel-geom-lines-planes.ptx"),
    "sec-skel-geom-conics": ("source/ch-geometry-skeletal.ptx", "sec-skel-geom-conics.ptx"),
    "sec-skel-geom-quadric-surfaces": ("source/ch-geometry-skeletal.ptx", "sec-skel-geom-quadric-surfaces.ptx"),
    "sec-skel-fmv-functions": ("source/ch-functions-multiple-variables-skeletal.ptx", "sec-skel-fmv-functions.ptx"),
    "sec-skel-fmv-limits": ("source/ch-functions-multiple-variables-skeletal.ptx", "sec-skel-fmv-limits.ptx"),
    "sec-skel-fmv-partial-derivatives": ("source/ch-functions-multiple-variables-skeletal.ptx", "sec-skel-fmv-partial-derivatives.ptx"),
    "sec-skel-fmv-chain-rule": ("source/ch-functions-multiple-variables-skeletal.ptx", "sec-skel-fmv-chain-rule.ptx"),
    "sec-skel-fmv-directional-derivatives": ("source/ch-functions-multiple-variables-skeletal.ptx", "sec-skel-fmv-directional-derivatives.ptx"),
    "sec-skel-fmv-tangent-planes": ("source/ch-functions-multiple-variables-skeletal.ptx", "sec-skel-fmv-tangent-planes.ptx"),
    "sec-skel-fmv-extreme-values": ("source/ch-functions-multiple-variables-skeletal.ptx", "sec-skel-fmv-extreme-values.ptx"),
    "sec-skel-fmv-lagrange": ("source/ch-functions-multiple-variables-skeletal.ptx", "sec-skel-fmv-lagrange.ptx"),
    # assignments and review sets, all included from exercises.ptx
    "assignment-1-hyperbolic": ("source/exercises.ptx", "assignment-1-hyperbolic.ptx"),
    "assignment-2-series-taylor": ("source/exercises.ptx", "assignment-2-series-taylor.ptx"),
    "assignment-3-taylor-convergence-binomial": ("source/exercises.ptx", "assignment-3-taylor-convergence-binomial.ptx"),
    "assignment-4-space-vectors-dot-product": ("source/exercises.ptx", "assignment-4-space-vectors-dot-product.ptx"),
    "assignment-5-cross-product-lines-planes": ("source/exercises.ptx", "assignment-5-cross-product-lines-planes.ptx"),
    "assignment-6-quadric-surfaces": ("source/exercises.ptx", "assignment-6-quadric-surfaces.ptx"),
    "assignment-7-functions-several-variables": ("source/exercises.ptx", "assignment-7-functions-several-variables.ptx"),
    "assignment-8-chain-rule": ("source/exercises.ptx", "assignment-8-chain-rule.ptx"),
    "assignment-9-tangent-planes": ("source/exercises.ptx", "assignment-9-tangent-planes.ptx"),
    "assignment-10-extreme-values-lagrange": ("source/exercises.ptx", "assignment-10-extreme-values-lagrange.ptx"),
    "review-problems-1": ("source/exercises.ptx", "review-problems-1.ptx"),
    "review-problems-2": ("source/exercises.ptx", "review-problems-2.ptx"),
    "review-problems-3": ("source/exercises.ptx", "review-problems-3.ptx"),
    "review-problems-4": ("source/exercises.ptx", "review-problems-4.ptx"),
}


def read(p):
    with open(p, encoding="utf-8") as f:
        return f.read()


def write(p, s):
    with open(p, "w", encoding="utf-8") as f:
        f.write(s)


def inc_re(href):
    return re.compile(r'<xi:include\s+href="\.?/?%s"\s*/>' % re.escape(href))


def wrapped_re(href):
    return re.compile(
        r'<!--\s*UNPOSTED(?:-WITH topic="([^"]*)")?\s+'
        r'(<xi:include\s+href="\.?/?%s"\s*/>)\s+UNPOSTED\s*-->' % re.escape(href)
    )


def expand(path, depth=0):
    """Inline xi:includes recursively, dropping XML comments (so wrapped
    includes vanish), for cross-reference checking."""
    if depth > 20 or not os.path.exists(path):
        return ""
    text = re.sub(r"<!--.*?-->", "", read(path), flags=re.S)

    def repl(m):
        return expand(os.path.join(SRC, m.group(1)), depth + 1)

    return re.sub(r'<xi:include\s+href="\.?/?([^"]+)"\s*/>', repl, text)


def dangling_refs():
    full = expand(os.path.join(SRC, "main.ptx"))
    ids = set(re.findall(r'xml:id="([^"]+)"', full))
    refs = set()
    for group in re.findall(r'<xref\b[^>]*\bref="([^"]+)"', full):
        for r in re.split(r"[,\s]+", group):
            if r:
                refs.add(r)
    return {r for r in refs if r not in ids}


def unpost_include(path, href, topic=None):
    """Wrap one include. Returns 'done' or 'already'."""
    text = read(path)
    if wrapped_re(href).search(text):
        return "already"
    m = inc_re(href).search(text)
    if m is None:
        sys.exit("include %s not found in %s" % (href, path))
    tag = "UNPOSTED" if topic is None else 'UNPOSTED-WITH topic="%s"' % topic
    write(path, text[: m.start()] + "<!-- %s %s UNPOSTED -->" % (tag, m.group(0)) + text[m.end():])
    return "done"


def post_include(path, href):
    """Unwrap one include. Returns 'done' or 'already'."""
    text = read(path)
    m = wrapped_re(href).search(text)
    if m is None:
        if inc_re(href).search(text):
            return "already"
        sys.exit("include %s not found in %s" % (href, path))
    write(path, text[: m.start()] + m.group(2) + text[m.end():])
    return "done"


def files_referencing(ref_id):
    hits = []
    for name in os.listdir(SRC):
        if not name.endswith(".ptx"):
            continue
        if re.search(r'<xref\b[^>]*\bref="[^"]*\b%s\b[^"]*"' % re.escape(ref_id), read(os.path.join(SRC, name))):
            hits.append(name)
    return hits


def live_includes(path):
    """The unwrapped <xi:include> hrefs of a file.  Wrapped ones are inside
    XML comments, so stripping comments leaves exactly what is in the book."""
    text = re.sub(r"<!--.*?-->", "", read(path), flags=re.S)
    return re.findall(r'<xi:include\s+href="\.?/?([^"]+)"\s*/>', text)


def sync_containers():
    """Keep the book structurally valid after a toggle: a chapter with no live
    sections leaves main.ptx, one with sections is in it, and the placeholder
    chapter appears only when nothing else is left."""
    for path, href in CONTAINERS.items():
        if not os.path.exists(path):
            continue
        if live_includes(path):
            post_include(MAIN, href)
        else:
            unpost_include(MAIN, href)
    real = [h for h in live_includes(MAIN) if h not in FIXTURES]
    if real:
        unpost_include(MAIN, PLACEHOLDER)
    else:
        post_include(MAIN, PLACEHOLDER)


def main():
    if len(sys.argv) != 3 or sys.argv[1] not in ("post-notes", "unpost-notes"):
        sys.exit(__doc__)
    action, key = sys.argv[1], sys.argv[2]
    if key not in TOPICS:
        sys.exit("unknown topic key: %s" % key)
    path, href = TOPICS[key]

    originals = {p: read(p) for p in
                 [os.path.join(SRC, n) for n in os.listdir(SRC) if n.endswith(".ptx")]}

    def bail(msg):
        for p, s in originals.items():
            write(p, s)
        print(msg, file=sys.stderr)
        sys.exit(2)

    baseline = dangling_refs()

    if action == "post-notes":
        state = post_include(path, href)
        # restore any dependents that were unposted together with this topic
        pat = re.compile(
            r'<!--\s*UNPOSTED-WITH topic="%s"\s+(<xi:include\s+href="[^"]+"\s*/>)\s+UNPOSTED\s*-->' % re.escape(key)
        )
        for p in originals:
            text = read(p)
            new = pat.sub(lambda m: m.group(1), text)
            if new != text:
                write(p, new)
        print("post-notes %s: %s" % (key, state))
    else:
        state = unpost_include(path, href)
        if state == "done":
            # wrap dependent exercise sets until nothing dangles
            for _ in range(10):
                new_dangling = dangling_refs() - baseline
                if not new_dangling:
                    break
                fixed_any = False
                # anything main.ptx includes (a whole chapter, the whole
                # exercises chapter) is never an acceptable dependency
                # casualty of unposting one topic
                top_level = set(re.findall(r'href="\.?/?([^"]+)"', read(os.path.join(SRC, "main.ptx"))))
                # another topic's own file is never a casualty either:
                # taking a different topic off the site is an editorial
                # decision, not a mechanical one — bail to the Claude path
                topic_files = {h for _, h in TOPICS.values()}
                for ref in sorted(new_dangling):
                    for fname in files_referencing(ref):
                        fpath = os.path.join(SRC, fname)
                        if fpath in (path,) or fname in top_level or fname in topic_files:
                            continue
                        # only fix by wrapping the referencing file's own include
                        for holder in originals:
                            text = read(holder)
                            if inc_re(fname).search(text) or wrapped_re(fname).search(text):
                                if unpost_include(holder, fname, topic=key) == "done":
                                    fixed_any = True
                                break
                if not fixed_any:
                    bail("unpost %s leaves dangling cross-references (%s) that cannot be fixed by wrapping an include"
                         % (key, ", ".join(sorted(new_dangling))))
            else:
                bail("unpost %s: dependency fixing did not converge" % key)
        print("unpost-notes %s: %s" % (key, state))

    sync_containers()

    leftover = dangling_refs() - baseline
    if leftover:
        bail("change would leave dangling cross-references: %s" % ", ".join(sorted(leftover)))

    # well-formedness of every file we touched
    from xml.etree import ElementTree as ET
    for p, s in originals.items():
        if read(p) != s:
            try:
                ET.fromstring(read(p))
            except ET.ParseError as e:
                bail("%s no longer parses: %s" % (p, e))
            print("modified: %s" % p)


if __name__ == "__main__":
    main()
