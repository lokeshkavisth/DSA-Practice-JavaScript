const nums = [
  1, 2, 4, 5, 6, 3, 2, 4, 4, 343, 467, 8, 8, 65, 34367, 8, 8, 9, 66, 53537,
];

function merge_Arrays(left_sub_array, right_sub_array) {
  let array = [];
  while (left_sub_array.length && right_sub_array.length) {
    if (left_sub_array[0] < right_sub_array[0]) {
      array.push(left_sub_array.shift());
    } else {
      array.push(right_sub_array.shift());
    }
  }
  return [...array, ...left_sub_array, ...right_sub_array];
}
function sortArray(nums) {
  const middle_index = nums.length / 2;
  if (nums.length < 2) {
    return nums;
  }
  const left_sub_array = nums.splice(0, middle_index);
  return merge_Arrays(sortArray(left_sub_array), sortArray(nums));
}

console.log(sortArray(nums));
