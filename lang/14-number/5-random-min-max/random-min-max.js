function generateRandom(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(generateRandom(10, 25));
