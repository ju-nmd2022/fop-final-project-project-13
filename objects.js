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

  this.drawDuck1 = function () {
    push();
    noStroke();
    fill(255, 240, 130);
    square(this.x + 300 * this.s, this.y + 30 * this.s, this.s * 50);
    pop();
  };

  this.drawDuck2 = function () {
    push();
    noStroke();
    fill(255, 240, 130);
    square(this.x + 350 * this.s, this.y + 30 * this.s, this.s * 50);
    pop();
  };

  this.drawDuck3 = function () {
    push();
    noStroke();
    fill(255, 240, 130);
    square(this.x + 350 * this.s, this.y - 20 * this.s, this.s * 50);
    pop();
  };

  this.drawDuck4 = function () {
    push();
    noStroke();
    fill(240, 140, 80);
    square(this.x + 400 * this.s, this.y - 20 * this.s, this.s * 50);
    pop();
  };

  this.display = function () {
    this.drawDuck1();
    this.drawDuck2();
    this.drawDuck3();
    this.drawDuck4();
  };
}

//ice cream-----------------------------------------------------
function IceCream(x, y, s) {
  this.x = x;
  this.y = y + 200;
  this.s = s;

  this.drawIceCream1 = function () {
    push();
    noStroke();
    fill(240, 192, 168);
    square(this.x + 10 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawIceCream2 = function () {
    push();
    noStroke();
    fill(240, 192, 168);
    square(this.x + 60 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawIceCream3 = function () {
    push();
    noStroke();
    fill(240, 192, 168);
    square(this.x + 35 * this.s, this.y + 110 * this.s, this.s * 50);
    pop();
  };

  this.drawIceCream4 = function () {
    push();
    noStroke();
    fill(240, 142, 198);
    square(this.x + 35 * this.s, this.y + 10 * this.s, this.s * 50);
    pop();
  };

  this.drawIceCream5 = function () {
    push();
    noStroke();
    fill(240, 142, 198);
    square(this.x - 15 * this.s, this.y + 10 * this.s, this.s * 50);
    pop();
  };

  this.drawIceCream6 = function () {
    push();
    noStroke();
    fill(240, 142, 198);
    square(this.x + 85 * this.s, this.y + 10 * this.s, this.s * 50);
    pop();
  };

  this.drawIceCream7 = function () {
    push();
    noStroke();
    fill(240, 142, 198);
    square(this.x + 60 * this.s, this.y - 40 * this.s, this.s * 50);
    pop();
  };

  this.drawIceCream8 = function () {
    push();
    noStroke();
    fill(240, 142, 198);
    square(this.x + 10 * this.s, this.y - 40 * this.s, this.s * 50);
    pop();
  };

  this.display = function () {
    this.drawIceCream1();
    this.drawIceCream2();
    this.drawIceCream3();
    this.drawIceCream4();
    this.drawIceCream5();
    this.drawIceCream6();
    this.drawIceCream7();
    this.drawIceCream8();
  };
}

//mushroom-----------------------------------------------------
function Mushroom(x, y, s) {
  this.x = x + 70;
  this.y = y;
  this.s = s;

  this.drawMushroom1 = function () {
    push();
    noStroke();
    fill(240, 192, 168);
    square(this.x + 200 * this.s, this.y + 80 * this.s, this.s * 50);
    pop();
  };

  this.drawMushroom2 = function () {
    push();
    noStroke();
    fill(255, 30, 30);
    square(this.x + 200 * this.s, this.y + 30 * this.s, this.s * 50);
    pop();
  };

  this.drawMushroom3 = function () {
    push();
    noStroke();
    fill(255, 30, 30);
    square(this.x + 250 * this.s, this.y + 30 * this.s, this.s * 50);
    pop();
  };

  this.drawMushroom4 = function () {
    push();
    noStroke();
    fill(255, 30, 30);
    square(this.x + 175 * this.s, this.y - 20 * this.s, this.s * 50);
    pop();
  };

  this.drawMushroom5 = function () {
    push();
    noStroke();
    fill(255, 255, 255);
    square(this.x + 225 * this.s, this.y - 20 * this.s, this.s * 50);
    pop();
  };

  this.drawMushroom6 = function () {
    push();
    noStroke();
    fill(255, 255, 255);
    square(this.x + 150 * this.s, this.y + 30 * this.s, this.s * 50);
    pop();
  };

  this.display = function () {
    this.drawMushroom1();
    this.drawMushroom2();
    this.drawMushroom3();
    this.drawMushroom4();
    this.drawMushroom5();
    this.drawMushroom6();
  };
}

//watermelon-----------------------------------------------------
function Watermelon(x, y, s) {
  this.x = x + 200;
  this.y = y + 260;
  this.s = s;

  this.drawWatermelon1 = function () {
    push();
    fill(95, 202, 125);
    noStroke();
    square(this.x + 10 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawWatermelon2 = function () {
    push();
    fill(95, 202, 125);
    noStroke();
    square(this.x + 110 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawWatermelon3 = function () {
    push();
    fill(40, 167, 75);
    noStroke();
    square(this.x + 60 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawWatermelon4 = function () {
    push();
    fill(217, 58, 58);
    noStroke();
    square(this.x + 10 * this.s, this.y + 10 * this.s, this.s * 50);
    pop();
  };

  this.drawWatermelon5 = function () {
    push();
    fill(217, 58, 58);
    noStroke();
    square(this.x + 85 * this.s, this.y - 40 * this.s, this.s * 50);
    pop();
  };

  this.drawWatermelon6 = function () {
    push();
    fill(217, 58, 58);
    noStroke();
    square(this.x + 110 * this.s, this.y + 10 * this.s, this.s * 50);
    pop();
  };

  this.drawWatermelon7 = function () {
    push();
    fill(233, 71, 71);
    noStroke();
    square(this.x + 60 * this.s, this.y + 10 * this.s, this.s * 50);
    pop();
  };

  this.drawWatermelon8 = function () {
    push();
    fill(233, 71, 71);
    noStroke();
    square(this.x + 35 * this.s, this.y - 40 * this.s, this.s * 50);
    pop();
  };

  this.drawWatermelon9 = function () {
    push();
    fill(233, 71, 71);
    noStroke();
    square(this.x + 60 * this.s, this.y - 90 * this.s, this.s * 50);
    pop();
  };

  this.display = function () {
    this.drawWatermelon1();
    this.drawWatermelon2();
    this.drawWatermelon3();
    this.drawWatermelon4();
    this.drawWatermelon5();
    this.drawWatermelon6();
    this.drawWatermelon7();
    this.drawWatermelon8();
    this.drawWatermelon9();
  };
}

//cloud----------------------------------------------------
function Cloud(x, y, s) {
  this.x = x + 400;
  this.y = y;
  this.s = s;

  this.drawCloud1 = function () {
    push();
    fill(213, 231, 231);
    square(this.x + 10 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawCloud2 = function () {
    push();
    fill(223, 242, 242);
    square(this.x + 60 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawCloud3 = function () {
    push();
    fill(181, 209, 209);
    square(this.x + 110 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawCloud4 = function () {
    push();
    fill(181, 209, 209);
    square(this.x + 60 * this.s, this.y - 50 + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawCloud5 = function () {
    push();
    fill(213, 231, 231);
    square(this.x + 110 * this.s, this.y - 50 + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawCloud6 = function () {
    push();
    fill(223, 242, 242);
    square(this.x + 160 * this.s, this.y - 50 + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawCloud7 = function () {
    push();
    fill(181, 209, 209);
    square(this.x + 110 * this.s, this.y - 100 + 60 * this.s, this.s * 50);
    pop();
  };

  this.display = function () {
    noStroke();
    this.drawCloud1();
    this.drawCloud2();
    this.drawCloud3();
    this.drawCloud4();
    this.drawCloud5();
    this.drawCloud6();
    this.drawCloud7();
  };
}

//sushi-----------------------------------------------------
function Sushi(x, y, s) {
  this.x = x;
  this.y = y;
  this.s = s;

  this.drawSushi1 = function () {
    push();
    fill(70, 70, 70);
    square(this.x + 10 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawSushi2 = function () {
    push();
    fill(70, 70, 70);
    square(this.x + 60 * this.s, this.y + 60 * this.s, this.s * 50);
    pop();
  };

  this.drawSushi3 = function () {
    push();
    fill(177, 243, 161);
    square(this.x + 60 * this.s, this.y + 10 * this.s, this.s * 50);
    pop();
  };

  this.drawSushi4 = function () {
    push();
    fill(252, 196, 196);
    square(this.x + 35 * this.s, this.y + 10 * this.s, this.s * 50);
    pop();
  };

  this.drawSushi5 = function () {
    push();
    fill(225, 225, 225);
    square(this.x + 10 * this.s, this.y + 10 * this.s, this.s * 50);
    pop();
  };

  this.display = function () {
    noStroke();
    this.drawSushi1();
    this.drawSushi2();
    this.drawSushi3();
    this.drawSushi4();
    this.drawSushi5();
  };
}

function draw() {
  var myWatermelon = new Watermelon(100, 100, 1);
  var myMushroom = new Mushroom(100, 100, 1);
  var myIceCream = new IceCream(100, 100, 1);
  var myDuck = new Duck(-200, 170, 1);
  var myCloud = new Cloud(100, 100, 1);
  var mySushi = new Sushi(530, 300, 1);

  myDuck.display();
  myIceCream.display();
  myMushroom.display();
  myWatermelon.display();
  myCloud.display();
  mySushi.display();
}
