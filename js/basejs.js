$(document).ready(function () {
    var widthWin = $(window).width();
    var widtcont = $('.ul-menu .container.absolute').width();
    var left = (widthWin - widtcont) / 2;
    $('.ul-menu .container.absolute').css('left', left);


});