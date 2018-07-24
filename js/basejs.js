$(document).ready(function () {
    var widthWin = $(window).width();
    var widtcont = $('.ul-menu .container.absolute').width();
    var left = (widthWin - widtcont) / 2;
    $('.ul-menu .container.absolute').css('left', left);

    setTimeout(function(){
        $('#myModal').modal('show');
    }, 5000);

    $('.signin-bottom--tittle').click(function () {
        $(this).parents('.signin-bottom').toggleClass('active');
    });

});