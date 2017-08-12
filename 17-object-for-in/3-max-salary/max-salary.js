var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var maxSalary = 0;
var maxSalaryEmployer = "";
for (var employer in salaries) {
  if (salaries[employer] > maxSalary) {
    maxSalary = salaries[employer];
    maxSalaryEmployer = employer;
  }
}

console.log(maxSalaryEmployer || "Нет сотрудников");
