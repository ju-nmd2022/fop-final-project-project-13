let particles = [];
let kirby;
let x = 100;
let y = 100;
let s = 0.35;
let moveLeft = false;
let moveRight = false;
let score = 0;
let kirbyX = 400;
let kirbyY = 390;

const particleSize = 70;

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = -particleSize;
    this.velocity = 0.5 + Math.random() * 3.5;
    this.shape = Math.random() < 0.5 ? "square" : "circle";
    this.color = this.shape === "square" ? "green" : "red";
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();

    if (this.shape === "square") {
      fill(190, 255, 180);
      rectMode(CENTER);
      rect(0, 0, particleSize, particleSize);
    } else if (this.shape === "circle") {
      fill(240, 100, 120);
      ellipse(0, 0, particleSize, particleSize);
    }

    pop();
  }

  update() {
    this.y += this.velocity;

    // Wrap the particle when it reaches the bottom of the canvas
    if (this.y > height + particleSize) {
      this.y = -particleSize;
    }

    // Iterate over each particle
    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];

      if (kirby.collidesWith(particle)) {
        // Particle collided with Kirby
        if (particle.color === "green") {
          score++;
        } else if (particle.color === "red") {
          score--;
        }
        particles.splice(i, 1); // Remove the collected particle
      }
    }
  }
}

class Kirby {
  constructor() {
    this.x = 400;
    this.y = 390;
    this.scale = 0.35;
    this.width = 240 * this.scale;
    this.height = 520 * this.scale;
  }

  collidesWith(particle) {
    // Calculate the bounds of Kirby and the particle
    const kirbyLeft = this.x - this.width / 2;
    const kirbyRight = this.x + this.width / 2;
    const kirbyTop = this.y - this.height / 2;
    const kirbyBottom = this.y + this.height / 2;

    const particleLeft = particle.x - particleSize / 2;
    const particleRight = particle.x + particleSize / 2;
    const particleTop = particle.y - particleSize / 2;
    const particleBottom = particle.y + particleSize / 2;

    // Check for collision between Kirby and the particle
    if (
      kirbyLeft < particleRight &&
      kirbyRight > particleLeft &&
      kirbyTop < particleBottom &&
      kirbyBottom > particleTop
    ) {
      return true; // Collided
    }

    return false; // Not collided
  }

  display() {
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

function setup() {
  createCanvas(800, 600);
  kirby = new Kirby();
  for (let i = 0; i < 5; i++) {
    particles.push(new Particle());
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

function draw() {
  background(220);

  // Move Kirby based on the arrow key flags
  if (moveLeft && kirbyX > 0) {
    kirbyX -= 5;
  }
  if (moveRight && kirbyX < width) {
    kirbyX += 5;
  }

  // Update and display particles
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }

  // Display Kirby
  kirby.display();

  // Display score
  fill(0);
  textSize(20);
  text("Score: " + score, 20, 30);
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

function draw() {
  background(253, 212, 238);
  moveKirby();

  for (let i = 0; i < particles.length; i++) {
    particles[i].display();
    particles[i].update();
  }

  // Display Kirby
  kirby.display();

  // Display score
  fill(0);
  textSize(24);
  text(`Score: ${score}`, 10, 30);
}

function checkCollision(particle) {
  // Implement collision detection logic here
  // You can use the built-in functions like collideRectRect(), collideRectCircle(), etc.
  // to check for collision between shapes
}
