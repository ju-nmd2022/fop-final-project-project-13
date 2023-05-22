// Initialize the game variables
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
var character = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  width: 20,
  height: 20,
  speed: 5,
};
var obstacles = [];
var score = 0;

// Event listener for character movement
document.addEventListener("keydown", moveCharacter);

function moveCharacter(event) {
  if (event.key === "ArrowLeft") {
    // Left arrow key
    character.x -= character.speed;
  } else if (event.key === "ArrowRight") {
    // Right arrow key
    character.x += character.speed;
  }
}

// Function to create obstacles
function createObstacle(color) {
  var obstacle = {
    x: Math.random() * (canvas.width - 40) + 20,
    y: 0,
    width: 20,
    height: 20,
    color: color,
  };
  obstacles.push(obstacle);
}

// Function to update the game state
function update() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the character
  context.fillStyle = "blue";
  context.fillRect(character.x, character.y, character.width, character.height);

  // Draw the obstacles
  for (var i = 0; i < obstacles.length; i++) {
    var obstacle = obstacles[i];
    context.fillStyle = obstacle.color;
    context.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

    // Move the obstacles
    obstacle.y += 2;

    // Check for collision with character
    if (
      obstacle.y + obstacle.height >= character.y &&
      obstacle.y <= character.y + character.height &&
      obstacle.x + obstacle.width >= character.x &&
      obstacle.x <= character.x + character.width
    ) {
      if (obstacle.color === "green") {
        score++;
      } else if (obstacle.color === "red") {
        score--;
      }
      obstacles.splice(i, 1);
      i--;
    }

    // Remove obstacles that have gone off the screen
    if (obstacle.y > canvas.height) {
      obstacles.splice(i, 1);
      i--;
    }
  }

  // Display the score
  context.fillStyle = "black";
  context.font = "20px Arial";
  context.fillText("Score: " + score, 10, 20);

  // Request the next frame
  requestAnimationFrame(update);
}

// Function to create obstacles at regular intervals
function createObstaclesInterval() {
  setInterval(function () {
    var color = Math.random() < 0.5 ? "red" : "green";
    createObstacle(color);
  }, 1000);
}

// Start the game
createObstaclesInterval();
update();
