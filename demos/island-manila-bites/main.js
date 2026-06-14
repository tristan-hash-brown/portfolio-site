const form = document.querySelector(".order-form");
const message = document.querySelector(".form-message");
const dateField = form ? form.querySelector('input[name="date"]') : null;

function getLocalDateString(date = new Date()) {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
}

if (dateField) {
  dateField.min = getLocalDateString();
}

function showMessage(text, type = "success") {
  if (!message) {
    return;
  }

  message.textContent = text;
  message.classList.add("show");
  message.classList.toggle("error", type === "error");
}

function clearErrors() {
  if (!form) {
    return;
  }

  form.querySelectorAll(".field-error").forEach((field) => {
    field.classList.remove("field-error");
    field.removeAttribute("aria-invalid");
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();

    if (dateField) {
      dateField.min = getLocalDateString();
    }

    const requiredFields = Array.from(form.querySelectorAll("[required]"));
    const firstMissing = requiredFields.find((field) => !field.value.trim());

    if (firstMissing) {
      firstMissing.classList.add("field-error");
      firstMissing.setAttribute("aria-invalid", "true");
      firstMissing.focus();
      showMessage("Please complete the highlighted required field so we can review your request.", "error");
      return;
    }

    if (!form.checkValidity()) {
      const invalidField = form.querySelector(":invalid");

      if (invalidField) {
        invalidField.classList.add("field-error");
        invalidField.setAttribute("aria-invalid", "true");
        invalidField.focus();
      }

      showMessage("Please check the highlighted field before sending your preorder request.", "error");
      return;
    }

    showMessage("Demo request received — in a real site, this would be sent to the business for follow-up.");
    form.reset();

    if (dateField) {
      dateField.min = getLocalDateString();
    }

    if (message) {
      message.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}
