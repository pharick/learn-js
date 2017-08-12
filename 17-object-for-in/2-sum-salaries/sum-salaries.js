var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var sum = 0;
for (var employer in salaries){
  sum += salaries[employer];
}
console.log(sum);
