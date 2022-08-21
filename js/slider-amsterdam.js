const swiperAmster = new Swiper('.slider-amsterdam', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 150,


    slideClass: 'slide-amst',
    wrapperClass: 'amst-wrapper',

    speed: 800,

    // effect: 'fade',

    // fadeEffect: {
    //     crossFade: true,
    // },


    mousewheel: {
        sensitivity: 1,
        eventsTarget: 'slider-amsterdam',

    },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination-6',
        clickable: true,

        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
        }

    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-6',
        prevEl: '.swiper-button-prev-6',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },



});