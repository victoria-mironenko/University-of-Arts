const swiperAcademLf = new Swiper('.swiper-academ-lf', {

    direction: 'vertical',

    loop: true,

    slidesPerView: 3,

    centeredSlides: 'true',

    navigation: {
        nextEl: '.swiper-button-next-3',
        prevEl: '.swiper-button-prev-3',
    },

    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.swiper-academ-lf',
    },




});

/* ----------------------------------------------------------------------------------------------- */
/* -------------------second slider------------------------------------------------------------ */
/* -------------------------------------------------------------------------------------------- */

const swiperAcademRi = new Swiper('.swiper-academ-ri', {

    direction: 'vertical',

    loop: true,

    slidesPerView: 3,

    centeredSlides: 'true',


});

swiperAcademLf.controller.control = swiperAcademRi;