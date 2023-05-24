let particles = [];
let x = 100;
let y = 100;
let s = 0.35;
let moveLeft = false;
let moveRight = false;
let score = 0;
let kirbyX = 400;
let kirbyY = 390;

const particleSize = 70; // Set the size of the particles

function createParticle() {
  const x = Math.random() * width;
  const y = -70; // Set initial y position to a negative value
  const v = 0.5 + Math.random() * 3.5; // Adjust the velocity range
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
    } else if (particle.color === "red") {
      score = score - 1;
    }
    particle.y = -70; // Reset the particle's position
  }
}

function setup() {
  createCanvas(700, 600);
  background(253, 212, 238);

  for (let i = 0; i < 4; i++) {
    const particle = createParticle();
    particles.push(particle);
  }
}

function kirby() {
  noStroke();
  push();
  fill(100, 100, 100);
  //legs
  square(this.x + 110 * s, kirbyY + 300 * s, s * 20);
  square(this.x + 130 * s, kirbyY + 300 * s, s * 20);
  square(this.x + 150 * s, kirbyY + 300 * s, s * 20);
  square(this.x + 170 * s, kirbyY + 300 * s, s * 20);

  square(this.x + 230 * s, kirbyY + 300 * s, s * 20);
  square(this.x + 250 * s, kirbyY + 300 * s, s * 20);
  square(this.x + 270 * s, kirbyY + 300 * s, s * 20);
  square(this.x + 290 * s, kirbyY + 300 * s, s * 20);

  square(this.x + 210 * s, kirbyY + 280 * s, s * 20);
  square(this.x + 190 * s, kirbyY + 280 * s, s * 20);

  //upper part
  square(this.x + 170 * s, kirbyY + 100 * s, s * 20);
  square(this.x + 190 * s, kirbyY + 100 * s, s * 20);
  square(this.x + 210 * s, kirbyY + 100 * s, s * 20);
  square(this.x + 230 * s, kirbyY + 100 * s, s * 20);

  //eyes
  square(this.x + 230 * s, kirbyY + 160 * s, s * 20);
  square(this.x + 230 * s, kirbyY + 180 * s, s * 20);
  square(this.x + 230 * s, kirbyY + 200 * s, s * 20);

  square(this.x + 170 * s, kirbyY + 160 * s, s * 20);
  square(this.x + 170 * s, kirbyY + 180 * s, s * 20);
  square(this.x + 170 * s, kirbyY + 200 * s, s * 20);

  //left side
  square(this.x + 90 * s, kirbyY + 280 * s, s * 20);
  square(this.x + 90 * s, kirbyY + 260 * s, s * 20);
  square(this.x + 90 * s, kirbyY + 240 * s, s * 20);
  square(this.x + 110 * s, kirbyY + 260 * s, s * 20);
  square(this.x + 70 * s, kirbyY + 220 * s, s * 20);
  square(this.x + 70 * s, kirbyY + 200 * s, s * 20);
  square(this.x + 90 * s, kirbyY + 180 * s, s * 20);
  square(this.x + 90 * s, kirbyY + 160 * s, s * 20);
  square(this.x + 110 * s, kirbyY + 140 * s, s * 20);
  square(this.x + 130 * s, kirbyY + 120 * s, s * 20);
  square(this.x + 150 * s, kirbyY + 120 * s, s * 20);

  //right side
  square(this.x + 310 * s, kirbyY + 280 * s, s * 20);
  square(this.x + 310 * s, kirbyY + 260 * s, s * 20);
  square(this.x + 310 * s, kirbyY + 240 * s, s * 20);
  square(this.x + 290 * s, kirbyY + 260 * s, s * 20);
  square(this.x + 330 * s, kirbyY + 220 * s, s * 20);
  square(this.x + 330 * s, kirbyY + 200 * s, s * 20);
  square(this.x + 310 * s, kirbyY + 180 * s, s * 20);
  square(this.x + 310 * s, kirbyY + 160 * s, s * 20);
  square(this.x + 290 * s, kirbyY + 140 * s, s * 20);
  square(this.x + 270 * s, kirbyY + 120 * s, s * 20);
  square(this.x + 250 * s, kirbyY + 120 * s, s * 20);

  //body dark
  push();
  fill(239, 187, 204);
  square(this.x + 110 * s, kirbyY + 240 * s, s * 20);
  square(this.x + 130 * s, kirbyY + 260 * s, s * 20);
  square(this.x + 290 * s, kirbyY + 240 * s, s * 20);
  square(this.x + 270 * s, kirbyY + 260 * s, s * 20);

  square(this.x + 150 * s, kirbyY + 220 * s, s * 20);
  square(this.x + 130 * s, kirbyY + 220 * s, s * 20);

  square(this.x + 250 * s, kirbyY + 220 * s, s * 20);
  square(this.x + 270 * s, kirbyY + 220 * s, s * 20);

  square(this.x + 310 * s, kirbyY + 200 * s, s * 20);
  square(this.x + 90 * s, kirbyY + 200 * s, s * 20);

  square(this.x + 110 * s, kirbyY + 160 * s, s * 20);
  square(this.x + 290 * s, kirbyY + 160 * s, s * 20);

  square(this.x + 130 * s, kirbyY + 140 * s, s * 20);
  square(this.x + 270 * s, kirbyY + 140 * s, s * 20);

  //body light
  push();
  fill(253, 221, 230);
  square(this.x + 130 * s, kirbyY + 240 * s, s * 20);
  square(this.x + 150 * s, kirbyY + 240 * s, s * 20);
  square(this.x + 150 * s, kirbyY + 260 * s, s * 20);
  square(this.x + 170 * s, kirbyY + 260 * s, s * 20);
  square(this.x + 170 * s, kirbyY + 240 * s, s * 20);
  square(this.x + 190 * s, kirbyY + 240 * s, s * 20);
  square(this.x + 190 * s, kirbyY + 260 * s, s * 20);
  square(this.x + 210 * s, kirbyY + 260 * s, s * 20);
  square(this.x + 210 * s, kirbyY + 240 * s, s * 20);
  square(this.x + 230 * s, kirbyY + 240 * s, s * 20);
  square(this.x + 230 * s, kirbyY + 260 * s, s * 20);
  square(this.x + 250 * s, kirbyY + 260 * s, s * 20);
  square(this.x + 250 * s, kirbyY + 240 * s, s * 20);
  square(this.x + 270 * s, kirbyY + 240 * s, s * 20);

  square(this.x + 210 * s, kirbyY + 160 * s, s * 20);
  square(this.x + 210 * s, kirbyY + 180 * s, s * 20);
  square(this.x + 210 * s, kirbyY + 200 * s, s * 20);

  square(this.x + 190 * s, kirbyY + 160 * s, s * 20);
  square(this.x + 190 * s, kirbyY + 180 * s, s * 20);
  square(this.x + 190 * s, kirbyY + 200 * s, s * 20);

  square(this.x + 170 * s, kirbyY + 220 * s, s * 20);
  square(this.x + 190 * s, kirbyY + 220 * s, s * 20);
  square(this.x + 210 * s, kirbyY + 220 * s, s * 20);
  square(this.x + 230 * s, kirbyY + 220 * s, s * 20);

  square(this.x + 110 * s, kirbyY + 220 * s, s * 20);
  square(this.x + 90 * s, kirbyY + 220 * s, s * 20);

  square(this.x + 290 * s, kirbyY + 220 * s, s * 20);
  square(this.x + 310 * s, kirbyY + 220 * s, s * 20);

  square(this.x + 290 * s, kirbyY + 200 * s, s * 20);
  square(this.x + 270 * s, kirbyY + 200 * s, s * 20);
  square(this.x + 250 * s, kirbyY + 200 * s, s * 20);

  square(this.x + 290 * s, kirbyY + 180 * s, s * 20);
  square(this.x + 270 * s, kirbyY + 180 * s, s * 20);
  square(this.x + 250 * s, kirbyY + 180 * s, s * 20);

  square(this.x + 110 * s, kirbyY + 200 * s, s * 20);
  square(this.x + 130 * s, kirbyY + 200 * s, s * 20);
  square(this.x + 150 * s, kirbyY + 200 * s, s * 20);

  square(this.x + 110 * s, kirbyY + 180 * s, s * 20);
  square(this.x + 130 * s, kirbyY + 180 * s, s * 20);
  square(this.x + 150 * s, kirbyY + 180 * s, s * 20);

  square(this.x + 130 * s, kirbyY + 160 * s, s * 20);
  square(this.x + 150 * s, kirbyY + 160 * s, s * 20);

  square(this.x + 250 * s, kirbyY + 160 * s, s * 20);
  square(this.x + 270 * s, kirbyY + 160 * s, s * 20);

  square(this.x + 250 * s, kirbyY + 140 * s, s * 20);
  square(this.x + 230 * s, kirbyY + 140 * s, s * 20);
  square(this.x + 210 * s, kirbyY + 140 * s, s * 20);
  square(this.x + 190 * s, kirbyY + 140 * s, s * 20);
  square(this.x + 170 * s, kirbyY + 140 * s, s * 20);
  square(this.x + 150 * s, kirbyY + 140 * s, s * 20);

  square(this.x + 170 * s, kirbyY + 120 * s, s * 20);
  square(this.x + 190 * s, kirbyY + 120 * s, s * 20);
  square(this.x + 210 * s, kirbyY + 120 * s, s * 20);
  square(this.x + 230 * s, kirbyY + 120 * s, s * 20);

  push();
  fill(255, 40, 90);
  //feet
  square(this.x + 110 * s, kirbyY + 280 * s, s * 20);
  square(this.x + 130 * s, kirbyY + 280 * s, s * 20);
  square(this.x + 150 * s, kirbyY + 280 * s, s * 20);
  square(this.x + 170 * s, kirbyY + 280 * s, s * 20);

  square(this.x + 230 * s, kirbyY + 280 * s, s * 20);
  square(this.x + 250 * s, kirbyY + 280 * s, s * 20);
  square(this.x + 270 * s, kirbyY + 280 * s, s * 20);
  square(this.x + 290 * s, kirbyY + 280 * s, s * 20);

  pop();
}

function checkCollision(particle) {
  const kirbyLeft = this.x + 110 * s;
  const kirbyRight = this.x + 310 * s;
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
    this.x -= 5;
  }
  if (moveRight) {
    this.x += 5;
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

function draw() {
  gameScreen();
}
