// Detect Capital
let word = "Goofle";

const detectCapitalUse = function (word) {
  if (word === word.toUpperCase() || word === word.toLowerCase()) {
    return true;
  } else if (
    word.slice(0, 1) === word.slice(0, 1).toUpperCase() &&
    word.slice(1) === word.slice(1).toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(detectCapitalUse(word));
