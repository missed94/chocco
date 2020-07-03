const openItem = function (item) {
  const container = item.closest(".teammate-item");
  const contentBlock = container.find(".position-wrapper");
  const textBLock = contentBlock.find(".position");
  const reqHeight = textBLock.height();

  container.addClass(".teammate-item_active");

  contentBlock.height(reqHeight);
};

const closeEveryItem = function (container) {
  const items = container.find(".position-wrapper");
  const itemContainer = container.find(".teammate-item");
  items.height(0);

  itemContainer.removeClass(".teammate-item_active");
};

$(".teammate-name-wrapper").on("click", function (e) {
  const $this = $(e.currentTarget);
  const container = $this.closest(".team");
  const elemContainer = $this.closest(".teammate-item");

  if (elemContainer.hasClass(".teammate-item_active")) {
    closeEveryItem(container);
  } else {
    closeEveryItem(container);
    openItem($this);
  }
});

/* const items = $('.teammate-name-wrapper');
const positionWrapper = $('.position-wrapper');
const arrow = $('.team__desc-arrow-img');

items.each((i,item) => {

$(item).on('click', function (e) {

  items.each((j,elem) =>  {

    if (j != i) {
      $(positionWrapper[j]).removeClass('position-wrapper_active');
      $(arrow[j]).removeClass('team__desc-arrow-img_active');
       }

  })
  
    $(positionWrapper[i]).toggleClass('position-wrapper_active');
    $(arrow[i]).toggleClass('team__desc-arrow-img_active');
    
  })

}) */

/* const items = document.querySelectorAll('.teammate-name-wrapper');
const positionWrapper = document.querySelectorAll('.position-wrapper');
const arrow = document.querySelectorAll('.team__desc-arrow-img');


for (let i = 0; i < items.length; i++) {

  let element = items[i];

  element.addEventListener("click", function (e) { 

    for (let j = 0; j < items.length; j++) {


    if (j != i) {
    positionWrapper[j].classList.remove('position-wrapper_active');
    arrow[j].classList.remove('team__desc-arrow-img_active');
     }


    }

    positionWrapper[i].classList.toggle('position-wrapper_active');
    arrow[i].classList.toggle('team__desc-arrow-img_active');
    
    

  })

} */
