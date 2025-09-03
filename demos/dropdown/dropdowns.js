// Searchable Dropdown functionality
const carSearch = document.getElementById("carSearch");
const carList = document.getElementById("carList");

carSearch.addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  let hasMatch = false;

  const carOptions = document.querySelectorAll("#carList .car-option"); // Dynamically fetch options
  carOptions.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.classList.toggle("hidden", !text.includes(filter)); // Filters visible options
    if (text.includes(filter)) hasMatch = true;
  });

  carList.style.display = hasMatch ? "block" : "none"; // Shows/hides list based on match
});

carSearch.addEventListener("focus", function () {
  carList.style.display = "block"; // Always show the list on focus
});

carSearch.addEventListener("blur", function () {
  setTimeout(() => (carList.style.display = "none"), 200); // Hides the list after a slight delay
});

// Use `mousedown` for selecting options to avoid conflict with `blur`
carList.addEventListener("mousedown", function (e) {
  if (e.target && e.target.matches(".car-option")) {
    carSearch.value = e.target.textContent; // Updates input with the selected value
    carList.style.display = "none"; // Hides the list after selection
    e.preventDefault(); // Prevents input blur during mousedown
  }
});

// Custom List Dropdown toggle
const dropdownButton = document.querySelector(".dropdown-button");
dropdownButton.addEventListener("click", function () {
  const menu = document.querySelector(".dropdown-menu");
  const isOpen = menu.classList.toggle("show"); // Toggles visibility of the menu
  dropdownButton.setAttribute("aria-expanded", isOpen); // Updates ARIA attribute
});

// Custom List Dropdown item click
const items = document.querySelectorAll(".dropdown-item");
items.forEach((item) => {
  item.addEventListener("click", function () {
    dropdownButton.textContent = this.textContent; // Updates button text with the selected value
    document.querySelector(".dropdown-menu").classList.remove("show"); // Hides the menu
  });
});
