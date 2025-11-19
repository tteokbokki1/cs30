// Project Title

let shapes = [];

class Shape {
  constructor(x,y, color) {
    this.x= x;
    this.y = y;
    this.color = color;
  }

  display() {
    fill(this.color);
    noStroke();
  }

  move() {
    this.x += random(-2,2);
    this.y += random(-2,2);
  }
}

class Circle extends Shape {
  constructor(x, y, color, radius) {
    super(x, y, color);
    this.radius = radius;
  }

  display() {
    super.display();
    circle(this.x, this.y, this.radius*2);
  }
}

class Square extends Shape {
  constructor(x, y, color, length, height) {
    super(x, y, color);
    this.length = length;
    this.height = height;
  }

  display() {
    super.display();
    rectMode(CENTER);
    square(this.x, this.y, this.length, this.height);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 20; i++) {
    let choice = random(100);
    if (choice < 50) {
      let aShapre = new Circle(random(width), random(height), theColor, random)
      shapes.push*(aShape);
    }
  }
}

function draw() {
  background(220);

  for (let shape of shapes) {
    shape.move();
    shape.display();
  }
}
