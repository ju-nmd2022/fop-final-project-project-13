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

function duck(x, y, s) {
  push();
  noStroke();
  fill(255, 240, 130);
  square(x + 300 * s, y + 30 * s, s * 50);
  square(x + 350 * s, y + 30 * s, s * 50);
  square(x + 350 * s, y - 20 * s, s * 50);
  pop();
  push();
  noStroke();
  fill(240, 140, 80);
  square(x + 400 * s, y - 20 * s, s * 50);
  pop();
}

function kirby(x, y, s) {
  noStroke();
  push();
  fill(100, 100, 100);
  //legs
  square(x + 110 * s, y + 300 * s, s * 20);
  square(x + 130 * s, y + 300 * s, s * 20);
  square(x + 150 * s, y + 300 * s, s * 20);
  square(x + 170 * s, y + 300 * s, s * 20);

  square(x + 230 * s, y + 300 * s, s * 20);
  square(x + 250 * s, y + 300 * s, s * 20);
  square(x + 270 * s, y + 300 * s, s * 20);
  square(x + 290 * s, y + 300 * s, s * 20);

  square(x + 210 * s, y + 280 * s, s * 20);
  square(x + 190 * s, y + 280 * s, s * 20);

  //upper part
  square(x + 170 * s, y + 100 * s, s * 20);
  square(x + 190 * s, y + 100 * s, s * 20);
  square(x + 210 * s, y + 100 * s, s * 20);
  square(x + 230 * s, y + 100 * s, s * 20);

  //eyes
  square(x + 230 * s, y + 160 * s, s * 20);
  square(x + 230 * s, y + 180 * s, s * 20);
  square(x + 230 * s, y + 200 * s, s * 20);

  square(x + 170 * s, y + 160 * s, s * 20);
  square(x + 170 * s, y + 180 * s, s * 20);
  square(x + 170 * s, y + 200 * s, s * 20);

  //left side
  square(x + 90 * s, y + 280 * s, s * 20);
  square(x + 90 * s, y + 260 * s, s * 20);
  square(x + 90 * s, y + 240 * s, s * 20);
  square(x + 110 * s, y + 260 * s, s * 20);
  square(x + 70 * s, y + 220 * s, s * 20);
  square(x + 70 * s, y + 200 * s, s * 20);
  square(x + 90 * s, y + 180 * s, s * 20);
  square(x + 90 * s, y + 160 * s, s * 20);
  square(x + 110 * s, y + 140 * s, s * 20);
  square(x + 130 * s, y + 120 * s, s * 20);
  square(x + 150 * s, y + 120 * s, s * 20);

  //right side
  square(x + 310 * s, y + 280 * s, s * 20);
  square(x + 310 * s, y + 260 * s, s * 20);
  square(x + 310 * s, y + 240 * s, s * 20);
  square(x + 290 * s, y + 260 * s, s * 20);
  square(x + 330 * s, y + 220 * s, s * 20);
  square(x + 330 * s, y + 200 * s, s * 20);
  square(x + 310 * s, y + 180 * s, s * 20);
  square(x + 310 * s, y + 160 * s, s * 20);
  square(x + 290 * s, y + 140 * s, s * 20);
  square(x + 270 * s, y + 120 * s, s * 20);
  square(x + 250 * s, y + 120 * s, s * 20);

  //body dark
  push();
  fill(239, 187, 204);
  square(x + 110 * s, y + 240 * s, s * 20);
  square(x + 130 * s, y + 260 * s, s * 20);
  square(x + 290 * s, y + 240 * s, s * 20);
  square(x + 270 * s, y + 260 * s, s * 20);

  square(x + 150 * s, y + 220 * s, s * 20);
  square(x + 130 * s, y + 220 * s, s * 20);

  square(x + 250 * s, y + 220 * s, s * 20);
  square(x + 270 * s, y + 220 * s, s * 20);

  square(x + 310 * s, y + 200 * s, s * 20);
  square(x + 90 * s, y + 200 * s, s * 20);

  square(x + 110 * s, y + 160 * s, s * 20);
  square(x + 290 * s, y + 160 * s, s * 20);

  square(x + 130 * s, y + 140 * s, s * 20);
  square(x + 270 * s, y + 140 * s, s * 20);

  //body light
  push();
  fill(253, 221, 230);
  square(x + 130 * s, y + 240 * s, s * 20);
  square(x + 150 * s, y + 240 * s, s * 20);
  square(x + 150 * s, y + 260 * s, s * 20);
  square(x + 170 * s, y + 260 * s, s * 20);
  square(x + 170 * s, y + 240 * s, s * 20);
  square(x + 190 * s, y + 240 * s, s * 20);
  square(x + 190 * s, y + 260 * s, s * 20);
  square(x + 210 * s, y + 260 * s, s * 20);
  square(x + 210 * s, y + 240 * s, s * 20);
  square(x + 230 * s, y + 240 * s, s * 20);
  square(x + 230 * s, y + 260 * s, s * 20);
  square(x + 250 * s, y + 260 * s, s * 20);
  square(x + 250 * s, y + 240 * s, s * 20);
  square(x + 270 * s, y + 240 * s, s * 20);

  square(x + 210 * s, y + 160 * s, s * 20);
  square(x + 210 * s, y + 180 * s, s * 20);
  square(x + 210 * s, y + 200 * s, s * 20);

  square(x + 190 * s, y + 160 * s, s * 20);
  square(x + 190 * s, y + 180 * s, s * 20);
  square(x + 190 * s, y + 200 * s, s * 20);

  square(x + 170 * s, y + 220 * s, s * 20);
  square(x + 190 * s, y + 220 * s, s * 20);
  square(x + 210 * s, y + 220 * s, s * 20);
  square(x + 230 * s, y + 220 * s, s * 20);

  square(x + 110 * s, y + 220 * s, s * 20);
  square(x + 90 * s, y + 220 * s, s * 20);

  square(x + 290 * s, y + 220 * s, s * 20);
  square(x + 310 * s, y + 220 * s, s * 20);

  square(x + 290 * s, y + 200 * s, s * 20);
  square(x + 270 * s, y + 200 * s, s * 20);
  square(x + 250 * s, y + 200 * s, s * 20);

  square(x + 290 * s, y + 180 * s, s * 20);
  square(x + 270 * s, y + 180 * s, s * 20);
  square(x + 250 * s, y + 180 * s, s * 20);

  square(x + 110 * s, y + 200 * s, s * 20);
  square(x + 130 * s, y + 200 * s, s * 20);
  square(x + 150 * s, y + 200 * s, s * 20);

  square(x + 110 * s, y + 180 * s, s * 20);
  square(x + 130 * s, y + 180 * s, s * 20);
  square(x + 150 * s, y + 180 * s, s * 20);

  square(x + 130 * s, y + 160 * s, s * 20);
  square(x + 150 * s, y + 160 * s, s * 20);

  square(x + 250 * s, y + 160 * s, s * 20);
  square(x + 270 * s, y + 160 * s, s * 20);

  square(x + 250 * s, y + 140 * s, s * 20);
  square(x + 230 * s, y + 140 * s, s * 20);
  square(x + 210 * s, y + 140 * s, s * 20);
  square(x + 190 * s, y + 140 * s, s * 20);
  square(x + 170 * s, y + 140 * s, s * 20);
  square(x + 150 * s, y + 140 * s, s * 20);

  square(x + 170 * s, y + 120 * s, s * 20);
  square(x + 190 * s, y + 120 * s, s * 20);
  square(x + 210 * s, y + 120 * s, s * 20);
  square(x + 230 * s, y + 120 * s, s * 20);

  push();
  fill(255, 40, 90);
  //feet
  square(x + 110 * s, y + 280 * s, s * 20);
  square(x + 130 * s, y + 280 * s, s * 20);
  square(x + 150 * s, y + 280 * s, s * 20);
  square(x + 170 * s, y + 280 * s, s * 20);

  square(x + 230 * s, y + 280 * s, s * 20);
  square(x + 250 * s, y + 280 * s, s * 20);
  square(x + 270 * s, y + 280 * s, s * 20);
  square(x + 290 * s, y + 280 * s, s * 20);

  pop();
}

