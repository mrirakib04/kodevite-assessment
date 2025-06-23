// responsive navbar functionality
document.getElementById("nav_btn").addEventListener("click", () => {
  console.log("nav btn clicked");
  const navLinks = document.getElementById("nav_links");
  if (navLinks.classList.contains("hidden")) {
    navLinks.classList.remove("hidden");
    navLinks.classList.add("flex", "flex-col");
  } else {
    navLinks.classList.remove("flex", "flex-col");
    navLinks.classList.add("hidden");
  }
});

// form functionality
// dynamic password eye functionality signup form
const eyeBTN = document.getElementById("eye_btn");
const eye = document.getElementById("eye");
const passwordInput = document.getElementById("password");

eyeBTN.addEventListener("click", () => {
  if (
    eye.classList.contains("fa-eye") &&
    passwordInput.getAttribute("type") === "password"
  ) {
    passwordInput.setAttribute("type", "text");
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  } else {
    passwordInput.setAttribute("type", "password");
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  }
});

// dynamic password eye functionality login form
const L_eyeBTN = document.getElementById("l_eye_btn");
const L_eye = document.getElementById("l_eye");
const L_passwordInput = document.getElementById("l_password");

L_eyeBTN.addEventListener("click", () => {
  if (
    L_eye.classList.contains("fa-eye") &&
    L_passwordInput.getAttribute("type") === "password"
  ) {
    L_passwordInput.setAttribute("type", "text");
    L_eye.classList.remove("fa-eye");
    L_eye.classList.add("fa-eye-slash");
  } else {
    L_passwordInput.setAttribute("type", "password");
    L_eye.classList.remove("fa-eye-slash");
    L_eye.classList.add("fa-eye");
  }
});

// login-signup toggle functionality
const loginForm = document.getElementById("login_form");
const signupForm = document.getElementById("signup_form");
const loginBTN = document.getElementById("login_btn");
const signupBTN = document.getElementById("signup_btn");
const loginBTNbottom = document.getElementById("login_btn_bottom");
const signupBTNbottom = document.getElementById("signup_btn_bottom");

const loginBtnFunc = () => {
  if (loginForm.classList.contains("hidden")) {
    signupForm.classList.remove("flex", "flex-col");
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    loginForm.classList.add("flex", "flex-col");
  }
};
const signupBtnFunc = () => {
  if (signupForm.classList.contains("hidden")) {
    loginForm.classList.remove("flex", "flex-col");
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    signupForm.classList.add("flex", "flex-col");
  }
};

loginBTN.addEventListener("click", () => {
  loginBtnFunc();
});
signupBTN.addEventListener("click", () => {
  signupBtnFunc();
});
loginBTNbottom.addEventListener("click", () => {
  loginBtnFunc();
});
signupBTNbottom.addEventListener("click", () => {
  signupBtnFunc();
});

// signup password checking
const passwordDirection = document.getElementById("password_direction");
passwordInput.addEventListener("input", () => {
  const pass = passwordInput.value;

  // checking keys
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (regex.test(pass)) {
    if (passwordDirection.classList.contains("text-orange-500")) {
      passwordDirection.classList.remove("text-orange-500");
      passwordDirection.classList.add("text-green-500");
    }
  } else {
    if (passwordDirection.classList.contains("text-gray-500")) {
      passwordDirection.classList.remove("text-gray-500");
      passwordDirection.classList.add("text-orange-500");
    } else {
      passwordDirection.classList.remove("text-green-500");
      passwordDirection.classList.add("text-orange-500");
    }
  }
  if (pass.length === 0) {
    if (passwordDirection.classList.contains("text-orange-500")) {
      passwordDirection.classList.remove("text-orange-500");
      passwordDirection.classList.add("text-gray-500");
    }
    if (passwordDirection.classList.contains("text-green-500")) {
      passwordDirection.classList.remove("text-green-500");
      passwordDirection.classList.add("text-gray-500");
    }
  }
});
