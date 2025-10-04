//Interactive scene
//Jaden Sung
//10/2/2025
//A simple version of snake just to fill out the rubric quickly since the project I wanted to do was messed up....
//Caylixx Star for helping me set up the grid and helping me with anything that had to do with the Math things and with the movement that used to go anywhere but now is restricted.
//A BIG THANK YOU TO P5JS REFERENCE WEBSITE AND A SNAKE DEMO THERE, GOD BLESS ITS SOUL.
//and a ty to Krishita for giving me idea
//tbh I wanted a starting point on how to get scroll wheel to work from google and it just gave me the answer so thats how I got event.de;ta



let snake = [];
let food;
let gridSize = 20;
let cols;
let rows;
let x = 1;
let y = 0;
let speed = 30;
let gameOver = false;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(speed);
  cols = width / gridSize;
  rows = height / gridSize;
  //one in the middle
  snake[0] = { x: Math.floor(cols / 2), y: Math.floor(rows / 2) };
  //spawms food
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
//all my keyboard inputs
function keyPressed() {
  if (gameOver && key === 'r') {
    restartGame();
    return;
  }
  //up
  if (keyCode === UP_ARROW && y !== 1) {
    x = 0;
    y = -1;
  //down
  } else if (keyCode === DOWN_ARROW && y !== -1) {
    x = 0;
    y = 1;
  //left
  } else if (keyCode === LEFT_ARROW && x !== 1) {
    x = -1;
    y = 0;
  //right
  } else if (keyCode === RIGHT_ARROW && x !== -1) {
    x = 1;
    y = 0;
  }
}
//randomly set where the food goes
function spawnFood() {
  food = {
    x: Math.floor(random(cols)),
    y: Math.floor(random(rows))
  };
}

//checks if my game is over or not for both the ones underneath
function restartGame() {
  snake = [{ x: Math.floor(cols / 2), y: Math.floor(rows / 2) }];
  x = 1;
  y = 0;
  gameOver = false;
  spawnFood();
}

function resetGame() {
  gameOver = true;
}

function changeFrames(){
  //decrease the number if the wheel scrolls down
   if (event.delta > 0) {
    speed = speed - 1;
  }
  //increase the number if the wheel scrolls up
  if (event.delta < 0) {
    speed = speed + 1;
  }
}