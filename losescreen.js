let x = 100;
let y = 100;
let s = 1;
let img;

function preload() {
  img = loadImage("losescreen.png");
}

function setup() {
  createCanvas(900, 600);
  background(241, 210, 195);
}

function startScreen() {
  scale(0.4);
  image(img, 200, 200);
}

function draw() {
  startScreen(x, y, s * 0.7);
}
