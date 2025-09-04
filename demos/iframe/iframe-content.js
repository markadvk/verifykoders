document.getElementById('submit-button').addEventListener('click', () => {
  const inputBox = document.getElementById('input-box');
  const result = document.getElementById('result');

  if (inputBox.value.trim() !== '') {
    result.textContent = `Success: You entered "${inputBox.value}"!`;
    result.style.color = 'green';
  } else {
    result.textContent = 'Error: Please enter some text.';
    result.style.color = 'red';
  }
});
