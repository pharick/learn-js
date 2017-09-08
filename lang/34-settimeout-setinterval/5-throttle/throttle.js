function throttle(f, ms) {
  var coolDown = false;
  var self, args;

  function wrapper() {
    if (coolDown) {
      self = this;
      args = arguments;
      return;
    }

    f.apply(this, arguments);
    coolDown = true;
    setTimeout(function() {
      coolDown = false;
      if (args) {
        wrapper.apply(self, args);
        self = args = null;
      }
    }, ms);
  }

  return wrapper;
}
