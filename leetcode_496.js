const nextGreaterElement = function (nums1, nums2) {
  let stack = [];

  for (const num of nums1) {
    if (nums2.includes(num)) {
      let numIndex = nums2.indexOf(num);
      if (numIndex === nums2.length) {
        stack.push(-1);
        return;
      }

      for (let i = numIndex + 1; i < nums2.length; i++) {
        if (nums2[i] === undefined) return;

        if (nums2[i] > num) {
          // console.log(nums2[i]);
          stack.push(nums2[i]);
          break;
        }
        if (i === nums2.length && !nums2[i] > num) {
          stack.push(-1);
        }
      }
    }
  }

  return stack;
};
const nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];

console.log(nextGreaterElement(nums1, nums2));
