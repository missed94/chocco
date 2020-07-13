/* 
const arrowLeft = $(".slider__arrow-left-wrapper");
const arrowRight = $(".slider_arrow-right-wrapper");
const carouselContent = $(".slider-content-list"); */

/* let moove = 0; */

(function() {
  function carousel(arrowRight, arrowLeft, moove, carouselContent) {

    let countChildrenElement = $(carouselContent).children('.slider-content-item').length;
  
  
    arrowRight.on("click", function () {
      moove -= 100;
  
      if (moove < -((countChildrenElement - 1) * 100)) {
        moove = 0;
      }
  
      return carouselContent.css("left", (moove + "%"));
    });
  
    arrowLeft.on("click", function () {
      moove += 100;
  
      if (moove > 0) {
        moove = -((countChildrenElement - 1) * 100);
        }
      
  
      return carouselContent.css("left", (moove + "%"));
    });
  
    
  }
  
  carousel(
    $(".slider_arrow-right-wrapper"),
    $(".slider__arrow-left-wrapper"),
    0,
    $(".slider-content-list")
  ); 
  
  
  /* const arrowLeft = document.querySelector(".slider__arrow-left-wrapper");
  const arrowRight = document.querySelector(".slider_arrow-right-wrapper");
  const carouselContent = document.querySelector(".slider-content-list");
  const carouselItem = document.querySelectorAll(".slider-content-item")
  
  let moove = 0;
  
  
  
  function carousel(arrowLeft, arrowRight, carouselContent, moove) {
  
  let countChildrenElement = $(carouselContent).children('.slider-content-item').length;
  
  
  arrowRight.addEventListener("click", function (e) {
  
    
  
    moove = moove - 100;
  
    if (moove < -((countChildrenElement - 1) * 100)) {
    moove = 0;
    }
  
  
    return carouselContent.style.left = moove + "%";
  });
  
  arrowLeft.addEventListener("click", function (event) {
  
    moove = moove + 100;
  
    if (moove > 0) {
    moove = -((countChildrenElement - 1) * 100);
    }
  
   
    return carouselContent.style.left = moove + "%";
  });
  
  
  }
  
  carousel(arrowLeft, arrowRight, carouselContent, 0, ) */
})()

 