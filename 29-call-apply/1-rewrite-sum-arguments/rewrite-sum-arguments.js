function sumArgs() {
  var args = [].slice.call(arguments);
  return args.reduce(function(a, b) {
    return a + b;
  });
}

console.log( sumArgs(1, 2, 3, 8) );
