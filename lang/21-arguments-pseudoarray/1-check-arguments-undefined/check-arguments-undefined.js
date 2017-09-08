function f(x) {
  console.log( arguments.length ? 1 : 0 );
}

f(undefined);
f();
