let x = 100;
let y = 100;
let s = 1;

function setup() {
  createCanvas(900, 600);
  background(253, 212, 238);
}

function level1() {
  push();
  noStroke();
  fill(255, 245, 230);
  rect(0, 0, 900, 600);

  fill(252, 193, 166);
  rect(0, 490, 900);
  rect(0, 0, 900, 50);
  pop();

  push();
  textSize(35);
  fill(255, 245, 230);
  textFont("Comic Sans MS");
  text("LEVEL 1", 360, 40);
  pop();

  push();
  stroke(170, 170, 170);
  strokeWeight(6);
  square(20, 160, 230, 30);
  pop();

  push();
  noStroke();
  fill(180, 130, 100);
  rect(125, 393, 20, 97);
  pop();
}

// function level3() {
//   push();
//   noStroke();
//   fill(255, 225, 230);
//   rect(0, 0, 900, 600);

//   fill(255, 100, 120);
//   rect(0, 490, 900);
//   rect(0, 0, 900, 50);
//   pop();

//   push();
//   textSize(35);
//   fill(255, 225, 230);
//   textFont("Comic Sans MS");
//   text("LEVEL 3", 360, 40);
//   pop();

//   push();
//   stroke(170, 170, 170);
//   strokeWeight(6);
//   square(20, 160, 230, 30);
//   pop();

//   push();
//   noStroke();
//   fill(180, 130, 100);
//   rect(125, 393, 20, 97);
//   pop();
// }

// function level5() {
//   push();
//   noStroke();
//   fill(255, 245, 230);
//   rect(0, 0, 900, 600);

//   fill(255, 130, 180);
//   rect(0, 490, 900);
//   rect(0, 0, 900, 50);
//   pop();

//   push();
//   textSize(35);
//   fill(255, 245, 230);
//   textFont("Comic Sans MS");
//   text("LEVEL 5", 360, 40);
//   pop();

//   push();
//   stroke(170, 170, 170);
//   strokeWeight(6);
//   square(20, 160, 230, 30);
//   pop();

//   push();
//   noStroke();
//   fill(180, 130, 100);
//   rect(125, 393, 20, 97);
//   pop();
// }

// function level2() {
//   push();
//   noStroke();
//   fill(244, 220, 220);
//   rect(0, 0, 900, 600);

//   fill(129, 129, 129);
//   rect(0, 490, 900);
//   rect(0, 0, 900, 50);
//   pop();

//   push();
//   textSize(35);
//   fill(255, 245, 230);
//   textFont("Comic Sans MS");
//   text("LEVEL 2", 360, 40);
//   pop();

//   push();
//   stroke(170, 170, 170);
//   strokeWeight(6);
//   square(20, 160, 230, 30);
//   pop();

//   push();
//   noStroke();
//   fill(180, 130, 100);
//   rect(125, 393, 20, 97);
//   pop();
// }

// function level4() {
//   push();
//   noStroke();
//   fill(243, 242, 242);
//   rect(0, 0, 900, 600);

//   fill(181, 209, 209);
//   rect(0, 490, 900);
//   rect(0, 0, 900, 50);
//   pop();

//   push();
//   textSize(35);
//   fill(255, 245, 230);
//   textFont("Comic Sans MS");
//   text("LEVEL 4", 360, 40);
//   pop();

//   push();
//   stroke(170, 170, 170);
//   strokeWeight(6);
//   square(20, 160, 230, 30);
//   pop();

//   push();
//   noStroke();
//   fill(180, 130, 100);
//   rect(125, 393, 20, 97);
//   pop();
// }

// function level6() {
//   push();
//   noStroke();
//   fill(249, 168, 168);
//   rect(0, 0, 900, 600);

//   fill(137, 201, 162);
//   rect(0, 490, 900);
//   rect(0, 0, 900, 50);
//   pop();

//   push();
//   textSize(35);
//   fill(255, 245, 230);
//   textFont("Comic Sans MS");
//   text("LEVEL 4", 360, 40);
//   pop();

//   push();
//   stroke(170, 170, 170);
//   strokeWeight(6);
//   square(20, 160, 230, 30);
//   pop();

//   push();
//   noStroke();
//   fill(180, 130, 100);
//   rect(125, 393, 20, 97);
//   pop();
// }

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

function keyPressed() {
  if (keyCode === 37) {
    x -= 5;
  } else if (keyCode === 39) {
    x += 5;
  }
}

function draw() {
  level1();
  kirby(x + 540, y + 295, s * 0.3);
  duck(x - 300, y + 150, s * 0.9);
  //   level3();
  //level5();
  //level2();
  //level4();
  //   level6();
}
