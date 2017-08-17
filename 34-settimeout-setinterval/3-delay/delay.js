function delay(f, ms) {
  return function() {
    var self = this;
    var args = arguments;
    setTimeout(function() {
      f.apply(self, args);
    }, ms);
  };
}
