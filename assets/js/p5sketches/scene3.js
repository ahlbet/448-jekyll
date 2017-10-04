let intro = "I do not want to";
const prob = 0.5;
let spacing;
let x = 0;
let y = 0;
let inArea;
let divWidth;
let negW;
let negH;

function setup() {
  let canvasDiv = document.getElementById("canvas3");
  divWidth = document.getElementById("canvas3").clientWidth;
  let sketchCanvas = createCanvas(divWidth, 450);
  sketchCanvas.parent("canvas3");
  spacing = 2 * divWidth / 40;
  negW = divWidth / 20;
  negH = divWidth / 3.5;
  textAlign(CENTER, CENTER);
  textSize(divWidth / 20);
  text(intro, width / 2, height / 2);
}

function draw() {
  let distanceX = dist(x, y, x, height / 2);
  let distanceY = dist(x, y, width / 2, y);
  if (distanceX < negW && distanceY < negH) {
    inArea = true;
  } else {
    inArea = false;
  }

  if (!inArea) {
    let rand = random(1);
    textAlign(LEFT, TOP);
    textSize(divWidth / 40);
    if (rand < prob) {
      text("die", x, y);
    } else {
      text("live", x, y);
    }
  }

  x += spacing;

  if (x > width) {
    x = 0;
    y += spacing / 1.5;
  }

  if (y > height) {
    clear();
    textAlign(CENTER, CENTER);
    textSize(divWidth / 20);
    text(intro, width / 2, height / 2);
    x = 0;
    y = 0;
  }
}
