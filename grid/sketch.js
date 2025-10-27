// Grid demo

let map = [[1,0,1,0],
           [0,0,1,1],
           [1,1,,0,0],
           [0,1,0,1]];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  showMap();
}

function showMap() {
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      square(x * 30, y * 30, 30);
    }
  }
}