exports.makeBuffer = makeBuffer;

function makeBuffer() {
  var bufferStorage = '';

  function buffer(value) {
    if (arguments.length == 0) return bufferStorage;
    bufferStorage += String(value);
  }

  buffer.clear = function() {
    bufferStorage = '';
  };

  return buffer;
}
