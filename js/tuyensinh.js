$(document).ready(function () {

    $('.selectstu--slide').slick({
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,


    });

    $('.selectstu__paslide').slick({
        dots:false,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows:false,


    });

    $(function() {
        $("[href^='#']").on("click", function( e ) {

            var target = $(this).attr('href');

            var scrollTop = $( target ).offset().top - $('.header').outerHeight();


            $("body, html").animate({
                scrollTop: scrollTop
            }, 800);

            e.preventDefault();


        });

    });



});

