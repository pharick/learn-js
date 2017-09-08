function work(a) {
  return a;
}

function makeLogging(f, log) {
  return function(a) {
    log.push(a);
    return f.call(this, a);
  };
}

var log = [];
work = makeLogging(work, log);

work(1);
work(5);

for (var i = 0; i < log.length; i++) {
  console.log( 'Лог:' + log[i] );
}
