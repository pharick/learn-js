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
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
console.log( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

dietItems.forEach(function(item) {
  console.log( item.title ); // сок, зелень
  fridge.removeFood(item);
});

console.log( fridge.getFood().length ); // 2
