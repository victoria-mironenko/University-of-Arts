const buttonGallery = document.querySelector('.photo-slider-btn');
const galleryPhoto = document.querySelector('.student-work');
const overlayGal = document.querySelector('.overlay-gal');

buttonGallery.addEventListener('click', openGallery);
overlayGal.addEventListener('click', openGallery);

function openGallery() {
    galleryPhoto.classList.toggle('student-work--active');
    overlayGal.classList.toggle('overlay-gal--active')
};
