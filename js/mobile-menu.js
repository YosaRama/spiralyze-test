const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenuClose = document.getElementById("mobile-menu-close");

mobileMenuToggle.addEventListener("click", function () {
  mobileMenu.classList.add("active");
});
mobileMenuClose.addEventListener("click", function () {
  mobileMenu.classList.remove("active");
});
