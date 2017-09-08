Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
};

function f() {
  console.log( "привет" );
}

f.defer(3000); // выведет "привет" через 1 секунду
