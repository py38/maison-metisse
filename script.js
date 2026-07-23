/* Maison Métisse — interactions */
(function () {
  'use strict';

  // ── Mark JS active: reveal elements are only hidden when JS can animate them ──
  document.documentElement.classList.add('js');

  // ── Failsafe: whatever hasn't revealed after 3s becomes visible anyway ──
  setTimeout(function () {
    document.querySelectorAll('.reveal, .reveal-img').forEach(function (el) {
      el.classList.add('in');
    });
  }, 3000);

  // ── Preloader ──
  window.addEventListener('load', function () {
    var pre = document.getElementById('preloader');
    setTimeout(function () { pre.classList.add('done'); }, 500);
  });

  // ── Nav: scrolled state ──
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Mobile menu ──
  var burger = document.getElementById('burger');
  burger.addEventListener('click', function () {
    document.body.classList.toggle('menu-open');
  });
  document.querySelectorAll('#navLinks a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('menu-open'); });
  });

  // ── Reveal on scroll ──
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('.reveal, .reveal-img').forEach(function (el, i) {
    // subtle stagger for siblings
    el.style.transitionDelay = (i % 4) * 0.06 + 's';
    io.observe(el);
  });

  // ── Ensure background videos autoplay (muted loop, no controls) ──
  document.querySelectorAll('.film video').forEach(function (v) {
    v.muted = true;
    var tryPlay = function () {
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    };
    tryPlay();
    // retry once metadata is ready and when the video scrolls into view
    v.addEventListener('loadeddata', tryPlay);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (e) { if (e.isIntersecting) { tryPlay(); } });
      }, { threshold: 0.2 }).observe(v);
    }
  });

  // ── Year ──
  document.getElementById('year').textContent = new Date().getFullYear();
})();
