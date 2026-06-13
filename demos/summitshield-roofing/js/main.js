(function () {
  var navToggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");
  var forms = document.querySelectorAll("[data-quote-form]");

  function closeNav() {
    if (!navToggle || !nav) return;
    navToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("nav-open", !isOpen);
    });

    nav.addEventListener("click", function (event) {
      if (event.target.matches("a")) closeNav();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeNav();
    });
  }

  document.addEventListener("click", function (event) {
    var phoneLink = event.target.closest("a[href^='tel:']");
    if (!phoneLink) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "call_click",
      location: phoneLink.getAttribute("data-track-location") || "unknown",
      phone: phoneLink.getAttribute("href").replace("tel:", "")
    });
  });

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "roofing_quote_submit" });

      var button = form.querySelector("[type='submit']");
      var success = form.querySelector(".form-success");

      if (button) {
        button.disabled = true;
        button.textContent = "Request Sent";
      }

      if (success) {
        success.hidden = false;
        success.focus();
      }
    });
  });
})();
