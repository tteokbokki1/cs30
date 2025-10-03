//Interactive scene
//Jaden Sung



let snake = [];
let food;
let gridSize = 20;
let cols;
let rows;
let x = 1;
let y = 0;
let gameOver = false;

function setup() {
  createCanvas(400, 400);
  frameRate(5);
  cols = width / gridSize;
  rows = height / gridSize;
  //one in the middle
  snake[0] = { x: Math.floor(cols / 2), y: Math.floor(rows / 2) };
  //s[awms food]
  spawnFood();
}

function draw() {
  background(220);
  if (gameOver) {
    //game over screen
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("Game Over", width / 2, height / 2);
    textSize(20);
    text("Press R to Restart", width / 2, height / 2 + 40);
    return;
  }

  //move the snake
  let head = { x: snake[0].x + x, y: snake[0].y + y };
  //moves the head forwards
  snake.unshift(head);

  //eat food
  if (head.x === food.x && head.y === food.y) {
    spawnFood();
  } else {
    //moves tail back
    snake.pop();
  }

  //wall collision
  if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows) {
    resetGame();
  }

  //self collision
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      resetGame();
    }
  }

  //caretes food
  fill(255, 0, 0);
  rect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

  //makes snake
  fill(0);
  for (let part of snake) {
    rect(part.x * gridSize, part.y * gridSize, gridSize, gridSize);
  }
}

function keyPressed() {
  if (gameOver && key === 'r') {
    restartGame();
    return;
  }

  if (keyCode === UP_ARROW && y !== 1) {
    x = 0;
    y = -1;
  } else if (keyCode === DOWN_ARROW && y !== -1) {
    x = 0;
    y = 1;
  } else if (keyCode === LEFT_ARROW && x !== 1) {
    x = -1;
    y = 0;
  } else if (keyCode === RIGHT_ARROW && x !== -1) {
    x = 1;
    y = 0;
  }
}

function spawnFood() {
  food = {
    x: Math.floor(random(cols)),
    y: Math.floor(random(rows))
  };
}

function resetGame() {
  gameOver = true;
}

function restartGame() {
  snake = [{ x: Math.floor(cols / 2), y: Math.floor(rows / 2) }];
  x = 1;
  y = 0;
  gameOver = false;
  spawnFood();
}
