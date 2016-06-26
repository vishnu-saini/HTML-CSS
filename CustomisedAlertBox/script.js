$(document).ready(function ($) {
    $('.show-hide').click(function(){
        $('.alert-box').toggle();
    });
    $('.alert-close').click(function(){
        $('.alert-box').hide();
    });
});

