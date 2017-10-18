const para = 'Sometimes I turn around and catch the smell of you and I cannot go on I cannot fucking go on without expressing this terrible so fucking awful physical aching fucking longing I have for you. And I cannot believe that I can feel this for you and you feel nothing. Do you feel nothing? (Silence) Do you feel nothing?';
let words = [];
const timing = 24;
let showing = [];
const textSz = 36;

function setup() {
  let canvasDiv = document.getElementById("canvas9");
  divWidth = document.getElementById("canvas9").clientWidth;
  let sketchCanvas = createCanvas(divWidth, 450);
  sketchCanvas.parent("canvas9");
  textAlign(CENTER, CENTER);
  textSize(textSz);

  words = para.split(' ');

}

function draw() {
  background(255);

  let t = frameCount % (words.length * timing);
  let y1 = textSz;
  let y2 = textSz+textSz;

  for (let i = 0; i < words.length; i++) {
    if (t > timing * i && t < timing + timing * i) {
      text(words[i], width/2, y1);
      if (words[i+1]) {
        text(words[i+1], width/2, y2);
      }
    }
    y1 += textSz;
    y2 += textSz;
    if (y1 > height) {
      y1 = textSz;
    }

    if (y2 > height) {
      y2 = textSz+textSz;
    }
  }
}
