exports.makeBuffer = makeBuffer;

function makeBuffer() {
  var buff = '';

  return function(value) {
    if (arguments.length == 0) return buff;
    buff += String(value);
  }
}
