const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const navLinks = document.querySelectorAll(".nav-links a");
const yearTarget = document.querySelector("[data-year]");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

function closeMobileNav() {
  document.body.classList.remove("nav-open");
  navMenu?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Open navigation");
}

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";

  document.body.classList.toggle("nav-open", !isOpen);
  navMenu?.classList.toggle("is-open", !isOpen);
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

function updateHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

const observedSections = Array.from(navLinks)
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  {
    rootMargin: "-45% 0px -45% 0px",
    threshold: 0
  }
);

observedSections.forEach((section) => sectionObserver.observe(section));
