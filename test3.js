let characterX, characterY;
let squareX, squareY;
let circleX, circleY;
let score;
let kirbyX = 400;
let kirbyY = 390;
let s = 2;

function setup() {
  createCanvas(600, 700);
  kirbyX = width / 2;
  characterY = height - 50;
  squareX = random(width);
  squareY = 0;
  circleX = random(width);
  circleY = 0;
  score = 0;
}

function draw() {
  background(253, 212, 238);

  // Move the character
  if (keyIsDown(LEFT_ARROW)) {
    kirbyX -= 5;
  } else if (keyIsDown(RIGHT_ARROW)) {
    kirbyX += 5;
  }

  // Update square and circle positions
  squareY += 3;
  circleY += 3;

  fill(255, 192, 203);
  circle(kirbyX, characterY, 30);

  // Draw the green square
  fill(0, 255, 0);
  square(squareX - 15, squareY - 15, 30);

  // Draw the red circle
  fill(255, 0, 0);
  circle(circleX, circleY, 30);

  // Check if the character collects the square
  if (dist(kirbyX, characterY, squareX, squareY) < 15) {
    score += 1;
    squareX = random(width);
    squareY = 0;
  }

  // Check if the character collects the circle
  if (dist(kirbyX, characterY, circleX, circleY) < 15) {
    score -= 1;
    circleX = random(width);
    circleY = 0;
  }

  // Display the score
  textSize(24);
  fill(0);
  text("Score: " + score, 10, 30);

  // Check if the character goes out of bounds
  if (kirbyX < 15 || kirbyX > width - 15) {
    kirbyX = constrain(kirbyX, 15, width - 15);
  }

  // Check if the square goes out of bounds
  if (squareY > height + 15) {
    squareX = random(width);
    squareY = 0;
  }

  // Check if the circle goes out of bounds
  if (circleY > height + 15) {
    circleX = random(width);
    circleY = 0;
  }
}
