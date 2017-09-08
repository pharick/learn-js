var arr = [];
var sum = 0;

while (true) {
  var value = prompt("Введите число", "");
  if ( !isNumeric(value) ) break;
  arr.push(+value);
  sum += +value;
}

alert(sum);

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
