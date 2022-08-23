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






// --------------------------------------------------------------

const swiperSecond = new Swiper('.swiper-2', {
    // Optional parameters
    direction: 'vertical',

    autoHeight: false,



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

        // renderFraction: function (currentClass, index, totalClass) {
        //     return '<span class="' + currentClass + '">' + (index + 1) + 
        //     '<span class="' + totalClass + '"></span>';
        // },

    },






    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.swiper-2',
    },

    slideToClickedSlide: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerGroup: 1,
            slidesPerView: 1,
            grid: {
                rows: 1,

            },
        },
        // when window width is >= 480px
        480: {
            slidesPerGroup: 1,
            slidesPerView: 1,
            grid: {
                rows: 1,

            },
        },
        768: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            grid: {
                rows: 2,

            },
        },
        950: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            grid: {
                rows: 2,

            },
        },
        1120: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            grid: {
                rows: 3,

            },
        },

    }
})