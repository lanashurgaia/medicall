/************* background and logo change **************/
var images = ['dr_bg1.png','dr_bg2.png','bg3.png'];// სურათების მასივი

setInterval(function background() {
    var randomImage=images[Math.floor(Math.random() * images.length)]; // შემთხვევითი სურათი

    $('.body').css({'background-image': 'url(images/'+ randomImage + ')'}); // შემთხვევითი სურათით ფონის ვლილება

    if (randomImage.toLowerCase().indexOf("dr_") >= 0){ // თუ სურათი მუქია (იწყება dr_ -ით), ლოგოს შეცვლა
            $(".main .logo img").delay( 1000 ).attr("src","images/logo-wt.png");
    } else {
            $(".main .logo img").delay( 1000 ).attr("src","images/logo.png");
    }

    return background;
}(), 5000);
/*********** background and logo change end ************/
/************* languages show **************/
$(".active_language").show();
/*********** languages show end ************/


$(document).ready(function(){

  
// ------ change menu height on scroll --------
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    
    if (scrollTop >= 100) {
      $('.navbar').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('.navbar').removeClass('scrolled-nav');
    } 
    
  }); 

});


// ------ online page tabs --------
$("document").ready(function(){
  $(".tab-slider--body").hide();
  $(".tab-slider--body:first").show();
});

$(".tab-slider--nav li").click(function() {
  $(".tab-slider--body").hide();
  var activeTab = $(this).attr("rel");
  $("#"+activeTab).fadeIn();
  if($(this).attr("rel") == "tab2"){
    $('.tab-slider--tabs').addClass('slide');
  }else{
    $('.tab-slider--tabs').removeClass('slide');
  }
  $(".tab-slider--nav li").removeClass("active");
  $(this).addClass("active");
});
