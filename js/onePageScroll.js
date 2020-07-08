$(document).ready(function() 
{
  var moove = 0;
  const mainContent = $(".main__contant");
  var pages = $(".page");
  var scroll = false;

  //Автоматический скролл в начало после обновления страницы
  $(window).on("load", function() {
    $(window).scrollTop($(".page:first-child").offset().top);
  });
  $(window).on("scroll", function() {
    $(window).scrollTop($(".page:first-child").offset().top);
  });
  
  //Инициализация активной страницы (первой по умолчанию)
  $(".page:first-child").addClass("page_active");

  //Событие скролла колесиком
  $('body').on('wheel', function(event) 
  {
    let activePage = pages.filter(".page_active");

    if (!scroll) 
    {
      scroll = true;
      if (event.originalEvent.deltaY > 0)
      {
        if (activePage.next().length)
              moove++;
      }
      else
      {
          if (activePage.prev().length)
              moove--;
      }
    }

    pages.eq(moove).addClass('page_active').siblings().removeClass('page_active');

    let translate = (-moove * 100) + "vh";
    mainContent.css("transform", "translateY(" + translate + ")");

    setTimeout(function() { scroll = false; }, 1500);
  });
});
