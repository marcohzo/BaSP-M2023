// Get references to DOM elements
var form = document.getElementById("myForm");
var submitBtn = document.getElementById("submit-btn");
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var nameInput = document.getElementById("name");
var lastNameInput = document.getElementById("lastName");
var dniInput = document.getElementById("dni");
var birthInput = document.getElementById("dateOfBirth");
var emailInput = document.getElementById("email");
var localityInput = document.getElementById("locality");
var zipCodeInput = document.getElementById("zipCode");
var telephoneInput = document.getElementById("telephone");
var addressInput = document.getElementById("address");
var passwordInput = document.getElementById("password");
var repeatPasswordInput = document.getElementById("repeatPassword");

// Set the input type for password fields to "password"
passwordInput.setAttribute("type", "password");
repeatPasswordInput.setAttribute("type", "password");

// Add event listeners to validate inputs when they lose focus
function addInputValidation(type, errorMessage, input) {
  input.addEventListener("blur", function () {
    validateInput(input, type, errorMessage);
  });
  input.addEventListener("focus", function () {
    clearError(input);
  });
}

// Add input validation for each input field
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
addInputValidation("date", "Invalid date", birthInput);

// Validation functions
function validateAlphanumeric(value) {
  var letter = false;
  var num = false;
  for (let i = 0; i < value.length; i++) {
    var charCode = value.charCodeAt(i);
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
  var errorElement = input.parentNode.querySelector(".error-message");
  if (!errorElement) {
    var newErrorElement = document.createElement("p");
    newErrorElement.classList.add("error-message");
    newErrorElement.textContent = errorMessage;
    input.parentNode.insertBefore(newErrorElement, input.nextSibling);
  } else {
    errorElement.textContent = errorMessage;
  }
}

// Clear error message for an input field
function clearError(input) {
  var errorElement = input.parentNode.querySelector(".error-message");
  if (errorElement) {
    input.classList.remove("error");
    errorElement.remove();
  }
}

function validateDate(value) {
  console.log(value);
  var currentDate = new Date();
  var date = new Date(value);
  var month = date.getMonth() + 1;
  var day = date.getDate() + 1;
  var year = date.getFullYear();
  var formattedDate = `${month.toString().padStart(2, "0")}/${day
    .toString()
    .padStart(2, "0")}/${year}`;
  return { isValid: date <= currentDate, formattedDate };
}

// Validate input based on its type and show error message if necessary
function validateInput(input, validationType, errorMessage) {
  var value = input.value.trim();
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
    if (value === "" || value.length !== 10 || isNaN(value)) {
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
  if (validationType === "date") {
    var { isValid } = validateDate(value);
    if (!isValid) {
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

var loginBaseUrl = "https://api-rest-server.vercel.app/signup";
async function validateForm() {
  // get the formatted date
  var { formattedDate } = validateDate(birthInput.value.trim());
  var response = await fetch(
    `${loginBaseUrl}?email=${emailInput.value.trim()}&password=${passwordInput.value.trim()}&name=${nameInput.value.trim()}&lastName=${lastNameInput.value.trim()}&dni=${dniInput.value.trim()}&dob=${formattedDate}&phone=${telephoneInput.value.trim()}&address=${addressInput.value.trim()}&city=${localityInput.value.trim()}&zip=${zipCodeInput.value.trim()}`
  );
  var data = await response.json();

  // display error message(s) in data.errors in an alert
  !data.success
    ? data.errors?.length > 0
      ? alert(`Errores: ${data.errors.map((error) => error.msg).join(", ")}`)
      : alert(data.msg)
    : alert("Signup correcto");
  // save the data obtained from the request in localStorage
  localStorage.setItem("user", JSON.stringify(data.data));
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  validateForm();
});

function convertDateFormat(dateString) {
  var dateArray = dateString.split("/");
  var year = dateArray[2];
  var month = dateArray[0].length === 1 ? `0${dateArray[0]}` : dateArray[0];
  var day = dateArray[1].length === 1 ? `0${dateArray[1]}` : dateArray[1];
  return `${year}-${month}-${day}`;
}

function loadFormDataFromLocalStorage() {
  var formData = JSON.parse(localStorage.getItem("user"));
  console.log(formData);
  if (formData) {
    nameInput.value = formData.name || "";
    lastNameInput.value = formData.lastName || "";
    dniInput.value = formData.dni || "";
    birthInput.value = convertDateFormat(formData.dob) || "";
    emailInput.value = formData.email || "";
    localityInput.value = formData.city || "";
    zipCodeInput.value = formData.zip || "";
    telephoneInput.value = formData.phone || "";
    addressInput.value = formData.address || "";
    passwordInput.value = formData.password || "";
    repeatPasswordInput.value = formData.password || "";
  }
}
window.addEventListener("load", loadFormDataFromLocalStorage);
