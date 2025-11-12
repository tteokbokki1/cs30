// Basic OOP demo

class DOG {
  constructor(name) {
    this.age = 0;
    this.name = name;
  }

  bark() {
    console.log(this.name + " says Woof!")
  }
}

let fido = new DOG("Fido");
let dinner = new DOG("Dinner")

function setup() {
  createCanvas(windowWidth, windowHeight);
  fido.bark();
  dinner.bark();
}

function draw() {
  background(220);
}
