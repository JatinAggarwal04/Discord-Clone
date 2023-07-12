var registrationForm = document.getElementById('registrationForm');
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var confirmPasswordInput = document.getElementById('confirmPasswordInput');

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var email = emailInput.value;
  var password = passwordInput.value;
  var confirmPassword = confirmPasswordInput.value;

  
  alert('Registration Successful!');
  registrationForm.reset();

  
  window.location.href = 'index.html';
});
