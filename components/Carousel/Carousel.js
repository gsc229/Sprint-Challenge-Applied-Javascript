/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselImgSrcs = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
];

const carouselContainer = document.querySelector(".carousel-container");

carouselContainer.appendChild(crateCarousel(carouselImgSrcs));

function crateCarousel(imgsSrc) {
  const carousel = document.createElement("div");
  const leftBtn = document.createElement("div");
  const rightBtn = document.createElement("div");
  const image = document.createElement("img");
  // add classes:
  carousel.classList.add("carousel");
  leftBtn.classList.add("left-button");
  rightBtn.classList.add("right-button");
  // add content:
  leftBtn.textContent = "<";

  rightBtn.textContent = ">";
  // append:
  carousel.appendChild(leftBtn);
  carousel.appendChild(image);
  carousel.appendChild(rightBtn);
  // addEevntListeners
  leftBtn.addEventListener("click", leftArrow);
  rightBtn.addEventListener("click", rightArrow);
  let currentImgage = 0;
  image.src = imgsSrc[currentImgage];
  function leftArrow() {
    if (currentImgage !== 0) {
      currentImgage -= 1;
      image.src = imgsSrc[currentImgage];
      console.log(currentImgage);
    } else {
      currentImgage = imgsSrc.length - 1;
      image.src = imgsSrc[currentImgage];
    }
  }

  function rightArrow() {
    if (currentImgage !== imgsSrc.length - 1) {
      currentImgage += 1;
      image.src = imgsSrc[currentImgage];
      console.log(currentImgage);
    } else {
      currentImgage = 0;
      image.src = imgsSrc[currentImgage];
    }
  }

  console.log(carousel);
  return carousel;
}
