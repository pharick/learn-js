function getSecondsToday() {
  var date = new Date();
  return date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds();
}

console.log(getSecondsToday());
