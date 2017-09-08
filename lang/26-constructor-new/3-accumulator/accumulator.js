function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function(value) {
    this.value += value;
  };
}

var accumulator = new Accumulator(1);
accumulator.read(6);
accumulator.read(2);
console.log( accumulator.value );
