var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

function printListR(list) {
  console.log(list.value);
  printList(list.next);
}

function printReverseListR(list) {
  if (list.next) printReverseListR(list.next);
  console.log(list.value);
}

function printReverseList(list) {
  var arr = [];

  while (list) {
    arr.push(list.value);
    list = list.next;
  }
  arr.reverse();

  for (var i = 0; i < arr.length; i++) console.log(arr[i]);
}

printReverseList(list);
