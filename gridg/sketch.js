// The legend of zelda
// Jaden Sung
// 10/31/20205
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// frames = {
//   run: []
// };
// let totalrun = 2;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }
// function preload(){
//   for (let i = 1; i <= totalrun; i++){
//     frames.run.push(loadImage('gridg/Link frames/Basic-movement/basic-frame_run_${i}.png'));
//   }
// }
const ARRAYSIZE = ((windowWidth*0.6)/16);
const 

let grid = [
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 99, 1, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function preload() {
  img = loadImage('World/starting.png');
}
function setup() {
  createCanvas(windowWidth*0.6, windowHeight *0.6);

}

function draw() {
  background(img);
}

function map119() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
    }
  }
}