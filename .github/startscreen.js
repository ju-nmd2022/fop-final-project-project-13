let x = 100;
let y = 100;
let s = 1;

function preload() {
  emoji = loadImage("github/startphoto.png");
}

function setup() {
  createCanvas(900, 600);
  background(213, 212, 238);
}

function startScreen() {
  push();
  stroke(195, 177, 225);
  strokeWeight(2);
  rect(x + 150 * s, y + 10 * s, 400, 300);

  push();
  stroke(195, 177, 225);
  strokeWeight(2);

  rect(x + 10 * s, y - 40 * s, 300, 200);
  rect(x + 10 * s, y - 40 * s, 300, 20);
  rect(x + 10 * s, y + 140 * s, 300, 20);

  push();
  fill(195, 177, 225);
  ellipse(750, 430, 50, 50);
  ellipse(780, 320, 30, 30);
  ellipse(720, 270, 20, 20);

  pop();
}

function draw() {
  startScreen(x, y, s * 0.7);
}
