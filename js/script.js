let styles = [
  'background: linear-gradient(#0091be, #009cab)'
  , 'border: 1px solid #3E0E02'
  , 'color: white'
  , 'display: block'
  , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
  , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
  , 'line-height: 40px'
  , 'text-align: center'
  , 'font-weight: bold'
  , 'font-size: 1.5rem'
].join(';');

const wave = String.fromCodePoint(0x1F44B)
const happy = String.fromCodePoint(0x1F600)
const videogame = String.fromCodePoint(0x1F3AE)

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

  $( ".down-about" ).click(function() {
      console.log(`%c Hi there! ${wave} Thanks for checking the console. I hope everything is in order for ya! :D`, styles);
    });

  $( ".down-projects" ).click(function() {
      console.log(`%c If you wanna play Smash Brothers with me, just hmu! ${videogame}`, styles);
    });

  $( ".down-contact" ).click(function() {
      console.log(`%c Thanks for checking my projects! My contact details are below ${happy}`, styles);
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