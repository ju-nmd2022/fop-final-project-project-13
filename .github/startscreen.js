let x = 100;
let y = 100;
let s = 1;

function setup() {
  createCanvas(700, 600);
  background(213, 212, 238);
}

function startScreen() {
  stroke(195, 177, 225);
  strokeWeight(2);
  square(x + 110 * s, y + 30 * s, s * 200);
}

function draw() {
  startScreen(x, y, s * 0.7);
}
