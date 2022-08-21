const yearSlider = new Swiper('.years-slider', {

    direction: 'vertical',

    loop: true,

    slidesPerView: 4,

    centeredSlides: 'true',

    navigation: {
        nextEl: '.swiper-button-next-5',
        prevEl: '.swiper-button-prev-5',
    },

    slideClass: 'slide-years',
    wrapperClass: 'years-wrapper',

    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.years-slider',
    },




});