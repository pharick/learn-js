exports.multiplyNumeric = multiplyNumeric;

function multiplyNumeric(obj) {
  for (var key in obj) {
    if ( isNumeric(obj[key]) ) obj[key] *= 2;
  }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
