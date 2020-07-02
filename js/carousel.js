const arrowLeft = document.querySelector(".slider__arrow-left-wrapper");
const arrowRight = document.querySelector(".slider_arrow-right-wrapper");
const carouselContent = document.querySelector(".slider-content-list");

console.log(arrowRight);

let moove = 0;

arrowRight.addEventListener("click", function (e) {
  moove = moove - 100;

  if (moove < -100) {
    moove = 0;
  }

  carouselContent.style.left = moove + "%";
});

arrowLeft.addEventListener("click", function (event) {
  moove = moove + 100;

  if (moove > 0) {
    moove = -100;
  }

  carouselContent.style.left = moove + "%";
});
