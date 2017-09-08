exports.checkSpam = checkSpam;

function checkSpam(str) {
  str = str.toLowerCase();
  return !!(~str.indexOf("viagra") || ~str.indexOf("xxx"));
}
