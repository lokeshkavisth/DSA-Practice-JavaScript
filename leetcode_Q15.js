let nums = [-1, 0, 1, 2, -1, -4];
// let nums = [
//   [-1, 0, 1],
//   [-1, 0, 1],
//   [-1, -1, 2],
// ];

const threeSum = function (nums) {
  let isEmpty = 0,
    sum = [],
    output = [];
  // for (const x of nums) {
  //   isEmpty += x;
  // }
  // if (isEmpty == 0) {
  //   if (isEmpty != 0) {
  //     return [];
  //   } else {
  //     return [[0, 0, 0]];
  //   }
  // }

  //   check if the sum value == 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      for (let k = 0; k < j + 1; k++) {
        if (i != j && i != k && j != k) {
          if (nums[i] + nums[j] + nums[k] == 0) {
            sum.push([nums[i], nums[j], nums[k]]);
          }
        }
      }
    }
  }
  // sort the array
  for (let i = 0; i < sum.length; i++) {
    for (let j = 0; j < sum[i].length; j++) {
      for (let k = 0; k < sum[i].length - i; k++) {
        if (sum[j][k] > sum[j][k + 1]) {
          [sum[j][k], sum[j][k + 1]] = [sum[j][k + 1], sum[j][k]];
        }
      }
    }
  }

  // check duplicate arrays

  for (let i = 0; i < sum.length - 1; i++) {
    if (
      (sum[i].length === sum[i + 1].length &&
        sum[i].every((element, index) => element === sum[i + 1][index])) ===
      true
    ) {
      sum.splice(i, i + 1);
    }
  }
  // reverse the array
  for (let i = sum.length - 1; i >= 0; i--) {
    output.push(sum[i]);
  }

  return output;
};

console.log(threeSum(nums));
