function work(a, b) {
  return( a + b );
}

function makeLogging(f, log) {
  return function() {
    log.push([].slice.call(arguments));
    return f.apply(this, arguments);
  };
}

var log = [];
work = makeLogging(work, log);

work(1, 2);
work(4, 5);

for (var i = 0; i < log.length; i++) {
  var args = log[i];
  console.log( 'Лог:' + args.join() );
}
