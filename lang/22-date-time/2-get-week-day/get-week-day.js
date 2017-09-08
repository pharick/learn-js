exports.getWeekDay = getWeekDay;

function getWeekDay(date) {
  var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  return days[date.getDay()];
}

// function getWeekDay(date) {
//   return date.toLocaleString('ru-RU', {weekday: 'short'});
// }
