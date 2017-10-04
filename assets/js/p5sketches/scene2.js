let roaches = [];
let textSz;

function setup() {
  let canvasDiv = document.getElementById("canvas2");
  let divWidth = document.getElementById("canvas2").clientWidth;
  let sketchCanvas = createCanvas(divWidth, 450);
  sketchCanvas.parent("canvas2");
  textAlign(CENTER, CENTER);
  textSz = divWidth / 20;
  textSize(textSz);
}

function draw() {
  background(255);
  let t = frameCount % 6;

  if (t === 0) {
    let roach = new Roach(random(width), random(150, 300), 20);
    roaches.push(roach);
  }

  for (let i = 0; i < roaches.length; i++) {
    roaches[i].show();
    roaches[i].move();
    roaches[i].grow();
  }

  if (roaches.length > 300) {
    roaches.length = 0;
  }

  fill(255);
  noStroke();
  text("Remember the light and believe the light", width / 2, height / 2);
}

class Roach {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
  }

  show() {
    noStroke();
    fill(0);
    ellipse(this.x, this.y, this.d);
  }

  move() {
    this.x = this.x + noise(1, this.x, this.y) * random(-3, 3);
    this.y = this.y + noise(2, this.x, this.y) * random(-3, 3);

    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      this.x = width / 2;
      this.y = height / 2;
    }
  }

  grow() {
    this.d += noise(1, this.x, this.y) * random(-2, 2);
  }
}
