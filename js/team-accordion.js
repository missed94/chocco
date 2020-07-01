
const items = $('.teammate-name-wrapper');
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

})





/* 
const items = document.querySelectorAll('.teammate-name-wrapper');
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


    if (!positionWrapper[i].classList.contains('position-wrapper_active')) {

    positionWrapper[i].classList.add('position-wrapper_active');
    arrow[i].classList.add('team__desc-arrow-img_active');
    
    } else {
      positionWrapper[i].classList.remove('position-wrapper_active');
      arrow[i].classList.remove('team__desc-arrow-img_active');

    }


  })

} */