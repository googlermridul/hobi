$(document).ready(function() {

   /*-- NAVIGRATION --*/
   $("#hamburger").click(function() {
      $(this).toggleClass("active");
   })

   $(".nav-link").click(function(){
      $(".navbar-collapse").collapse("hide");
      $("#hamburger").removeClass("active");
   });

   $(".nav-item > a").click(function() {
      $(".nav-item > a").removeClass("active");
      $(this).addClass("active");
   });

   /*-- HOME SECTION TYPED PLUGIN --*/
   var typed = new Typed(".type", {
      strings: ["Designer","Developer"],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true
   });

   /*-- SKILL SECTION PROGRESS BAR PLUGIN --*/

   /*-- PORTFOLIO SECTION MIXITUP PLUGIN --*/
   var mixer = mixitup('#portfolio');

   /*-- PORTFOLIO SECTION CUSTOM CODE --*/
   $("#selector > a").click(function() {
      $("#selector > a").removeClass("active");
      $(this).addClass("active");
   });

   /*-- WORK SECTION COUNTERUP PLUGIN --*/
   $(".counter").counterUp({
      delay: 10,
      time: 2000
   });

   /*-- TESTIMONIAL SECTION OWL CAROUSEL PLUGIN --*/
   $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 25,
      nav: true,
      autoplay: true,
      responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1025:{
            items:3
        }
      }
   })

   /*-- SCROLL UP --*/
   $(window).scroll(function() {
      if ( $(this).scrollTop()>100 ) {
         $(".scroll-up").fadeIn();
      } else {
         $(".scroll-up").fadeOut();
      };
   });

   $(".scroll-up").click(function() {
      $("html").animate({scrollTop: 0}, 1000);
      return false;
   });

});
