// Sorting array using bubble sort

let nums = [5, 2, 3, 1];
var sortArray = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
};
console.log(sortArray(nums));

let a = [54, 19, 3, 7, 23, 10];
let min,
  temp = 0;
for (let i = 0; i < a.length; i++) {
  min = i;
  for (let j = 0; j < a.length; j++) {
    if (a[j] < a[min]) {
      min = j;
    }
  }
  temp = a[i];
  a[i] = a[min];
  a[min] = temp;
}

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
