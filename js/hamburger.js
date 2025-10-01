// Hamburger menu toggle
const toggleBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !toggleBtn.contains(e.target)) {
    nav.classList.remove("open");
  }
});
