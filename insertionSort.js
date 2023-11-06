const array = [
  1, 2, 1, 3, 4, 5, 6, 7, 78, 453, 2, 1, 1, 2, 3, 4, 54, 5, 6, 67, 7,
];

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      } else {
        break;
      }
    }
  }
  return array;
};

// insertionSort(array);
console.log(insertionSort(array));
