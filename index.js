const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let fname = e.target["fname"].value;
  let lname = e.target["lname"].value;
  let email = e.target["email"].value;
  let query = e.target["query"].value;
  let message = e.target["message"].value;

  // checkValidity(validEmail, fname, lname, email, query, message);

  if (fname === "") {
    isValid = false;
    showError("invalid-fname", "This field is required");
  } else {
    removeError("invalid-fname");
  }
  if (lname === "") {
    isValid = false;
    showError("invalid-lname", "This field is required");
  } else {
    removeError("invalid-lname");
  }
  if (email === "") {
    isValid = false;
    showError("invalid-email", "This field is required.");
  } else if (validEmail.test(email) === false) {
    isValid = false;
    showError("invalid-email", "Please enter a valid email address");
  } else {
    removeError("invalid-email");
  }
  if (query === "") {
    isValid = false;
    showError("invalid-query", "Please select a query type");
  } else {
    removeError("invalid-query");
  }
  if (message === "") {
    isValid = false;
    showError("invalid-message", "This field is required");
  } else {
    removeError("invalid-message");
  }
  if (!document.getElementById("consent").checked) {
    isValid = false;
    showError(
      "invalid-consent",
      "To submit this form, please consent to being contacted"
    );
  } else {
    removeError("invalid-consent");
  }

  if (isValid) {
    let fname = "";
    let lname = "";
    let email = "";
    let query = "";
    let message = "";
    success();
  }
});

function showError(el, mess) {
  document.querySelector("." + el).classList.add("error-display");
  document.querySelector("." + el).innerHTML = mess;
}

function removeError(el) {
  document.querySelector("." + el).classList.remove("error-display");
  document.querySelector("." + el).innerHTML = "";
}

function success() {
  document.querySelector(".modal").classList.add("active");
}
