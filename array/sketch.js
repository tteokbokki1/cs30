// second array thing to actually fufil the requirements
// Jaden
// idk
//
// Extra for Experts:
// tried to get images to work but I couldnt so I gave up
//thank you to the p5js example for pong, and if you do look on the history of my github I did use ai to see an example of pong to see what it did differently but I removed it afterwards and hope that is okay to do.


//positions
let paddleLeftX = 40;
let paddleLeftY = 300;
let paddleRightX = 560;
let paddleRightY = 300;

let paddleSpeed = 4;
let paddleHeight = 160;
let paddleWidth = 20;
//ball settings can swap later
let ballPosX = 300;
let ballPosY = 300;
let ballSpeedX = 0;
let ballSpeedY = 0;
let ballSize = 20;

 //scoring
let scores = [0, 0];


function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  fill(255);
  noStroke();
  textSize(60);
  textAlign(CENTER);
  noLoop();
}

function draw() {
  background(0);

  //set paddles
  rect(paddleLeftX, paddleLeftY, paddleWidth, paddleHeight);
  rect(paddleRightX, paddleRightY, paddleWidth, paddleHeight);

  square(ballPosX, ballPosY, ballSize);

  //place scores
  text(scores[0], width * 0.25, height * 0.1);  //Player 1 score
  text(scores[1], width * 0.75, height * 0.1);  //Player 2 score

  //Move the ball
  ballPosX += ballSpeedX;
  ballPosY += ballSpeedY;

  //Left paddle
  let leftCollisionLeft = paddleLeftX - paddleWidth / 2 - ballSize / 2;
  let leftCollisionRight = paddleLeftX + paddleWidth / 2 + ballSize / 2;
  let leftCollisionTop = paddleLeftY - paddleHeight / 2 - ballSize / 2;
  let leftCollisionBottom = paddleLeftY + paddleHeight / 2 + ballSize / 2;
  if (
    ballPosX >= leftCollisionLeft &&
    ballPosX <= leftCollisionRight &&
    ballPosY >= leftCollisionTop &&
    ballPosY <= leftCollisionBottom
  ) {
    ballSpeedX = -ballSpeedX;
    ballSpeedY = (ballPosY - paddleLeftY) / 20;
  }

  // Right paddle
  let rightCollisionLeft = paddleRightX - paddleWidth / 2 - ballSize / 2;
  let rightCollisionRight = paddleRightX + paddleWidth / 2 + ballSize / 2;
  let rightCollisionTop = paddleRightY - paddleHeight / 2 - ballSize / 2;
  let rightCollisionBottom = paddleRightY + paddleHeight / 2 + ballSize / 2;

  if (
    ballPosX >= rightCollisionLeft &&
    ballPosX <= rightCollisionRight &&
    ballPosY >= rightCollisionTop &&
    ballPosY <= rightCollisionBottom
  ) {
    ballSpeedX = -ballSpeedX;
    ballSpeedY = (ballPosY - paddleRightY) / 20;
  }

  //Scoring
  if (ballPosX < 0) {
    scores.push(scores.pop() + 1);
    resetBall();
  } else if (ballPosX > width) {
    scores.unshift(scores.shift() + 1);
    resetBall();
  } else if (ballPosY < 0 || ballPosY > height) {
    ballSpeedY = -ballSpeedY;
  }

  //left paddle movement
  let leftMove = 0;
  if (keyIsDown(87)) leftMove -= paddleSpeed; // W
  if (keyIsDown(83)) leftMove += paddleSpeed; // S
  paddleLeftY = constrain(
    paddleLeftY + leftMove,
    paddleHeight / 2,
    height - paddleHeight / 2
  );

  //right paddle movement
  let rightMove = 0;
  if (keyIsDown(UP_ARROW)) rightMove -= paddleSpeed;
  if (keyIsDown(DOWN_ARROW)) rightMove += paddleSpeed;
  paddleRightY = constrain(
    paddleRightY + rightMove,
    paddleHeight / 2,
    height - paddleHeight / 2
  );

  //start text
  if (!isLooping()) {
    text('Click to start', width / 2, height / 2 - 20);
  }
}

//Reset the ball
function resetBall() {
  ballPosX = width / 2;
  ballPosY = height / 2;
  ballSpeedX = random([-4, 4]);
  ballSpeedY = random([-2, 2]);
}

//Start game on click
function mousePressed() {
  if (!isLooping()) {
    resetBall();
    loop();
  }
}
