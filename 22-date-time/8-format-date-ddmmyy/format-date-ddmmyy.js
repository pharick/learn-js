exports.formatDate = formatDate;

function formatDate(date) {
  var options = {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit"
                };

  return date.toLocaleString("ru", options);
}
