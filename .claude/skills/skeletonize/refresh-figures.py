"""Re-pull every spliced <figure> in a skeletal file from its (updated) source.

Reports which figures were refreshed, which were unchanged, and which no
longer exist upstream -- the last group needs a human decision.
"""
import re, sys

TYPED = r'(fig|vid|video|image|table|interactive|figure)'

def blocks(text, tag='figure'):
    """yield (start, end, xml_id) for each top-level <figure> element"""
    out, i = [], 0
    while True:
        m = re.search(r'<%s xml:id="([^"]+)"' % tag, text[i:])
        if not m:
            return out
        start = i + m.start()
        depth = 0
        for tok in re.finditer(r'<%s\b|</%s>' % (tag, tag), text[start:]):
            depth += 1 if tok.group().startswith('<' + tag) else -1
            if depth == 0:
                end = start + tok.end()
                break
        else:
            raise SystemExit('unterminated figure ' + m.group(1))
        out.append((start, end, m.group(1)))
        i = end

def unskel(v):
    m = re.match(TYPED + r'-skel-(.*)', v)
    if m:
        return f'{m.group(1)}-{m.group(2)}'
    return v[5:] if v.startswith('skel-') else v

def skelize(block):
    def ident(v):
        if v.startswith('skel-') or '-skel-' in v:
            return v
        m = re.match(TYPED + r'-(.*)', v)
        return f'{m.group(1)}-skel-{m.group(2)}' if m else 'skel-' + v
    block = re.sub(r'(xml:id=")([^"]+)"', lambda m: m.group(1)+ident(m.group(2))+'"', block)
    block = re.sub(r'(<xref ref=")([^"]+)"', lambda m: m.group(1)+ident(m.group(2))+'"', block)
    block = re.sub(r'(<prefigure[^>]*\blabel=")(?!skel-)', r'\1skel-', block)
    return block

def main(skel_path, src_path):
    skel = open(skel_path).read()
    src = open(src_path).read()
    src_index = {fid: src[a:b] for a, b, fid in blocks(src)}
    refreshed, same, gone = [], [], []
    for a, b, fid in reversed(blocks(skel)):
        orig = unskel(fid)
        if orig not in src_index:
            gone.append(fid)
            continue
        new = skelize(src_index[orig])
        if new == skel[a:b]:
            same.append(fid)
        else:
            skel = skel[:a] + new + skel[b:]
            refreshed.append(fid)
    open(skel_path, 'w').write(skel)
    print(f'{skel_path}')
    print(f'   refreshed: {len(refreshed)} {sorted(refreshed)}')
    print(f'   unchanged: {len(same)}')
    if gone:
        print(f'   NO LONGER UPSTREAM: {sorted(gone)}')

main(sys.argv[1], sys.argv[2])
