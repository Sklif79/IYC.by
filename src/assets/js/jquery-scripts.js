$(document).ready(function () {
    //sliders
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<div class="main-slider__next"></div>',
        prevArrow: '<div class="main-slider__prev"></div>',
        arrows: true,
        dots: true
    });

    $('.our-service-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: '<div class="our-service-slider__next"></div>',
        prevArrow: '<div class="our-service-slider__prev"></div>',
        arrows: true
    });

    $('.photo-gallery-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<div class="our-service-slider__next"></div>',
        prevArrow: '<div class="our-service-slider__prev"></div>',
        arrows: true
    });


});
