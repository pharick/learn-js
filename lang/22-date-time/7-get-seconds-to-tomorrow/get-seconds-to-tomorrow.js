function getSecondsToTomorrow() {
  var now = new Date();
  var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return Math.floor( (tomorrow - now) / 1000 );
}

console.log(getSecondsToTomorrow());
