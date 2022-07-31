const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,


    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',

    },


    speed: 800,

    // effect: 'fade',

    // fadeEffect: {
    //     crossFade: true,
    // },


    effect: 'flip',

    flipEffect: {
        slideShadows: true,
        limitRotation: true,
    },

});

//--------------------------------------------------------------

const swiperSecond = new Swiper('.swiper-2', {
    // Optional parameters
    direction: 'vertical',

    autoHeight: false,

    slidesPerView: 2,
    grid: {
        rows: 3,
        
    },

    


    // spaceBetween: 20,

    slidesPerGroup: 2,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination-2',
        type: 'fraction',
        clickable: true,

        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                ' of ' +
                '<span class="' + totalClass + '"></span>';
        }





    },

    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.swiper-2',
    },

    slideToClickedSlide: true,


});
