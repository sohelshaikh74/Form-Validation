const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInput();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // The test() method returns true if it finds a match, otherwise false.
  return re.test(String(email).toLowerCase());
};

const validateInput = () => {
  // trim() is js string method used to remove white space from both sides
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const cpasswordValue = cpassword.value.trim();
  if (usernameValue === "") {
    setError(username, "username is required");
  } else {
    setSuccess(username);
  }
  if (emailValue === "") {
    setError(email, "Email is rquired");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a Valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is rquired");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }
  if (cpasswordValue === "") {
    setError(cpasswordValue, "please confirm your password");
  } else if (cpasswordValue !== passwordValue) {
    setError(cpassword, "confirm password doesn't match.");
  } else {
    setSuccess(cpassword);
  }
};
