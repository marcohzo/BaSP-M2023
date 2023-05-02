const form = document.getElementById("myForm");
const submitBtn = document.getElementById("submit-btn");
const emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
const emailInput = document.getElementById("userName");
const passwordInput = document.getElementById("password");
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
  const value = input.value.trim();
  const errorElement = input.parentNode.querySelector(".error-message");

  if (validationType === "email") {
    if (value === "" || !emailExpression.test(value)) {
      input.classList.add("error");

      if (!errorElement) {
        const newErrorElement = document.createElement("p");
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
        const newErrorElement = document.createElement("p");
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
  const errorElement = input.parentNode.querySelector(".error-message");
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
  const inputs = form.querySelectorAll("input");
  var errors = [];
  inputs.forEach(function (input) {
    if (input.classList.contains("error") || input.value == "") {
      errors.push(input.id);
    }
  });

  if (errors.length > 0) {
    alert(`The following fields have errors: ${errors.join(", ")}`);
  } else {
    alert(
      `Email : ${emailInput.value.trim()}\nPassword: ${passwordInput.value.trim()}`
    );
    await fetch(
      `${loginBaseUrl}?email=${emailInput.value.trim()}&password=${passwordInput.value.trim()}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.success) {
          alert("Request has been successful!\n" + data.msg);
        } else {
          throw new Error("Request has been rejected :/ \n" + data.msg);
        }
      })
      .catch(function (err) {
        alert(err);
      });
  }
}
// --- Week 07 ---

var loginUrl = "https://api-rest-server.vercel.app/login";
