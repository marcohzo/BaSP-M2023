const form = document.getElementById("myForm");
const submitBtn = document.getElementById("submit-btn");
const emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const dniInput = document.getElementById("dni");
const birthInput = document.getElementById("dateOfBirth");
const emailInput = document.getElementById("email");
const localityInput = document.getElementById("locality");
const zipCodeInput = document.getElementById("zipCode");
const telephoneInput = document.getElementById("telephone");
const addressInput = document.getElementById("address");
const passwordInput = document.getElementById("password");
const repeatPasswordInput = document.getElementById("repeatPassword");
passwordInput.setAttribute("type", "password");
repeatPasswordInput.setAttribute("type", "password");

// This function validates the input value of a given input field based on its type
function addInputValidation(type, errorMessage, input) {
  input.addEventListener("blur", function () {
    validateInput(input, type, errorMessage);
  });
  input.addEventListener("focus", function () {
    clearError(input);
  });
}
addInputValidation("telephone", "Invalid telephone", telephoneInput);
addInputValidation("name", "Invalid name", nameInput);
addInputValidation("name", "Invalid last name", lastNameInput);
addInputValidation("dni", "Invalid DNI", dniInput);
addInputValidation("email", "Invalid email", emailInput);
addInputValidation("zipCode", "Invalid zip code", zipCodeInput);
addInputValidation("password", "Invalid password", passwordInput);
addInputValidation("password", "Invalid password", repeatPasswordInput);
addInputValidation("locality", "Invalid locality", localityInput);
addInputValidation("address", "Invalid address", addressInput);

function validateAlphanumeric(value) {
  let letter = false;
  let num = false;
  for (let i = 0; i < value.length; i++) {
    const charCode = value.charCodeAt(i);
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      letter = true;
    } else if (charCode >= 48 && charCode <= 57) {
      num = true;
    }
    if (letter && num) {
      return true;
    }
  }
  return false;
}

function validateSpace(value) {
  for (let i = 0; i < value.length; i++) {
    if (
      value.charAt(i) === " " &&
      value.charAt(i - 1) !== " " &&
      value.charAt(i + 1) !== " "
    ) {
      return true;
    }
  }
  return false;
}

function showError(input, errorMessage) {
  input.classList.add("error");
  const errorElement = input.parentNode.querySelector(".error-message");
  if (!errorElement) {
    const newErrorElement = document.createElement("p");
    newErrorElement.classList.add("error-message");
    newErrorElement.textContent = errorMessage;
    input.parentNode.insertBefore(newErrorElement, input.nextSibling);
  } else {
    errorElement.textContent = errorMessage;
  }
}

function clearError(input) {
  const errorElement = input.parentNode.querySelector(".error-message");
  if (errorElement) {
    input.classList.remove("error");
    errorElement.remove();
  }
}

function validateInput(input, validationType, errorMessage) {
  const value = input.value.trim();
  if (validationType === "name") {
    if (value === "" || !isNaN(value) || value.length < 4) {
      showError(input, errorMessage);
    }
  }
  if (validationType === "locality") {
    if (value === "" || !validateAlphanumeric(value) || value.length < 4) {
      showError(input, errorMessage);
    }
  }
  if (validationType === "dni") {
    if (value === "" || isNaN(value) || value.length < 8) {
      showError(input, errorMessage);
    }
  }
  if (validationType === "email") {
    if (value === "" || !emailExpression.test(value)) {
      showError(input, errorMessage);
    }
  }
  if (validationType === "telephone") {
    if (value === "" || value.length !== 9 || isNaN(value)) {
      showError(input, errorMessage);
    }
  }
  if (validationType === "zipCode") {
    if (value === "" || isNaN(value) || value.length < 4 || value.length > 5) {
      showError(input, errorMessage);
    }
  }
  if (validationType === "password") {
    if (!validateAlphanumeric(value) || value.length < 8) {
      showError(input, errorMessage);
    }
  }
  if (validationType === "address") {
    if (
      !validateSpace(value) ||
      value.length < 5 ||
      !validateAlphanumeric(value)
    ) {
      showError(input, errorMessage);
    }
  }
}

function validateForm() {
  const inputs = form.querySelectorAll("input");
  const errors = [];
  const result = [];
  inputs.forEach(function (input) {
    clearError(input);
    if (input.value === "") {
      errors.push(input.name);
    } else {
      validateInput(
        input,
        input.dataset.validationType,
        input.dataset.errorMessage
      );
      if (!input.classList.contains("error")) {
        result.push(input.name + ": " + input.value);
      }
    }
  });
  if (errors.length > 0) {
    alert(`The following fields have errors: ${errors.join("\n")}`);
  } else {
    alert(
      `The following fields have been successfully submitted:\n ${result.join(
        "\n"
      )}`
    );
    form.submit();
  }
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  validateForm();
});
