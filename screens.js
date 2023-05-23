let x = 100;
let y = 100;
let s = 0.35;
let rotation = 0;
let state = "start";
let buttonIsClicked = false;
let startScreenImg;
let loseScreenImg;
let winScreenImg;
let greenSquaresCollected = 0;

let particles = [];
let moveLeft = false;
let moveRight = false;
let score = 0;
let kirbyX = 400;
let kirbyY = 390;

const particleSize = 70; // Set the size of the particles

let bobY = 100;
let velocity = 1;
let acceleration = 0.2;
let isGameActive = true;
acceleration = 0.1;

function preload() {
  startScreenImg = loadImage("welcomescreen.png");
  loseScreenImg = loadImage("losescreen.png");
  winScreenImg = loadImage("winscreen.png");
}

function createParticle() {
  const x = Math.random() * width;
  const y = -70; // Set initial y position to a negative value
  const v = 0.5 + Math.random() * 5.3; // Adjust the velocity range
  const shape = Math.random() < 0.5 ? "square" : "circle";
  const color = shape === "square" ? "green" : "red";
  return { x: x, y: y, velocity: v, shape: shape, color: color };
}

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

  // Wrap the particle when it reaches the bottom of the canvas
  if (particle.y > height + 70) {
    particle.y = -70;
  }

  if (checkCollision(particle)) {
    // Particle collided with Kirby
    if (particle.color === "green") {
      score++;
      greenSquaresCollected++;

      if (greenSquaresCollected === 10) {
        state = "finished"; // Change the game state to "finished"
      }
    } else if (particle.color === "red") {
      score = score - 1;
      state = "over"; // Change the game state to "overScreen"
    }

    particle.y = -70; // Reset the particle's position
  }
}

function resetGame() {
  score = 0;
  greenSquaresCollected = 0;
  particles = [];
  isGameActive = true;

  for (let i = 0; i < 4; i++) {
    const particle = createParticle();
    particles.push(particle);
  }
}

function setup() {
  createCanvas(700, 600);
  background(253, 212, 238);

  resetGame();
}

