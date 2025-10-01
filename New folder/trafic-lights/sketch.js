// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let lightcolor = "red";
let lastSwitch = 0;
let redDuration = 4000;
let greenDuration = 4000;
let yellowDuration = 2000;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  updatedLight();
  drawOutlineOfLights();
  showCorrectLight();

}

function updatedLight(){
  if ((lightcolor === "red") && millis() > lastSwitch + redDuration){
    lightcolor = "green";
    lastSwitch = millis();
  }
  else if (lightcolor === "green" && millis() > lastSwitch + greenDuration){
    lightcolor = "yellow";
    lastSwitch = millis();
  }
  else if (lightcolor === "yellow" && millis() > lastSwitch + yellowDuration){
    lightcolor = "red";
    lastSwitch = millis();
  }
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function showCorrectLight() {
  if (lightcolor === "red"){
    fill("red");
    ellipse(width/2, height/2 - 65, 50, 50); //top
}
  else if (lightcolor === "yellow"){
    fill("yellow");
    ellipse(width/2, height/2, 50, 50); //middle
}
  else if (lightcolor === "green"){
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
}
}