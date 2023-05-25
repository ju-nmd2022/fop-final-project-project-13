import Kirby from "./kirby.js";

let x = 100;
let y = 100;
let s = 0.35;
let state = "start";
let startScreenImg;
let loseScreenImg;
let winScreenImg;
let greenSquaresCollected = 0;
let kirby;
let level = 0;
let goal = 0;
let particles = []; // Array to store falling geometrics
let score = 0;
let kirbyX = 400;
let kirbyY = 390;
let backgroundImage; // Array to store background images, contains references

const particleSize = 70;
let isGameActive = true;

// Loading our images
function preload() {
  startScreenImg = loadImage("welcomescreen.png");
  loseScreenImg = loadImage("losescreen.png");
  winScreenImg = loadImage("winscreen.png");
  backgroundImage = [
    loadImage("kirbybackground.jpg"),
    loadImage("kirbybackground.jpg"),
    loadImage("forestbackground.jpg"),
    loadImage("balloonbackground.jpg"),
  ];
}

// Creation of the falling geometrics
function createSquare() {
  const x = Math.random() * width;
  const y = -70; // Setting the initial y position to a negative value
  const v = level + Math.random() * 5.3; // Adjust the velocity range, wiho
  const shape = "square";
  const color = shape === "square" ? "green" : "red";
  return { x: x, y: y, velocity: v, shape: shape, color: color }; // Creation of particle objects
}

function createCircle() {
  const x = Math.random() * width;
  const y = -70; // Setting the initial y position to a negative value
  const v = level + Math.random() * 5.3; // Adjust the velocity range, wiho
  const shape = "circle";
  const color = shape === "square" ? "green" : "red";
  return { x: x, y: y, velocity: v, shape: shape, color: color };
}

// Drawing and updating the geometrics
function drawParticle(particle) {
  push();
  translate(particle.x, particle.y);
  noStroke();

  if (particle.shape === "square") {
    fill(190, 255, 180);
    rectMode(CENTER);
    rect(0, 0, 70, 70);
  } else if (particle.shape === "circle") {
    fill(240, 100, 120);
    ellipse(0, 0, 70, 70);
  }
  pop();
}

function updateParticle(particle) {
  particle.y = particle.y + particle.velocity;

  // Wrapping up the particle when it reaches the bottom of the canvas
  if (particle.y > height + 70) {
    particle.x = Math.random() * width;
    particle.y = -70;
  }

  if (checkCollision(particle)) {
    // Particle collided with Kirby
    if (particle.color === "green") {
      score++;
      greenSquaresCollected++;
    } else if (particle.color === "red") {
      state = "over";
      resetGame();
    }
    particle.x = Math.random() * width; // Making them appear on different x positions over again
    particle.y = -70; // Reset the particle's position
  }
}

// Resetting the game
function resetGame() {
  greenSquaresCollected = 0;
  particles = [];
  isGameActive = true;
  score = 0;
  level = 0;
}

function setup() {
  createCanvas(700, 600);
  background(253, 212, 238);
  kirby = new Kirby(kirbyX, kirbyY);

  resetGame();
}

// Citation: We used chatGPT to help us detect why our first collusion function did not work, and got help to get the values right
// Checking if there are any collusion between kirby and the particles (geometrics)
function checkCollision(particle) {
  const kirbyLeft = kirbyX + 110 * s;
  const kirbyRight = kirbyX + 310 * s;
  const kirbyTop = kirbyY + 190 * s;
  const kirbyBottom = kirbyY + 400 * s;

  const particleLeft = particle.x - particleSize / 2;
  const particleRight = particle.x + particleSize / 2;
  const particleTop = particle.y - particleSize / 2;
  const particleBottom = particle.y + particleSize / 2;

  if (
    particleRight < kirbyLeft ||
    particleLeft > kirbyRight ||
    particleBottom < kirbyTop ||
    particleTop > kirbyBottom
  ) {
    return false; // No collision detected
  } else {
    return true; // Collusion detected! Wiho
  }
}

