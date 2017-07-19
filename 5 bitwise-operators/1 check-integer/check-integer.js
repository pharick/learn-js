function isInteger(num) {
  return num == (num ^ 0);
}

console.log(isInteger(6));
