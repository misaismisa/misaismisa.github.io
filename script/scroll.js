$(document).ready(function(){
  AOS.init({
 duration: 1300
});
});

$(function(){
  $('.menu').click(function(){
    $('.menu').toggleClass('rotateEffect');
  });
});

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

$(document).ready(function(){
  $('a[href*="#"]').on('click', function(event){

    // $('#overlay').toggleClass('close');
    // $(this).toggleClass('active');
    // event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      window.location.hash = hash;
    });
  });
});
// $(document).ready(function(){
// var Vue = require('vue');
// var VueScrollTo = require('vue-scrollto');
//
// Vue.use(VueScrollTo)
//
// // You can also pass in the default options
// VueScrollTo.setDefaults({
//     container: "body",
//     duration: 500,
//     easing: "ease",
//     offset: 0,
//     cancelable: true,
//     onStart: false,
//     onDone: false,
//     onCancel: false,
//     x: false,
//     y: true
// })
//  })
//  });

$(document).ready(function() {

    var wHeight = $(window).height();

    $('.slide')
      .height(wHeight)
      .scrollie({
        scrollOffset : -50,
        scrollingInView : function(elem) {

          var bgColor = elem.data('background');

          $('body').css('background-color', bgColor);

        }
      });

  });
