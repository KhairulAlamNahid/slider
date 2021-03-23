$(function () {
    // banner slider js

    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        prevArrow: '<i class="fa fa-chevron-left left"></i>',
        nextArrow: '<i class="fa fa-chevron-right right"></i>',
        dots: true,
    });
})