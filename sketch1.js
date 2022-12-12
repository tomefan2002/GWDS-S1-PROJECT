var canvas1;
let circRotateClock = 0;

function windowResized() {
  if (windowWidth<600) { 
  resizeCanvas(windowWidth-20,windowHeight);
}
}

function setup() {
  canvas1 = createCanvas(600, 600);
  canvas1.parent("canvasContainer1");
  background(color(30,41,82));
  angleMode(DEGREES);
}

function draw() {
  background(30, 41, 82, 70);
  translate(width / 2, height / 2);
  rotate(circRotateClock*1.45);
  circRotateClock++;
  noFill();
  stroke(139, 0, 0);
  strokeWeight(2);
  
  for (let i = 0; i < 100; i++) {
    console.log(i);

    rotate(3.6);
    arc(75, 0, 25, 20, 0, 180);
    arc(75 + 32, 0, 40, 27.5, 180, 0);
    arc(75 + 32 * 2, 0, 25, 20, 0, 180);
    arc(75 + 32 * 3, 0, 40, 27.5, 180, 0);
    ellipse(0,0,381,381);
    ellipse(0,0,125,125);
  }
}
