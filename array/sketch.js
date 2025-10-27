// pong
// Jaden SUng
// lowkey forgot the date
//
// Extra for Experts:
// 


// Set up the canvas using JavaScript
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 600;
canvas.height = 400;

const ctx = canvas.getContext('2d');

// Create the ball
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    dx: 5,
    dy: 5,
};

// Create paddles
const paddleWidth = 10, paddleHeight = 100;
const paddle1 = { x: 0, y: canvas.height / 2 - paddleHeight / 2, width: paddleWidth, height: paddleHeight, dy: 0 };
const paddle2 = { x: canvas.width - paddleWidth, y: canvas.height / 2 - paddleHeight / 2, width: paddleWidth, height: paddleHeight, dy: 0 };

// Score tracking using push/pop
const scores = [0, 0]; // scores[0] = player 1, scores[1] = player 2

// Draw the ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

// Draw paddles
function drawPaddles() {
    ctx.fillStyle = '#0095DD';
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
}

// Draw the score
function drawScore() {
    ctx.fillStyle = '#0095DD';
    ctx.font = '16px Arial';
    ctx.fillText(`Player 1: ${scores[0]} | Player 2: ${scores[1]}`, canvas.width / 2 - 80, 20);
}

// Update ball position
function updateBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Ball collision with top and bottom walls
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
    }

    // Ball collision with paddles
    if (ball.x - ball.radius < paddle1.x + paddle1.width && ball.y > paddle1.y && ball.y < paddle1.y + paddle1.height) {
        ball.dx = -ball.dx;
    }

    if (ball.x + ball.radius > paddle2.x && ball.y > paddle2.y && ball.y < paddle2.y + paddle2.height) {
        ball.dx = -ball.dx;
    }

    // Ball out of bounds (scoring)
    if (ball.x + ball.radius > canvas.width) {
        scores.push(scores.pop() + 1); // Player 1 scores
        resetBall();
    } else if (ball.x - ball.radius < 0) {
        scores.unshift(scores.shift() + 1); // Player 2 scores
        resetBall();
    }
}

// Reset ball to center after scoring
function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = -ball.dx; // Change direction after scoring
    ball.dy = 5 * (Math.random() > 0.5 ? 1 : -1); // Randomize vertical speed
}

// Update paddles position
function updatePaddles() {
    paddle1.y += paddle1.dy;
    paddle2.y += paddle2.dy;

    // Keep paddles within canvas bounds
    if (paddle1.y < 0) paddle1.y = 0;
    if (paddle1.y + paddle1.height > canvas.height) paddle1.y = canvas.height - paddle1.height;
    if (paddle2.y < 0) paddle2.y = 0;
    if (paddle2.y + paddle2.height > canvas.height) paddle2.y = canvas.height - paddle2.height;
}

// Handle keyboard input
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') paddle2.dy = -6; // Move paddle2 up
    if (event.key === 'ArrowDown') paddle2.dy = 6; // Move paddle2 down
    if (event.key === 'w') paddle1.dy = -6; // Move paddle1 up
    if (event.key === 's') paddle1.dy = 6; // Move paddle1 down
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') paddle2.dy = 0; // Stop moving paddle2
    if (event.key === 'w' || event.key === 's') paddle1.dy = 0; // Stop moving paddle1
});

// Main game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    drawBall();
    drawPaddles();
    drawScore();
    updateBall();
    updatePaddles();
    requestAnimationFrame(gameLoop); // Call gameLoop recursively
}

// Start the game
gameLoop();
