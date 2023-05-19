//help of chat gpt

let shapes = [];
let gravityMin = 0.8; // Minimum gravity value
let gravityMax = 2.0; // Maximum gravity value
let spacing = 100; // Horizontal spacing between shapes

function setup() {
  createCanvas(900, 600);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(-height, 0);
    let size = random(20, 40);
    let shapeType = random() < 0.5 ? "rect" : "ellipse";
    let gravity = random(gravityMin, gravityMax);
    let color = i < 5 ? "black" : "white"; // Set color to black for the first 5 shapes
    shapes.push({ x, y, size, shapeType, gravity, color });
  }
}

function draw() {
  background(220);
  shapes.forEach((shape) => {
    displayShape(shape);
    fallShape(shape);
  });
}

function displayShape(shape) {
  if (shape.shapeType === "rect") {
    fill(shape.color); // Set shape color
    rect(shape.x, shape.y, shape.size, shape.size);
  } else {
    fill(shape.color); // Set shape color
    ellipse(shape.x, shape.y, shape.size, shape.size);
  }
}

function fallShape(shape) {
  shape.y += shape.gravity;
}
