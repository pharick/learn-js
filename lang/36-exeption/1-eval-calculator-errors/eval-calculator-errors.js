var expression = prompt("Введите выражение", 0);

try {
  var result = eval(expression);
  if ( isNaN(result) ) throw new TypeError("Получился NaN");
  console.log( result );
} catch(e) {
  console.log("Ошибка!");
  console.log(e.name);
  console.log(e.message);
}
