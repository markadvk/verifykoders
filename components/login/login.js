// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = ''; // Clear previous error messages

    // Validate credentials
    if (username !== 'vinayak') {
        errorMessage.textContent = 'Username is wrong';
        return;
    }

    if (password !== 'automation') {
        errorMessage.textContent = 'Password is wrong';
        return;
    }

    // If credentials are correct
    alert('Login successful!');
});

document.querySelector('.forgot-password').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    alert('Password is automation');
});