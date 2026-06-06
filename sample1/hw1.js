function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(230, 230, 230);
  noStroke();

  fill(100, 150, 200, 100);
  ellipse(150, 150, 400, 400);

  fill(255, 200, 50, 80);
  ellipse(450, 250, 500, 350);

  fill(80, 80, 80, 150);
  rect(280, 0, 40, 400);

  fill(200, 50, 50, 180);
  square(400, 80, 120);

  fill(80, 150, 100, 120);
  quad(100, 300, 250, 280, 220, 380, 80, 350);

  fill(255, 120, 50, 150);
  triangle(50, 350, 150, 350, 100, 250);

  stroke(30, 30, 30);
  strokeWeight(3);
  noFill();
  arc(300, 200, 180, 180, 0, PI + QUARTER_PI);

  stroke(50, 50, 50);
  strokeWeight(1);
  line(0, 0, 600, 400);
  line(0, 200, 600, 200);
  line(450, 0, 450, 400);

  strokeWeight(12);
  stroke(0, 0, 0);
  point(450, 250);
  point(300, 200);

  noStroke();
  fill(255, 255, 255, 200);
  circle(300, 100, 30);
  circle(100, 100, 15);

  strokeWeight(5);
  stroke(100, 100, 100);
  point(280, 100);
  point(320, 300);
}

// 창 크기가 바뀔 때 캔버스 크기도 재조정
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
