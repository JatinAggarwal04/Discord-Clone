var loginForm = document.getElementById('loginForm');
var loginEmailInput = document.getElementById('loginEmailInput');
var loginPasswordInput = document.getElementById('loginPasswordInput');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var loginEmail = loginEmailInput.value;
  var loginPassword = loginPasswordInput.value;

 
  alert('Login Successful!');
  loginForm.reset();

  
  window.location.href = 'discord_clone.html';
});
