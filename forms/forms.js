document.getElementById('testForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Display form submission message
    document.getElementById('submittedName').innerText = name;
    document.getElementById('submittedEmail').innerText = email;
    document.getElementById('submittedMessageText').innerText = message;
  
    document.getElementById('submittedMessage').style.display = 'block';
  
    // Reset the form
    document.getElementById('testForm').reset();
  });
  