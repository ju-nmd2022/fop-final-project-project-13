//example of the duck puzzle, written as an object

let x = 100;
let y = 100;
let s = 1;

function setup() {
  createCanvas(700, 600);
}

//version where i draw the duck fully in one function without defining each square

/*
function Duck(x, y, s) {
  this.x = x;
  this.y = y;
  this.s = s;

  this.display = function () {
    push();
    noStroke();
    fill(255, 240, 130);
    square(this.x + 300 * this.s, this.y + 30 * this.s, this.s * 50);
    square(this.x + 350 * this.s, this.y + 30 * this.s, this.s * 50);
    square(this.x + 350 * this.s, this.y - 20 * this.s, this.s * 50);
    pop();

    push();
    noStroke();
    fill(240, 140, 80);
    square(this.x + 400 * this.s, this.y - 20 * this.s, this.s * 50);
    pop();
  };
}

function draw() {
  background(253, 212, 238);

  var duck = new Duck(-50, 200, 1);
  duck.display();
}

*/

//version where i would define each square so that i can control how they are being drawn and when

function Duck(x, y, s) {
  this.x = x;
  this.y = y;
  this.s = s;

  this.drawSquare1 = function () {
    push();
    noStroke();
    fill(255, 240, 130);
    square(this.x + 300 * this.s, this.y + 30 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare2 = function () {
    push();
    noStroke();
    fill(255, 240, 130);
    square(this.x + 350 * this.s, this.y + 30 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare3 = function () {
    push();
    noStroke();
    fill(255, 240, 130);
    square(this.x + 350 * this.s, this.y - 20 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare4 = function () {
    push();
    noStroke();
    fill(240, 140, 80);
    square(this.x + 400 * this.s, this.y - 20 * this.s, this.s * 50);
    pop();
  };

  this.display = function () {
    this.drawSquare1();
    this.drawSquare2();
    this.drawSquare3();
    this.drawSquare4();
  };
}

function draw() {
  background(253, 212, 238);

  // Create a Duck object and display it
  var duck = new Duck(100, 100, 1);

  // Draw individual squares selectively
  duck.drawSquare1();
  duck.drawSquare3();

  // Display the entire duck
  duck.display();
}
