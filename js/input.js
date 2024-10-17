const inputs = document.querySelectorAll(".custom-input");

inputs.forEach((input) => {
  input.addEventListener("input", function () {
    const container = this.parentElement;

    container.classList.add("active");
    container.classList.remove("error");

    this.setCustomValidity("");

    if (!this.validity.valid) {
      container.classList.add("error");
      container.classList.add("error-visible");
    }
  });
});

document
  .getElementById("masthead-contact-submit-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let foundInvalid = false;
    let formIsValid = true;

    inputs.forEach((input) => {
      const container = input.parentElement;
      console.log(input.tagName === "SELECT" && input.value === "");

      if (!input.validity.valid) {
        formIsValid = false;
        container.classList.add("error");
        if (!foundInvalid) {
          container.classList.add("error-visible");
          foundInvalid = true;
        }
      }

      if (input.tagName === "SELECT" && input.value === "") {
        formIsValid = false;
        container.classList.add("error");
        if (!foundInvalid) {
          container.classList.add("error-visible");
          foundInvalid = true;
        }
      }

      if (formIsValid) {
        document.getElementById("masthead-contact-form").reset();
        window.location.href = "thank-you.html";
      }
    });
  });
