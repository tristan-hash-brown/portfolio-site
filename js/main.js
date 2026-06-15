const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

function closeNav() {
  siteNav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) closeNav();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteNav.classList.contains("is-open")) closeNav();
  });

  document.addEventListener("click", (event) => {
    if (siteNav.classList.contains("is-open") &&
        !siteNav.contains(event.target) &&
        !navToggle.contains(event.target)) {
      closeNav();
    }
  });
}

// Contact form AJAX submission
const contactForm = document.querySelector(".contact-form[data-contact-form]");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const btn = contactForm.querySelector("[type='submit']");
    const successEl = contactForm.parentElement.querySelector(".form-success");
    if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
    fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" }
    })
      .then((res) => {
        if (res.ok) {
          contactForm.style.display = "none";
          if (successEl) successEl.style.display = "block";
        } else { throw new Error("server"); }
      })
      .catch(() => {
        if (btn) { btn.disabled = false; btn.textContent = "Send My Project Details"; }
        alert("Something went wrong — please email hello@tristanwebstudio.com directly.");
      });
  });
}

const workFilters = document.querySelectorAll("[data-work-filter]");
const workCards = document.querySelectorAll("[data-category]");
const workCategorySections = document.querySelectorAll("[data-work-category-section]");

if (workFilters.length && workCards.length) {
  function applyWorkFilter(selectedCategory) {
    workFilters.forEach((filter) => {
      const isSelected = filter.getAttribute("data-work-filter") === selectedCategory;
      filter.classList.toggle("is-active", isSelected);
      filter.setAttribute("aria-pressed", String(isSelected));
    });

    workCards.forEach((card) => {
      const isVisible = selectedCategory === "all" || card.getAttribute("data-category") === selectedCategory;
      card.hidden = !isVisible;
    });

    workCategorySections.forEach((section) => {
      const hasVisibleCard = section.querySelector("[data-category]:not([hidden])");
      section.hidden = !hasVisibleCard;
    });
  }

  workFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
      applyWorkFilter(filter.getAttribute("data-work-filter") || "all");
    });
  });
}
