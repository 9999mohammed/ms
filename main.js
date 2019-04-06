/* global console , $ */

$(function(){

    "use strict" 
    /*   navbar active item  */
    $('.navbar-main  .navbar-nav  .nav-item  ').on('click', function()
    {
         $(this).addClass('active').siblings().removeClass('active');

    });
    /* all active item   */
    $('.images-prot  ul li   ').on('click', function()
    {
     $(this).addClass('active').siblings().removeClass('active');
    });
    /* navbar scroll top */
   $(".navbar-main  .navbar-nav .nav-item  .nav-link  ").click(function (event) {
      event.preventDefault();
  $('html ,body').animate({

    scrollTop: $("#" + $(this).data('scroll')).offset().top

},1100)
   
   })

});

$(window).scroll(function(){

 var scrollToTop =   $('.srcoll-to-top');
if($(this).scrollTop() >= 1000){
if (scrollToTop.is(':hidden')){
    scrollToTop.fadeIn(400);
}
}
else{
    scrollToTop.fadeOut(400);
}



});

$(".srcoll-to-top").click(function (event) {

    event.preventDefault();
$('html ,body').animate({


  scrollTop:0

}, 1100);

});
$(window).load(function() {
	$("#loading").delay(2000).fadeOut(1000 ,function(){

       $("body").css("overflow","auto")
    });
	
})