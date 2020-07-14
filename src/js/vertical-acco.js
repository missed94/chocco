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
  
  
  
  $(".acco-item").on("click", (e) => {
    e.preventDefault();
    let $this = $(e.target);
    

    if (maxWidth > 480) {
      if ($(e.target).hasClass("acco-title-wrapper") || $(e.target).hasClass("acco-title")) {
        
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
      } else {
        let $this = $(e.currentTarget);
console.log($this.html());
      }
    } 
    
    
  
    
  });
  
})()

