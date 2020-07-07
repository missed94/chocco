/* let moove = 0;
const mainContent = $(".main__contant");
let pages = $(".page");
let scroll = false;

$(".page:first-child").addClass("page_active");

$('body').on('wheel', function(event) {

  let activePage = pages.filter(".page_active");

  if (!scroll) {
    scroll = true;


    if (event.originalEvent.deltaY > 0) {
      

        if (activePage.prev().length) {
            moove++;
        }

    } else {

        if (activePage.next().length) {
            moove--;
        }
      
    }

  }

  let translate = (-moove * 100) + "vh";
  
  pages.eq(screen).addClass('page_active').siblings().removeClass('page_active')

  mainContent.css("transform", "translateY(" + translate + ")");


  setTimeout(function() {
      scroll = false;
  }, 1500);


});
*/

/* let moove = 0;
const mainContent = $(".main__contant");
let pages = $(".page");
let scroll = false;

$("body").on("wheel", () => {
  console.log(event.deltaY);

  let countPages = $(".page").length - 1;

  moove += event.deltaY;
  //if (event.deltaY > 0) moove++;
  //else moove--;

  if (moove < 0) {
    moove = 0;
    return true;
  }
  if (moove > countPages * 100) {
    moove = countPages * 100;
    return true;
  }

  let translate = -moove + "vh";
  mainContent.css("transform", "translateY(" + translate + ")");
});
 */