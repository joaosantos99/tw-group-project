const logoIpp = document.getElementById("logoIpp");
const menuIcon = document.getElementById("menuIcon");
const searchIcons = document.querySelectorAll("#searchIcon");

const toggleMenu = async () => {
  const mobileMenuContainer = document.getElementById("mobileMenuContainer");
  const navbar = document.getElementById("navbar");

  if (mobileMenuContainer.style.top !== "0px") {
    mobileMenuContainer.style.top = "0";

    await new Promise((resolve) => setTimeout(resolve, 0));

    if (window.scrollY < 90) {
      navbar.classList.add("scrolled-down");
      logoIpp.src = "/public/ipp-logo.svg"
      menuIcon.src = "/public/icons/menu.svg"
      searchIcons.forEach((searchIcon) => {
        searchIcon.src = "/public/icons/search.svg"
      })
    }
  } else {
    mobileMenuContainer.style.top = "-350px";

    await new Promise((resolve) => setTimeout(resolve, 500));

    if (window.scrollY < 90) {
      navbar.classList.remove("scrolled-down");
      logoIpp.src = "/public/ipp-logo-white.svg"
      menuIcon.src = "/public/icons/menu-white.svg"
      searchIcons.forEach((searchIcon) => {
        searchIcon.src = "/public/icons/search-white.svg"
      })
    }
  }
};