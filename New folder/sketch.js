//Interactive scene
//Jaden Sung



//let myArray2 = ['black','white', 'black','white', 'black','white', 'black','white']
//let myArray = ['white', 'black'];

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  if (windowHeight > windowWidth) {
    createCanvas(windowWidth, windowWidth);
  }
  else{
    createCanvas(windowWidth, windowHeight);
  }
}

function draw() {
  let squareSize = windowWidth / 8;
  background(220);
  for (let x = 0; x < 8; x ++) {
    for (let y = 0; y < 8; y ++) {
      if ((x + y) % 2 === 0) {
        fill(255);
      } else {
        fill(0);
      }
      rect(x * squareSize,y * squareSize, squareSize, squareSize);
    }
  }
}

