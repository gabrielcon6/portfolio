$(document).ready(function(){

    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $( ".menu" ).toggle( "slide", function() {
        $( ".hamburger" ).hide();
        $( ".cross" ).show();
      });
    });

    $( ".cross, .menu-item" ).click(function() {
      $( ".menu" ).toggle( "slide", function() {
        $( ".cross" ).hide();
        $( ".hamburger" ).show();
      });
    });

    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });