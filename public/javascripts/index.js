Stripe.setPublishableKey('pk_test_DsyPnuAkrgucqixmAvfPA9hO');

$('select.dropdown').dropdown();
$('.autumn.leaf')
  .transition('AppWrapper')
;

function fadeOut() {
  $('#AppWrapper').transition('fade right');
  window.history.pushState('checkout', 'Checkout', '/checkout');
  $('#CheckoutWrapper').fadeIn('slow');
}

$('#CheckoutWrapper').hide();

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d"),
    dashLen = 200, dashOffset = dashLen, speed = 18,
    txt = "tiny shirt co.", x = (window.innerWidth / 2) - 200, i = 0;


canvas.width = window.innerWidth;
ctx.font = "80px Indie Flower, sans-serif"; 
ctx.lineWidth = 1; ctx.lineJoin = "round"; ctx.globalAlpha = 1;
ctx.strokeStyle = ctx.fillStyle = "#419bf4";

(function loop() {
  ctx.clearRect(x, 0, 60, 150);
  ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
  dashOffset -= speed;                                         // reduce dash length
  ctx.strokeText(txt[i], x, 90);                               // stroke letter

  if (dashOffset > 0) requestAnimationFrame(loop);             // animate
  else {
    // ctx.fillText(txt[i], x, 90);                               // fill final letter
    dashOffset = dashLen;                                      // prep next char
    x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
    ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());         // random y-delta
    ctx.rotate(Math.random() * 0.005);                         // random rotation
    if (i < txt.length) requestAnimationFrame(loop);
  }
})();

// Create a Stripe client
var stripe = Stripe('pk_test_DsyPnuAkrgucqixmAvfPA9hO');

console.log('woah: ', stripe);
// Create an instance of Elements
var elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
// (Note that this demo uses a wider set of styles than the guide below.)
var style = {
  base: {
    color: '#32325d',
    lineHeight: '24px',
    fontFamily: 'Helvetica Neue',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};

// Create an instance of the card Element
var card = elements.create('card', {style: style});

// Add an instance of the card Element into the `card-element` <div>
card.mount('#card-element');

// Handle real-time validation errors from the card Element.
card.addEventListener('change', function(event) {
  const displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});

// Handle form submission
var form = document.getElementById('SubmitOrder');
form.addEventListener('click', function(event) {
  console.log('yay clicked');
  event.preventDefault();

  stripe.createToken(card).then(function(result) {
    if (result.error) {
      // Inform the user if there was an error
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server
      stripeTokenHandler(result.token);
    }
  });
});