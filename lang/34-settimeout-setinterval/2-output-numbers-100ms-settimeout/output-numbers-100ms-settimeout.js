function printNumbersInterval() {
  var number = 1;
  setTimeout(function logNumber() {
    console.log(number++);
    if (number <= 20) setTimeout(logNumber, 100);
  }, 100);
}

printNumbersInterval();
