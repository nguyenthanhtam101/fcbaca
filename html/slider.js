let currentIndex = 0;
const sliders = document.querySelectorAll('.slider');
const sliderWrapper = document.querySelector('.slider-wrapper');

function nextSlide() {
    currentIndex++;
    if (currentIndex >= sliders.length) {
        currentIndex = 0;
    }
    updateSlide();
}

function updateSlide() {
    const offset = -currentIndex * sliders[0].clientWidth;
    sliderWrapper.style.transform = `translateX(${offset}px)`;
}

setInterval(nextSlide, 3000);
