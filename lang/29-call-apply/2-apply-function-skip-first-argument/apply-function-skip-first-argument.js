function applyAll(func) {
  var args = [].slice.call(arguments, 1);
  return func.apply(func, args);
}
