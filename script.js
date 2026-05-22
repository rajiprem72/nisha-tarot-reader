function initializeNavbar() {

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  // PREVENT MULTIPLE EVENT BINDINGS

  if (menuToggle && navMenu && !menuToggle.hasAttribute("data-loaded")) {

    menuToggle.setAttribute("data-loaded", "true");

    menuToggle.addEventListener("click", function () {

      navMenu.classList.toggle("active");

    });

  }

  // MOBILE DROPDOWN

  const dropdownLink = document.querySelector(".dropdown-link");
  const dropdownItem = document.querySelector(".has-dropdown");

  if (dropdownLink && dropdownItem && !dropdownLink.hasAttribute("data-loaded")) {

    dropdownLink.setAttribute("data-loaded", "true");

    dropdownLink.addEventListener("click", function (e) {

      if (window.innerWidth <= 992) {

        e.preventDefault();

        dropdownItem.classList.toggle("active");

      }

    });

  }

}

// RUN AFTER PAGE LOAD

document.addEventListener("DOMContentLoaded", function () {

  // SMALL DELAY ENSURES NAVIGATION.HTML IS LOADED

  setTimeout(function () {

    initializeNavbar();

  }, 300);

});
