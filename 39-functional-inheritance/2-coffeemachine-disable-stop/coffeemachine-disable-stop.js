function Machine(power) {
  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.apply(this, arguments);

  var waterAmount = 0;
  var timer;

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

  function onReady() {
    alert('Кофе готово!');
  }

  this.run = function() {
    if (!this._enabled) {
      throw new Error('Кофеварка выключена');
    }
    timer = setTimeout(onReady, 1000);
  };

  var parentDisable = this.disable;
  this.disable = function() {
    parentEnable.call(this);
    clearTimeout(timer);
  }
}
