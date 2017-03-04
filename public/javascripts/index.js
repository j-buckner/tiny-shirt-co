Stripe.setPublishableKey('pk_test_DsyPnuAkrgucqixmAvfPA9hO');

$('select.dropdown').dropdown();
$('.autumn.leaf')
  .transition('AppWrapper')
;

function handleStartClicked() {
  window.location.href = "/shirts";
  // $('#AppWrapper').transition('fade right');
  // window.history.pushState('checkout', 'Checkout', '/checkout');
  // $('#CheckoutWrapper').fadeIn('slow');
}

$('#CheckoutWrapper').hide();

// var canvas = document.getElementById("canvas1");
// var ctx = canvas.getContext("2d"),
//     dashLen = 200, dashOffset = dashLen, speed = 18,
//     txt = "tiny shirt co.", x = (window.innerWidth / 2) - 225, i = 0;


// canvas.width = window.innerWidth;
// ctx.font = "90px Lato, sans-serif"; 
// ctx.lineWidth = 1; ctx.lineJoin = "round"; ctx.globalAlpha = 1;
// ctx.strokeStyle = ctx.fillStyle = "#419bf4";

// (function loop() {
//   ctx.clearRect(x, 0, 60, 150);
//   ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
//   dashOffset -= speed;                                         // reduce dash length
//   ctx.strokeText(txt[i], x, 90);                               // stroke letter

//   if (dashOffset > 0) requestAnimationFrame(loop);             // animate
//   else {
//     ctx.fillText(txt[i], x, 90);                               // fill final letter
//     dashOffset = dashLen;                                      // prep next char
//     x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
//     ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());         // random y-delta
//     ctx.rotate(Math.random() * 0.005);                         // random rotation
//     if (i < txt.length) requestAnimationFrame(loop);
//   }
// })();

// setTimeout(function (){
//   var canvas = document.getElementById("canvas2");
//   var ctx = canvas.getContext("2d");
//   canvas.width = window.innerWidth;
//   ctx.font = "45px Lato, sans-serif"; 
//   ctx.lineWidth = 1; ctx.lineJoin = "round"; ctx.globalAlpha = 1;
//   ctx.strokeStyle = ctx.fillStyle = "#419bf4";
//       dashLen = 200, dashOffset = dashLen, speed = 25,
//       txt = "tiny things on normal shirts.", x = (window.innerWidth / 2) - 270, i = 0;
//   (function loop() {
//     ctx.clearRect(x, 0, 60, 150);
//     ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
//     dashOffset -= speed;                                         // reduce dash length
//     ctx.strokeText(txt[i], x, 90);                               // stroke letter
//   console.log('here4');
//     if (dashOffset > 0) requestAnimationFrame(loop);             // animate
//     else {
//       ctx.fillText(txt[i], x, 90);                               // fill final letter
//       dashOffset = dashLen;                                      // prep next char
//       x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
//       ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());         // random y-delta
//       ctx.rotate(Math.random() * 0.005);                         // random rotation
//       if (i < txt.length) requestAnimationFrame(loop);
//     }
//   })();
// }, 4000);