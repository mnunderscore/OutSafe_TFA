import $ from "jquery";
$(window).on('load',function() {
    $("body").removeClass("preload");
});


const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-slide');
const dots = document.querySelectorAll('.slider-dot');
let i;

const reset = () => dots.forEach((dot) => dot.classList.remove('active'));

function slideTo(n) {
    track.style.transform = `translateX(-${n * slides[0].offsetWidth}px)`;
    reset();
    dots[n].classList.add('active');
}

function activateArrows(direction) {
    direction === 'right' ? i++ : i--;
    if (i < 0) i = 0;
    if (i > slides.length-1) i = slides.length-1;
    slideTo(i);
}

function activateDots(e) {
    i = e.target.dataset.index;
    slideTo(i);
}

function activate(e) {
    e.target.matches('.slider-dot') && activateDots(e);
    e.target.matches('.arrow-right') && activateArrows('right');
    e.target.matches('.arrow-left') && activateArrows();
}

function init(n) {
    i = n;
    slideTo(n);
}

document.addEventListener('click',activate,false);
window.addEventListener('load',init(0),false);

const trackalt = document.querySelector('.slider-track-alt');
const slidesalt = document.querySelectorAll('.slider-slide-alt');
const dotsalt = document.querySelectorAll('.slider-dot-alt');
let ialt;

const resetalt = () => dotsalt.forEach((dot) => dot.classList.remove('active'));

function SlideToAlt(n) {
    trackalt.style.transform = `translateX(-${n * slidesalt[0].offsetWidth}px)`;
    resetalt();
    dotsalt[n].classList.add('active');
}

function activateArrowsAlt(direction) {
    direction === 'right' ? ialt++ : ialt--;
    if (ialt < 0) ialt = 0;
    if (ialt > slidesalt.length-1) ialt = slidesalt.length-1;
    SlideToAlt(ialt);
}

function activateDotsAlt(e) {
    ialt = e.target.dataset.index;
    SlideToAlt(ialt);
}

function activateAlt(e) {
    e.target.matches('.slider-dot-alt') && activateDotsAlt(e);
    e.target.matches('.arrow-right-alt') && activateArrowsAlt('right');
    e.target.matches('.arrow-left-alt') && activateArrowsAlt();
}

function initAlt(n) {
    ialt = n;
    SlideToAlt(n);
}

document.addEventListener('click',activateAlt,false);
window.addEventListener('load',initAlt(0),false);