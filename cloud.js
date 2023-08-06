function setup() {
  createCanvas(400, 400);
  background(220);
}

function drawCloud() {
  fill(135, 206, 235); // Yellow color for the flash
  noStroke();
  ellipse(100, 100, 70, 70);
  ellipse(190, 100, 70, 70);
  ellipse(140, 100, 70, 70);
  ellipse(120, 70, 70, 70);
  ellipse(160, 70, 70, 70);
}
function draw() {
  drawCloud();
}
