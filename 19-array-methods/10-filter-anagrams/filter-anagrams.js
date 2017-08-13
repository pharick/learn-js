exports.aclean = aclean;

function aclean(arr) {
  var cleanArr = [];
  var sortedArr = [];

  for (var i = 0; i < arr.length; i++) {
    var sorted = arr[i].split("").sort().join('').toLowerCase();
    if ( sortedArr.indexOf(sorted) == -1 ) {
      cleanArr.push(arr[i]);
      sortedArr.push(sorted);
    }
  }

  return cleanArr;
}
