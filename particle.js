let particles = [];
let x = 100;
let y = 100;
let s = 1;
let moveLeft = false;
let moveRight = false;
let score = 0;

const particleSize = 70; // Set the size of the particles

function createParticle() {
  const x = Math.random() * width;
  const y = -particleSize; // Set initial y position to a negative value
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
    rect(0, 0, particleSize, particleSize);
  } else if (particle.shape === "circle") {
    fill(240, 100, 120);
    ellipse(0, 0, particleSize, particleSize);
  }

  pop();
}

function updateParticle(particle) {
  particle.y = particle.y + particle.velocity;

  // Wrap the particle when it reaches the bottom of the canvas
  if (particle.y > height + particleSize) {
    particle.y = -particleSize;
  }

  if (checkCollision(particle)) {
    // Particle collided with Kirby
    score++;
    particle.y = -particleSize; // Reset the particle's position
  }
}

function setup() {
  createCanvas(900, 600);
  background(253, 212, 238);

  for (let i = 0; i < 4; i++) {
    const particle = createParticle();
    particles.push(particle);
  }
}
function kirby(x, y, s) {
  noStroke();
  push();
  fill(100, 100, 100);
  //legs
  square(x + 110 * s, y + 300 * s, s * 20);
  square(x + 130 * s, y + 300 * s, s * 20);
  square(x + 150 * s, y + 300 * s, s * 20);
  square(x + 170 * s, y + 300 * s, s * 20);

  square(x + 230 * s, y + 300 * s, s * 20);
  square(x + 250 * s, y + 300 * s, s * 20);
  square(x + 270 * s, y + 300 * s, s * 20);
  square(x + 290 * s, y + 300 * s, s * 20);

  square(x + 210 * s, y + 280 * s, s * 20);
  square(x + 190 * s, y + 280 * s, s * 20);

  //upper part
  square(x + 170 * s, y + 100 * s, s * 20);
  square(x + 190 * s, y + 100 * s, s * 20);
  square(x + 210 * s, y + 100 * s, s * 20);
  square(x + 230 * s, y + 100 * s, s * 20);

  //eyes
  square(x + 230 * s, y + 160 * s, s * 20);
  square(x + 230 * s, y + 180 * s, s * 20);
  square(x + 230 * s, y + 200 * s, s * 20);

  square(x + 170 * s, y + 160 * s, s * 20);
  square(x + 170 * s, y + 180 * s, s * 20);
  square(x + 170 * s, y + 200 * s, s * 20);

  //left side
  square(x + 90 * s, y + 280 * s, s * 20);
  square(x + 90 * s, y + 260 * s, s * 20);
  square(x + 90 * s, y + 240 * s, s * 20);
  square(x + 110 * s, y + 260 * s, s * 20);
  square(x + 70 * s, y + 220 * s, s * 20);
  square(x + 70 * s, y + 200 * s, s * 20);
  square(x + 90 * s, y + 180 * s, s * 20);
  square(x + 90 * s, y + 160 * s, s * 20);
  square(x + 110 * s, y + 140 * s, s * 20);
  square(x + 130 * s, y + 120 * s, s * 20);
  square(x + 150 * s, y + 120 * s, s * 20);

  //right side
  square(x + 310 * s, y + 280 * s, s * 20);
  square(x + 310 * s, y + 260 * s, s * 20);
  square(x + 310 * s, y + 240 * s, s * 20);
  square(x + 290 * s, y + 260 * s, s * 20);
  square(x + 330 * s, y + 220 * s, s * 20);
  square(x + 330 * s, y + 200 * s, s * 20);
  square(x + 310 * s, y + 180 * s, s * 20);
  square(x + 310 * s, y + 160 * s, s * 20);
  square(x + 290 * s, y + 140 * s, s * 20);
  square(x + 270 * s, y + 120 * s, s * 20);
  square(x + 250 * s, y + 120 * s, s * 20);

  //body dark
  push();
  fill(239, 187, 204);
  square(x + 110 * s, y + 240 * s, s * 20);
  square(x + 130 * s, y + 260 * s, s * 20);
  square(x + 290 * s, y + 240 * s, s * 20);
  square(x + 270 * s, y + 260 * s, s * 20);

  square(x + 150 * s, y + 220 * s, s * 20);
  square(x + 130 * s, y + 220 * s, s * 20);

  square(x + 250 * s, y + 220 * s, s * 20);
  square(x + 270 * s, y + 220 * s, s * 20);

  square(x + 310 * s, y + 200 * s, s * 20);
  square(x + 90 * s, y + 200 * s, s * 20);

  square(x + 110 * s, y + 160 * s, s * 20);
  square(x + 290 * s, y + 160 * s, s * 20);

  square(x + 130 * s, y + 140 * s, s * 20);
  square(x + 270 * s, y + 140 * s, s * 20);

  //body light
  push();
  fill(253, 221, 230);
  square(x + 130 * s, y + 240 * s, s * 20);
  square(x + 150 * s, y + 240 * s, s * 20);
  square(x + 150 * s, y + 260 * s, s * 20);
  square(x + 170 * s, y + 260 * s, s * 20);
  square(x + 170 * s, y + 240 * s, s * 20);
  square(x + 190 * s, y + 240 * s, s * 20);
  square(x + 190 * s, y + 260 * s, s * 20);
  square(x + 210 * s, y + 260 * s, s * 20);
  square(x + 210 * s, y + 240 * s, s * 20);
  square(x + 230 * s, y + 240 * s, s * 20);
  square(x + 230 * s, y + 260 * s, s * 20);
  square(x + 250 * s, y + 260 * s, s * 20);
  square(x + 250 * s, y + 240 * s, s * 20);
  square(x + 270 * s, y + 240 * s, s * 20);

  square(x + 210 * s, y + 160 * s, s * 20);
  square(x + 210 * s, y + 180 * s, s * 20);
  square(x + 210 * s, y + 200 * s, s * 20);

  square(x + 190 * s, y + 160 * s, s * 20);
  square(x + 190 * s, y + 180 * s, s * 20);
  square(x + 190 * s, y + 200 * s, s * 20);

  square(x + 170 * s, y + 220 * s, s * 20);
  square(x + 190 * s, y + 220 * s, s * 20);
  square(x + 210 * s, y + 220 * s, s * 20);
  square(x + 230 * s, y + 220 * s, s * 20);

  square(x + 110 * s, y + 220 * s, s * 20);
  square(x + 90 * s, y + 220 * s, s * 20);

  square(x + 290 * s, y + 220 * s, s * 20);
  square(x + 310 * s, y + 220 * s, s * 20);

  square(x + 290 * s, y + 200 * s, s * 20);
  square(x + 270 * s, y + 200 * s, s * 20);
  square(x + 250 * s, y + 200 * s, s * 20);

  square(x + 290 * s, y + 180 * s, s * 20);
  square(x + 270 * s, y + 180 * s, s * 20);
  square(x + 250 * s, y + 180 * s, s * 20);

  square(x + 110 * s, y + 200 * s, s * 20);
  square(x + 130 * s, y + 200 * s, s * 20);
  square(x + 150 * s, y + 200 * s, s * 20);

  square(x + 110 * s, y + 180 * s, s * 20);
  square(x + 130 * s, y + 180 * s, s * 20);
  square(x + 150 * s, y + 180 * s, s * 20);

  square(x + 130 * s, y + 160 * s, s * 20);
  square(x + 150 * s, y + 160 * s, s * 20);

  square(x + 250 * s, y + 160 * s, s * 20);
  square(x + 270 * s, y + 160 * s, s * 20);

  square(x + 250 * s, y + 140 * s, s * 20);
  square(x + 230 * s, y + 140 * s, s * 20);
  square(x + 210 * s, y + 140 * s, s * 20);
  square(x + 190 * s, y + 140 * s, s * 20);
  square(x + 170 * s, y + 140 * s, s * 20);
  square(x + 150 * s, y + 140 * s, s * 20);

  square(x + 170 * s, y + 120 * s, s * 20);
  square(x + 190 * s, y + 120 * s, s * 20);
  square(x + 210 * s, y + 120 * s, s * 20);
  square(x + 230 * s, y + 120 * s, s * 20);

  push();
  fill(255, 40, 90);
  //feet
  square(x + 110 * s, y + 280 * s, s * 20);
  square(x + 130 * s, y + 280 * s, s * 20);
  square(x + 150 * s, y + 280 * s, s * 20);
  square(x + 170 * s, y + 280 * s, s * 20);

  square(x + 230 * s, y + 280 * s, s * 20);
  square(x + 250 * s, y + 280 * s, s * 20);
  square(x + 270 * s, y + 280 * s, s * 20);
  square(x + 290 * s, y + 280 * s, s * 20);

  pop();
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

function moveKirby() {
  if (moveLeft) {
    x -= 5;
  } else if (moveRight) {
    x += 5;
  }
}

function checkCollision(particle) {
  const d = dist(x, y, particle.x, particle.y);

  // Check for collision based on the shapes
  if (particle.shape === "square") {
    if (
      x + 110 * s < particle.x + particleSize / 2 &&
      x + 170 * s > particle.x - particleSize / 2 &&
      y + 240 * s < particle.y + particleSize / 2 &&
      y + 280 * s > particle.y - particleSize / 2
    ) {
      return true;
    }
  } else if (particle.shape === "circle") {
    if (d < (particleSize / 2) * s) {
      return true;
    }
  }

  return false;
}

function updateScore() {
  score += 1;
}

function drawScore() {
  fill(0);
  textSize(20);
  text("Score: " + score, 10, 30);
}

function draw() {
  background(253, 212, 238);
  // Move Kirby based on the key inputs
  moveKirby();
  kirby(x + 500, y + 295, s * 0.3);

  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];

    // Check collision with Kirby
    if (checkCollision(particle)) {
      if (particle.color === "green") {
        score += 1; // Increase the score by 1
      } else if (particle.color === "red") {
        score = 0; // Game over, reset the score to 0
        particles = [];
        setup(); // Reset the game
      }

      // Remove the collided particle and create a new one
      particles.splice(i, 1);
      particles.push(createParticle());

      // Decrement the loop counter to account for the removed particle
      i--;
    }

    // Draw and update the particle
    drawParticle(particle);
    updateParticle(particle);
  }

  // Display the score
  textSize(24);
  fill(255);
  text("Score: " + score, 10, 30);

  // Update Kirby's position
  moveKirby();
}
