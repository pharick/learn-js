function debounce(f, ms) {
  var coolDown = false;

  return function() {
    if (coolDown) return;
    coolDown = true;
    setTimeout(function() {
      coolDown = false;
    }, ms);
    return f.apply(this, arguments);
  };
}
