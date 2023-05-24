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
let kirby;

let particles = [];
let moveLeft = false;
let moveRight = false;
let score = 0;
let kirbyX = 400;
let kirbyY = 390;

const particleSize = 70;
let isGameActive = true;

function preload() {
  startScreenImg = loadImage("welcomescreen.png");
  loseScreenImg = loadImage("losescreen.png");
  winScreenImg = loadImage("winscreen.png");
}

function createParticle() {
  const x = Math.random() * width;
  const y = -70; // Setting the initial y position to a negative value
  const v = 0.5 + Math.random() * 5.3; // Adjust the velocity range, wiho
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

  // Wrapping up the particle when it reaches the bottom of the canvas
  if (particle.y > height + 70) {
    particle.y = -70;
  }

  if (checkCollision(particle)) {
    // Particle collided with Kirby
    if (particle.color === "green") {
      score++;
      greenSquaresCollected++;

      if (state === "gameScreen" && greenSquaresCollected === 3) {
        state = "gameScreenTwo";
        resetGame();
      } else if (state === "gameScreenTwo" && greenSquaresCollected === 6) {
        state = "gameScreenThree";
        resetGame();
      } else if (state === "gameScreenThree" && greenSquaresCollected === 10) {
        state = "finished";
      }
    } else if (particle.color === "red") {
      score = score - 1;
      state = "over";
      resetGame();
    }

    particle.y = -70; // Reset the particle's position
  }
}

function resetGame() {
  greenSquaresCollected = 0;
  particles = [];
  isGameActive = true;
  score = 0;

  for (let i = 0; i < 6; i++) {
    const particle = createParticle();
    particles.push(particle);
  }
}

function setup() {
  createCanvas(700, 600);
  background(253, 212, 238);
  kirby = new Kirby(100, 100);

  resetGame();
}

class Kirby {
  constructor(kirbyX, kirbyY) {
    this.kirbyX = kirbyX;
    this.kirbyY = kirbyY;
  }

  draw() {
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
  textFont("Helvetica");
  textSize(38);
  text("Level 1", 310, 40);
  rect(0, 500, 700);
  pop();
  push();
  fill(252, 193, 166);
  textFont("Helvetica");
  textSize(18);
  text("Collect 3 green squares to level up", 222, 74);
  rect(0, 500, 700);
  pop();

  // Displaying the score
  fill(0);
  text("Score: " + score, 15, 35);
  textSize(28);

  // Updating and drawing the particles
  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];
    updateParticle(particle);
    drawParticle(particle);
  }

  // Drawing Kirby
  kirby.draw();

  // Moving Kirby
  if (moveLeft) {
    kirbyX -= 5;
  }
  if (moveRight) {
    kirbyX += 5;
  }

  if (greenSquaresCollected === 3) {
    score = 0;
    state = "gameScreenTwo";
    particles = [];
    for (let i = 0; i < 6; i++) {
      const particle = createParticle();
      particles.push(particle);
    }
    greenSquaresCollected = 0;
  }
}

function gameScreenTwo() {
  background(223, 222, 248);
  push();
  fill(252, 193, 166);
  textFont("Helvetica");
  textSize(38);
  text("Level 2", 310, 40);
  rect(0, 500, 700);
  pop();

  push();
  fill(252, 193, 166);
  textFont("Helvetica");
  textSize(18);
  text("Collect 6 green squares to level up", 222, 74);
  rect(0, 500, 700);
  pop();

  // Displaying the score
  fill(0);
  text("Score: " + score, 15, 35);
  textSize(28);

  // Updating and drawing the particles
  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];
    updateParticle(particle);
    drawParticle(particle);
  }

  // Drawing Kirby
  kirby.draw();

  // Moving Kirby
  if (moveLeft) {
    kirbyX -= 5;
  }
  if (moveRight) {
    kirbyX += 5;
  }

  if (greenSquaresCollected === 6) {
    state = "gameScreenThree";
    particles = [];
    for (let i = 0; i < 10; i++) {
      const particle = createParticle();
      particles.push(particle);
    }
    greenSquaresCollected = 0;
  }
}

function gameScreenThree() {
  background(254, 232, 178);
  push();
  fill(252, 113, 156);
  textFont("Helvetica");
  textSize(38);
  text("Level 3", 310, 40);
  rect(0, 500, 700);
  pop();

  push();
  fill(252, 193, 166);
  textFont("Helvetica");
  textSize(18);
  text("Collect 10 green squares to WIN", 222, 74);
  rect(0, 500, 700);
  pop();

  // Displaying the score
  fill(0);
  text("Score: " + score, 15, 35);
  textSize(28);

  // Updating and drawing the particles
  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];
    updateParticle(particle);
    drawParticle(particle);
  }

  // Drawing Kirby
  kirby.draw();

  // Moving Kirby
  if (moveLeft) {
    kirbyX -= 5;
  }
  if (moveRight) {
    kirbyX += 5;
  }

  if (greenSquaresCollected === 10) {
    state = "finished";
    particles = [];
    for (let i = 0; i < 10; i++) {
      const particle = createParticle();
      particles.push(particle);
    }
    greenSquaresCollected = 0;
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

// Talking bubble for the over and finished game //
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
  if (keyCode === 37) {
    moveLeft = true;
  } else if (keyCode === 39) {
    moveRight = true;
  }
}

function keyReleased() {
  if (keyCode === 37) {
    moveLeft = false;
  } else if (keyCode === 39) {
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
    }
  }
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "gameScreenTwo") {
    gameScreenTwo();
  } else if (state === "gameScreenThree") {
    gameScreenThree();
  } else if (state === "over") {
    overScreen();
    resetGame();
  } else if (state === "finished") {
    finishedScreen();
    resetGame();
  }
}
