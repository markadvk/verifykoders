// Get button elements
const basicAlertBtn = document.getElementById('basicAlertBtn');
const confirmationAlertBtn = document.getElementById('confirmationAlertBtn');
const promptAlertBtn = document.getElementById('promptAlertBtn');
const alertResultStatus = document.getElementById('alertResultStatus');
const alertResult = document.getElementById('alertResult');

// Basic alert trigger
basicAlertBtn.addEventListener('click', function() {
  alert("This is a basic alert!");
  alertResultStatus.innerText = 'Basic alert triggered successfully!';
  alertResult.style.display = 'block';
});

// Confirmation alert trigger
confirmationAlertBtn.addEventListener('click', function() {
  const userResponse = confirm("Do you want to proceed?");
  if (userResponse) {
    alertResultStatus.innerText = 'User confirmed the action!';
  } else {
    alertResultStatus.innerText = 'User canceled the action!';
  }
  alertResult.style.display = 'block';
});

// Prompt alert trigger
promptAlertBtn.addEventListener('click', function() {
  const userInput = prompt("Please enter your name:");
  if (userInput) {
    alertResultStatus.innerText = `User entered: ${userInput}`;
  } else {
    alertResultStatus.innerText = 'User canceled the prompt!';
  }
  alertResult.style.display = 'block';
});
