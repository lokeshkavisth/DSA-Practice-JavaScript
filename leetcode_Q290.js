// Word pattern
// Given a pattern and a string s, find if s follows the same pattern.

let pattern = "abba",
  s = "dog cat cat dog";
const wordPattern = function (pattern, s) {
  if (
    s.split(" ").slice(0, 2) == s.split(" ").slice(2).reverse() &&
    pattern.split("").slice(0, 2) == pattern.split("").slice(2).reverse()
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(wordPattern(pattern, s));
