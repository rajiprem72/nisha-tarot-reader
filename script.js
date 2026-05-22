function initializeNavbar() {

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

      navMenu.classList.toggle("active");

    });

  }

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

}

// RUN AFTER PAGE LOAD

window.onload = function () {

  initializeNavbar();

};
