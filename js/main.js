// =============================================
//  Portfolio JS — Sara Malik
// =============================================

// ---- NAV: Scrolled state ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ---- NAV: Smooth active link highlight ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ---- HAMBURGER MENU ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  // Animate hamburger to X
  const spans = hamburger.querySelectorAll('span');
  if (mobileMenu.classList.contains('open')) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(s => s.style.transform = s.style.opacity = '');
  });
});

// ---- SCROLL REVEAL ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger cards within grid containers
      const siblings = entry.target.parentElement.querySelectorAll('.reveal');
      let delay = 0;
      siblings.forEach((el, idx) => {
        if (el === entry.target) delay = idx * 80;
      });
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---- CONTACT FORM ----
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  btn.style.opacity = '0.7';

  // Simulate sending (replace with real EmailJS / Formspree)
  setTimeout(() => {
    form.reset();
    btn.textContent = 'Send Message ✦';
    btn.disabled = false;
    btn.style.opacity = '1';
    successMsg.classList.add('show');
    setTimeout(() => successMsg.classList.remove('show'), 5000);
  }, 1500);
});

// ---- HIRE ME button → scroll to contact ----
document.querySelector('.nav__cta').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// ---- Marquee pause on hover ----
const marquee = document.querySelector('.marquee');
marquee.addEventListener('mouseenter', () => {
  marquee.style.animationPlayState = 'paused';
});
marquee.addEventListener('mouseleave', () => {
  marquee.style.animationPlayState = 'running';
});
