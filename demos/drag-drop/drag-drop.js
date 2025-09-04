// Get the drag item and drop zone elements
const dragItem = document.getElementById('dragItem');
const dropZone = document.getElementById('dropZone');
const submitBtn = document.getElementById('submitBtn');
const dragResultStatus = document.getElementById('dragResultStatus');
const dragResults = document.getElementById('dragResults');

// Set up drag events
dragItem.addEventListener('dragstart', function (event) {
  // Add a class when drag starts
  event.dataTransfer.setData("text", event.target.id);
  dragItem.style.opacity = "0.5";
});

dragItem.addEventListener('dragend', function (event) {
  // Reset opacity when drag ends
  dragItem.style.opacity = "1";
});

// Set up drop zone events
dropZone.addEventListener('dragover', function (event) {
  // Prevent default behavior to allow drop
  event.preventDefault();
});

dropZone.addEventListener('drop', function (event) {
  // Prevent default behavior (Prevent data from being treated as a link)
  event.preventDefault();

  // Get the dragged element id and move it to the drop zone
  const draggedElementId = event.dataTransfer.getData("text");
  const draggedElement = document.getElementById(draggedElementId);

  // Append the dragged element to the drop zone
  dropZone.innerHTML = `<p>Dropped: ${draggedElement.textContent}</p>`;

  // Show success message in the results section
  dragResultStatus.innerText = 'Item successfully dropped into the drop zone!';
  dragResults.style.display = 'block';
});

// Submit button functionality (for testing purposes)
submitBtn.addEventListener('click', function () {
  const resultStatus = dragResultStatus.innerText;

  if (resultStatus === 'Item successfully dropped into the drop zone!') {
    alert('Drag and Drop Test Passed!');
  } else {
    alert('Drag and Drop Test Failed!');
  }
});