function kirby() {
  noStroke();
  push();
  fill(100, 100, 100);
  //legs
  square(kirbyX + 110 * s, kirbyY + 300 * s, s * 20);
  square(kirbyX + 130 * s, kirbyY + 300 * s, s * 20);
  square(kirbyX + 150 * s, kirbyY + 300 * s, s * 20);
  square(kirbyX + 170 * s, kirbyY + 300 * s, s * 20);

  square(kirbyX + 230 * s, kirbyY + 300 * s, s * 20);
  square(kirbyX + 250 * s, kirbyY + 300 * s, s * 20);
  square(kirbyX + 270 * s, kirbyY + 300 * s, s * 20);
  square(kirbyX + 290 * s, kirbyY + 300 * s, s * 20);

  square(kirbyX + 210 * s, kirbyY + 280 * s, s * 20);
  square(kirbyX + 190 * s, kirbyY + 280 * s, s * 20);

  //upper part
  square(kirbyX + 170 * s, kirbyY + 100 * s, s * 20);
  square(kirbyX + 190 * s, kirbyY + 100 * s, s * 20);
  square(kirbyX + 210 * s, kirbyY + 100 * s, s * 20);
  square(kirbyX + 230 * s, kirbyY + 100 * s, s * 20);

  //eyes
  square(kirbyX + 230 * s, kirbyY + 160 * s, s * 20);
  square(kirbyX + 230 * s, kirbyY + 180 * s, s * 20);
  square(kirbyX + 230 * s, kirbyY + 200 * s, s * 20);

  square(kirbyX + 170 * s, kirbyY + 160 * s, s * 20);
  square(kirbyX + 170 * s, kirbyY + 180 * s, s * 20);
  square(kirbyX + 170 * s, kirbyY + 200 * s, s * 20);

  //left side
  square(kirbyX + 90 * s, kirbyY + 280 * s, s * 20);
  square(kirbyX + 90 * s, kirbyY + 260 * s, s * 20);
  square(kirbyX + 90 * s, kirbyY + 240 * s, s * 20);
  square(kirbyX + 110 * s, kirbyY + 260 * s, s * 20);
  square(kirbyX + 70 * s, kirbyY + 220 * s, s * 20);
  square(kirbyX + 70 * s, kirbyY + 200 * s, s * 20);
  square(kirbyX + 90 * s, kirbyY + 180 * s, s * 20);
  square(kirbyX + 90 * s, kirbyY + 160 * s, s * 20);
  square(kirbyX + 110 * s, kirbyY + 140 * s, s * 20);
  square(kirbyX + 130 * s, kirbyY + 120 * s, s * 20);
  square(kirbyX + 150 * s, kirbyY + 120 * s, s * 20);

  //right side
  square(kirbyX + 310 * s, kirbyY + 280 * s, s * 20);
  square(kirbyX + 310 * s, kirbyY + 260 * s, s * 20);
  square(kirbyX + 310 * s, kirbyY + 240 * s, s * 20);
  square(kirbyX + 290 * s, kirbyY + 260 * s, s * 20);
  square(kirbyX + 330 * s, kirbyY + 220 * s, s * 20);
  square(kirbyX + 330 * s, kirbyY + 200 * s, s * 20);
  square(kirbyX + 310 * s, kirbyY + 180 * s, s * 20);
  square(kirbyX + 310 * s, kirbyY + 160 * s, s * 20);
  square(kirbyX + 290 * s, kirbyY + 140 * s, s * 20);
  square(kirbyX + 270 * s, kirbyY + 120 * s, s * 20);
  square(kirbyX + 250 * s, kirbyY + 120 * s, s * 20);

  //body dark
  push();
  fill(239, 187, 204);
  square(kirbyX + 110 * s, kirbyY + 240 * s, s * 20);
  square(kirbyX + 130 * s, kirbyY + 260 * s, s * 20);
  square(kirbyX + 290 * s, kirbyY + 240 * s, s * 20);
  square(kirbyX + 270 * s, kirbyY + 260 * s, s * 20);

  square(kirbyX + 150 * s, kirbyY + 220 * s, s * 20);
  square(kirbyX + 130 * s, kirbyY + 220 * s, s * 20);

  square(kirbyX + 250 * s, kirbyY + 220 * s, s * 20);
  square(kirbyX + 270 * s, kirbyY + 220 * s, s * 20);

  square(kirbyX + 310 * s, kirbyY + 200 * s, s * 20);
  square(kirbyX + 90 * s, kirbyY + 200 * s, s * 20);

  square(kirbyX + 110 * s, kirbyY + 160 * s, s * 20);
  square(kirbyX + 290 * s, kirbyY + 160 * s, s * 20);

  square(kirbyX + 130 * s, kirbyY + 140 * s, s * 20);
  square(kirbyX + 270 * s, kirbyY + 140 * s, s * 20);

  //body light
  push();
  fill(253, 221, 230);
  square(kirbyX + 130 * s, kirbyY + 240 * s, s * 20);
  square(kirbyX + 150 * s, kirbyY + 240 * s, s * 20);
  square(kirbyX + 150 * s, kirbyY + 260 * s, s * 20);
  square(kirbyX + 170 * s, kirbyY + 260 * s, s * 20);
  square(kirbyX + 170 * s, kirbyY + 240 * s, s * 20);
  square(kirbyX + 190 * s, kirbyY + 240 * s, s * 20);
  square(kirbyX + 190 * s, kirbyY + 260 * s, s * 20);
  square(kirbyX + 210 * s, kirbyY + 260 * s, s * 20);
  square(kirbyX + 210 * s, kirbyY + 240 * s, s * 20);
  square(kirbyX + 230 * s, kirbyY + 240 * s, s * 20);
  square(kirbyX + 230 * s, kirbyY + 260 * s, s * 20);
  square(kirbyX + 250 * s, kirbyY + 260 * s, s * 20);
  square(kirbyX + 250 * s, kirbyY + 240 * s, s * 20);
  square(kirbyX + 270 * s, kirbyY + 240 * s, s * 20);

  square(kirbyX + 210 * s, kirbyY + 160 * s, s * 20);
  square(kirbyX + 210 * s, kirbyY + 180 * s, s * 20);
  square(kirbyX + 210 * s, kirbyY + 200 * s, s * 20);

  square(kirbyX + 190 * s, kirbyY + 160 * s, s * 20);
  square(kirbyX + 190 * s, kirbyY + 180 * s, s * 20);
  square(kirbyX + 190 * s, kirbyY + 200 * s, s * 20);

  square(kirbyX + 170 * s, kirbyY + 220 * s, s * 20);
  square(kirbyX + 190 * s, kirbyY + 220 * s, s * 20);
  square(kirbyX + 210 * s, kirbyY + 220 * s, s * 20);
  square(kirbyX + 230 * s, kirbyY + 220 * s, s * 20);

  square(kirbyX + 110 * s, kirbyY + 220 * s, s * 20);
  square(kirbyX + 90 * s, kirbyY + 220 * s, s * 20);

  square(kirbyX + 290 * s, kirbyY + 220 * s, s * 20);
  square(kirbyX + 310 * s, kirbyY + 220 * s, s * 20);

  square(kirbyX + 290 * s, kirbyY + 200 * s, s * 20);
  square(kirbyX + 270 * s, kirbyY + 200 * s, s * 20);
  square(kirbyX + 250 * s, kirbyY + 200 * s, s * 20);

  square(kirbyX + 290 * s, kirbyY + 180 * s, s * 20);
  square(kirbyX + 270 * s, kirbyY + 180 * s, s * 20);
  square(kirbyX + 250 * s, kirbyY + 180 * s, s * 20);

  square(kirbyX + 110 * s, kirbyY + 200 * s, s * 20);
  square(kirbyX + 130 * s, kirbyY + 200 * s, s * 20);
  square(kirbyX + 150 * s, kirbyY + 200 * s, s * 20);

  square(kirbyX + 110 * s, kirbyY + 180 * s, s * 20);
  square(kirbyX + 130 * s, kirbyY + 180 * s, s * 20);
  square(kirbyX + 150 * s, kirbyY + 180 * s, s * 20);

  square(kirbyX + 130 * s, kirbyY + 160 * s, s * 20);
  square(kirbyX + 150 * s, kirbyY + 160 * s, s * 20);

  square(kirbyX + 250 * s, kirbyY + 160 * s, s * 20);
  square(kirbyX + 270 * s, kirbyY + 160 * s, s * 20);

  square(kirbyX + 250 * s, kirbyY + 140 * s, s * 20);
  square(kirbyX + 230 * s, kirbyY + 140 * s, s * 20);
  square(kirbyX + 210 * s, kirbyY + 140 * s, s * 20);
  square(kirbyX + 190 * s, kirbyY + 140 * s, s * 20);
  square(kirbyX + 170 * s, kirbyY + 140 * s, s * 20);
  square(kirbyX + 150 * s, kirbyY + 140 * s, s * 20);

  square(kirbyX + 170 * s, kirbyY + 120 * s, s * 20);
  square(kirbyX + 190 * s, kirbyY + 120 * s, s * 20);
  square(kirbyX + 210 * s, kirbyY + 120 * s, s * 20);
  square(kirbyX + 230 * s, kirbyY + 120 * s, s * 20);

  push();
  fill(255, 40, 90);
  //feet
  square(kirbyX + 110 * s, kirbyY + 280 * s, s * 20);
  square(kirbyX + 130 * s, kirbyY + 280 * s, s * 20);
  square(kirbyX + 150 * s, kirbyY + 280 * s, s * 20);
  square(kirbyX + 170 * s, kirbyY + 280 * s, s * 20);

  square(kirbyX + 230 * s, kirbyY + 280 * s, s * 20);
  square(kirbyX + 250 * s, kirbyY + 280 * s, s * 20);
  square(kirbyX + 270 * s, kirbyY + 280 * s, s * 20);
  square(kirbyX + 290 * s, kirbyY + 280 * s, s * 20);

  pop();
}

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
    return false;
  } else {
    return true;
  }
}

