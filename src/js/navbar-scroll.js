const navbar = document.getElementById("navbar");
const logoIpp = document.getElementById("logoIpp");
const menuIcon = document.getElementById("menuIcon");
const searchIcons = document.querySelectorAll("#searchIcon");

window.addEventListener("scroll", () => {
  if (window.scrollY > 90) {
    navbar.classList.add("scrolled-down");
    logoIpp.src = "/public/ipp-logo.svg"
    menuIcon.src = "/public/icons/menu.svg"
    searchIcons.forEach((searchIcon) => {
      searchIcon.src = "/public/icons/search.svg"
    })
  } else {
    navbar.classList.remove("scrolled-down");
    logoIpp.src = "/public/ipp-logo-white.svg"
    menuIcon.src = "/public/icons/menu-white.svg"
    searchIcons.forEach((searchIcon) => {
      searchIcon.src = "/public/icons/search-white.svg"
    })
  }
});
