const numbers = [
  100,
  91,
  84,
  81,
  72,
  69,
  58,
  44,
  42,
  38,
  37,
  28,
  21,
  12,
  7,
  `I'm so sorry`
];
let x;
let y;
const timing = 200;

function setup() {
  let canvasDiv = document.getElementById("canvas4");
  divWidth = document.getElementById("canvas4").clientWidth;
  let sketchCanvas = createCanvas(divWidth, 450);
  sketchCanvas.parent("canvas4");
  textAlign(CENTER, CENTER);
  textSize(32);
  // x = width / 2;
  // y = height / 2;
}

function draw() {
  background(255);
  let t = frameCount % (numbers.length * timing);
  let tt = (frameCount % timing) / 200;
  let ttt = frameCount / 200;

  let movX = noise(ttt, tt, 1);
  let movY = noise(ttt, tt, 2);

  for (let i = 0; i < numbers.length; i++) {
    if (t > timing * i && t < timing * i + timing) {
      text(numbers[i], movX * width, movY * height);
    }
  }
}
