exports.addClass = addClass;

function addClass(obj, cls) {
  var classes = (obj.className) ? obj.className.split(" ") : [];
  if (classes.indexOf(cls) == -1) classes.push(cls);
  obj.className = classes.join(" ");
}
