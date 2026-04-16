/* ============================================================
   RUMO CERTO — script.js
   Vanilla JS · Sem dependências externas
   ============================================================ */

(function () {
  'use strict';

  /* ──────────────────────────────────────────────────────────
     1. MENU HAMBURGER
  ────────────────────────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');
  const navLinks  = navMenu ? navMenu.querySelectorAll('.nav__link') : [];
  const body      = document.body;

  function openMenu() {
    hamburger.classList.add('is-open');
    navMenu.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('is-open');
    navMenu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  }

  function toggleMenu() {
    const isOpen = navMenu.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }

  // Fecha o menu ao clicar em qualquer link
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Fecha o menu ao clicar fora dele (overlay implícito)
  document.addEventListener('click', function (e) {
    if (
      navMenu &&
      navMenu.classList.contains('is-open') &&
      !navMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // Fecha ao pressionar Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('is-open')) {
      closeMenu();
      hamburger.focus();
    }
  });

  /* ──────────────────────────────────────────────────────────
     2. SMOOTH SCROLL PARA ÂNCORAS INTERNAS
        (Fallback para navegadores sem scroll-behavior nativo)
  ────────────────────────────────────────────────────────── */
  const HEADER_HEIGHT = 70; // px — altura do header fixo

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;

      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      e.preventDefault();

      const top = targetEl.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;

      window.scrollTo({ top: top, behavior: 'smooth' });

      // Atualiza histórico sem recarregar
      history.pushState(null, '', '#' + targetId);
    });
  });

  /* ──────────────────────────────────────────────────────────
     3. HEADER — SHADOW AO ROLAR
  ────────────────────────────────────────────────────────── */
  const header = document.getElementById('header');

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    highlightActiveSection();
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ──────────────────────────────────────────────────────────
     4. DESTAQUE DO LINK ATIVO NO NAV (Scrollspy)
  ────────────────────────────────────────────────────────── */
  const sections = document.querySelectorAll('main section[id]');

  function highlightActiveSection() {
    const scrollMid = window.scrollY + window.innerHeight / 2;

    sections.forEach(function (section) {
      const top    = section.offsetTop - HEADER_HEIGHT;
      const bottom = top + section.offsetHeight;
      const link   = navMenu
        ? navMenu.querySelector('a[href="#' + section.id + '"]')
        : null;

      if (link) {
        if (scrollMid >= top && scrollMid < bottom) {
          link.classList.add('active-section');
        } else {
          link.classList.remove('active-section');
        }
      }
    });
  }

  /* ──────────────────────────────────────────────────────────
     5. ANIMAÇÕES DE ENTRADA (IntersectionObserver)
        Fade-in + slide-up nos elementos com .animate-on-scroll
  ────────────────────────────────────────────────────────── */
  var observerOptions = {
    root:       null,
    rootMargin: '0px 0px -60px 0px',
    threshold:  0.12
  };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // dispara apenas uma vez
      }
    });
  }, observerOptions);

  // Observa todos os elementos marcados
  document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
    observer.observe(el);
  });

  /* ──────────────────────────────────────────────────────────
     6. INICIALIZA
  ────────────────────────────────────────────────────────── */
  onScroll(); // checa estado inicial sem esperar scroll

})();
