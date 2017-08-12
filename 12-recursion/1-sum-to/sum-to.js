function sumToC(n) {
  var result = 0;

  for (var i = 1; i <= n; i++) {
    result += i;
  }

  return result;
}

function sumToR(n) {
  if (n == 1) return 1;
  return n + sumToR(n - 1);
}

function sumToF(n) {
  return (1 + n) * n / 2;
}

alert(sumToF(6));
