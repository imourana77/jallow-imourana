const navbar = document.querySelector("nav");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  navbar.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});
