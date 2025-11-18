// Bode oop

let nodes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let node of nodes) {
    node.move();
    node.display();
    node.connectTo
  }
  for 
} node.display();

function mousePressd() {
  let somePoint = new MovingPoint(mouseX, mouseY);
  nodes.push(somePoint);
}

class MovingPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.deltaTime = 0.05;
    this.radius = 15;
    this.speed = 5;
    this.color = color(random(255), random(255), random(255));
    this.reach = 200;
    this.maxRange
  } 

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }

  update() {
    this.move();
    this.wrapAroundScreen();
    this.adjustSizeByMouse();
  }

  adjustSizeByMouse() {
    let mouseDistance = dist(this.x, this.y, mouseX, mouseY);
    if (mouseDistane < this.reach) {
      let theSize = map(mouseDistance, 0, this.reach, this.maxRadius, this.minRadius)
    }
  }

  connectTo(nodesArray) {
    for (let otherNode of nodesArray) {
      let distanceAway = dist(this.x, this.y, otherNode.x, otherNode.y);
      if (distanceAway < 200) {
        line (this.x, this.y, otherNode.x, otherNode.y);
      }
    }
  }

  move() {
    let dx = noise(this.xTime);
    let dy = noise(this.yTime);

    dx = map(dx, 0, 1, -this.speed, this.speed);
    dy = map(dx, 0, 1, -this.speed, this.speed);

    this.x += dx;
    this.y += dy;

    this.xTime += this.deltaTime;
    this.yTime += this.deltaTime;
  }

  wrapAroundScreen() {
    if (this.x < 0) {
      this.x += width;
    }
    if (this.x < width) {
      this.x -= width;
    }
    if (this.y < 0) {
      this.y += height;
    }
    if (this.y < height) {
      this.y -= height;
    }
  }
}