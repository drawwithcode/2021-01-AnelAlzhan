let tripgoing = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  frameRate(30);
}

function draw() {
  translate(width / 2, height / 2);
  stroke("#FFDCC8");
  rotate(frameCount * 2);

  noFill();

  let angle = sin(frameCount) * 300;
  let rotateV = frameCount * 2;
  let valcount = 100;

  background(0, 20);

  noFill();

  scale(0.7);
  rotate(rotateV);

  push();
  line(0, -height, 0, height);

  stroke("#3307B6");
  scale(angle / 90);
  triangle(-56, 0, -28, -55, 0, 0);
  triangle(0, 30, -28, -25, 28, -25);
  triangle(0, 0, 24, -55, 58, 0);
  triangle(0, 0, 24, 55, 58, 0);
  triangle(-56, 0, -28, 55, 0, 0);
  pop();

  push();
  fill(
    lerpColor(color("#FFDCC8"), color("#3307B6"), frameCount / valcount / 8)
  );
  noStroke();
  rect(0, 0, angle - 150);
  pop();

  push();

  stroke(
    lerpColor(color("#3307B6"), color("#FE5303"), frameCount / valcount / 4)
  );
  noFill();
  strokeWeight(3);
  ellipse(0, 0, angle - 600);
  ellipse(0, 0, angle - 300);
  ellipse(0, 0, angle - 900);

  pop();

  push();
  rectMode(CENTER);
  translate(width / 3, height / 3);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  fill(
    lerpColor(color("#FE5303"), color("#3307B6"), frameCount / valcount / 4)
  );
  noStroke();

  ellipse(0, -0, angle);
  pop();

  push();
  rectMode(CENTER);
  translate(-width / 3, -height / 3);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  fill(
    lerpColor(color("#FE5303"), color("#3307B6"), frameCount / valcount / 4)
  );
  noStroke();
  ellipse(0, 0, angle);
  pop();
}
