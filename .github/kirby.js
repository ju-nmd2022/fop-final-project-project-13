let x = 100;
let y = 100;
let s = 1;

function setup() {
  createCanvas(700, 600);
  background(23, 242, 248);
}

function kirby() {
  noStroke();
  push();
  fill(0, 0, 0);
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

function draw() {
  kirby(x, y, s * 0.7);
}
