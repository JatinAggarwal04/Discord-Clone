var registrationForm = document.getElementById('registrationForm');
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var confirmPasswordInput = document.getElementById('confirmPasswordInput');

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var email = emailInput.value;
  var password = passwordInput.value;
  var confirmPassword = confirmPasswordInput.value;

  // Implement your server-side registration logic here
  // Check if email is unique, validate password, and store user in the database

  // Example registration success message
  alert('Registration Successful!');
  registrationForm.reset();

  // Redirect to the login page
  window.location.href = 'index.html';
});
