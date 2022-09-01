/*mobile button click*/
$(document).ready(function () {
$(".wrap-1 .mob" ).click(function (e) { 
    e.preventDefault();
    $(this).toggleClass("active");
    $(".wrap-1 .hidden").slideToggle();
});
$(".wrap-1 .mob" ).focusout(function (e) { 
    e.preventDefault();
    $(".wrap-1 .hidden").slideUp();
    $(".wrap-1 .mob").removeClass("active");
    
});
});