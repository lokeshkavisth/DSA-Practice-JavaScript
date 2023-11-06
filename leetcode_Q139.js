let s = "catsandog",
  wordDict = ["cats", "dog", "sand", "and", "cat"];

const wordBreak = function (s, wordDict) {
  let resultArray = [];
  wordDict.map((index) => {
    let indexOfWord = s.indexOf(index);

    if (indexOfWord >= 0) {
      s = s.substring(indexOfWord + index.length);
      resultArray.push(1);
    }
  });

  return resultArray.length === wordDict.length ? true : false;
};

// wordBreak(s, wordDict);
console.log(wordBreak(s, wordDict));
