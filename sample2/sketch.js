function setup() { createCanvas(600, 400); noLoop(); }

function draw() {
  background(240, 244, 248);

  // 몸통
  fill(25,25,25); noStroke();
  rect(185,330,230,75); ellipse(300,395,230,110);
  noFill(); stroke(50); strokeWeight(3);
  bezier(258,330, 270,352, 330,352, 342,330);

  // 목 + 얼굴
  fill(245,193,154); noStroke();
  rect(279,278,42,58,5);
  ellipse(300,205,176,196);

  // 머리 베이스
  fill(28,18,16); noStroke();
  ellipse(300,132,188,130);
  ellipse(300,115,172,104);
  beginShape();
  vertex(208,158); quadraticVertex(240,125,300,118);
  quadraticVertex(360,125,392,158);
  quadraticVertex(375,145,300,140);
  quadraticVertex(225,145,208,158);
  endShape(CLOSE);

  // 옆머리 왼쪽
  beginShape(); vertex(214,168);
  bezierVertex(208,188,206,212,209,234);
  bezierVertex(211,244,214,252,216,255);
  bezierVertex(212,248,207,236,206,218);
  bezierVertex(204,192,208,170,214,168);
  endShape(CLOSE);

  // 옆머리 오른쪽
  beginShape(); vertex(386,168);
  bezierVertex(392,188,394,212,391,234);
  bezierVertex(389,244,386,252,384,255);
  bezierVertex(388,248,393,236,394,218);
  bezierVertex(396,192,392,170,386,168);
  endShape(CLOSE);

  // 머리카락 가닥 8개 (for문 없이 직접 호출)
  noFill(); strokeCap(ROUND);
  stroke(30,20,18);
  strokeWeight(4);   bezier(225,148, 225,118, 233,106, 236,96);
  strokeWeight(4.5); bezier(245,138, 247,116, 252,98,  250,83);
  strokeWeight(5);   bezier(268,128, 268,106, 266,86,  265,68);
  strokeWeight(5.5); bezier(290,122, 290,100, 287,78,  284,58);
  strokeWeight(5);   bezier(308,122, 308,100, 305,78,  302,56);
  strokeWeight(4.5); bezier(328,126, 329,104, 328,84,  328,66);
  strokeWeight(4);   bezier(348,133, 351,112, 350,92,  349,75);
  strokeWeight(3.5); bezier(365,142, 368,122, 368,102, 368,86);

  // 머리 하이라이트
  stroke(58,44,38); strokeWeight(3);
  bezier(265,112, 282,105, 318,105, 335,112);

  // 귀
  fill(245,193,154); noStroke();
  ellipse(213,210,26,36); ellipse(387,210,26,36);

  // 귀걸이
  fill(200,200,213); stroke(168,168,190); strokeWeight(1);
  ellipse(206,216,10,10); ellipse(394,216,10,10);
  fill(238,238,248); noStroke();
  ellipse(206,216,4,4); ellipse(394,216,4,4);

  // 눈썹
  noFill(); stroke(28,18,16); strokeWeight(5);
  bezier(242,174, 252,166, 274,166, 286,171);
  bezier(314,171, 326,166, 348,166, 358,174);

  // 눈
  fill(255); stroke(200,160,144); strokeWeight(0.5);
  ellipse(264,197,40,34); ellipse(336,197,40,34);
  fill(46,28,14); noStroke();
  ellipse(264,198,26,26); ellipse(336,198,26,26);
  fill(8,4,4);
  ellipse(264,198,14,14); ellipse(336,198,14,14);
  fill(255);
  ellipse(269,193,6,6); ellipse(341,193,6,6);

  // 코
  fill(223,168,130); noStroke();
  ellipse(291,228,10,8); ellipse(309,228,10,8);
  noFill(); stroke(204,152,112); strokeWeight(1.5);
  bezier(300,216, 295,222, 290,226, 291,228);
  bezier(300,216, 305,222, 310,226, 309,228);

  // 입
  noFill(); stroke(192,112,80); strokeWeight(2.5);
  bezier(274,252, 287,248, 313,248, 326,252);
  fill(240,184,160); strokeWeight(1.5);
  bezier(274,252, 287,264, 313,264, 326,252);
}
