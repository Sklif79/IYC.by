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
        rows: 2,
        nextArrow: '<div class="photo-gallery-slider__next"></div>',
        prevArrow: '<div class="photo-gallery-slider__prev"></div>',
        arrows: true
    });

    $('.cost-learning-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
    });

    //кастомное управление для cost-learning-slider
    $('.cost-learning-slider-wrap .slider-next').on('click', function() {
        $('.cost-learning-slider').slick('slickNext');
    });
    $('.cost-learning-slider-wrap .slider-prev').on('click', function() {
        $('.cost-learning-slider').slick('slickPrev');
    });

    $('.other-services-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: '<div class="our-service-slider__next"></div>',
        prevArrow: '<div class="our-service-slider__prev"></div>',
        arrows: true
    });

    //fancybox
    $('a.fancybox').fancybox({
        closeBtn: true,
        padding: [20, 20, 18, 20],
        helpers: {
            overlay: {
                css: {
                    'background': 'rgba(51,51,51,0.8)'
                },

            },
            title: { type : 'inside' },
        }
    });

});
