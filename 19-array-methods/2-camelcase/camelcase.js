exports.camelize = camelize;

function camelize(str) {
  var words = str.split("-");
  for (var i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join("");
}
