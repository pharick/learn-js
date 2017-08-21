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
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
console.log( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

console.log( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье
