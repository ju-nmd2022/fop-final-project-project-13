let x = 100;
let y = 100;
let s = 1;
let moveLeft = false;
let moveRight = false;
let particles = [];
const particleSize = 70;

function setup() {
  createCanvas(900, 600);
  background(253, 212, 238);
}

function level1() {
  push();
  noStroke();
  fill(255, 245, 230);
  rect(0, 0, 900, 600);

  fill(252, 193, 166);
  rect(0, 490, 900);
  rect(0, 0, 900, 50);
  pop();

  push();
  textSize(35);
  fill(255, 245, 230);
  textFont("Comic Sans MS");
  text("LEVEL 1", 360, 40);
  pop();

  push();
  stroke(170, 170, 170);
  strokeWeight(6);
  square(20, 160, 230, 30);
  pop();

  push();
  noStroke();
  fill(180, 130, 100);
  rect(125, 393, 20, 97);
  pop();
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

function setup() {
  createCanvas(900, 600);

  for (let i = 0; i < 2; i++) {
    const particle = createParticle();
    particles.push(particle);
  }
}

function draw() {
  level1();
  kirby(x + 540, y + 295, s * 0.3);
  duck(x - 300, y + 150, s * 0.9);
  moveKirby();

  for (let particle of particles) {
    drawParticle(particle);
    updateParticle(particle);
  }
}
