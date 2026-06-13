const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
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
