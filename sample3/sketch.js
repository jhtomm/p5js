let mouthOpen = false;
let hairOffset = 0;
let clothR = 45, clothG = 40, clothB = 40;

function setup() {
  createCanvas(600, 400);
  saveGif('caricature', 5);
}

function draw() {
  background(240, 244, 248);

  let leftAngle = atan2(mouseY - 198, mouseX - 264);
  let rightAngle = atan2(mouseY - 198, mouseX - 336);
  let pupilDist = 5;
  let lPX = 264 + cos(leftAngle) * pupilDist;
  let lPY = 198 + sin(leftAngle) * pupilDist;
  let rPX = 336 + cos(rightAngle) * pupilDist;
  let rPY = 198 + sin(rightAngle) * pupilDist;

  fill(clothR, clothG, clothB); noStroke();
  rect(185,330,230,75); ellipse(300,395,230,110);
  noFill(); stroke(max(clothR-20,0), max(clothG-20,0), max(clothB-20,0)); strokeWeight(3);
  bezier(258,330, 270,352, 330,352, 342,330);

  fill(245,193,154); noStroke();
  rect(279,278,42,58,5);
  ellipse(300,205,176,196);

  fill(28,18,16); noStroke();
  ellipse(300,132,188,130);
  ellipse(300,115,172,104);
  beginShape();
  vertex(208,158); quadraticVertex(240,125,300,118);
  quadraticVertex(360,125,392,158);
  quadraticVertex(375,145,300,140);
  quadraticVertex(225,145,208,158);
  endShape(CLOSE);

  beginShape(); vertex(214,168);
  bezierVertex(208,188,206,212,209,234);
  bezierVertex(211,244,214,252,216,255);
  bezierVertex(212,248,207,236,206,218);
  bezierVertex(204,192,208,170,214,168);
  endShape(CLOSE);

  beginShape(); vertex(386,168);
  bezierVertex(392,188,394,212,391,234);
  bezierVertex(389,244,386,252,384,255);
  bezierVertex(388,248,393,236,394,218);
  bezierVertex(396,192,392,170,386,168);
  endShape(CLOSE);

  noFill(); strokeCap(ROUND);
  stroke(30,20,18);
  let h = hairOffset;
  strokeWeight(4);   bezier(225,148, 225+h,118, 233+h,106, 236+h,96);
  strokeWeight(4.5); bezier(245,138, 247+h,116, 252+h,98,  250+h,83);
  strokeWeight(5);   bezier(268,128, 268+h,106, 266+h,86,  265+h,68);
  strokeWeight(5.5); bezier(290,122, 290+h,100, 287+h,78,  284+h,58);
  strokeWeight(5);   bezier(308,122, 308+h,100, 305+h,78,  302+h,56);
  strokeWeight(4.5); bezier(328,126, 329+h,104, 328+h,84,  328+h,66);
  strokeWeight(4);   bezier(348,133, 351+h,112, 350+h,92,  349+h,75);
  strokeWeight(3.5); bezier(365,142, 368+h,122, 368+h,102, 368+h,86);

  stroke(58,44,38); strokeWeight(3);
  bezier(265,112, 282,105, 318,105, 335,112);

  hairOffset *= 0.85;

  fill(245,193,154); noStroke();
  ellipse(213,210,26,36); ellipse(387,210,26,36);

  fill(200,200,213); stroke(168,168,190); strokeWeight(1);
  ellipse(206,216,10,10); ellipse(394,216,10,10);
  fill(238,238,248); noStroke();
  ellipse(206,216,4,4); ellipse(394,216,4,4);

  noFill(); stroke(28,18,16); strokeWeight(5);
  bezier(242,174, 252,166, 274,166, 286,171);
  bezier(314,171, 326,166, 348,166, 358,174);

  fill(255); stroke(200,160,144); strokeWeight(0.5);
  ellipse(264,197,40,34); ellipse(336,197,40,34);

  fill(46,28,14); noStroke();
  ellipse(lPX,lPY,26,26); ellipse(rPX,rPY,26,26);

  fill(8,4,4);
  ellipse(lPX,lPY,14,14); ellipse(rPX,rPY,14,14);

  fill(255);
  ellipse(lPX+5,lPY-5,6,6); ellipse(rPX+5,rPY-5,6,6);

  fill(223,168,130); noStroke();
  ellipse(291,228,10,8); ellipse(309,228,10,8);
  noFill(); stroke(204,152,112); strokeWeight(1.5);
  bezier(300,216, 295,222, 290,226, 291,228);
  bezier(300,216, 305,222, 310,226, 309,228);

  noFill(); stroke(192,112,80); strokeWeight(2.5);
  bezier(274,252, 287,248, 313,248, 326,252);
  if (mouthOpen) {
    fill(180,80,60); strokeWeight(1.5);
    bezier(274,252, 287,272, 313,272, 326,252);
    fill(240,210,210); noStroke();
    ellipse(300,264,36,10);
  } else {
    fill(240,184,160); strokeWeight(1.5);
    bezier(274,252, 287,264, 313,264, 326,252);
  }
}

function keyPressed() {
  if (key === ' ')  {
    mouthOpen = !mouthOpen;
  }
  if (keyCode === LEFT_ARROW) {
    hairOffset = -12;
  }
  if (keyCode === RIGHT_ARROW) {
    hairOffset = 12;
  }
  if (keyCode === UP_ARROW) {
    hairOffset = -8;
  }
  if (keyCode === DOWN_ARROW) {
    hairOffset = 8;
  }
}

function mouseClicked() {
  let c = floor(random(8));
  if (c === 0) { clothR = 180; clothG = 80;  clothB = 80;  }
  if (c === 1) { clothR = 190; clothG = 120; clothB = 60;  }
  if (c === 2) { clothR = 185; clothG = 175; clothB = 70;  }
  if (c === 3) { clothR = 80;  clothG = 140; clothB = 90;  }
  if (c === 4) { clothR = 70;  clothG = 100; clothB = 160; }
  if (c === 5) { clothR = 110; clothG = 80;  clothB = 150; }
  if (c === 6) { clothR = 150; clothG = 140; clothB = 135; }
  if (c === 7) { clothR = 45;  clothG = 40;  clothB = 40;  }
}
