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

    },


    speed: 800,

    effect: 'fade',

    fadeEffect: {
        crossFade: true,
    },


    // effect: 'flip',

    // flipEffect: {
    //     slideShadows: true,
    //     limitRotation: true,
    // },

});