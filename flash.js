function setup() {
  createCanvas(400, 400);
  background(220);
}

function drawFlash() {
  fill(255, 255, 0); // Yellow color for the flash
  noStroke();

  // Top triangle
  triangle(225, 150, 220, 200, 180, 200);
  triangle(50, 0, 0, 25, 50, 50);
  rect(50, 15, 50, 20);

  // Bottom triangle
  triangle(195, 250, 235, 200, 200, 200);
  triangle(-55, 35, 0, -35, 25, 35); // Draw a triangle at the center
  triangle(-35, 35, 0, -35, 35, 35);
}
function draw() {
  drawFlash();
}
