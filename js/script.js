const gallery = new Swiper('.modal-gallery', {

    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,

    slideClass: 'photo',
    wrapperClass: 'gallery-wrap',

    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.modal-gallery',

    },

    slideToClickedSlide: true,

    observer: true,
    observeParents: true,
    observeSlideChildren: true,


})