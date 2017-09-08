exports.Calculator = Calculator;

function Calculator() {
  this.operators = {
    "+": function(a, b) {
      return a + b;
    },

    "-": function(a, b) {
      return a - b;
    }
  };

  this.calculate = function(str) {
    var expression = str.split(" ");
    if (expression[1] in this.operators && !isNaN(expression[0]) && !isNaN(expression[2])) {
      return this.operators[ expression[1] ]( +expression[0], +expression[2] );
    }
  };

  this.addMethod = function(operator, func) {
    this.operators[operator] = func;
  };
}

var calculator = new Calculator();
console.log(calculator.operators["+"]);
