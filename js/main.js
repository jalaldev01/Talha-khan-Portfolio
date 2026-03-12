// =============================================
//  Portfolio JS — Sara Malik
// =============================================

// ---- NAV: Scrolled state ----
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

// ---- NAV: Smooth active link highlight ----
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ---- HAMBURGER MENU ----
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  // Animate hamburger to X
  const spans = hamburger.querySelectorAll("span");
  if (mobileMenu.classList.contains("open")) {
    spans[0].style.transform = "translateY(7px) rotate(45deg)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "translateY(-7px) rotate(-45deg)";
  } else {
    spans[0].style.transform = "";
    spans[1].style.opacity = "";
    spans[2].style.transform = "";
  }
});

// Close mobile menu on link click
document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    const spans = hamburger.querySelectorAll("span");
    spans.forEach((s) => (s.style.transform = s.style.opacity = ""));
  });
});

// ---- SCROLL REVEAL ----
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger cards within grid containers
        const siblings = entry.target.parentElement.querySelectorAll(".reveal");
        let delay = 0;
        siblings.forEach((el, idx) => {
          if (el === entry.target) delay = idx * 80;
        });
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

// ---- CONTACT FORM ----
const form = document.getElementById("form");
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  formData.append("access_key", "9d50ffec-aa28-4819-8f27-f66420a744cd");

  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      alert("Success! Your message has been sent.");
      form.reset();
    } else {
      alert("Error: " + data.message);
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});

// ---- HIRE ME button → scroll to contact ----
document.querySelector(".nav__cta").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// ---- Marquee pause on hover ----
const marquee = document.querySelector(".marquee");
marquee.addEventListener("mouseenter", () => {
  marquee.style.animationPlayState = "paused";
});
marquee.addEventListener("mouseleave", () => {
  marquee.style.animationPlayState = "running";
});
