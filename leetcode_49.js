const groupAnagrams = function (arr) {
  if (arr.length <= 1) return [arr];

  let output = {}; // space complexity = O(n)

  // time complexity = O(n)
  for (const value of arr) {
    // convert the string into an array
    const charArray = value.split("");

    // short characters using their unicode (ASCII)
    // time complexity = O(n2) for sort length arrays
    // time complexity = O(n log n) for big arrays

    for (let i = 0; i < charArray.length - 1; i++) {
      for (let j = 0; j < charArray.length - i - 1; j++) {
        if (charArray[j].charCodeAt(0) > charArray[j + 1].charCodeAt(0)) {
          // Swap the characters within the array.
          [charArray[j], charArray[j + 1]] = [charArray[j + 1], charArray[j]];
        }
      }
    }

    // join back characters into string
    const sortedValue = charArray.join("");

    if (!output[sortedValue]) {
      output[sortedValue] = [value];
    } else {
      output[sortedValue].push(value);
    }
  }

  return Object.values(output);
};

const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(arr));
