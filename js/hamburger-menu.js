const hamburger = document.querySelector(".hamburger");
const fullMenu = document.querySelector(".full-menu");
const closeBtn = document.querySelector(".close-icon");
const FullMenuItem = document.querySelectorAll(".full-menu-item");
const wrapper = document.querySelector(".wrapper");

hamburger.addEventListener("click", function (event) {
  fullMenu.style.left = "0";
});

closeBtn.addEventListener("click", function (event) {
  fullMenu.style.left = "100%";
});

FullMenuItem.forEach(function (element) {
  element.addEventListener("click", function (event) {
    fullMenu.style.left = "100%";
  });
});

window.addEventListener("resize", function (event) {
  if (event.currentTarget.innerWidth > 767) {
    fullMenu.style.left = "100%";
  }
});
