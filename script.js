function toggleMenu() {
  var menu = document.getElementById("navLinks");
  menu.classList.toggle("show");
}
document.addEventListener("DOMContentLoaded", function () {

  // HAMBURGER MENU

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

      navMenu.classList.toggle("active");

    });

  }

  // MOBILE DROPDOWN

  const dropdownLink = document.querySelector(".dropdown-link");
  const dropdownItem = document.querySelector(".has-dropdown");

  if (dropdownLink && dropdownItem) {

    dropdownLink.addEventListener("click", function (e) {

      if (window.innerWidth <= 992) {

        e.preventDefault();

        dropdownItem.classList.toggle("active");

      }

    });

  }

});
