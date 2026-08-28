#!/usr/bin/env python3
"""Inject the full-screen button into every interactive HTML asset.

Each interactive page is embedded by PreTeXt as an <iframe> without an
allowfullscreen attribute, so the page itself may not call
requestFullscreen. The injected button instead posts
{type: "m13-fullscreen-toggle"} to the parent page, where a listener in
assets/custom.js full-screens the iframe element (a page opened directly,
outside any iframe, falls back to full-screening itself).

Idempotent: a page already carrying the marker comment is left alone.
Run from the repository root with the asset paths to patch, or with no
arguments to patch every page referenced as iframe="..." in source/*.ptx.
"""

import glob
import re
import sys

MARKER = "<!-- m13-fullscreen-button -->"

SNIPPET = MARKER + """
<script>
(function () {
  "use strict";
  var btn = document.createElement("button");
  btn.id = "m13FsBtn";
  btn.type = "button";
  btn.title = "Full screen";
  btn.setAttribute("aria-label", "Toggle full screen");
  btn.innerHTML = "\\u26f6";
  btn.style.cssText = [
    "position:fixed", "right:10px", "bottom:10px", "z-index:2147483647",
    "width:34px", "height:34px", "border-radius:50%",
    "border:1px solid rgba(127,127,127,.55)",
    "background:rgba(20,22,30,.62)", "color:#ece6e2",
    "font-size:17px", "line-height:1", "cursor:pointer", "padding:0",
    "opacity:.55", "transition:opacity .15s"
  ].join(";");
  btn.addEventListener("mouseenter", function () { btn.style.opacity = "1"; });
  btn.addEventListener("mouseleave", function () { btn.style.opacity = ".55"; });
  btn.addEventListener("click", function () {
    if (window.parent && window.parent !== window) {
      try {
        window.parent.postMessage({ type: "m13-fullscreen-toggle" }, "*");
        return;
      } catch (e) { /* fall through to the standalone path */ }
    }
    if (document.fullscreenElement) document.exitFullscreen();
    else if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  });
  function add() { document.body.appendChild(btn); }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", add);
  } else {
    add();
  }
})();
</script>
"""


def targets_from_source():
    names = set()
    for f in glob.glob("source/*.ptx"):
        names |= set(re.findall(r'iframe="([^"]+)"', open(f).read()))
    return sorted("assets/" + n for n in names)


def patch(path):
    try:
        s = open(path).read()
    except FileNotFoundError:
        print(f"MISSING  {path}")
        return
    if MARKER in s:
        print(f"ok       {path}")
        return
    if "</body>" not in s:
        print(f"NO BODY  {path}")
        return
    s = s.replace("</body>", SNIPPET + "</body>", 1)
    open(path, "w").write(s)
    print(f"patched  {path}")


if __name__ == "__main__":
    files = sys.argv[1:] or targets_from_source()
    for p in files:
        patch(p)
