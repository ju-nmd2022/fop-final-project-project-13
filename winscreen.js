let x = 100;
let y = 100;
let s = 1;
let img;

function preload() {
  img = loadImage("winscreen.png");
}

function setup() {
  createCanvas(900, 600);
  background(247, 197, 197);
}

function winScreen() {
  scale(0.4);
  image(img, 200, 200);
}

function draw() {
  winScreen(x, y, s * 0.7);
}
