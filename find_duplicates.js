// Given an array of n elements that contains elements from 0 to n-1, with any of these numbers appearing any number of times. Find these repeating numbers in O(n) and use only constant memory space.

// Note: The repeating element should be printed only once.

// Example:

const n = 7,
  arr = [1, 2, 3, 4, 3, 2, 1, 6, 6];
// Output: 1, 3, 6

// Explanation: The numbers 1 , 3 and 6 appears more than once in the array.

function findDuplicates(n, arr) {
  const set = new Set(arr);
  let copyArr = arr.slice();

  if (n === set.size) return "No repeating elements found!";

  for (const value of set) {
    const indexOfValue = copyArr.indexOf(value);
    copyArr.splice(indexOfValue, 1);
  }
  //   return copyArr;

  //   return duplicate values only once
  const setOfDuplicates = new Set(copyArr);
  return Array(...setOfDuplicates);
}

console.log(findDuplicates(n, arr));
