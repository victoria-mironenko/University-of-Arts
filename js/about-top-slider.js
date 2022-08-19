const swiperTales = new Swiper('.tales-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,

  slideClass: 'tales-photo',
  wrapperClass: 'tales-wrapper',

  // speed: 800,

  effect: 'fade',

  fadeEffect: {
    crossFade: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.tales-slider',

  },

  slideToClickedSlide: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination-4',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-4',

  },


});