// ===== Helpers =====
const qs = (sel) => document.querySelector(sel);

const yearEl = qs("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Mobile Menu Toggle =====
const menuBtn = qs("#menuBtn");
const mobileMenu = qs("#mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const isHidden = mobileMenu.hasAttribute("hidden");
    if (isHidden) mobileMenu.removeAttribute("hidden");
    else mobileMenu.setAttribute("hidden", "");
  });

  // Close mobile menu when clicking a link
  mobileMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") mobileMenu.setAttribute("hidden", "");
  });
}

// ===== Theme Toggle (light/dark) =====
const themeToggle = qs("#themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "" : "light";

    if (next) {
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "");
    }
  });
}

// ===== Contact Form (demo only) =====
const form = qs("#contactForm");
const note = qs("#formNote");

if (form && note) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    note.textContent = "Thanks! Your message is ready to be sent (connect this to your backend/email service).";
    form.reset();

    setTimeout(() => {
      note.textContent = "";
    }, 6000);
  });
}
