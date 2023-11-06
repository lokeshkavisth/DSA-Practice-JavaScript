/* find element in an array using binary search */

function binarySearch(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (sortedArr[mid] === target) return mid;
    else if (sortedArr[mid] > target) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}

const arr = [1, 0, 3, -5, 4, 2];
const target = 3;
const sortedArr = arr.slice().sort((a, b) => a - b);
const targetIndex = binarySearch(sortedArr, target);
console.log(sortedArr[targetIndex]);
