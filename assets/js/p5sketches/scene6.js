let timing = 75;
const answer = [
  " - have you made any plans?",
  "take an overdose",
  "slash my wrists",
  "then hang myself",
  "i just hope to God that death is the fucking end"
];

function setup() {
  let canvasDiv = document.getElementById("canvas6");
  divWidth = document.getElementById("canvas6").clientWidth;
  let sketchCanvas = createCanvas(divWidth, 450);
  sketchCanvas.parent("canvas6");
  textAlign(CENTER, CENTER);
  textSize(32);
}

function draw() {
  background(255);

  let t = frameCount % (5 * timing);

  for (let i = 0; i < answer.length; i++) {
    if (t > timing * i && t < timing + timing * i) {
      text(answer[i], width / 2, height / 2);
    }
  }
  timing -= 0.025;
}
