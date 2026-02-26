/* ============================================================
   components.js — Shared nav + footer injection
   ============================================================ */

(function () {
  // ── Determine active page ──────────────────────────────────
  const path = window.location.pathname.replace(/\/$/, '');
  const page = path.split('/').pop() || 'index.html';

  function isActive(href) {
    if (href === 'index.html' || href === './') {
      return page === 'index.html' || page === '' || path === '/';
    }
    return page === href;
  }

  function activeClass(href) {
    return isActive(href) ? ' class="active"' : '';
  }

  // ── Nav HTML ───────────────────────────────────────────────
  const navHTML = `
<nav id="site-nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">Chase James</a>
    <ul class="nav-links">
      <li><a href="research.html"${activeClass('research.html')}>Research</a></li>
      <li><a href="publications.html"${activeClass('publications.html')}>Publications</a></li>
      <li><a href="cv.html"${activeClass('cv.html')}>CV</a></li>
      <li><a href="mailto:cjames80@usc.edu" class="btn-nav">Contact</a></li>
    </ul>
    <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
  <ul class="nav-mobile" id="nav-mobile">
    <li><a href="index.html">Home</a></li>
    <li><a href="research.html">Research</a></li>
    <li><a href="publications.html">Publications</a></li>
    <li><a href="cv.html">CV</a></li>
    <li><a href="mailto:cjames80@usc.edu">Contact</a></li>
  </ul>
</nav>`;

  // ── Footer HTML ────────────────────────────────────────────
  const footerHTML = `
<footer id="site-footer">
  <div class="footer-inner">
    <div>
      <div class="footer-brand">Chase James</div>
    </div>
    <div class="footer-links">
      <!-- Email -->
      <a href="mailto:cjames80@usc.edu" title="Email" aria-label="Email">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      </a>
      <!-- LinkedIn -->
      <a href="https://www.linkedin.com/in/chase-james-36a228bb/" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
      <!-- GitHub -->
      <a href="https://github.com/ChaseCJames" target="_blank" rel="noopener" title="GitHub" aria-label="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
      <!-- Google Scholar -->
      <a href="https://scholar.google.com/citations?user=vtPKuk8AAAAJ" target="_blank" rel="noopener" title="Google Scholar" aria-label="Google Scholar">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>
      </a>
    </div>
  </div>
  <div class="footer-bottom">
    &copy; <span id="footer-year"></span> Chase James
  </div>
</footer>`;

  // ── Inject ─────────────────────────────────────────────────
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = navHTML;

  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = footerHTML;

  // Set copyright year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
