//Neighbors demo(part of grid demo)

const CELL_SIZE = 50;
let grid;
let rows;
let cols;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  grid = generateRandomGrid(cols, rows);
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed() {
  let j = Math.floor(mouseX/CELL_SIZE);
  let i = Math.floor(mouseY/CELL_SIZE);

  toggleCell(j,i);

  toggleCell(j + 1, i);
  toggleCell(j - 1, i);
  toggleCell(j, i + 1);
  toggleCell(j, i - 1);
}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid(cols, rows);
  }
  else if (key === "e") {
    gird = generateRandomGrid(cols, rows);
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let i = 0; i < rows; i++) {
    newGrid.push([]);
    for (let j = 0; j < cols; j++) {
      if (random(100) < 50) {
        newGrid[i].push(0);
      }
      else {
        newGrid[i].push(1);
      }
    }
  }
  return newGrid;
}

function displayGrid() {
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 0) {
        fill('white');
      }
      else if (grid[i][j] === 1) {
        fill('black');
      }
      square(j * CELL_SIZE, i * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
  }
  return newGrid;
}

function emptyGrid(cols, rows) {
  let newGrid = [];
  for (let i = 0; i < rows; i++) {
    newGrid.push([]);
    for (let j = 0; j < cols; j++) {
      newGrid[i].push(0);
    }
  }
  return newGrid;
}

function toggleCell(j,i) {
  if (grid[i][j] === 0) {
    grid[i][j] === 1;
  }
  else if (grid[i][j] === 1) {
    grid[i][j] === 0;
  }
}