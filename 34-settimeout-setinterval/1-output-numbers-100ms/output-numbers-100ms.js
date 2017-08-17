function printNumbersInterval() {
  var number = 1;
  var interval = setInterval(function() {
    if (number == 20) clearInterval(interval);
    console.log(number++);
  }, 100);
}

printNumbersInterval();
