// The legend of zelda
// Jaden Sung
// 10/31/20205
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
frames = {
  run: []
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function preload(){
  for (let i = 1; i <= totalrun; i++){
    frames.run.push(loadImage('gridg/Link frames/Basic-movement/basic-frame_run_${i}.png'));
  }
}

function draw() {
  background(220);
  image()
  
}
