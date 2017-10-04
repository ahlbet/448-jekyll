var txt = [
  `It wasn't for long, I wasn't there long. But drinking bitter black`,
  `coffee I catch that medicinal smell in a cloud of ancient`,
  `tobacco and something touches me in that still place`,
  `and a wound form two years ago opens like a cadaver and a`,
  `long buried shame roars its foul decaying grief.`,
  `A room of expressionless faces string blankly at my`,
  `pain, so devoid of meaning there must be evil intent.`,
  `Dr This and Dr That and Dr Whatsit who's just`,
  `passing and thought he'd pop in to take the piss as`,
  `well. Burning in a hot tunnel of dismay, my`,
  `humiliation complete as I shake without reason and`,
  `stumble over words and have nothing to say about my`,
  `'illness' which anyway amounts only to knowing that`,
  `there's no point in anything because I'm going to die.`,
  `And I am deadlocked by that smooth psychiatric voice`,
  `of reason which tells me there is an objective reality in`,
  `which my body and mind are one. But I am not here`,
  `and never have been. Dr This writes it down and Dr`,
  `That attempts a sympathetic murmur. Watching me,`,
  `judging me, smelling the crippling failure oozing from`,
  `my skin, my desperation clawing and all-consuming`,
  `panic drenching me as I gape in horror at the world`,
  `and wonder why everyone is smiling and looking at`,
  `me with secret knowledge of my aching shame.`,
  `Shame shame shame.`,
  `Drown in your fucking shame.`,
  `Inscrutable doctors, sensible doctors, way-out doctors,`,
  `doctors you'd think were fucking patients if you`,
  `weren't shown proof otherwise, ask the same questions,`,
  `put words in my mouth, offer chemical cures for`,
  `congenital anguish and cover each other's arses until I`,
  `want to scream for you, the only doctor who ever`,
  `touched me voluntarily, who looked me in the eye,`,
  `who laughed at my gallows humour spoken in the`,
  `voice from the newly-dug grave, who took the piss`,
  `when I shaved my head, who lied and said it was nice`,
  `to see me. Who lied. And said it was nice to see me. I`,
  `trusted you, I loved you, and it's not losing you that`,
  `hurts me, but your bare-faced fucking falsehoods that`,
  `masquerade as medical notes.`,
  `Your truth, your lies, not mine.`,
  `And while I was believing that you were different and`,
  `that you maybe even felt the distress that sometimes`,
  `flickered across your face and threatened to erupt, you`,
  `were covering your arse too. Like every other stupid`,
  `mortal cunt.`,
  `To my mind that's betrayal. And my mind is the`,
  `subject of these bewildered fragments.`,
  `Nothing can extinguish my anger.`,
  `And nothing can restore my faith.`,
  `This is not a world in which I wish to live.`
];

function setup() {
  let canvasDiv = document.getElementById("canvas5");
  divWidth = document.getElementById("canvas5").clientWidth;
  let sketchCanvas = createCanvas(divWidth, 1100);
  sketchCanvas.parent("canvas5");
  textAlign(LEFT, TOP);
  textSize(16);

  for (let i = 0; i < txt.length; i++) {
    let words = txt[i].split(" ");
    let currentOffset = 0;
    for (let j = 0; j < words.length; j++) {
      let wordWidth = textWidth(words[j]);

      fill(0);
      text(words[j], 25 + currentOffset, 25 + i * 20);
      currentOffset += wordWidth + 4;
    }
  }
}

function draw() {
  for (let i = 0; i < txt.length; i++) {
    let words = txt[i].split(" ");
    let currentOffset = 0;
    for (let j = 0; j < words.length; j++) {
      let wordWidth = textWidth(words[j]);
      if (
        mouseX > 25 + currentOffset &&
        mouseX < 25 + currentOffset + wordWidth &&
        mouseY > 25 + i * 20 &&
        mouseY < 25 + i * 20 + 16
      ) {
        fill(0);
        rect(25 + currentOffset, 25 + i * 20, wordWidth, 16);
      }
      currentOffset += wordWidth + 4;
    }
  }
}
