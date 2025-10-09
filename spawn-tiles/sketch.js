// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tileSize = 50;
let theTiles = [];




function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let x = 0; x < width; x += tileSize){
      let someTile = spawnTile(width/2, height/2);
  }

}

function draw() {
  background(220);

  line (someTile.x1, someTile.y1, someTile.x2, someTile.y1);
}

function spawnTile(x,y){
  let choice = random(100);
  let tile;

  if (choice > 50{


  })
}