// Initialize the game variables
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
var character = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  width: 20,
  height: 20,
  speed: 3.5,
};
var obstacles = [];
var score = 0;
var highScore = localStorage.getItem("highScore") || 0; // Retrieve the high score from localStorage or use 0 if not available
var gameOver = false;
var obstacleSpeed = 1; // Adjust the initial speed of falling squares
var obstacleInterval = 800; // Adjust the interval between the creation of new squares
var elapsedTime = 0; // Track the elapsed time

// Arrow key flags
var leftArrowDown = false;
var rightArrowDown = false;

// Event listeners for character movement
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

function handleKeyDown(event) {
  if (event.key === "ArrowLeft") {
    // Left arrow key
    character.x -= character.speed;
    leftArrowDown = true;
  } else if (event.key === "ArrowRight") {
    // Right arrow key
    character.x += character.speed;
    rightArrowDown = true;
  }
}

function handleKeyUp(event) {
  if (event.key === "ArrowLeft") {
    // Left arrow key
    leftArrowDown = false;
  } else if (event.key === "ArrowRight") {
    // Right arrow key
    rightArrowDown = false;
  }
}

// Function to create obstacles
function createObstacle(color) {
  var obstacleWidth = 40;
  var obstacleHeight = 40;
  var obstacleGap = 20; // Gap between orange and purple obstacles

  var obstacle = {
    x: Math.random() * (canvas.width - obstacleWidth) + obstacleWidth / 2,
    y: 0,
    width: obstacleWidth,
    height: obstacleHeight,
    color: color === "green" ? "orange" : "purple",
  };

  // Adjust the position of the obstacle to avoid overlap with existing obstacles
  var overlapping = true;
  while (overlapping) {
    obstacle.x =
      Math.random() * (canvas.width - obstacleWidth) + obstacleWidth / 2;
    obstacle.y = Math.random() * -canvas.height; // Set a random negative y position for falling obstacles
    overlapping = false;

    // Check for overlap with existing obstacles
    for (var i = 0; i < obstacles.length; i++) {
      var existingObstacle = obstacles[i];
      if (
        obstacle.x + obstacle.width + obstacleGap > existingObstacle.x &&
        obstacle.x - obstacleGap <
          existingObstacle.x + existingObstacle.width &&
        obstacle.y + obstacle.height + obstacleGap > existingObstacle.y &&
        obstacle.y - obstacleGap < existingObstacle.y + existingObstacle.height
      ) {
        // There is an overlap, so set overlapping flag to true
        overlapping = true;
        break;
      }
    }
  }

  obstacles.push(obstacle);
}

// Function to update the game state
function update() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (!gameOver) {
    // Move the character
    if (leftArrowDown) {
      character.x -= character.speed;
    } else if (rightArrowDown) {
      character.x += character.speed;
    }

    // Draw the character
    context.fillStyle = "orange";
    context.fillRect(
      character.x,
      character.y,
      character.width,
      character.height
    );

    // Draw the obstacles
    for (var i = 0; i < obstacles.length; i++) {
      var obstacle = obstacles[i];
      context.fillStyle = obstacle.color;
      context.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

      // Move the obstacles
      obstacle.y += obstacleSpeed;

      // Check for collision with character
      if (
        obstacle.y + obstacle.height >= character.y &&
        obstacle.y <= character.y + character.height &&
        obstacle.x + obstacle.width >= character.x &&
        obstacle.x <= character.x + character.width
      ) {
        if (obstacle.color === "orange") {
          score++;
        } else if (obstacle.color === "purple") {
          gameOver = true;
        }
        obstacles.splice(i, 1);
        i--;
      }

      // Remove obstacles that have gone off the screen or reached the bottom
      if (
        obstacle.y > canvas.height ||
        (obstacle.color === "orange" &&
          obstacle.y + obstacle.height >= canvas.height)
      ) {
        obstacles.splice(i, 1);
        i--;
      }
    }

    // Update the high score if the current score surpasses it
    if (score > highScore) {
      highScore = score;
    }

    // Display the score and high score
    context.fillStyle = "black";
    context.font = "20px Arial";
    context.fillText("Score: " + score, 10, 20);
    context.fillText("High Score: " + highScore, 10, 40);
  } else {
    // Display game over message
    context.fillStyle = "red";
    context.font = "40px Arial";
    context.fillText("Game Over", canvas.width);
  }

  // Request the next frame
  requestAnimationFrame(update);
}

// Function to create obstacles at regular intervals
function createObstaclesInterval() {
  setInterval(function () {
    var color;
    if (Math.random() < 0.6) {
      color = "red"; // 60% chance of red square
    } else {
      color = "green"; // 40% chance of green square
    }
    createObstacle(color);

    // Create an additional obstacle with a higher chance for purple
    if (Math.random() < 0.8) {
      createObstacle("red"); // 80% chance of red square
    } else {
      createObstacle("green"); // 20% chance of green square
    }
  }, 1000);
}

// Start the game
createObstaclesInterval();
update();
