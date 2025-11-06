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



let cols;
let rows;
let levelToLoad;
let lines;

function preload() {
  //load level data
  levelToLoad = "levels/0.txt";
  lines = loadStrings(levelToLoad);

let grid = [

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

function preload() {
  //load level data
  levelToLoad = "levels/0.txt";
  lines = loadStrings(levelToLoad);

  //load background
  levelBackground = loadImage("images/level_background.png");

  //load tile images
  platform = loadImage("images/platform.png");
  coin = loadImage("images/coin.png");
  exclamationBox = loadImage("images/boxItem.png");
  fly = loadImage("images/flyFly1.png");
  p1 = loadImage("images/p1_front.png");
  slime = loadImage("images/slimeWalk1.png");
  empty = loadImage("images/empty.png");
}

function map119() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
    }
  }
}