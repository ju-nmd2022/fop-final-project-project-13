let particles = [];
let x = 100;
let y = 100;
let s = 0.35;
let moveLeft = false;
let moveRight = false;
let score = 0;
let kirbyX = 400;
let characterY = 390;

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
  square(kirbyX + 110 * s, characterY + 300 * s, s * 20);
  square(kirbyX + 130 * s, characterY + 300 * s, s * 20);
  square(kirbyX + 150 * s, characterY + 300 * s, s * 20);
  square(kirbyX + 170 * s, characterY + 300 * s, s * 20);

  square(kirbyX + 230 * s, characterY + 300 * s, s * 20);
  square(kirbyX + 250 * s, characterY + 300 * s, s * 20);
  square(kirbyX + 270 * s, characterY + 300 * s, s * 20);
  square(kirbyX + 290 * s, characterY + 300 * s, s * 20);

  square(kirbyX + 210 * s, characterY + 280 * s, s * 20);
  square(kirbyX + 190 * s, characterY + 280 * s, s * 20);

  //upper part
  square(kirbyX + 170 * s, characterY + 100 * s, s * 20);
  square(kirbyX + 190 * s, characterY + 100 * s, s * 20);
  square(kirbyX + 210 * s, characterY + 100 * s, s * 20);
  square(kirbyX + 230 * s, characterY + 100 * s, s * 20);

  //eyes
  square(kirbyX + 230 * s, characterY + 160 * s, s * 20);
  square(kirbyX + 230 * s, characterY + 180 * s, s * 20);
  square(kirbyX + 230 * s, characterY + 200 * s, s * 20);

  square(kirbyX + 170 * s, characterY + 160 * s, s * 20);
  square(kirbyX + 170 * s, characterY + 180 * s, s * 20);
  square(kirbyX + 170 * s, characterY + 200 * s, s * 20);

  //left side
  square(kirbyX + 90 * s, characterY + 280 * s, s * 20);
  square(kirbyX + 90 * s, characterY + 260 * s, s * 20);
  square(kirbyX + 90 * s, characterY + 240 * s, s * 20);
  square(kirbyX + 110 * s, characterY + 260 * s, s * 20);
  square(kirbyX + 70 * s, characterY + 220 * s, s * 20);
  square(kirbyX + 70 * s, characterY + 200 * s, s * 20);
  square(kirbyX + 90 * s, characterY + 180 * s, s * 20);
  square(kirbyX + 90 * s, characterY + 160 * s, s * 20);
  square(kirbyX + 110 * s, characterY + 140 * s, s * 20);
  square(kirbyX + 130 * s, characterY + 120 * s, s * 20);
  square(kirbyX + 150 * s, characterY + 120 * s, s * 20);

  //right side
  square(kirbyX + 310 * s, characterY + 280 * s, s * 20);
  square(kirbyX + 310 * s, characterY + 260 * s, s * 20);
  square(kirbyX + 310 * s, characterY + 240 * s, s * 20);
  square(kirbyX + 290 * s, characterY + 260 * s, s * 20);
  square(kirbyX + 330 * s, characterY + 220 * s, s * 20);
  square(kirbyX + 330 * s, characterY + 200 * s, s * 20);
  square(kirbyX + 310 * s, characterY + 180 * s, s * 20);
  square(kirbyX + 310 * s, characterY + 160 * s, s * 20);
  square(kirbyX + 290 * s, characterY + 140 * s, s * 20);
  square(kirbyX + 270 * s, characterY + 120 * s, s * 20);
  square(kirbyX + 250 * s, characterY + 120 * s, s * 20);

  //body dark
  push();
  fill(239, 187, 204);
  square(kirbyX + 110 * s, characterY + 240 * s, s * 20);
  square(kirbyX + 130 * s, characterY + 260 * s, s * 20);
  square(kirbyX + 290 * s, characterY + 240 * s, s * 20);
  square(kirbyX + 270 * s, characterY + 260 * s, s * 20);

  square(kirbyX + 150 * s, characterY + 220 * s, s * 20);
  square(kirbyX + 130 * s, characterY + 220 * s, s * 20);

  square(kirbyX + 250 * s, characterY + 220 * s, s * 20);
  square(kirbyX + 270 * s, characterY + 220 * s, s * 20);

  square(kirbyX + 310 * s, characterY + 200 * s, s * 20);
  square(kirbyX + 90 * s, characterY + 200 * s, s * 20);

  square(kirbyX + 110 * s, characterY + 160 * s, s * 20);
  square(kirbyX + 290 * s, characterY + 160 * s, s * 20);

  square(kirbyX + 130 * s, characterY + 140 * s, s * 20);
  square(kirbyX + 270 * s, characterY + 140 * s, s * 20);

  //body light
  push();
  fill(253, 221, 230);
  square(kirbyX + 130 * s, characterY + 240 * s, s * 20);
  square(kirbyX + 150 * s, characterY + 240 * s, s * 20);
  square(kirbyX + 150 * s, characterY + 260 * s, s * 20);
  square(kirbyX + 170 * s, characterY + 260 * s, s * 20);
  square(kirbyX + 170 * s, characterY + 240 * s, s * 20);
  square(kirbyX + 190 * s, characterY + 240 * s, s * 20);
  square(kirbyX + 190 * s, characterY + 260 * s, s * 20);
  square(kirbyX + 210 * s, characterY + 260 * s, s * 20);
  square(kirbyX + 210 * s, characterY + 240 * s, s * 20);
  square(kirbyX + 230 * s, characterY + 240 * s, s * 20);
  square(kirbyX + 230 * s, characterY + 260 * s, s * 20);
  square(kirbyX + 250 * s, characterY + 260 * s, s * 20);
  square(kirbyX + 250 * s, characterY + 240 * s, s * 20);
  square(kirbyX + 270 * s, characterY + 240 * s, s * 20);

  square(kirbyX + 210 * s, characterY + 160 * s, s * 20);
  square(kirbyX + 210 * s, characterY + 180 * s, s * 20);
  square(kirbyX + 210 * s, characterY + 200 * s, s * 20);

  square(kirbyX + 190 * s, characterY + 160 * s, s * 20);
  square(kirbyX + 190 * s, characterY + 180 * s, s * 20);
  square(kirbyX + 190 * s, characterY + 200 * s, s * 20);

  square(kirbyX + 170 * s, characterY + 220 * s, s * 20);
  square(kirbyX + 190 * s, characterY + 220 * s, s * 20);
  square(kirbyX + 210 * s, characterY + 220 * s, s * 20);
  square(kirbyX + 230 * s, characterY + 220 * s, s * 20);

  square(kirbyX + 110 * s, characterY + 220 * s, s * 20);
  square(kirbyX + 90 * s, characterY + 220 * s, s * 20);

  square(kirbyX + 290 * s, characterY + 220 * s, s * 20);
  square(kirbyX + 310 * s, characterY + 220 * s, s * 20);

  square(kirbyX + 290 * s, characterY + 200 * s, s * 20);
  square(kirbyX + 270 * s, characterY + 200 * s, s * 20);
  square(kirbyX + 250 * s, characterY + 200 * s, s * 20);

  square(kirbyX + 290 * s, characterY + 180 * s, s * 20);
  square(kirbyX + 270 * s, characterY + 180 * s, s * 20);
  square(kirbyX + 250 * s, characterY + 180 * s, s * 20);

  square(kirbyX + 110 * s, characterY + 200 * s, s * 20);
  square(kirbyX + 130 * s, characterY + 200 * s, s * 20);
  square(kirbyX + 150 * s, characterY + 200 * s, s * 20);

  square(kirbyX + 110 * s, characterY + 180 * s, s * 20);
  square(kirbyX + 130 * s, characterY + 180 * s, s * 20);
  square(kirbyX + 150 * s, characterY + 180 * s, s * 20);

  square(kirbyX + 130 * s, characterY + 160 * s, s * 20);
  square(kirbyX + 150 * s, characterY + 160 * s, s * 20);

  square(kirbyX + 250 * s, characterY + 160 * s, s * 20);
  square(kirbyX + 270 * s, characterY + 160 * s, s * 20);

  square(kirbyX + 250 * s, characterY + 140 * s, s * 20);
  square(kirbyX + 230 * s, characterY + 140 * s, s * 20);
  square(kirbyX + 210 * s, characterY + 140 * s, s * 20);
  square(kirbyX + 190 * s, characterY + 140 * s, s * 20);
  square(kirbyX + 170 * s, characterY + 140 * s, s * 20);
  square(kirbyX + 150 * s, characterY + 140 * s, s * 20);

  square(kirbyX + 170 * s, characterY + 120 * s, s * 20);
  square(kirbyX + 190 * s, characterY + 120 * s, s * 20);
  square(kirbyX + 210 * s, characterY + 120 * s, s * 20);
  square(kirbyX + 230 * s, characterY + 120 * s, s * 20);

  push();
  fill(255, 40, 90);
  //feet
  square(kirbyX + 110 * s, characterY + 280 * s, s * 20);
  square(kirbyX + 130 * s, characterY + 280 * s, s * 20);
  square(kirbyX + 150 * s, characterY + 280 * s, s * 20);
  square(kirbyX + 170 * s, characterY + 280 * s, s * 20);

  square(kirbyX + 230 * s, characterY + 280 * s, s * 20);
  square(kirbyX + 250 * s, characterY + 280 * s, s * 20);
  square(kirbyX + 270 * s, characterY + 280 * s, s * 20);
  square(kirbyX + 290 * s, characterY + 280 * s, s * 20);

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

function updateParticle(particle) {
  particle.y = particle.y + particle.velocity;

  // Wrap the particle when it reaches the bottom of the canvas
  if (particle.y > height + 70) {
    particle.y = -70;
  }

  if (checkCollision(particle)) {
    // Particle collided with Kirby
    if (particle.shape === "square") {
      score += 1; // Increment the score by 1 for squares
    } else if (particle.shape === "circle") {
      score -= 1; // Decrement the score by 1 for circles
    }
    particle.y = -70; // Reset the particle's position
  }
}

function checkCollision(particle) {
  // Calculate the distance between Kirby and the particle
  const dx = particle.x - kirbyX;
  const dy = particle.y - characterY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Check if the distance is less than the sum of their radii
  if (distance < particleSize / 2) {
    return true; // Collision occurred
  }
  return false; // No collision
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
