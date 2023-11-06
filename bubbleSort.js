const arr = [1, 23, 54, 6, 3, 55454, 823, 56, 1, 6, 7, 3, 5, 7, 35, 7756, 3];

// 1. Method one for swap

// const bubbleSort = (array) => {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length - i; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// };
// console.log(bubbleSort(arr));

// 2. Method two for swap

// const bubbleSort = (array) => {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length - i; j++) {
//       if (array[j] > array[j + 1]) {
//         [array[j], array[j + 1]] = [array[j + 1], array[j]];
//       }
//     }
//   }
//   return array;
// };
// console.log(bubbleSort(arr));

// 3. Using pure function

const bubbleSort = (array) => {
  const myArray = array.slice();
  for (let i = 0; i < myArray.length - 1; i++) {
    for (let j = 0; j < myArray.length - i; j++) {
      if (myArray[j] > myArray[j + 1]) {
        [myArray[j], myArray[j + 1]] = [myArray[j + 1], myArray[j]];
      }
    }
    console.log(myArray);
  }
  return myArray;
};
console.log(bubbleSort(arr));
// console.log(arr); // With pure function main array won't be affect
