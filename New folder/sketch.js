let time = 2000;
let lastSwitch = 0;
let isPink = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  theChange();
  switchBackground();
}


function switchBackground(){
  if (isPink){
    background('pink')
  }
  else {
    background('black')
  }
}

function theChange(){
  if (millis() > lastSwitch + time)
    isPink = !isPink;
    lastSwitch = millis();
}