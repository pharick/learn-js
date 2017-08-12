function randomInteger(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

console.log(randomInteger(10, 25));
