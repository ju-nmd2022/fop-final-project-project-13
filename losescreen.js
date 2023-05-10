let x = 100;
let y = 100;
let s = 1;
let img;

function preload() {
  img = loadImage(".github/losescreen.png");
}

function setup() {
  createCanvas(900, 600);
  background(241, 210, 195);
}

function startScreen() {
  image(img, 0, 0);
}

function draw() {
  startScreen(x, y, s * 0.7);
}
