var form = document.getElementById("myForm");
var submitBtn = document.getElementById("submit-btn");
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var emailInput = document.getElementById("userName");
var passwordInput = document.getElementById("password");
passwordInput.setAttribute("type", "password");

emailInput.addEventListener("blur", function () {
  validateInput(emailInput, "email", "Invalid email");
});

passwordInput.addEventListener("blur", function () {
  validateInput(passwordInput, "password", "Invalid password");
});

emailInput.addEventListener("focus", function () {
  clearError(emailInput);
});

passwordInput.addEventListener("focus", function () {
  clearError(passwordInput);
});

function validateInput(input, validationType, errorMessage) {
  var value = input.value.trim();
  var errorElement = input.parentNode.querySelector(".error-message");

  if (validationType === "email") {
    if (value === "" || !emailExpression.test(value)) {
      input.classList.add("error");

      if (!errorElement) {
        var newErrorElement = document.createElement("p");
        newErrorElement.classList.add("error-message");
        newErrorElement.textContent = errorMessage;
        input.parentNode.insertBefore(newErrorElement, input.nextSibling);
      } else {
        errorElement.textContent = errorMessage;
      }
    }
  }

  if (validationType === "password") {
    function validatePassword() {
      var letter = false;
      var num = false;
      for (var i = 0; i < value.length; i++) {
        if (isNaN(value.charAt(i))) {
          letter = true;
        } else {
          num = true;
        }
        if (letter && num) {
          return true;
        }
      }
      return false;
    }
    if (!validatePassword() || value.length < 8) {
      input.classList.add("error");

      if (!errorElement) {
        var newErrorElement = document.createElement("p");
        newErrorElement.classList.add("error-message");
        newErrorElement.textContent = errorMessage;
        input.parentNode.insertBefore(newErrorElement, input.nextSibling);
      } else {
        errorElement.textContent = errorMessage;
      }
    }
  }
}

function clearError(input) {
  var errorElement = input.parentNode.querySelector(".error-message");
  if (errorElement) {
    input.classList.remove("error");
    errorElement.remove();
  }
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  validateForm();
});

var loginBaseUrl = "https://api-rest-server.vercel.app/login";

async function validateForm() {
  var response = await fetch(
    `${loginBaseUrl}?email=${emailInput.value.trim()}&password=${passwordInput.value.trim()}`
  );
  var data = await response.json();
  // We display on screen in an alert the error message(s) within data.errors.
  !data.success
    ? data.errors?.length > 0
      ? data.errors.forEach((error) => alert(error.msg))
      : alert(data.msg)
    : alert("Login correcto");
}
