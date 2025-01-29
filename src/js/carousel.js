const heroCarousel = document.getElementById("heroCarouselContainer");
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
