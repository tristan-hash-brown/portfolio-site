(function () {
  window.dataLayer = window.dataLayer || [];

  function track(eventName, payload) {
    var eventPayload = Object.assign({ event: eventName }, payload || {});
    window.dataLayer.push(eventPayload);
    console.log("[tracking]", eventName, eventPayload);
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a[href^='tel:']");
    if (!link) return;
    track("call_click", {
      location: link.getAttribute("data-track-location") || "unknown",
      phone: link.getAttribute("href").replace("tel:", "")
    });
  });

  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!form.matches("[data-quote-form]")) return;

    track("quote_submit", {
      form_location: form.getAttribute("data-form-location") || "unknown"
    });

    event.preventDefault();
    var btn = form.querySelector("[type='submit']");
    var successEl = form.parentElement.querySelector(".form-success");

    if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    })
      .then(function (res) {
        if (res.ok) {
          form.style.display = "none";
          if (successEl) successEl.style.display = "block";
        } else {
          throw new Error("server");
        }
      })
      .catch(function () {
        if (btn) { btn.disabled = false; btn.textContent = "Send Quote Request"; }
        alert("Something went wrong — please call us at (905) 555-0188.");
      });
  });
})();
