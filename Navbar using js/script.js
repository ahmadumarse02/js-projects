const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navItems = document.querySelectorAll(".nav-item");

navToggle.addEventListener("click", (e) => {
  navMenu.classList.add("active");
  navToggle.style.display = "none";
  navClose.style.display = "block";
  navClose.style.position = "absolute";
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("active");
  navClose.style.display = "none";
  navToggle.style.display = "block";
  navToggle.style.position = "absolute";
});

navItems.forEach((e) => {
  e.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
