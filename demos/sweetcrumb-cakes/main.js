const quoteForm = document.querySelector(".quote-form");
const formStatus = document.querySelector(".form-status");

if (quoteForm && formStatus) {
  const eventDateField = quoteForm.querySelector('input[name="eventDate"]');

  if (eventDateField) {
    eventDateField.min = new Date().toLocaleDateString("en-CA");
  }

  function setStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = `form-status is-visible is-${type}`;
  }

  function clearFieldErrors() {
    quoteForm
      .querySelectorAll(".field-error")
      .forEach((field) => field.classList.remove("field-error"));
  }

  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearFieldErrors();

    const requiredFields = Array.from(quoteForm.querySelectorAll("[required]"));
    const firstInvalid = requiredFields.find((field) => !field.checkValidity());

    if (firstInvalid) {
      firstInvalid.classList.add("field-error");
      firstInvalid.focus();
      setStatus("Please complete the highlighted field before sending your quote request.", "error");
      return;
    }

    quoteForm.reset();
    if (eventDateField) {
      eventDateField.min = new Date().toLocaleDateString("en-CA");
    }
    setStatus(
      "Thanks — your quote details are ready. For this portfolio demo, no message was actually sent.",
      "success"
    );
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
