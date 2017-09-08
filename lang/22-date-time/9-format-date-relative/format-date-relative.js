exports.formatDate = formatDate;

function formatDate(date) {
  var now = new Date();
  var diff = Math.floor( (now - date) / 1000 );

  if (diff < 1) {
    return "только что";
  } else if (diff < 60) {
    return diff + " сек. назад";
  } else if (diff < 3600) {
    return Math.floor(diff / 60) + " мин. назад";
  } else {
    var day = (date.getDate() < 10) ? ( "0" + date.getDate() ) : date.getDate();
    var month = (date.getMonth() < 9) ? ( "0" + (date.getMonth() + 1) ) : date.getMonth() + 1;
    var year = date.getYear() % 100;
    return day + "." + month + "." + year + " " + date.getHours() + ":" + date.getMinutes();
  }
}
