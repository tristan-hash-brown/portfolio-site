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
        if (btn) { btn.disabled = false; btn.textContent = "Get a Free Pricing Call"; }
        alert("Something went wrong — please email hello@tristanwebstudio.com directly.");
      });
  });
}

const workTabs = document.querySelectorAll("[data-work-tab]");
const workPanels = document.querySelectorAll("[data-work-panel]");

if (workTabs.length && workPanels.length) {
  workTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const selectedCategory = tab.getAttribute("data-work-tab");

      workTabs.forEach((item) => {
        const isSelected = item === tab;
        item.classList.toggle("is-active", isSelected);
        item.setAttribute("aria-selected", String(isSelected));
      });

      workPanels.forEach((panel) => {
        const isSelected = panel.getAttribute("data-work-panel") === selectedCategory;
        panel.classList.toggle("is-active", isSelected);
        panel.hidden = !isSelected;
      });
    });
  });
}
