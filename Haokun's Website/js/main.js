// -------------- homepage ------------------ //

// ----------- home hero video

$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}

// ---------- home slider

// hide all images in .home-area
// when user click on .arrow-right
// fade in the current image

$('.two, .three, .four').hide();

var divNumber = 0;

$('.arrow-right').on('click', function() {

  if (divNumber < 3) {
    divNumber += 1;
  } else {
    divNumber = 0;
  }

  $('.home-area').hide();
  $('.home-area').eq(divNumber).fadeIn(500);
});

$('.arrow-left').on('click', function() {

  if (divNumber > 0) {
    divNumber -= 1;
  } else {
    divNumber = 3;
  }

  $('.home-area').hide();
  $('.home-area').eq(divNumber).fadeIn(500);
});

setInterval(function(){
  if (divNumber < 3) {
    divNumber += 1;
  } else {
    divNumber = 0;
  }

  $('.home-area').hide();
  $('.home-area').eq(divNumber).fadeIn(1500);
}, 8000);

// -------- home modal

// when user scroll to 1550px
// show .modal

$(window).on('scroll', function (){

  var distanceScrolled = $(window).scrollTop();
  console.log(distanceScrolled);

  if (distanceScrolled > 1550) {
    $('.modal').fadeIn(350);
    $(window).off('scroll');
  }
});

// when user click on the x (.close)
  // hide modal
$('.close').on('click', function (){
  $('.modal').fadeOut(350);
});












// -------------- nav ------------------ //

// When the user click on the hamburger (.hamburger)
  // toggle class mobile-navigation on .navigation


// -------------- resume page ------------------ //
$('#skills-pro').on('click', function(){
  $('#pro-content').slideToggle(350);
  $('#fa-up-pro').toggle();
  $('#fa-down-pro').toggle();
});

$('#skills-comp').on('click', function(){
  $('#comp-content').slideToggle(350);
  $('#fa-up-comp').toggle();
  $('#fa-down-comp').toggle();
});

$('#skills-lang').on('click', function(){
  $('#lang-content').slideToggle(350);
  $('#fa-up-lang').toggle();
  $('#fa-down-lang').toggle();
});

$('#ma').on('click', function(){
  $('#ma-content').slideToggle(350);
  $('#fa-up-ma').toggle();
  $('#fa-down-ma').toggle();
});

$('#ba').on('click', function(){
  $('#ba-content').slideToggle(350);
  $('#fa-up-ba').toggle();
  $('#fa-down-ba').toggle();
});

$('#ga').on('click', function(){
  $('#ga-content').slideToggle(350);
  $('#fa-up-ga').toggle();
  $('#fa-down-ga').toggle();
});

$('#itg').on('click', function(){
  $('#itg-content').slideToggle(350);
  $('#fa-up-itg').toggle();
  $('#fa-down-itg').toggle();
});

$('#ivymax').on('click', function(){
  $('#ivymax-content').slideToggle(350);
  $('#fa-up-ivymax').toggle();
  $('#fa-down-ivymax').toggle();
});

$('#nspr').on('click', function(){
  $('#nspr-content').slideToggle(350);
  $('#fa-up-nspr').toggle();
  $('#fa-down-nspr').toggle();
});

$('#peerfit').on('click', function(){
  $('#peerfit-content').slideToggle(350);
  $('#fa-up-peerfit').toggle();
  $('#fa-down-peerfit').toggle();
});

$('#omninox').on('click', function(){
  $('#omninox-content').slideToggle(350);
  $('#fa-up-omninox').toggle();
  $('#fa-down-omninox').toggle();
});



// -------------- faq page ------------------ //

// when user click on h3
  // fadeToggle fa-down
  // fadeToggle fa-up

$('#faq-q1').on('click', function(){
  $('#faq-a1').slideToggle(350);
  $('#fa-down-faq1').toggle();
  $('#fa-up-faq1').toggle();
});

$('#faq-q2').on('click', function(){
  $('#faq-a2').slideToggle(350);
  $('#fa-down-faq2').toggle();
  $('#fa-up-faq2').toggle();
});

$('#faq-q3').on('click', function(){
  $('#faq-a3').slideToggle(350);
  $('#fa-down-faq3').toggle();
  $('#fa-up-faq3').toggle();
});

$('#faq-q4').on('click', function(){
  $('#faq-a4').slideToggle(350);
  $('#fa-down-faq4').toggle();
  $('#fa-up-faq4').toggle();
});

$('#faq-q5').on('click', function(){
  $('#faq-a5').slideToggle(350);
  $('#fa-down-faq5').toggle();
  $('#fa-up-faq5').toggle();
});

$('#faq-q6').on('click', function(){
  $('#faq-a6').slideToggle(350);
  $('#fa-down-faq6').toggle();
  $('#fa-up-faq6').toggle();
});

$('#faq-q7').on('click', function(){
  $('#faq-a7').slideToggle(350);
  $('#fa-down-faq7').toggle();
  $('#fa-up-faq7').toggle();
});

$('#faq-q8').on('click', function(){
  $('#faq-a8').slideToggle(350);
  $('#fa-down-faq8').toggle();
  $('#fa-up-faq8').toggle();
});
