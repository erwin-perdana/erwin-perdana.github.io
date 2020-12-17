// OVERLAY
gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});
gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut});

// scroll
$('.page-scroll').on('click',function(e) {
  var tujuan = $(this).attr('href');
  var elementTujuan = $(tujuan);
  $('html').animate({
    scrollTop : elementTujuan.offset().top
  },1000,'easeInOutExpo');
  e.preventDefault();
});

// parallax
var lebar = $(window).width();
// jumbotron
$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  console.log(wScroll);
  // navbar
  if( wScroll == 0 ){
    $(".navbar").removeClass('Muncul');
  }
  if( wScroll > 0 ){
    $(".navbar").addClass('Muncul');
  }
  // portfolio
  if( wScroll > 590 ){
    $(".p1 .portfolio").addClass('Muncul');
  }
	if( wScroll > 600 ){
    $(".p1 h4:contains(HIKING)").addClass('Muncul');
    $(".p1 hr").addClass('Muncul');
    $(".p2 .portfolio").addClass('Muncul');
  }
  if( wScroll > 630 ){
    $(".p2 h4:contains(DANCE)").addClass('Muncul');
    $(".p2 hr").addClass('Muncul');
  }
  if( wScroll > 1060 ){
    $(".p3 .portfolio").addClass('Muncul');
    $(".p4 .portfolio").addClass('Muncul');
    $(".p3 h4:contains(APP)").addClass('Muncul');
    $(".p3 hr").addClass('Muncul');
    $(".p4 h4:contains(E-COMMERCE)").addClass('Muncul');
    $(".p4 hr").addClass('Muncul');
  }
});
// jumbotron
$(window).on('load', function() {
  setTimeout(function(){
    $('.jumbo > p:first-child').addClass('Muncul');
    $('.jumbo > span').addClass('Muncul');
    $('.box').addClass('Muncul');
    }, 2000);
});
// project
$(document).on('scroll', function(){
  if(lebar > 1199){
    $('h1').css("left", Math.max(1000 - 1.5*window.scrollY, 250) + "px");
  }
});

// 992 parallax
if(lebar > 991){
  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    console.log(wScroll);
    // project
    $(document).on('scroll', function(){
      if(lebar > 991){
        $('h1').css("left", Math.max(600 - 1.5*window.scrollY, 250) + "px");
      }
    });
    // portfolio
    if( wScroll > 299 ){
      $(".p1 .portfolio").addClass('Muncul');
    }
    if( wScroll > 299 ){
      $(".p1 h4:contains(HIKING)").addClass('Muncul');
      $(".p1 hr").addClass('Muncul');
      $(".p2 .portfolio").addClass('Muncul');
    }
    if( wScroll > 420 ){
      $(".p2 h4:contains(DANCE)").addClass('Muncul');
      $(".p2 hr").addClass('Muncul');
    }
    if( wScroll > 850 ){
      $(".p3 .portfolio").addClass('Muncul');
      $(".p4 .portfolio").addClass('Muncul');
      $(".p3 h4:contains(APP)").addClass('Muncul');
      $(".p3 hr").addClass('Muncul');
      $(".p4 h4:contains(E-COMMERCE)").addClass('Muncul');
      $(".p4 hr").addClass('Muncul');
    }
  });
}

// 768 parallax
if(lebar > 767){
  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    console.log(wScroll);
    // portfolio
    if( wScroll > 50 ){
      $(".p1 .portfolio").addClass('Muncul');
    }
    if( wScroll > 50 ){
      $(".p1 h4:contains(HIKING)").addClass('Muncul');
      $(".p1 hr").addClass('Muncul');
      $(".p2 .portfolio").addClass('Muncul');
    }
    if( wScroll > 70 ){
      $(".p2 h4:contains(DANCE)").addClass('Muncul');
      $(".p2 hr").addClass('Muncul');
    }
    if( wScroll > 80 ){
      $(".p3 .portfolio").addClass('Muncul');
      $(".p4 .portfolio").addClass('Muncul');
      $(".p3 h4:contains(APP)").addClass('Muncul');
      $(".p3 hr").addClass('Muncul');
      $(".p4 h4:contains(E-COMMERCE)").addClass('Muncul');
      $(".p4 hr").addClass('Muncul');
    }
  });
}
