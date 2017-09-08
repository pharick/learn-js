function Machine(power) {
  this._power = power;
  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function Fridge(power) {
  Machine.apply(this, arguments);

  var capacity = this._power / 100;
  var food = [];

  this.addFood = function() {
    if (!this._enabled) throw new Error('Холодильник выключен');
    if (food.length + arguments.length > capacity) throw new Error('Не хватает места');
    food = food.concat([].slice.call(arguments));
  };

  this.getFood = function() {
    return food.slice();
  };

  this.filterFood = function(func) {
    return food.filter(func);
  };

  this.removeFood = function(item) {
    var index = food.indexOf(item);
    if (index != -1) food.splice(index, 1);
  };

  var parentDisable = this.disable;
  this.disable = function() {
    if (food.length) throw new Error('Холодильник не пустой');
    parentDisable.call(this);
  }
}

var fridge = new Fridge(500);
fridge.enable();
console.log( fridge.getFood() );
fridge.addFood("кус-кус");
console.log( fridge.getFood() );
fridge.removeFood("кус-кус");
console.log( fridge.getFood() );
fridge.disable();
