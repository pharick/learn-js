function createCalendar(id, year, month) {
  var calendar = document.createElement('table');
  calendar.innerHTML = '<thead><tr><th>Пн</th><th>Вт</th><th>Cр</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr></thead><tbody><tr></tr></tbody>';
  var tbody = calendar.querySelector('tbody');
  var tr = calendar.querySelector('tbody tr');

  var date = new Date(year, month);

  var weekday = date.getDay();
  if (weekday == 0) weekday = 7;

  for (var i = 0; i < weekday - 1; i++) {
    tr.append(document.createElement('td'));
  }

  do {
    var day = document.createElement('td');
    day.innerHTML = date.getDate();
    tr.appendChild(day);

    if (date.getDay() == 0) {
      tr = document.createElement('tr');
      tbody.appendChild(tr);
    }

    date.setDate(date.getDate() + 1);
  } while (date.getDate() != 1)

  document.getElementById(id).appendChild(calendar);
}
