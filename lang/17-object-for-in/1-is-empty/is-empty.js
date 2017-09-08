exports.isEmpty = isEmpty;

function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;  
}
