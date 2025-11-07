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



let cols = 16;
let rows = 11;
let levelToLoad;
let lines;
let tileHeight = 16;
let tileWidth = 16;

// function preload() {
//   //load level data

//   lines = loadStrings(levelToLoad);
// }


// function preload() {
//   img = loadImage('World/starting.png');  
//   levelToLoad = "levels/0.txt";
// }

function setup() {
  // MUST KEEP THIS
  createCanvas(1024, 704);

  tileHeight = lines.length;
  tileWidth = lines[0].length;

  tileWidth = width / tileWidth;
  tileHeight = height / tileHeight;

  tiles = createEmpty2dArray(tileWidth, tileHeight);

  //put values into 2d array of characters
  for (let y = 0; y < tileHeight; y++) {
    for (let x = 0; x < tileWidth; x++) {
      let tileType = lines[y][x];
      tiles[y][x] = tileType;
    }
  }
}

function draw() {
  background(img);
}

function preload() {
  //load level data
  levelToLoad = "gridg/levels/start";
  lines = loadStrings(levelToLoad);

  // //load background
  // levelBackground = loadImage("images/level_background.png");

  //load tile images
  door = loadImage("gridg/tiles/door.png");
  bunch_of_trees = loadImage("gridg/tiles/bunch_tree.png");
  left_slant_tree = loadImage("gridg/tiles/left_slant_tree.png");
  right_slant_tree = loadImage("gridg/tiles/right_slant_tree.png");
  short_tree = loadImage("gridg/tiles/short_tree.png");
  tall_tree = loadImage("gridg/tiles/tall_tree.png");
  ground = loadImage("images/gridg/tiles/ground.png");
}




function showTile(location, x, y) {
  if (location === "d") {
    image(door, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "bt") {
    image(bunch_of_trees, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "lst") {
    image(left_slant_tree, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "rst") {
    image(right_slant_tree, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "st") {
    image(short_tree, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "tt") {
    image(tall_tree, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else {
    image(ground, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
}

function createEmpty2dArray(cols, rows) {
  let randomGrid = [];
  for (let y = 0; y < rows; y++) {
    randomGrid.push([]);
    for (let x = 0; x < cols; x++) {
      randomGrid[y].push(0);
    }
  }
  return randomGrid;
}