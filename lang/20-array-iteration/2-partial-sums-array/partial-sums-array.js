exports.getSums = getSums;

function getSums(arr) {
  var result = [];
  arr.reduce( function(sum, current) {
    result.push(sum + current);
    return sum + current;
  }, 0);
  return result;
}
