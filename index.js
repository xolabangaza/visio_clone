$(document).ready(function () {
    const $slider = $('.slider');
    const $slides = $('.slide');
    const totalSlides = $slides.length;
    let currentIndex = 0;

    $('.next-btn').on('click', function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    });


    function updateSlider() {
        const translateValue = -100 * currentIndex + '%';
        $slider.css('transform', 'translateX(' + translateValue + ')');
        updateDots();
    }

    function createDots() {
        for (let i = 0; i < totalSlides; i++) {
            const dot = $('<div>').addClass('dot');
            const halfCircleTop = $('<div>').addClass('half-circle top');
            const halfCircleBottom = $('<div>').addClass('half-circle bottom');
            dot.append(halfCircleTop, halfCircleBottom);
            $('.dot-container').append(dot);
        }
        updateDots();
    }

    function updateDots() {
        $('.dot').removeClass('active').eq(currentIndex).addClass('active');
    }

    createDots();
});
