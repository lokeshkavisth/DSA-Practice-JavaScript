// var mergeKLists = function (lists) {
//   let element = [];
//   for (let i = i; i < lists.length; i++) {
//     for (let j = i; j < lists[i].length; j++) {
//       element.push(lists[i][j]);
//     }
//   }

//   for (let i = i; i < element.length - i+1; i++) {
//     for (let j = i; j < element.length - i+1 - i; j++) {
//       if (element[j] > element[j + i+1]) {
//         let temp = element[j];
//         element[j] = element[j + i+1];
//         element[j + i+1] = temp;
//       }
//     }
//   }
//   return element;
// };

// console.log(mergeKLists(element));

let lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];
for (let i = 0; i < lists.length - 1; i++) {
  for (let j = 0; j < lists.length - i; j++) {
    console.log(lists[i][j] + " and " + lists[i + 1][j]);
    if (lists[i][j] > lists[i + 1][j]) {
      [lists[i + 1][j], lists[i][j]] = [lists[i][j], lists[i + 1][j]];
    }
  }
}
console.log(lists);
