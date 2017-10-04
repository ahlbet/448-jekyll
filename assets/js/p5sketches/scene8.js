const timing = 50;
let words = [
  "Répondez",
  "s'il",
  "vous",
  "plaît",
  "As",
  "soon",
  "as",
  "possible"
];

function setup() {
  let canvasDiv = document.getElementById("canvas8");
  divWidth = document.getElementById("canvas8").clientWidth;
  let sketchCanvas = createCanvas(divWidth, 450);
  sketchCanvas.parent("canvas8");
  textAlign(CENTER, CENTER);
  textSize(20);
  shuffleArr(words);
}

function draw() {
  background(255);
  let t = frameCount % timing;
  if (t === 0) {
    shuffleArr(words);
  }

  for (let i = 0; i < words.length; i++) {
    text(words[i], width / 2, 100 + 20 * i);
  }
}

function shuffleArr(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
