function fib(n) {
  var phi = (1 + Math.sqrt(5)) / 2;
  return (Math.pow(phi, n) - Math.pow(-phi, -n)) / (2 * phi - 1);
}

function fibC(n) {
  var a = 1, b = 1;

  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }

  return b;
}

console.log(fibC(77));
