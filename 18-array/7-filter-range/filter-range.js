exports.filterRange = filterRange;

function filterRange(arr, a, b) {
  var filtered = [];
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      filtered.push( arr[i] );
    }
  }
  return filtered;
}
