// Switching between login and signup forms
const loginPage = document.getElementById('login-page');
const signupPage = document.getElementById('signup-page');

const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');

showSignup.addEventListener('click', () => {
  loginPage.classList.add('hidden');
  signupPage.classList.remove('hidden');
});

showLogin.addEventListener('click', () => {
  signupPage.classList.add('hidden');
  loginPage.classList.remove('hidden');
});

// Handling login form submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // Handle login logic here
  alert(`Login with Email: ${email}, Password: ${password}`);
});

// Handling signup form submission
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email-signup').value;
  const password = document.getElementById('password-signup').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }
  
  // Handle signup logic here
  alert(`Signup with Name: ${name}, Email: ${email}, Password: ${password}`);
});

// Show/Hide password functionality
function togglePassword(id) {
  const passwordField = document.getElementById(id);
  const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
}
