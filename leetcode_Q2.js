let l1 = [2, 4, 3],
  l2 = [5, 6, 4];

const addTwoNumbers = function (l1, l2) {
  let newl1 = l1.reverse(),
    newl2 = l2.reverse(),
    newList1 = Number(newl1.join("")),
    newList2 = Number(newl2.join("")),
    sum = newList1 + newList2 + "",
    newArray = sum.split("").reverse(),
    l3 = [],
    i = 0;
  while (i < newArray.length) {
    let element = Number(newArray[i]);
    l3.push(element);
    i++;
  }
  console.log(l3);
};

addTwoNumbers(l1, l2);
