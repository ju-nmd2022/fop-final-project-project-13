let particles = [];
let x = 100;
let y = 100;
let s = 1;
let moveLeft = false;
let moveRight = false;
let score = 0;
let kirbyX = 100;
let kirbyY = 100;

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
    score++;
    particle.y = -70; // Reset the particle's position
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
    kirbyX -= 5; // Decrease Kirby's x position to move it left
  }
  if (moveRight) {
    kirbyX += 5; // Increase Kirby's x position to move it right
  }
}

function checkCollision(particle) {
  const d = dist(x, y, particle.x, particle.y);

  // Check for collision based on the shapes
  if (particle.shape === "square") {
    if (
      x + 110 * s < particle.x + 70 / 2 &&
      x + 170 * s > particle.x - 70 / 2 &&
      y + 240 * s < particle.y + 70 / 2 &&
      y + 280 * s > particle.y - 70 / 2
    ) {
      return true;
    }
  } else if (particle.shape === "circle") {
    if (d < (70 / 2) * s) {
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
