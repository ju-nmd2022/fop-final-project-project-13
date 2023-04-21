let x = 100;
let y = 100;
let s = 1;

function setup() {
  createCanvas(700, 600);
  background(253, 212, 238);
}

function iceCream(x, y, s) {
  push();
  noStroke();
  fill(240, 192, 168);
  square(x + 10 * s, y + 60 * s, s * 50);
  square(x + 60 * s, y + 60 * s, s * 50);
  square(x + 35 * s, y + 110 * s, s * 50);
  pop();

  push();
  noStroke();
  fill(240, 142, 198);
  square(x + 35 * s, y + 10 * s, s * 50);
  square(x - 15 * s, y + 10 * s, s * 50);
  square(x + 85 * s, y + 10 * s, s * 50);

  square(x + 60 * s, y - 40 * s, s * 50);
  square(x + 10 * s, y - 40 * s, s * 50);
  pop();
}

function mushroom(x, y, s) {
  push();
  noStroke();
  fill(240, 192, 168);
  square(x + 200 * s, y + 80 * s, s * 50);
  pop();
  push();
  noStroke();
  fill(255, 30, 30);
  square(x + 200 * s, y + 30 * s, s * 50);
  square(x + 250 * s, y + 30 * s, s * 50);
  square(x + 175 * s, y - 20 * s, s * 50);
  pop();
  push();
  noStroke();
  fill(255, 255, 255);
  square(x + 225 * s, y - 20 * s, s * 50);
  square(x + 150 * s, y + 30 * s, s * 50);
  pop();
}

function draw() {
  iceCream(x, y, s * 0.7);
  mushroom(x + 50, y, s * 0.7);
}
