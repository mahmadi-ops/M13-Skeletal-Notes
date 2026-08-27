"""Expand {{FIG:srcfile:id}} placeholders in a skeletal .ptx draft.

Pulls the named <figure> out of a lecture-notes source file verbatim and
rewrites its identifiers into this book's convention -- fig-skel-x, not
skel-fig-x -- so the skeletal book and the full notes can be built together.
"""
import re, sys

TYPED = r'(fig|vid|video|image|table|interactive|figure)'

def extract(src, fid):
    m = re.search(r'[ \t]*<figure xml:id="%s"[ >]' % re.escape(fid), src)
    if not m:
        raise SystemExit("figure not found: " + fid)
    i, depth = m.start(), 0
    for tok in re.finditer(r'<figure\b|</figure>', src[i:]):
        depth += 1 if tok.group().startswith('<figure') else -1
        if depth == 0:
            return src[i:i + tok.end()]
    raise SystemExit("unterminated figure: " + fid)

def skelize(block):
    def ident(value):
        if value.startswith('skel-') or '-skel-' in value:
            return value
        m = re.match(TYPED + r'-(.*)', value)
        return f'{m.group(1)}-skel-{m.group(2)}' if m else 'skel-' + value
    block = re.sub(r'(xml:id=")([^"]+)"', lambda m: m.group(1) + ident(m.group(2)) + '"', block)
    block = re.sub(r'(<xref ref=")([^"]+)"', lambda m: m.group(1) + ident(m.group(2)) + '"', block)
    block = re.sub(r'(<prefigure[^>]*\blabel=")(?!skel-)', r'\1skel-', block)
    return block

def main(path):
    draft = open(path).read()
    srcs = {}
    def repl(m):
        srcfile, fid = m.group(1), m.group(2)
        if srcfile not in srcs:
            srcs[srcfile] = open(srcfile).read()
        return skelize(extract(srcs[srcfile], fid))
    n = len(re.findall(r'\{\{FIG:', draft))
    open(path, 'w').write(re.sub(r'\{\{FIG:([^:]+):([^}]+)\}\}', repl, draft))
    print("expanded", n, "figures")

main(sys.argv[1])
