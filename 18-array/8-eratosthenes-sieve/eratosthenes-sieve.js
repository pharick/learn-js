var numbers = [];
for (var i = 2; i <= 100; i++) numbers[i] = true;

var p = 2;
while (p * p < 100) {
  for (var i = p * 2; i <= 100; i += p) {
    numbers[i] = false;
  }

  for (var i = p + 1; i <= 100; i++) {
    if (numbers[i]) {
      p = i;
      break;
    }
  }
}

var sum = 0;
for (var i = 0; i <= 100; i++) {
  if (numbers[i]) sum += i;
}
console.log(sum);
