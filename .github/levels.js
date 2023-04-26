let x = 100;
let y = 100;
let s = 1;

function setup() {
  createCanvas(900, 600);
  background(253, 212, 238);
}

function scenery() {
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
}

function draw() {
  scenery();
}
