/* ------------------------------------------------------------------ *
 * Print fallback for interactive PreFigure diagrams.
 *
 * Annotated PreFigure diagrams are embedded as an interactive "diagcess"
 * element whose SVG is injected by JavaScript at runtime, so it does not
 * render in the worksheet print / print-preview view. For each such diagram
 * we insert a static <img> (the non-diagcess SVG that PreFigure also
 * generates), hidden on screen and shown only in print (see custom.css).
 * ------------------------------------------------------------------ */
(function () {
  function addPrintFallbacks() {
    var els = document.querySelectorAll("div.ChemAccess-element[data-src]");
    els.forEach(function (el) {
      if (el.dataset.printFallbackAdded) return;
      var src = el.getAttribute("data-src");
      if (!src) return;
      var staticSrc = src.replace(/-diagcess\.svg$/, ".svg");
      if (staticSrc === src) return; // not a diagcess source; leave alone
      var img = document.createElement("img");
      img.src = staticSrc;
      img.alt = "";
      img.setAttribute("aria-hidden", "true");
      img.className = "prefigure-print-fallback";
      el.parentNode.insertBefore(img, el.nextSibling);
      el.dataset.printFallbackAdded = "1";
    });
  }

  /* ---------------------------------------------------------------- *
   * Render interactive PreFigure diagrams that arrive inside a knowl.
   *
   * Each page calls diagcess.Base.init() once, inline at the end of the
   * body, so diagcess only ever sees the ChemAccess elements present at
   * that moment. A figure revealed by clicking an <xref> link is fetched
   * afterwards by knowl.js, so its diagram never gets an SVG injected and
   * the reader is shown an empty box. Watch for these late arrivals and
   * initialize them.
   *
   * init() has no way to be scoped to a subtree: it reprocesses every
   * ChemAccess element in the document, re-rewriting the transformations
   * of SVGs that are already drawn. So for the duration of the call we
   * take the class off the elements diagcess has already claimed, leaving
   * only the new ones visible to it.
   * ---------------------------------------------------------------- */
  function initLateDiagrams() {
    if (typeof diagcess === "undefined" || !diagcess.Base || !diagcess.Base.molMap) return;

    var claimed = [];
    Object.keys(diagcess.Base.molMap).forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.classList.contains("ChemAccess-element")) {
        el.classList.remove("ChemAccess-element");
        claimed.push(el);
      }
    });

    var found = !!document.querySelector("div.ChemAccess-element");
    try {
      if (found) diagcess.Base.init();
    } finally {
      claimed.forEach(function (el) {
        el.classList.add("ChemAccess-element");
      });
    }
    if (found) addPrintFallbacks();
  }

  var pending = false;
  function scheduleLateDiagrams() {
    if (pending) return;
    pending = true;
    setTimeout(function () {
      pending = false;
      initLateDiagrams();
    }, 50);
  }

  function watchForLateDiagrams() {
    if (!window.MutationObserver) return;
    // diagcess appends a <div class="svg"> inside each element it draws, and
    // addPrintFallbacks appends an <img>; neither matches the selector below,
    // so handling a mutation cannot trigger another round.
    new MutationObserver(function (records) {
      for (var i = 0; i < records.length; i++) {
        var added = records[i].addedNodes;
        for (var j = 0; j < added.length; j++) {
          var node = added[j];
          if (node.nodeType !== 1) continue;
          if (
            (node.matches && node.matches("div.ChemAccess-element")) ||
            (node.querySelector && node.querySelector("div.ChemAccess-element"))
          ) {
            scheduleLateDiagrams();
            return;
          }
        }
      }
    }).observe(document.body, { childList: true, subtree: true });
  }

  function start() {
    addPrintFallbacks();
    watchForLateDiagrams();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();

/* ------------------------------------------------------------------ *
 * "PDF" button in the navigation bar.
 *
 * These notes are meant to be completed by hand, so the PDF is the copy
 * students actually work on -- printed, or annotated on an iPad. PreTeXt has
 * no built-in link to it, so we add one to the navbar, styled with the
 * theme's own .button classes so it matches Contents / Search / Prev-Up-Next.
 *
 * scripts/build-site.sh puts the PDF next to the HTML pages, and every
 * chunked page of this book sits at the root of the output directory, so a
 * bare relative href resolves from all of them. The icon is inline SVG rather
 * than a Material Symbols codepoint so it cannot come out as tofu if the icon
 * font is unavailable.
 * ------------------------------------------------------------------ */
(function () {
  var PDF_HREF = "math13-skeletal-notes.pdf";
  var PDF_TITLE = "Download the whole book as a PDF, to print or annotate";

  function addPdfButton() {
    var contents = document.querySelector("#ptx-navbar .ptx-navbar-contents");
    if (!contents) return;
    if (contents.querySelector(".pdf-button")) return;

    var a = document.createElement("a");
    a.className = "pdf-button button";
    a.href = PDF_HREF;
    a.title = PDF_TITLE;
    // Open in a new tab so a reader who is midway through a section does not
    // lose their place to the browser's PDF viewer.
    a.target = "_blank";
    a.rel = "noopener";

    var icon = document.createElement("span");
    icon.className = "icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML =
      '<svg viewBox="0 0 24 24" width="18" height="18" focusable="false" ' +
      'aria-hidden="true"><path fill="currentColor" d="M6 2h7l5 5v13a2 2 0 0 ' +
      '1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6.5 1.5V8H17l-4.5-4.5zM12 10.5' +
      'a.75.75 0 0 0-.75.75v3.19l-1.22-1.22a.75.75 0 1 0-1.06 1.06l2.5 2.5a' +
      '.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22v-3.19' +
      'a.75.75 0 0 0-.75-.75z"/></svg>';

    var name = document.createElement("span");
    name.className = "name";
    name.textContent = "PDF";

    a.appendChild(icon);
    a.appendChild(name);

    // Sit just before the Prev/Up/Next group, which is pinned to the right.
    var tree = contents.querySelector(".treebuttons");
    if (tree) {
      contents.insertBefore(a, tree);
    } else {
      contents.appendChild(a);
    }
  }

  /* Only offer the button if the PDF is actually there.
   *
   * The deployed site always has it, because scripts/build-site.sh puts it
   * beside the HTML. A local `pretext build web` on its own does not, and a
   * visible link that 404s is worse than no link, so ask before showing.
   *
   * fetch() cannot read file:// URLs (the browser blocks it as cross-origin),
   * so when the page has been opened straight off disk there is no way to
   * check; show the button rather than hide it wrongly.
   */
  function addPdfButtonIfPresent() {
    if (window.location.protocol === "file:" || typeof fetch !== "function") {
      addPdfButton();
      return;
    }
    fetch(PDF_HREF, { method: "HEAD" })
      .then(function (r) {
        if (r.ok) addPdfButton();
      })
      .catch(function () {
        /* offline, or no PDF built: leave the navbar as it was */
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addPdfButtonIfPresent);
  } else {
    addPdfButtonIfPresent();
  }
})();
