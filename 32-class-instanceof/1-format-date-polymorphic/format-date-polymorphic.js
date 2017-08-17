exports.formatDate = formatDate;

function formatDate(date) {
  var dateObj = getObj(date);

  var dd = dateObj.getDate();
  if (dd < 10) dd = '0' + dd;
  var mm = dateObj.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;
  var yy = dateObj.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;

  function getObj(date) {
    if ( Array.isArray(date) ) {
      return new Date(date[0], date[1], date[2]);
    } else if (typeof date == 'number') {
      return new Date(date * 1000);
    } else {
      return new Date(date);
    }
  }
}
