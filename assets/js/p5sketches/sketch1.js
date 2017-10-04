const arr = [
  "(A very long silence)",
  "(A long silence)",
  "(A long silence)",
  "(A long silence)",
  "(Silence)"
];
let textLine = [];
const message = "What do you offer?";
const rand = 5;
let x, y;
let isMoving;
const textSz = 32;

function setup() {
  let canvasDiv = document.getElementById("canvas1");
  let divWidth = document.getElementById("canvas1").clientWidth;
  let sketchCanvas = createCanvas(divWidth, 450);
  sketchCanvas.parent("canvas1");
  textAlign(CENTER, CENTER);
  textSize(textSz);

  for (let i = 0; i < arr.length; i++) {
    textLine[i] = new TextLine(width / 2, 100 + textSz * i, arr[i]);
  }
}

function draw() {
  background(255);
  if (mouseX === pmouseX && mouseY === pmouseY) {
    isMoving = false;
  } else {
    isMoving = true;
  }

  if (isMoving) {
    for (let i = 0; i < textLine.length; i++) {
      textLine[i].show();
      textLine[i].move();
    }
  } else {
    text(message, width / 2, height / 2);
  }
}

class TextLine {
  constructor(x, y, txt) {
    this.x = x;
    this.y = y;
    this.txt = txt;
  }

  show() {
    // textSize(textSz);
    text(this.txt, this.x, this.y);
  }

  move() {
    this.x += random(-rand, rand);
    this.y += random(-rand, rand);

    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      this.x = width / 2;
      this.y = height / 2;
    }
  }
}
