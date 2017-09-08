exports.getLocalDay = getLocalDay;

function getLocalDay(date) {
  var day = date.getDay();
  return (day == 0) ? 7 : day;
}
