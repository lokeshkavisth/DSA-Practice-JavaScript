let array = [1, 5, 8, 2, 3];

function divide(array, start, end) {
  if (start < end) {
    let pivotIndex = quickSort(array, start, end);

    divide(array, start, pivotIndex - 1);
    divide(array, pivotIndex + 1, end);
  }
}

divide(array, 0, array.length - 1);

function quickSort(array, start, end) {
  let pivot = array[end];
  let j = start - 1;
  for (let i = start; i < end; i++) {
    if (array[i] < pivot) {
      j++;

      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  j++;
  let temp = array[j];
  array[j] = pivot;
  array[end] = temp;
  return j;
}
console.log(array);
