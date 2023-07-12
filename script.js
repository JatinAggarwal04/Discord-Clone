var usernameInput = document.getElementById('usernameInput');
var messageInput = document.getElementById('messageInput');
var sendButton = document.getElementById('sendButton');
var chatContainer = document.getElementById('chatContainer');

sendButton.addEventListener('click', function() {
  var username = usernameInput.value;
  var message = messageInput.value;
  if (username.trim() !== '' && message.trim() !== '') {
    addMessage(username, getCurrentTime(), message);
    messageInput.value = '';
  }
});

function addMessage(username, timestamp, message) {
  var messageElement = document.createElement('div');
  messageElement.classList.add('message');

  var usernameElement = document.createElement('span');
  usernameElement.classList.add('username');
  usernameElement.textContent = username;

  var timestampElement = document.createElement('span');
  timestampElement.classList.add('timestamp');
  timestampElement.textContent = timestamp;

  var messageContentElement = document.createElement('p');
  messageContentElement.textContent = message;

  messageElement.appendChild(usernameElement);
  messageElement.appendChild(timestampElement);
  messageElement.appendChild(messageContentElement);

  chatContainer.appendChild(messageElement);

  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function getCurrentTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  return hours + ':' + (minutes < 10 ? '0' : '') + minutes;
}
