/* ============================================================
   main.js — Nav scroll behavior + mobile menu
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  // ── Scrolled nav ───────────────────────────────────────────
  const nav = document.getElementById('site-nav');

  function updateNav() {
    if (!nav) return;
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // ── Mobile hamburger ───────────────────────────────────────
  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('nav-mobile');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (nav && !nav.contains(e.target)) {
        mobileMenu.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      }
    });
  }

  // ── Contact email copy popover ─────────────────────────────
  const contactBtn = document.getElementById('contact-btn');
  const contactPopover = document.getElementById('contact-popover');
  const contactCopy = document.getElementById('contact-copy');

  if (contactBtn && contactPopover) {
    contactBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const opening = contactPopover.hidden;
      contactPopover.hidden = !opening;
      contactBtn.setAttribute('aria-expanded', opening);
    });

    if (contactCopy) {
      contactCopy.addEventListener('click', function () {
        navigator.clipboard.writeText('cjames80@usc.edu').then(function () {
          contactCopy.textContent = 'Copied!';
          setTimeout(function () { contactCopy.textContent = 'Copy'; }, 2000);
        });
      });
    }

    document.addEventListener('click', function (e) {
      if (!contactBtn.contains(e.target) && !contactPopover.contains(e.target)) {
        contactPopover.hidden = true;
        contactBtn.setAttribute('aria-expanded', false);
      }
    });
  }

  // ── Scroll fade-in animations ──────────────────────────────
  var fadeEls = document.querySelectorAll('.project-section, .pub-year-group, .card, .cv-section');
  if ('IntersectionObserver' in window) {
    fadeEls.forEach(function (el) { el.classList.add('fade-in'); });
    var fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    fadeEls.forEach(function (el) { fadeObserver.observe(el); });
  }

  // ── Smooth scroll for anchor links ────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = (nav ? nav.getBoundingClientRect().height : 68) + 16;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });
});
