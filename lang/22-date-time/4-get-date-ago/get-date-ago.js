exports.getDateAgo = getDateAgo;

function getDateAgo(date, days) {
  var newDate = new Date();
  newDate.setDate(date.getDate() - days)
  return newDate.getDate();
}
