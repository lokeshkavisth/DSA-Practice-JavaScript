let nums = [-1, 0, 1, 2, -1, -4];
// let nums = [1, 2, -2, -1];
// let nums = [0, 0, 0, 0];
// let nums = [-1, 0, 1, 0];

const threeSum = function (nums) {
  let sum = [],
    output = [];

  // check if the sum value == 0
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

  console.log("sum", sum);
  // sort the array

  sum.map((myArray) => {
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
  });

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
