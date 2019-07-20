// Each 2 dimensional array represents a 2D sprite (similar to how characters are drawn in retro videogames)
const happyFace = [
  [" ", " ", " ", "x", "x", "x", "x", " ", " ", " "],
  [" ", " ", "x", " ", " ", " ", " ", "x", " ", " "],
  [" ", "x", " ", " ", " ", " ", " ", " ", "x", " "],
  ["x", " ", "x", " ", " ", " ", " ", "x", " ", "x"],
  ["x", " ", " ", " ", " ", " ", " ", " ", " ", "x"],
  ["x", " ", " ", " ", " ", " ", " ", " ", " ", "x"],
  ["x", " ", "x", " ", " ", " ", " ", "x", " ", "x"],
  [" ", "x", " ", "x", "x", "x", "x", " ", "x", " "],
  [" ", " ", "x", " ", " ", " ", " ", "x", " ", " "],
  [" ", " ", " ", "x", "x", "x", "x", " ", " ", " "]
];

const stickFigure = [
  [" ", " ", " ", " ", "x", " ", " ", " ", " ", " "],
  [" ", "x", " ", "x", " ", "x", " ", "x", " ", " "],
  [" ", " ", "x", " ", "x", " ", "x", " ", " ", " "],
  [" ", " ", " ", "x", "x", "x", " ", " ", " ", " "],
  [" ", " ", " ", " ", "x", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", "x", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", "x", " ", " ", " ", " ", " "],
  [" ", " ", " ", "x", " ", "x", " ", " ", " ", " "],
  [" ", " ", "x", " ", " ", " ", "x", " ", " ", " "],
  [" ", "x", " ", " ", " ", " ", " ", "x", " ", " "]
];

const star = [
  [" ", " ", " ", " ", "x", " ", " ", " ", " ", " "],
  [" ", " ", " ", "x", " ", "x", " ", " ", " ", " "],
  ["x", "x", "x", "x", "x", "x", "x", "x", "x", " "],
  [" ", "x", " ", " ", " ", " ", " ", "x", " ", " "],
  ["x", "x", "x", "x", "x", "x", "x", "x", "x", " "],
  [" ", " ", " ", "x", " ", "x", " ", " ", " ", " "],
  [" ", " ", " ", " ", "x", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

// Add code to individually export each sprite array as a named export