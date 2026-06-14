const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
const bookingForm = document.querySelector(".booking-form");
const formStatus = document.querySelector(".form-status");

function setMenuOpen(isOpen) {
  if (!navToggle || !siteNav) return;

  navToggle.setAttribute("aria-expanded", String(isOpen));
  siteNav.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuOpen(false);
    }
  });
}

if (bookingForm && formStatus) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent =
      "Thanks — your fictional Cutline booking request has been received for this demo.";
    bookingForm.reset();
  });
}
