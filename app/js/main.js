$(function () {
    $('.section-slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        dots: false,
        asNavFor: '.slider-dotshead',
        responsive: [{
            breakpoint: 995,
            settings: 'unslick'
        }, ]
    });
    $('.slider-dotshead').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/svg/arrow-top.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/svg/arrow-bottom.svg" alt="">',
        asNavFor: '.section-slider__inner',
        responsive: [{
            breakpoint: 995,
            arrows: false,
            vertical: false
        }, ]
    });
    $('.section-review__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        vertical: true,
        verticalSwiping: true,
        dots: false,
        nextArrow: '<img class="slick-next slick-arrow" src="images/svg/arrow-bottom.svg" alt="">',
        prevArrow: '<img class="slick-prev slick-arrow" src="images/svg/arrow-top.svg" alt="">',
        responsive: [{
            breakpoint: 800,
            settings: {
                arrows: false,
                vertical: true
            }
        }, ]

    });

    var btn = $('.btn');

    btn.on('click', function () {
        $(this).toggleClass('active');
        $(this).toggleClass('not-active');
        $('.header__nav-list').toggleClass('active');
    });

    new WOW().init();
});