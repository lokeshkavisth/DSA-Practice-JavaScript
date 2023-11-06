const array = [1, 0, -1];

// const selectionSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minValue = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minValue]) {
//         minValue = j;
//       }
//     }

//     [arr[i], arr[minValue]] = [arr[minValue], arr[i]];
//   }
//   return arr;
// };

// console.log(selectionSort(array));

// Using pure function

const selectionSort = (arr) => {
  const myArray = arr.slice();

  for (let i = 0; i < myArray.length - 1; i++) {
    let minValue = i;
    for (let j = i + 1; j < myArray.length; j++) {
      if (myArray[j] < myArray[minValue]) {
        minValue = j;
      }
    }

    [myArray[i], myArray[minValue]] = [myArray[minValue], myArray[i]];
  }
  return myArray;
};

console.log(selectionSort(array));
console.log(array);
