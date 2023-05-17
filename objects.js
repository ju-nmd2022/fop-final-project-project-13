//example of the duck puzzle, written as an object

let x = 100;
let y = 100;
let s = 1;

function setup() {
  createCanvas(700, 600);
}

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

  var duck = new Duck(100, 100, 1);
  duck.display();
}
