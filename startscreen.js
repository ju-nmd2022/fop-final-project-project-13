let x = 100;
let y = 100;
let s = 1;
let img;

function preload() {
  img = loadImage("welcomescreen.png");
}

function setup() {
  createCanvas(900, 600);
  background(213, 212, 238);
}

function draw() {
  background(213, 212, 238);
  scale(0.4);
  image(img, 200, 200);
}
