$(document).ready(function () {
    $('.item-a').mouseover(function () {
       $(this).find('p').css({'transition':'2s','display':'flex'});

    })
       .mouseout(function () {
           $(this).find('p').css('display','none');
       });


    $('.slide-patner').slick({
        dots:false,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows:false,

        // responsive: [
        //     {
        //         breakpoint: 1200,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //
        //             arrows:false,
        //             dots: false
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             arrows:false,
        //             dots: false
        //         }
        //     }
        //
        // ]
    });
});

