var canvas;
let x, y, size;
let xSpeed, ySpeed, xDir, yDir;
let shapeArr = [];

function windowResized() {
  if (windowWidth < 600) {
    resizeCanvas(windowWidth - 20, windowHeight);
  }
}

function setup() {
  canvas = createCanvas(600, 600);
  // canvas.position(0,0);  
  canvas.parent("canvasContainer");
  background(color(255));
  x = width / 2;
  y = height / 2;
  size = 10;
  xSpeed = random(0.3, 5);
  ySpeed = random(0.3, 5);
  xDir = 1;
  yDir = 1;
  for (let i = 0; i < 200; i++) {
    shapeArr.push(new MovingShape(random(0, width), random(0, height), random(1, 40)));
  }
}

function draw() {
  noStroke();
  rectMode(CORNER);
  fill(30, 41, 82, 50);
  rect(0, 0, width, height);
  for (let i = 0; i < 150; i++) {
    shapeArr[i].move();
    shapeArr[i].display();
  }
}

function move() {
  x = x + (xSpeed * xDir);
  y = y + (ySpeed * yDir);
  if (x > (width - size) || x < size) {
    xDir = xDir * -1;
  }
  if (y > (height - size) || y < size) {
    yDir = yDir * -1;
  }
}

function display() {
  stroke(10);
  rectMode(CENTER);
  fill(255);
  rect(x, y, size, size);
}

class MovingShape {

  constructor(startX, startY, startSize) {
    this.x = startX;
    this.y = startY;
    this.size = startSize;
    this.xSpeed = random(0.3, 5);
    this.ySpeed = random(0.3, 5);
    this.xDir = 1;
    this.yDir = 1;
  }

  move() {
    this.x = this.x + (this.xSpeed * this.xDir);
    this.y = this.y + (this.ySpeed * this.yDir);

    if (this.x > (width - (this.size / 2)) || this.x < (this.size / 2)) {
      this.xDir = this.xDir * -1;

    }

    if (this.y > (height - (this.size / 2)) || this.y < (this.size / 2)) {
      this.yDir = this.yDir * -1;

    }
  }

  display() {
    stroke(10);
    rectMode(CENTER);
    fill(139, 0, 0);
    rect(this.x, this.y, this.size, this.size);
  }
}




