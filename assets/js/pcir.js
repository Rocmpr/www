// access the canvas element and its context
var canvas = document.getElementById("footerCanvas");
var context = canvas.getContext("2d");

// add click handler
canvas.onClick = function(e) {
  var pos = getMousePos(canvas, e);     // get position as before
  context.fillStyle = randomColor();    // get the fill color

  // fill a circle
  context.beginPath();                  // now we can draw the circle at click
  context.arc(pos.x, pos.y, 30, 0, 2 * Math.PI); // use pos object directly like this
  context.fill();
  // closePath() not needed here and won't work after fill() has been called anyways
}

function randomColor() {
  var color = [];
  for (var i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(',') + ')';
}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}