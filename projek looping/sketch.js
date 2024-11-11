function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
let numberOfEmote = 4;
let x = 100;
let y = height / 2;
textSize(100);
  for (let i = 0; i < numberOfEmote; i++) {
    text('😶‍🌫️', x , y);
    x += 100
  }
}