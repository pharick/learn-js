function CoffeeMachine(power, capacity) {
  var waterAmount = 0;
  var timer;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };

  this.addWater = function(amount) {
    this.setWaterAmount(waterAmount + amount);
  };

  function onReady() {
    timer = null;
    return readyFunction();
  }

  var readyFunction = function() {
    console.log( 'Кофе готов!' );
  };

  this.setOnReady = function(f) {
    readyFunction = f;
  };

  this.run = function() {
    timer = setTimeout(onReady, getTimeToBoil());
  };

  this.isRunning = function() {
    return !!timer;
  };

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
console.log( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
  console.log( "После: " + coffeeMachine.isRunning() ); // После: false
});
