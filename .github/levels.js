let x = 100;
let y = 100;
let s = 1;

function setup() {
  createCanvas(900, 600);
  background(253, 212, 238);
}

// function level1() {
//   push();
//   noStroke();
//   fill(255, 245, 230);
//   rect(0, 0, 900, 600);

//   fill(252, 193, 166);
//   rect(0, 490, 900);
//   rect(0, 0, 900, 50);
//   pop();

//   push();
//   textSize(35);
//   fill(255, 245, 230);
//   textFont("Comic Sans MS");
//   text("LEVEL 1", 360, 40);
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

function level5() {
  push();
  noStroke();
  fill(255, 245, 230);
  rect(0, 0, 900, 600);

  fill(255, 130, 180);
  rect(0, 490, 900);
  rect(0, 0, 900, 50);
  pop();

  push();
  textSize(35);
  fill(255, 245, 230);
  textFont("Comic Sans MS");
  text("LEVEL 5", 360, 40);
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

function draw() {
  //   level1();
  //   level3();
  level5();
}