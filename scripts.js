let currentSlide = 0;
const slides = document.querySelectorAll('.slide').length;

function moveRight() {
    currentSlide = (currentSlide + 1) % slides;
    updateSlidePosition();
}

function moveLeft() {
    currentSlide = (currentSlide - 1 + slides) % slides;
    updateSlidePosition();
}

function updateSlidePosition() {
    document.getElementById('slider').style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(moveRight, 30000);
