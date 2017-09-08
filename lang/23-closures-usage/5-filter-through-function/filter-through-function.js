exports.filter = filter;
exports.inBetween = inBetween;
exports.inArray = inArray;

function filter(arr, func) {
  return arr.filter(func);
}

function inBetween(a, b) {
  return function(item) {
    return item >= a && item <= b
  }
}

function inArray(arr) {
  return function(item) {
    return arr.indexOf(item) != -1;
  }
}