function watermelon(x, y, s) {
  push();
  fill(95, 202, 125);
  square(x + 10 * s, y + 60 * s, s * 50);
  square(x + 110 * s, y + 60 * s, s * 50);

  push();
  fill(40, 167, 75);
  square(x + 60 * s, y + 60 * s, s * 50);

  push();
  fill(217, 58, 58);
  square(x + 10 * s, y + 10 * s, s * 50);
  square(x + 85 * s, y - 40 * s, s * 50);
  square(x + 110 * s, y + 10 * s, s * 50);

  push();
  fill(233, 71, 71);
  square(x + 60 * s, y + 10 * s, s * 50);

  square(x + 35 * s, y - 40 * s, s * 50);
  square(x + 60 * s, y - 90 * s, s * 50);
  pop();
}

function cloud(x, y, s) {
  noStroke();
  push();
  fill(213, 231, 231);
  square(x + 10 * s, y + 60 * s, s * 50);
  push();
  fill(223, 242, 242);
  square(x + 60 * s, y + 60 * s, s * 50);
  push();
  fill(181, 209, 209);
  square(x + 110 * s, y + 60 * s, s * 50);
  push();
  fill(181, 209, 209);
  square(x + 60 * s, y - 35 + 60 * s, s * 50);
  push();
  fill(213, 231, 231);
  square(x + 110 * s, y - 35 + 60 * s, s * 50);
  push();
  fill(223, 242, 242);
  square(x + 160 * s, y - 35 + 60 * s, s * 50);
  push();
  fill(181, 209, 209);
  square(x + 110 * s, y - 70 + 60 * s, s * 50);
}

function sushi(x, y, s) {
  noStroke();
  push();
  fill(70, 70, 70);
  square(x + 10 * s, y + 60 * s, s * 50);
  square(x + 60 * s, y + 60 * s, s * 50);
  push();
  fill(177, 243, 161);
  square(x + 60 * s, y + 10 * s, s * 50);
  push();
  fill(252, 196, 196);
  square(x + 35 * s, y + 10 * s, s * 50);
  push();
  fill(225, 225, 225);
  square(x + 10 * s, y + 10 * s, s * 50);
}

function draw() {
  iceCream(x, y, s * 0.7);
  mushroom(x + 50, y, s * 0.7);
  duck(x + 100, y, s * 0.7);
  kirby(x - 90, y + 100, s * 0.7);
  watermelon(x + 230, y + 230, s * 0.7);
  cloud(x + 370, y + 230, s * 0.7);
  sushi(x + 370, y + 100, s * 0.7);
}
