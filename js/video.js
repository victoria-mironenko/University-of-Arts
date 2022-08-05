const button = document.querySelector('.button-block');
const modal = document.querySelector('.video-modal');
const overlay = document.querySelector('.overlay');

button.addEventListener('click', openVideo);
overlay.addEventListener('click', openVideo);

function openVideo() {
    modal.classList.toggle('video-modal--active');
    overlay.classList.toggle('overlay--active')
};
