/**
 * HARD SENDS — shared navbar behavior.
 * Loaded on every page. Handles:
 *   1. Injecting the shared navbar markup from navbar.js
 *   2. The "Other tools" dropdown (open/close, click-outside, escape key)
 *   3. The mobile hamburger toggle
 */

const NAV_ROUTES = {
  root: {
    home: "index.html",
    about: "about.html",
    test: "jctest.html",
    contact: "contact.html",
    "crimp-conversion": "tools/crimp-conversion.html",
    "climbing-plan": "tools/climbing-plan.html",
    "useful-links": "tools/useful-links.html",
    "pullup-1rm-converter": "tools/pullup-1rm-converter.html",
    "all-tools": "tools/all-tools.html",
  },
  tools: {
    home: "../index.html",
    about: "../about.html",
    test: "../jctest.html",
    contact: "../contact.html",
    "crimp-conversion": "crimp-conversion.html",
    "climbing-plan": "climbing-plan.html",
    "useful-links": "useful-links.html",
    "pullup-1rm-converter": "pullup-1rm-converter.html",
    "all-tools": "all-tools.html",
  },
};

const PAGE_ROUTE_BY_FILE = {
  "index.html": "home",
  "about.html": "about",
  "jctest.html": "test",
  "contact.html": "contact",
  "crimp-conversion.html": "crimp-conversion",
  "climbing-plan.html": "climbing-plan",
};

function isToolsPage() {
  return /(^|[\\/])tools[\\/]/.test(window.location.pathname);
}

function setNavbarLinks(navbar) {
  const routeSet = isToolsPage() ? NAV_ROUTES.tools : NAV_ROUTES.root;
  navbar.querySelectorAll("[data-nav-route]").forEach((link) => {
    const route = link.getAttribute("data-nav-route");
    const href = routeSet[route];
    if (href) {
      link.setAttribute("href", href);
    }
  });

  const currentFile = window.location.pathname.split(/[\\/]/).pop() || "index.html";
  const currentRoute = PAGE_ROUTE_BY_FILE[currentFile];
  if (currentRoute) {
    const currentLink = navbar.querySelector(`.nav-list [data-nav-route="${currentRoute}"]`);
    currentLink?.setAttribute("aria-current", "page");
  }
}

function initNavbarBehavior() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) {
    return;
  }

  setNavbarLinks(navbar);

  const dropdown = navbar.querySelector(".has-dropdown");
  const toggle = dropdown?.querySelector(".dropdown-toggle");

  function closeDropdown() {
    dropdown?.setAttribute("data-open", "false");
    toggle?.setAttribute("aria-expanded", "false");
  }

  function toggleDropdown() {
    const isOpen = dropdown?.getAttribute("data-open") === "true";
    dropdown?.setAttribute("data-open", String(!isOpen));
    toggle?.setAttribute("aria-expanded", String(!isOpen));
  }

  toggle?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleDropdown();
  });

  document.addEventListener("click", (e) => {
    if (dropdown && !dropdown.contains(e.target)) closeDropdown();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDropdown();
  });

  const navToggle = navbar.querySelector(".nav-toggle");

  navToggle?.addEventListener("click", () => {
    const isOpen = navbar.getAttribute("data-mobile-open") === "true";
    navbar.setAttribute("data-mobile-open", String(!isOpen));
  });
}

function injectSharedNavbar() {
  const placeholder = document.querySelector("[data-navbar-slot]");
  if (placeholder && window.HARD_SENDS_NAVBAR_HTML) {
    placeholder.outerHTML = window.HARD_SENDS_NAVBAR_HTML;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  injectSharedNavbar();
  initNavbarBehavior();
});
