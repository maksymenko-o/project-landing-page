$(function() {
    $(".tabs").tabs();
    
    $(".portfolio-tabs").tabs();

    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots: true,
        items:1
    })

    (function () {
        let nav = $('.navigation');

        $('.menu-btn').click(function() {
            if(nav.hasClass('active')) {
                nav.removeClass('active');
            }
            else {
                nav.addClass('active');
            }
        });
    }());

});