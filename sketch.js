function setup() {
createCanvas(windowWidth, windowHeight);
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(31, 120, 255);
  // display()

  noStroke()
  fill(242, 71, 39)
  rect(270, 470, mouseX, 80, 30);
}
