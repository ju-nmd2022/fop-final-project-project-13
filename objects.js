//example of the duck puzzle, written as an object

let x = 100;
let y = 100;
let s = 1;

function setup() {
  createCanvas(900, 600);
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

  this.drawGraySquare1 = function () {
    push();
    noStroke();
    fill(150);
    square(this.x + 740 * this.s, this.y + 30 * this.s, this.s * 50);
    pop();
  };

  this.drawGraySquare2 = function () {
    push();
    noStroke();
    fill(150);
    square(this.x + 600 * this.s, this.y - 20 * this.s, this.s * 50);
    pop();
  };

  this.drawGraySquare3 = function () {
    push();
    noStroke();
    fill(150);
    square(this.x + 850 * this.s, this.y + 2 - 80 * this.s, this.s * 50);
    pop();
  };

  this.display = function () {
    this.drawSquare1();
    this.drawSquare2();
    this.drawSquare3();
    this.drawSquare4();
    this.drawGraySquare1();
    this.drawGraySquare2();
    this.drawGraySquare3();
  };
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(253, 212, 238);

  // Create a Duck object and display it
  var duck = new Duck(-200, 170, 1);

  // Draw individual squares selectively
  duck.drawSquare1();
  duck.drawSquare3();

  // Draw additional gray squares
  duck.drawGraySquare1();
  duck.drawGraySquare2();
  duck.drawGraySquare3();

  // Display the entire duck
  duck.display();
}
