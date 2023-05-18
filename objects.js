//example of the puzzle, written as an object

let x = 100;
let y = 100;
let s = 1;

function setup() {
  createCanvas(900, 600);
}

//duck

function Duck(x, y, s) {
  this.x = x;
  this.y = y - 50;
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

//ice cream

function IceCream(x, y, s) {
  this.x = x;
  this.y = y + 200;
  this.s = s;

  this.drawSquare1 = function () {
    push();
    noStroke();
    fill(240, 192, 168);
    square(this.x + 10 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare2 = function () {
    push();
    noStroke();
    fill(240, 192, 168);
    square(this.x + 60 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare3 = function () {
    push();
    noStroke();
    fill(240, 192, 168);
    square(this.x + 35 * this.s, this.y + 110 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare4 = function () {
    push();
    noStroke();
    fill(240, 142, 198);
    square(this.x + 35 * this.s, this.y + 10 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare5 = function () {
    push();
    noStroke();
    fill(240, 142, 198);
    square(this.x - 15 * this.s, this.y + 10 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare6 = function () {
    push();
    noStroke();
    fill(240, 142, 198);
    square(this.x + 85 * this.s, this.y + 10 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare7 = function () {
    push();
    noStroke();
    fill(240, 142, 198);
    square(this.x + 60 * this.s, this.y - 40 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare8 = function () {
    push();
    noStroke();
    fill(240, 142, 198);
    square(this.x + 10 * this.s, this.y - 40 * this.s, this.s * 50);
    pop();
  };

  this.display = function () {
    this.drawSquare1();
    this.drawSquare2();
    this.drawSquare3();
    this.drawSquare4();
    this.drawSquare5();
    this.drawSquare6();
    this.drawSquare7();
    this.drawSquare8();
  };
}

function draw() {
  background(253, 212, 238);

  var myIceCream = new IceCream(100, 100, 1);

  // Create a Duck object and display it
  var duck = new Duck(-200, 170, 1);

  // Draw individual squares selectively
  duck.drawSquare1();
  duck.drawSquare3();

  // Display the entire duck
  duck.display();
  myIceCream.display();
}
