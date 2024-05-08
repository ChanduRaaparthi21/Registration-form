document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

//for password strong contain 6 characters and atleast one number
  var passwordRegex = /^(?=.*[0-9])[a-zA-Z0-9]{6,}$/;
//for required fields
  if (!username || !email || !password || !confirmPassword) {
      showMessage('Please fill in all fields', 'red');
      return;
  }

  if (password !== confirmPassword) {
      showMessage('Passwords do not match', 'red');
      return;
  }

  if (!passwordRegex.test(password)) {
      showMessage('Password must contain at least 6 characters and at least one number', 'red');
      return;
  }

  var successMessage = `Registration successful! \nUsername: ${username} \nEmail: ${email} \nPassword: ${password}`;
  showMessage(successMessage, 'green');

  document.getElementById('registrationForm').reset();
});

function showMessage(message, color) {
  var messageDiv = document.getElementById('message');
  messageDiv.textContent = message;
  messageDiv.style.color = color;
}
