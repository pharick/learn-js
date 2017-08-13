exports.unique = unique;

function unique(arr) {
  var cleanArr = [];

  for (var i = 0; i < arr.length; i++) {
    if ( cleanArr.indexOf(arr[i]) == -1 ) {
      cleanArr.push(arr[i]);
    }
  }

  return cleanArr;
}
