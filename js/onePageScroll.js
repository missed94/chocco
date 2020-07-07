
let moove = 0;
const mainContent = $('.main__contant');
let pages = $('.page');
let scroll = false;

$('.page:first-child').addClass('page_active')


$("body").on('wheel', () => {
    console.log(event.deltaY);

    
    
    if (event.deltaY > 0) {
        moove++

        

        
    } else {
        moove--
    }


    let translate = (-moove * 100) + "vh";

    

    mainContent.css('transform', 'translateY(' + translate + ')');
   

})


 
