let x = 100;
let y = 100;
let s = 1;
let img;

function preload() {
  img = loadImage(".github/winscreen.png");
}

function setup() {
  createCanvas(900, 600);
  background(247, 197, 197);
}

function winScreen() {
  image(img, 0, 0);
}

function draw() {
  winScreen(x, y, s * 0.7);
}
