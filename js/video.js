const button = document.querySelector('.button-block');
const buttonSecond = document.querySelector('.button-block-2');
const buttonThird = document.querySelector('.button-block-3');
const modal = document.querySelector('.video-modal');
const overlay = document.querySelector('.overlay');

button.addEventListener('click', openVideo);
buttonSecond.addEventListener('click', openVideo);
buttonThird.addEventListener('click', openVideo);
overlay.addEventListener('click', openVideo);

function openVideo() {
    modal.classList.toggle('video-modal--active');
    overlay.classList.toggle('overlay--active')
};