function gameScreen() {
  background(253, 212, 238);
  push();
  fill(252, 193, 166);
  rect(0, 500, 700);
  pop();

  // Display the score
  textSize(24);
  fill(0);
  textSize(20);
  text("Score: " + score, 10, 30);

  // Update and draw the particles
  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];
    updateParticle(particle);
    drawParticle(particle);
  }

  // Draw Kirby
  kirby();

  // Move Kirby
  if (moveLeft) {
    kirbyX -= 5;
  }
  if (moveRight) {
    kirbyX += 5;
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    moveLeft = true;
  }
  if (keyCode === RIGHT_ARROW) {
    moveRight = true;
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    moveLeft = false;
  }
  if (keyCode === RIGHT_ARROW) {
    moveRight = false;
  }
}

/*Talking bubble*/
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

/*Talking bubble for the over and finished game*/
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
  image(loseScreenImg, 0, 40, 700, 600);
  push();
  fill(255, 255, 255);
  buttonAgain(x + 200, y + 90, s * 1.6);
  pop();
}

function finishedScreen() {
  image(winScreenImg, 0, 40, 700, 600);
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

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    moveLeft = true;
  } else if (keyCode === RIGHT_ARROW) {
    moveRight = true;
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    moveLeft = false;
  } else if (keyCode === RIGHT_ARROW) {
    moveRight = false;
  }
}

function mouseClicked() {
  if (state === "start") {
    if (
      mouseX > x + 142 &&
      mouseX < x + 145 + 152 &&
      mouseY > y - 26 &&
      mouseY < y + 12 + 5
    ) {
      state = "game";
      //gameScreen();
    }
  } else if (state === "over" || state === "finished") {
    if (
      mouseX > x + 206 &&
      mouseX < x + 206 + 132 &&
      mouseY > y + 55 &&
      mouseY < y + 55 + 23
    ) {
      bobY = 100;
      velocity = 1;
      isGameActive = true;
      state = "game";
      //gameScreen();
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
    resetGame(); // Call resetGame function when in "over" state
  } else if (state === "finished") {
    finishedScreen();
    resetGame();
  }
}
