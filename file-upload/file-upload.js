// Standard File Upload
const standardFileInput = document.getElementById("standardFileInput");
const standardFileResult = document.getElementById("standardFileResult");

standardFileInput.addEventListener("change", () => {
  if (standardFileInput.files.length > 0) {
    standardFileResult.textContent = `File selected: ${standardFileInput.files[0].name}`;
  } else {
    standardFileResult.textContent = "No file selected.";
  }
});

// Drag-and-Drop File Upload
const dragDropArea = document.getElementById("dragDropArea");
const dragDropFileInput = document.getElementById("dragDropFileInput");
const dragDropResult = document.getElementById("dragDropResult");

dragDropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dragDropArea.style.backgroundColor = "#f0f8ff";
});

dragDropArea.addEventListener("dragleave", () => {
  dragDropArea.style.backgroundColor = "#f9f9f9";
});

dragDropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  dragDropArea.style.backgroundColor = "#f9f9f9";

  const files = event.dataTransfer.files;
  if (files.length > 0) {
    dragDropResult.textContent = `File uploaded: ${files[0].name}`;
  }
});

dragDropArea.addEventListener("click", () => {
  dragDropFileInput.click();
});

dragDropFileInput.addEventListener("change", () => {
  if (dragDropFileInput.files.length > 0) {
    dragDropResult.textContent = `File selected: ${dragDropFileInput.files[0].name}`;
  }
});

// Custom File Upload
const customFileBtn = document.getElementById("customFileBtn");
const customFileInput = document.getElementById("customFileInput");
const customFileResult = document.getElementById("customFileResult");

customFileBtn.addEventListener("click", () => {
  customFileInput.click();
});

customFileInput.addEventListener("change", () => {
  if (customFileInput.files.length > 0) {
    customFileResult.textContent = `File selected: ${customFileInput.files[0].name}`;
  } else {
    customFileResult.textContent = "No file selected.";
  }
});

// File Upload Without Input Type="File"
const fakeUploadArea = document.getElementById("fakeUploadArea");
const hiddenFileInput = document.getElementById("hiddenFileInput");
const fakeUploadResult = document.getElementById("fakeUploadResult");

fakeUploadArea.addEventListener("click", () => {
  hiddenFileInput.click();
});

hiddenFileInput.addEventListener("change", () => {
  if (hiddenFileInput.files.length > 0) {
    fakeUploadResult.textContent = `File selected: ${hiddenFileInput.files[0].name}`;
  } else {
    fakeUploadResult.textContent = "No file selected.";
  }
});
