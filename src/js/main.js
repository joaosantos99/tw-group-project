const menuDrawer = (isOpening) => {
  const sideMenu = document.getElementById("sideMenu")

  if (isOpening) {
    sideMenu.style.left = "0";
  } else {
    sideMenu.style.left = "-100vw";
  }
};


const navbar = document.getElementById("navbar");
const logoIpp = document.getElementById("logoIpp");
const menuIcon = document.getElementById("menuIcon");

window.addEventListener("scroll", () => {
  if (window.scrollY > 90) {
    navbar.className = "navbar container-fluid scrolleddown"
    logoIpp.src = "./public/ipp-logo.svg"
    menuIcon.src = "./public/icons/menu.svg"
  } else {
    navbar.className = "navbar container-fluid"
    logoIpp.src = "./public/ipp-logo-white.svg"
    menuIcon.src = "./public/icons/menu-white.svg"
  }
});


const heroCarousel =  document.getElementById("heroCarouselSlidesWrapper");
const firstSlide = heroCarousel.firstElementChild;
const lastSlide = heroCarousel.lastElementChild;
const slideCount = heroCarousel.childElementCount;
heroCarousel.appendChild(firstSlide.cloneNode(true));
heroCarousel.insertBefore(lastSlide.cloneNode(true), firstSlide);

const prevSlide = async () => {
  const position = heroCarousel.style.left;

  if (position === "0vw") {
    const newPosition = (100 * slideCount) - 100;

    heroCarousel.style.transitionDuration = "0s";
    heroCarousel.style.left = `-${slideCount * 100}vw`;

    await new Promise((resolve) => setTimeout(resolve, 0));

    heroCarousel.style.transitionDuration = "0.5s";
    heroCarousel.style.left = `-${newPosition}vw`;

  } else {
    const newPosition = parseInt(position) + 100;
    heroCarousel.style.left = `${newPosition}vw`;
  }
}

const nextSlide = async () => {
  const position = heroCarousel.style.left;
  if (position === `-${(slideCount + 1) * 100}vw`) {
    const newPosition = "-200vw";

    heroCarousel.style.transitionDuration = "0s";
    heroCarousel.style.left = "-100vw";

    await new Promise((resolve) => setTimeout(resolve, 0));

    heroCarousel.style.transitionDuration = "0.5s";
    heroCarousel.style.left = newPosition;

  } else {
    const newPosition = parseInt(position) - 100;
    heroCarousel.style.left = `${newPosition}vw`;
  }
}


const schoolSliderWrapper = document.getElementById("schoolSliderWrapper");
const schoolSliderContainer = document.getElementById("schoolSliderContainer");
