//example of the puzzle, written as an object

let x = 100;
let y = 100;
let s = 1;

function setup() {
  createCanvas(900, 600);
  background(253, 212, 238);
}

//duck-----------------------------------------------------
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

//ice cream-----------------------------------------------------
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

//mushroom-----------------------------------------------------
function Mushroom(x, y, s) {
  this.x = x + 70;
  this.y = y;
  this.s = s;

  this.drawSquare1 = function () {
    push();
    noStroke();
    fill(240, 192, 168);
    square(this.x + 200 * this.s, this.y + 80 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare2 = function () {
    push();
    noStroke();
    fill(255, 30, 30);
    square(this.x + 200 * this.s, this.y + 30 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare3 = function () {
    push();
    noStroke();
    fill(255, 30, 30);
    square(this.x + 250 * this.s, this.y + 30 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare4 = function () {
    push();
    noStroke();
    fill(255, 30, 30);
    square(this.x + 175 * this.s, this.y - 20 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare5 = function () {
    push();
    noStroke();
    fill(255, 255, 255);
    square(this.x + 225 * this.s, this.y - 20 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare6 = function () {
    push();
    noStroke();
    fill(255, 255, 255);
    square(this.x + 150 * this.s, this.y + 30 * this.s, this.s * 50);
    pop();
  };

  this.display = function () {
    this.drawSquare1();
    this.drawSquare2();
    this.drawSquare3();
    this.drawSquare4();
    this.drawSquare5();
    this.drawSquare6();
  };
}

//watermelon-----------------------------------------------------
function Watermelon(x, y, s) {
  this.x = x + 200;
  this.y = y + 260;
  this.s = s;

  this.drawSquare1 = function () {
    push();
    fill(95, 202, 125);
    noStroke();
    square(this.x + 10 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare2 = function () {
    push();
    fill(95, 202, 125);
    noStroke();
    square(this.x + 110 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare3 = function () {
    push();
    fill(40, 167, 75);
    noStroke();
    square(this.x + 60 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare4 = function () {
    push();
    fill(217, 58, 58);
    noStroke();
    square(this.x + 10 * this.s, this.y + 10 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare5 = function () {
    push();
    fill(217, 58, 58);
    noStroke();
    square(this.x + 85 * this.s, this.y - 40 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare6 = function () {
    push();
    fill(217, 58, 58);
    noStroke();
    square(this.x + 110 * this.s, this.y + 10 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare7 = function () {
    push();
    fill(233, 71, 71);
    noStroke();
    square(this.x + 60 * this.s, this.y + 10 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare8 = function () {
    push();
    fill(233, 71, 71);
    noStroke();
    square(this.x + 35 * this.s, this.y - 40 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare9 = function () {
    push();
    fill(233, 71, 71);
    noStroke();
    square(this.x + 60 * this.s, this.y - 90 * this.s, this.s * 50);
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
    this.drawSquare9();
  };
}

//cloud----------------------------------------------------
function Cloud(x, y, s) {
  this.x = x + 400;
  this.y = y;
  this.s = s;

  this.drawSquare1 = function () {
    push();
    fill(213, 231, 231);
    square(this.x + 10 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare2 = function () {
    push();
    fill(223, 242, 242);
    square(this.x + 60 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare3 = function () {
    push();
    fill(181, 209, 209);
    square(this.x + 110 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare4 = function () {
    push();
    fill(181, 209, 209);
    square(this.x + 60 * this.s, this.y - 50 + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare5 = function () {
    push();
    fill(213, 231, 231);
    square(this.x + 110 * this.s, this.y - 50 + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare6 = function () {
    push();
    fill(223, 242, 242);
    square(this.x + 160 * this.s, this.y - 50 + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare7 = function () {
    push();
    fill(181, 209, 209);
    square(this.x + 110 * this.s, this.y - 100 + 60 * this.s, this.s * 50);
    pop();
  };

  this.display = function () {
    noStroke();
    this.drawSquare1();
    this.drawSquare2();
    this.drawSquare3();
    this.drawSquare4();
    this.drawSquare5();
    this.drawSquare6();
    this.drawSquare7();
  };
}

//sushi-----------------------------------------------------
function Sushi(x, y, s) {
  this.x = x;
  this.y = y;
  this.s = s;

  this.drawSquare1 = function () {
    push();
    fill(70, 70, 70);
    square(this.x + 10 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare2 = function () {
    push();
    fill(70, 70, 70);
    square(this.x + 60 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare3 = function () {
    push();
    fill(177, 243, 161);
    square(this.x + 60 * this.s, this.y + 10 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare4 = function () {
    push();
    fill(252, 196, 196);
    square(this.x + 35 * this.s, this.y + 10 * this.s, this.s * 50);
    pop();
  };

  this.drawSquare5 = function () {
    push();
    fill(225, 225, 225);
    square(this.x + 10 * this.s, this.y + 10 * this.s, this.s * 50);
    pop();
  };

  this.display = function () {
    noStroke();
    this.drawSquare1();
    this.drawSquare2();
    this.drawSquare3();
    this.drawSquare4();
    this.drawSquare5();
  };
}

function draw() {
  var myWatermelon = new Watermelon(100, 100, 1);
  var myMushroom = new Mushroom(100, 100, 1);
  var myIceCream = new IceCream(100, 100, 1);
  var duck = new Duck(-200, 170, 1);
  var myCloud = new Cloud(100, 100, 1);
  var mySushi = new Sushi(530, 300, 1);

  duck.display();
  myIceCream.display();
  myMushroom.display();
  myWatermelon.display();
  myCloud.display();
  mySushi.display();
}
