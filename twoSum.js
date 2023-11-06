// Method 1

// time complexity =  O(n^2)
// space complexity = O(n)

const twoSum = function (nums, target) {
  if (nums.length <= 1) return [];

  function findPair(num) {
    for (let i = num + 1; i < nums.length; i++) {
      if (nums[num] + nums[i] === target) {
        return [num, i];
      }
    }

    if (num + 1 < nums.length) {
      return findPair(num + 1);
    }

    return [];
  }

  return findPair(0);
};

// Method 2
// Time and Space complexity = O(n) using hashmap method

// const twoSum = function (nums, target) {
//   const numMap = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (numMap.has(complement)) {
//       return [numMap.get(complement), i];
//     }
//     numMap.set(nums[i], i);
//   }

//   return [];
// };

const nums = [-9, 18],
  target = 9;
console.log(twoSum(nums, target));
