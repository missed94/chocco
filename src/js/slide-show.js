;(function() {
//объявляем переменные:

//переменная с круглыми аватарками


const avatars = $('.interactive-avatar');

const displayInner = $('.rewievs__display-inner');


/* const avatars = $('[data-from]');

const displayInner = $('[data-to]');



avatars.on('click', e => {
    e.preventDefault();
    const $this = $(e.currentTarget);

    const displayInnerData = displayInner

    avatars.removeClass('interactive-avatar_active');


    if ($this.hasClass('interactive-avatar')) {
        $this.addClass('interactive-avatar_active')
    }



})  */





//объявляем цикл который перебирает все круглые аватарки
for (let i = 0; i < avatars.length; i++) {
    //присваиваем элементу цикла(конкретной аватрке) переменную элемент
    let element = avatars[i];

    //создаем событие клика на аватарку и функцию которая выполняется при клике
    element.addEventListener("click", function (e) {

        //Внтури функции:

        //отменяем стандартное действие браузера при клике на элемент(ссылка)
        e.preventDefault()

        //снова объявляем цикл который перебирает все круглые аватарки
        for (let index = 0; index < avatars.length; index++) {

            //убираем активный класс всем аватаркам при клике, на тех на которых он есть
            avatars[index].classList.remove('interactive-avatar_active')
            //убираем активный класс дисплею при клике, на тех на которых он есть
            displayInner[index].classList.remove('rewievs__display-inner_active')

        }
        //присваиваем активный класс аватарке, на которурую произвели клик
        displayInner[i].classList.add('rewievs__display-inner_active');
        //присваиваем активный класс дисплею
        e.currentTarget.classList.add('interactive-avatar_active');
    })
}




/* function change(target, 
                i, 
                avatars,
                displayInner, 
                avatarsActive, 
                displayInnerActive, 
                e) {

    e.preventDefault();

    for (let index = 0; 
         index < avatars.length; 
         index++) {

        avatars[index].classList.remove(avatarsActive)
        displayInner[index].classList.remove(displayInnerActive)
    }

    displayInner[i].classList.add(displayInnerActive);
    target.classList.add(avatarsActive);
};



for (let i = 0; 
     i < avatars.length; 
     i++) {

    let element = avatars[i];

    element.addEventListener("click", function (e) {
        
    change( e.currentTarget, 
            i, 
            avatars, 
            displayInner, 
            'interactive-avatar_active', 
            'rewievs__display-inner_active',
            e)
    })
} */
})()

