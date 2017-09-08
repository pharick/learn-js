Function.prototype.defer = function(ms) {
  var f = this;
  return function() {
    var self = this, args = arguments;
    setTimeout(function() {
      f.apply(self, args);
    }, ms);
  }
};

function f(a, b) {
  console.log( a + b );
}

f.defer(3000)(1, 2);
