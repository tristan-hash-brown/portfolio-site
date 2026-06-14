(function () {
  var body = document.body;
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  var revealItems = document.querySelectorAll(".reveal");
  var signupForm = document.querySelector(".signup-form");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      body.classList.toggle("menu-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        body.classList.remove("menu-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      var status = signupForm.querySelector(".form-status");

      event.preventDefault();
      if (status) {
        status.textContent = "Thanks — your fictional MOLT Studio inquiry has been received for this demo.";
      }
      signupForm.reset();
    });
  }
}());
