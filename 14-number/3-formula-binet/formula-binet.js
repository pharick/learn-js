function fibBinet(n) {
  var phi = (1 + Math.sqrt(5)) / 2;
  var result = Math.round( Math.pow(phi, n) / Math.sqrt(5) );
  return result;
}

console.log(fibBinet(77));
