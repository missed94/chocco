;(function() {
  const sections = $("section");
  const display = $(".main__content");
  const sideMenu = $(".fixed-menu");
  const sideMenuItems = sideMenu.find(".fixed-menu__item");
  
  const mobileDetect = new MobileDetect(window.navigator.userAgent);
  const isMobile = mobileDetect.mobile();
  
  let inScroll = false;
  
  sections.first().addClass("active");
  
  const countSectionPosition = (sectionEq) => {
    const position = sectionEq * -100;
  
    if (isNaN(position)) {
      console.error("передано неверное значение в countSectionPosition");
      return 0;
    }
  
    return position;
  };
  
  const resetActiveClassForItem = (items, itemEq, activeClass) => {
    items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
  };
  
  //функция запускающая анимацию
  const performTransition = (sectionEq) => {
    if (inScroll) return;
  
    inScroll = true;
    const position = countSectionPosition(sectionEq);
  
    display.css({
      transform: `translateY(${position}%)`,
    });
  
    resetActiveClassForItem(sections, sectionEq, "active");
  
    setTimeout(() => {
      inScroll = false;
      resetActiveClassForItem(
        sideMenuItems,
        sectionEq,
        "fixed-menu__item_active"
      );
    }, 1500);
  };
  
  // функция определяюзаяя к какой секции скролить
  const viewportScroller = () => {
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();
  
    return {
      next() {
        if (nextSection.length) {
          performTransition(nextSection.index());
        }
      },
  
      prev() {
        if (prevSection.length) {
          performTransition(prevSection.index());
        }
      },
    };
  };
  
  $(window).on("wheel", (e) => {
    const deltaY = e.originalEvent.deltaY;
    const scroller = viewportScroller();
    if (deltaY > 0) {
      scroller.next();
    }
  
    if (deltaY < 0) {
      scroller.prev();
    }
  });
  
  $(window).on("keydown", (e) => {
    const tagName = e.target.tagName.toLowerCase();
    const userTypingInInputs = tagName == "input" || tagName == "textarea";
    const scroller = viewportScroller();
  
    if (userTypingInInputs) return;
  
    switch (e.keyCode) {
      case 40: //prev
        scroller.next();
        break;
  
      case 38: //next
        scroller.prev();
        break;
    }
  });
  
  $(".wrapper").on("touchmove", e => {
    e.preventDefault();
  })
  
  $("[data-scroll-to]").click((e) => {
    e.preventDefault();
  
    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id = ${target}]`);
  
    performTransition(reqSection.index());
  
  });
  
  
  if (isMobile) {
    $("body").swipe( {
      //Generic swipe handler for all directions
      swipe:function(event,direction) {
       const scroller = viewportScroller(); 
       let scrollDirection = "";
    
       if (direction == "up") scrollDirection = "next";
       if (direction == "down") scrollDirection = "prev";
    
       scroller[scrollDirection]();
    }
    })
  
  }
  
  
})()

