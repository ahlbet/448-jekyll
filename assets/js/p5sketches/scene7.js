let sentence = [
  "I",
  "will",
  "drown",
  "in",
  "dysphoria",
  "in",
  "the",
  "cold",
  "black",
  "pond",
  "of",
  "myself"
];
let words = [];
const timing = 50;

function setup() {
  let canvasDiv = document.getElementById("canvas7");
  divWidth = document.getElementById("canvas7").clientWidth;
  let sketchCanvas = createCanvas(divWidth, 450);
  sketchCanvas.parent("canvas7");
  // textAlign(CENTER, CENTER);
  textSize(20);
  for (let j = 0; j < sentence.length; j++) {
    words[j] = new Drown(random(20, width - 100), 0, sentence[j]);
  }
}

function draw() {
  background(255);
  let t = frameCount % (words.length * timing);
  for (let i = 0; i < words.length; i++) {
    words[i].show();
    if (t > timing * i && t < timing + timing * i) {
      words[i].move();
    }
  }
}

class Drown {
  constructor(x, y, txt) {
    this.x = x;
    this.y = y;
    this.txt = txt;
  }

  show() {
    text(this.txt, this.x, this.y);
  }

  move() {
    this.y += random(this.y, this.y + 5) / 20 + 1;
    if (this.y > height) {
      this.y = 0;
      this.x = random(20, width - 100);
    }
  }
}
