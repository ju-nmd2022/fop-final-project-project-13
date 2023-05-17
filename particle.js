let particles = [];

const particleSize = 100; // Set the size of the particles

function createParticle() {
  const x = Math.random() * width;
  const y = -particleSize; // Set initial y position to a negative value
  const v = 0.2 + Math.random();
  const shape = Math.random() < 0.5 ? "square" : "circle";
  const color = shape === "square" ? "green" : "red";
  return { x: x, y: y, velocity: v, shape: shape, color: color };
}

function drawParticle(particle) {
  push();
  translate(particle.x, particle.y);
  noStroke();

  if (particle.shape === "square") {
    fill(particle.color);
    rectMode(CENTER);
    rect(0, 0, particleSize, particleSize);
  } else if (particle.shape === "circle") {
    fill(particle.color);
    ellipse(0, 0, particleSize, particleSize);
  }

  pop();
}

function updateParticle(particle) {
  particle.y = particle.y + particle.velocity;
}

function setup() {
  createCanvas(900, 600);

  const particle = createParticle();
  particles.push(particle);

  setInterval(() => {
    if (particles.length < 2) {
      const particle = createParticle();
      particles.push(particle);
    }
  }, 2000); // Add a new particle every 2 seconds
}

function draw() {
  background(0, 0, 0);
  for (let particle of particles) {
    drawParticle(particle);
    updateParticle(particle);
  }
}
