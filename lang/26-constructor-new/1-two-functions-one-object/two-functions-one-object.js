var obj = {};

function A() { return obj; }
function B() { return obj; }

var a = new A();
var b = new B();

console.log(a == b);
