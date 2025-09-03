// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = ''; // Clear previous error messages

    // Check if any field is blank
    if (username === '' || password === '') {
        errorMessage.textContent = 'Username/Password field should not be blank';
        return;
    }

    // Validate credentials
    if (username !== 'vinayak' || password !== 'automation') {
        errorMessage.textContent = 'Please enter valid username/password';
        return;
    }

    // If credentials are correct
    errorMessage.textContent = 'Congratulations, you logged in successfully';
    errorMessage.style.color = 'green';
});

document.querySelector('.forgot-password').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    alert('Password is automation');
});