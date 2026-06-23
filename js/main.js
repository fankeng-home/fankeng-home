/* ================================================
   梵肯全屋定制 - 主脚本
   ================================================ */

(function() {
  'use strict';

  // --- Nav scroll behavior ---
  let lastScroll = 0;
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 80 && currentScroll > lastScroll) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // --- Close mobile nav on link click ---
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      var navLinks = document.querySelector('.nav-links');
      if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
      }
    });
  });

  // --- Close float panel on outside click ---
  document.addEventListener('click', function(e) {
    var panel = document.getElementById('floatPanel');
    var btn = document.querySelector('.float-btn');
    if (panel && btn && panel.classList.contains('show')) {
      if (!panel.contains(e.target) && e.target !== btn) {
        panel.classList.remove('show');
      }
    }
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();

// --- Case filter function ---
function filterCases(style) {
  var tags = document.querySelectorAll('.filter-bar .filter-tag');
  tags.forEach(function(t) { t.classList.remove('active'); });
  event.target.classList.add('active');

  var cards = document.querySelectorAll('#caseGrid .case-card');
  cards.forEach(function(card) {
    if (style === 'all' || card.getAttribute('data-style') === style) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// --- Contact form handler ---
function handleSubmit(event) {
  event.preventDefault();
  var form = document.getElementById('contactForm');
  var success = document.getElementById('formSuccess');

  // In production, replace with real form submission endpoint
  // Currently simulates a successful submission
  form.style.display = 'none';
  success.style.display = 'block';
  success.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// --- Lazy load images ---
document.addEventListener('DOMContentLoaded', function() {
  // Add intersection observer for future image lazy loading
  if ('IntersectionObserver' in window) {
    // Placeholder for lazy image loading implementation
    // Will be wired when real images are added
  }
});

// --- Respect reduced motion ---
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.style.setProperty('--transition', '0s');
}
