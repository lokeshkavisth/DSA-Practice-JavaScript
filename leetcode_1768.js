const mergeAlternately = function (word1, word2) {
  // check for string length
  if (word1.length <= 1) return word1 + word2;
  if (word2.length <= 1) return word1.charAt(0) + word2 + word1.slice(1);

  // check the smallest string length and set it in a variable
  let strLength = 0;
  word1.length > word2.length
    ? (strLength = word2.length)
    : (strLength = word1.length);

  let str = "";

  for (let i = 0; i < strLength; i++) {
    str = str + word1.charAt(i) + word2.charAt(i);
  }

  word1.length > word2.length
    ? (str = str + word1.slice(strLength))
    : (str = str + word2.slice(strLength));

  return str;
};

const word1 = "cdf",
  word2 = "a";

console.log(mergeAlternately(word1, word2));
