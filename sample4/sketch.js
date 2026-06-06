let randomOffsetX = 0;
let randomOffsetY = 0;
let lastSwitchTime = 0;
let bgFlicker = 90;

let quadHue = 130;
let quadHueTarget = 130;
let lastColorTime = 0;

let circleColor;
let circleColorTarget;
let lastCircleColorTime = 0;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100, 100);
  circleColor = color(0, 70, 100, 60);
  circleColorTarget = color(0, 70, 100, 60);
  saveGif('abstract_animation', 5);
}

function draw() {
  let t = frameCount;
  let m = millis();

  if (m - lastSwitchTime > 1800) {
    randomOffsetX = random(-12, 12);
    randomOffsetY = random(-8, 8);
    lastSwitchTime = m;
  }

  bgFlicker = 88 + sin(m * 0.0004) * 4;

  colorMode(HSB, 360, 100, 100, 100);
  background(0, 0, bgFlicker);
  noStroke();

  let blueHue = 210 + sin(t * 0.018) * 25;
  let blueSize = 380 + sin(t * 0.027) * 55;
  let blobX = sin(t * 0.017) * 18 + sin(t * 0.041) * 8 + randomOffsetX;
  let blobY = cos(t * 0.023) * 12 + cos(t * 0.037) * 6 + randomOffsetY;
  fill(blueHue, 60, 80, 40);
  ellipse(150 + blobX, 150 + blobY, blueSize, blueSize);

  colorMode(RGB, 255, 255, 255, 100);
  let fromColor = color(255, 200, 30, 32);
  let toColor   = color(255, 120, 20, 32);
  let amt = (sin(t * 0.019 + 1.1) + 1) / 2;
  fill(lerpColor(fromColor, toColor, amt));
  let yellowW = 480 + cos(t * 0.023 + 0.8) * 38;
  let yellowH = 330 + sin(t * 0.031) * 28;
  ellipse(450, 250, yellowW, yellowH);

  colorMode(HSB, 360, 100, 100, 100);

  let rectSpeed = 0.033 + sin(m * 0.0002) * 0.008;
  let rectX = 280 + sin(t * rectSpeed + 2.1) * 28;
  fill(0, 0, 30, 60);
  rect(rectX, 0, 40, 400);

  let redHue = 5 + sin(t * 0.024 + 0.7) * 12;
  let sqSize = 112 + sin(t * 0.028 + 1.5) * 18;
  fill(redHue, 80, 80, 72);
  square(400 + cos(t * 0.021) * 9, 80 + sin(t * 0.029 + 2.0) * 9, sqSize);

  if (m - lastColorTime > 2300) {
    quadHueTarget = random(90, 170);
    lastColorTime = m;
  }
  quadHue = lerp(quadHue, quadHueTarget, 0.03);

  let q1 = sin(t * 0.021 + 2.7) * 13;
  let q2 = sin(t * 0.033 + 0.4) * 10;
  fill(quadHue, 50, 60, 48);
  quad(
    100 + q1,        300 - q2,
    250 - q2,        280 + q1,
    220 + q1 * 0.6,  380 - q2 * 0.4,
    80  - q2 * 0.5,  350 + q1 * 0.5
  );

  let triHue = 28 + sin(t * 0.037 + 1.3) * 14 + random(-1.2, 1.2);
  let triY = sin(t * 0.037 + 1.3) * 17;
  fill(triHue, 90, 100, 60);
  triangle(50, 350 + triY, 150, 350 + triY, 100, 250 + triY);

  let arcStroke = 3 + random(-0.4, 0.4);
  stroke(30, 0, 15);
  strokeWeight(arcStroke);
  noFill();
  let arcX = 300 + sin(t * 0.019 + 0.5) * 8;
  let arcY = 200 + cos(t * 0.031) * 6;
  let arcEnd = PI + QUARTER_PI + sin(t * 0.029 + 0.3) * QUARTER_PI;
  arc(arcX, arcY, 180, 180, 0, arcEnd);

  colorMode(RGB, 255, 255, 255, 100);
  stroke(45, 45, 50, map(sin(t * 0.017), -1, 1, 15, 55));
  strokeWeight(1);
  line(0, 0, 600, 400);
  stroke(40, 42, 45, map(sin(t * 0.023 + 1.0), -1, 1, 15, 55));
  line(0, 200, 600, 200);
  stroke(50, 48, 44, map(sin(t * 0.031 + 2.0), -1, 1, 15, 55));
  line(450, 0, 450, 400);

  colorMode(HSB, 360, 100, 100, 100);

  strokeWeight(map(sin(t * 0.043), -1, 1, 7, 17));
  stroke(0, 0, 0);
  point(450 + sin(t * 0.019) * 6, 250 + cos(t * 0.037) * 4);
  point(300 + cos(t * 0.031) * 5, 200 + sin(t * 0.023) * 6);

  noStroke();
  let breathRate = 0.071 + sin(m * 0.0003) * 0.015;
  let pulse1 = map(sin(t * breathRate), -1, 1, 18, 38);
  let pulse2 = map(sin(t * 0.091 + 1.2), -1, 1, 9, 22);
  fill(0, 0, 100, 78);
  circle(300, 100, pulse1);
  circle(100, 100, pulse2);

  strokeWeight(5);
  stroke(0, 0, 40);
  point(280 + sin(t * 0.027) * 22, 100 + cos(t * 0.041) * 14);
  point(320 + cos(t * 0.023) * 16, 300 + sin(t * 0.037) * 24);

  if (m - lastCircleColorTime > 1500) {
    circleColorTarget = color(random(360), random(50, 90), random(70, 100), 55);
    lastCircleColorTime = m;
  }
  circleColor = lerpColor(circleColor, circleColorTarget, 0.04);
  noStroke();
  fill(circleColor);
  let cr = 28 + sin(t * 0.033 + 1.7) * 8;
  circle(520, 340, cr);

}
