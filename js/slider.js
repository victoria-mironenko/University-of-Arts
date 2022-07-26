const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,


    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    grabCursor: true,

    speed: 800,

    // effect: 'cube',
    // cubeEffect: {
    //     slideShadow: true,
    //     shadow: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94,
    // },


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