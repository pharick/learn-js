function CoffeeMachine(power) {
  this.waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  var self = this;
  var timer;

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    console.log('Кофе готово!');
  }

  this.run = function() {
    timer = setTimeout(onReady, getBoilTime());
  };

  this.stop = function() {
    clearTimeout(timer);
  };
}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
// coffeeMachine.stop();
