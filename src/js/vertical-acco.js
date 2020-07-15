/* const openAcco = (item) => {

item.addClass("acco-item_active");

}



const closeAcco = (list) => {

  const listItem = list.find(".acco-item"); 
  listItem.removeClass("acco-item_active");

  }


$(".acco-title-wrapper").on('click', (e) => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const itemContainer = $this.closest(".acco-item");
    const accoList = itemContainer.closest(".acco-list");
    
if (itemContainer.hasClass("acco-item_active")) {
    closeAcco(accoList);



} else {
    closeAcco(accoList);
    openAcco(itemContainer);

    }
}) */





;(function() {


  const maxWidth = document.body.clientWidth;
  console.log(maxWidth);

  
  const openAcco = (item) => {
    item.addClass("acco-item_active");
    
  };
  
  const closeAcco = (list) => {
    const listItem = list.find(".acco-item");
    listItem.removeClass("acco-item_active");
  };
  

  let currWidth = document.body.clientWidth;

  $(window).on('resize', function(e) {
    currWidth = document.body.clientWidth;
    console.log(currWidth);
  })
  
  
  
  $(".acco-item").on("click", (e) => {
    e.preventDefault();
    console.log(currWidth);
    
    if (currWidth > 480) {
      
      if ($(e.target).hasClass("acco-title-wrapper") || $(e.target).hasClass("acco-title")) {
        const $this = $(e.target);
        const itemContainer = $this.closest(".acco-item");
        const accoList = itemContainer.closest(".acco-list");
    
    
        if (itemContainer.hasClass("acco-item_active")) {
          closeAcco(accoList);
        } else {
          closeAcco(accoList);
          openAcco(itemContainer);
        }
      }
    
      if ($(e.target).hasClass("close-x") || $(e.target).hasClass("close-vert-menu")) {
        const target = $(e.target);
        const Items = target.closest(".acco-list");
    
        closeAcco(Items)
      } 
    } else {
        let itemToAdd = $(`<div class="added-item"></div>`);
        itemToAdd.html($(e.currentTarget).html());

        if (!$('.added-item').length) {
          $('.vertical-menu__section').append(itemToAdd);

          setTimeout(() => {
          itemToAdd.addClass("added-item_active")
          }, 100);

          /* itemToAdd.addClass("added-item_active") */
          $('.added-item').on('click', function (e) {
            const $target = $(e.target)
            if ($target.hasClass('close-x') || $target.hasClass('acco-title-wrapper') || $target.hasClass('acco-title')) {

              console.log(e.target);
              itemToAdd.removeClass("added-item_active")
              setTimeout(() => {
                itemToAdd.remove()
                }, 500);
            }

            
            
          })
        }
      }
     
  });
  
})()