// Our game screen!!! Wihooo
function gameScreen() {
  background(backgroundImage[level]);
  push();
  fill(237, 177, 177);
  textFont("Helvetica");
  textSize(38);
  text("Level " + level.toString(), 310, 40);
  pop();
  push();
  fill(0);
  textFont("Helvetica");
  textSize(18);
  goal = level * 3;
  text("Collect " + goal.toString() + " green squares to level up", 222, 74);
  pop();

  // Displaying the score
  fill(0);
  text("Score: " + score, 15, 35);
  textSize(28);

  // Here we are through each particle in the particles array and updating/drawing them
  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];
    updateParticle(particle);
    drawParticle(particle);
  }

  // Drawing Kirby
  kirby.draw(kirbyX, kirbyY, s);

  // Moving Kirby
  if (keyIsDown(37)) {
    kirbyX -= 5;
  }
  if (keyIsDown(39)) {
    kirbyX += 5;
  }

  // Checking if the goal is reached to level up
  if (greenSquaresCollected === goal) {
    greenSquaresCollected = 0;
    particles = [];
    score = 0;
    level += 1;

    // Got help from teaching assistant to calculate the math in how we could go from gameScreen functions, into one with the help of new level variable, goal variable and math!
    // Pushing new particles into the array based on the level
    for (let i = 0; i < -1 * level + 4; i++) {
      const particle = createSquare();
      particles.push(particle);
    }
    for (let i = 0; i < level; i++) {
      const particle = createCircle();
      particles.push(particle);
    }
    greenSquaresCollected = 0;
    if (level == 4) {
      state = "finished";
    }
  }
}

// Reference used to make this bubble= "Foundations of Programming - Emoji with a speechbubble", by Garrit. //
function button(x, y, s) {
  push();
  beginShape();
  vertex(x + 150 * s, y - 20 * s);
  vertex(x + 50 * s, y - 20 * s);
  bezierVertex(x, y - 20 * s, x, y - 80 * s, x + 50 * s, y - 80 * s);
  vertex(x + 240 * s, y - 80 * s);
  bezierVertex(
    x + 290 * s,
    y - 80 * s,
    x + 290 * s,
    y - 20 * s,
    x + 240 * s,
    y - 20 * s
  );
  vertex(x + 180 * s, y - 20 * s);
  vertex(x + 140 * s, y + 20 * s);
  endShape(CLOSE);
  text("START GAME", x + 80 * s, y - 45 * s);
  pop();
}

// Talking bubble for the game over and finished game //
function buttonAgain(x, y, s) {
  push();
  fill(250, 200, 210);
  beginShape();
  vertex(x + 150 * s, y - 20 * s);
  vertex(x + 50 * s, y - 20 * s);
  bezierVertex(x, y - 20 * s, x, y - 80 * s, x + 50 * s, y - 80 * s);
  vertex(x + 240 * s, y - 80 * s);
  bezierVertex(
    x + 290 * s,
    y - 80 * s,
    x + 290 * s,
    y - 20 * s,
    x + 240 * s,
    y - 20 * s
  );
  vertex(x + 180 * s, y - 20 * s);
  vertex(x + 140 * s, y + 20 * s);
  endShape(CLOSE);
  pop();
  push();
  textFont("Arial");
  textSize(15);
  fill(0, 0, 0);
  text("PLAY AGAIN", x + 60 * s, y - 45 * s);
  pop();
}

function overScreen() {
  image(loseScreenImg, 0, 0, 700, 600);
  push();
  fill(255, 255, 255);
  buttonAgain(x + 200, y + 90, s * 1.6);
  pop();
}

function finishedScreen() {
  image(winScreenImg, 0, 0, 700, 600);
  push();
  fill(255, 255, 255);
  buttonAgain(x + 200, y + 90, s * 1.6);
  pop();
}

function startScreen() {
  background(213, 212, 238);
  image(startScreenImg, 0, 0, 700, 600);
  button(x + 135, y + 25, s * 1.6);
}

// Creating a mouse clicked event to make the two button work
function mouseClicked() {
  if (state === "start") {
    if (
      mouseX > x + 142 &&
      mouseX < x + 145 + 152 &&
      mouseY > y - 26 &&
      mouseY < y + 12 + 5
    ) {
      state = "game";
    }
  } else if (state === "over" || state === "finished") {
    if (
      mouseX > x + 206 &&
      mouseX < x + 206 + 132 &&
      mouseY > y + 55 &&
      mouseY < y + 55 + 23
    ) {
      isGameActive = true;
      state = "game";
    }
  }
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "over") {
    overScreen();
    resetGame();
  } else if (state === "finished") {
    finishedScreen();
    resetGame();
  }
}

window.preload = preload;
window.setup = setup;
window.mouseClicked = mouseClicked;
window.draw = draw;
