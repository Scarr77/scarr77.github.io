// Smooth scroll navigation
document.querySelectorAll("[data-target]").forEach(el => {
  el.addEventListener("click", () => {
    document
      .getElementById(el.dataset.target)
      .scrollIntoView({ behavior: "smooth" });

    navMenu.classList.remove("open");
  });
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  document.getElementById("progress-bar").style.width =
    `${(scrollTop / docHeight) * 100}%`;
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Active nav highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.dataset.target === current) {
      link.classList.add("active");
    }
  });
});

// Phrase rotator
const phrases = [
  "I build systems, not shortcuts.",
  "I learn by rebuilding environments.",
  "Creative thinking backed by infrastructure.",
  "Iteration over imitation."
];

let index = 0;
setInterval(() => {
  document.getElementById("dynamic-line").textContent =
    phrases[index];
  index = (index + 1) % phrases.length;
}, 3000);
