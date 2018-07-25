$(document).ready(function(){
  AOS.init({
 duration: 1300
});
});

$(document).ready(function(){
  $('a[href*="#"]').on('click', function(event){

    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      window.location.hash = hash;
    });
  });
});
