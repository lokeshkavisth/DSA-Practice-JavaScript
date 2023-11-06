const maxSubArray = function (nums) {
  // let subArray = [];
  let maxSum = 0;
  let currentSum = Number.NEGATIVE_INFINITY;

  // for (let i = 0; i < nums.length; i++) {
  //   const currentSubArray = [];

  //   for (let j = i; j < nums.length; j++) {
  //     currentSubArray.push(nums[j]);
  //   }
  //   subArray.push([...currentSubArray]);
  // }

  // for (const arr of subArray) {
  //   let sum = 0;

  //   for (let i = 0; i < arr.length; i++) {
  //     sum += arr[i];
  //   }

  //   if (sum > maxSum) {
  //     maxSum = sum;
  //   }
  // }

  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(nums[i] + currentSum, nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const nums = [1];
const nums = [5, 4, -1, 7, 8];

console.log(maxSubArray(nums));
