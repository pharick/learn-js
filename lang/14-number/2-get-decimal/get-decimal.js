exports.getDecimal = getDecimal;

function getDecimal(num) {
  var str = num.toString();
  var dotPos = str.indexOf(".");
  if (dotPos == -1) return 0;
  str = str.slice(dotPos);
  return +str;
}
