// =============================================
//  VALLEY EDGE YARD CARE — main.js
// =============================================

// --- NAV SCROLL EFFECT ---
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// --- MOBILE MENU ---
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// --- SCROLL REVEAL ---
const revealElements = document.querySelectorAll(
  '.service-card, .testimonial-card, .about-content, .about-image, .contact-info, .contact-form-wrap, .stat'
);

revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(el => revealObserver.observe(el));

// --- STAGGERED CARD REVEAL ---
document.querySelectorAll('.service-grid, .testimonial-grid').forEach(grid => {
  const cards = grid.querySelectorAll('.reveal');
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 80}ms`;
  });
});

// --- SMOOTH SCROLL for all anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});