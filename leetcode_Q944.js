let strs = ["abc", "bce", "cae"];
const minDeletionSize = function (strs) {
  for (let i = 0; i < strs.length; i++) {
    // const elements = strs[i];
    // console.log("pass ", i);
    for (let j = 0; j < strs[i].length; j++) {
      if (strs[i][j - 1] < strs[i][j] || strs[i][j - 1] > strs[i][j]) {
        console.log("true1");
      } else {
        console.log("false");
      }
      //   console.log(strs[i][j]);
    }
  }
};

minDeletionSize(strs);
// let c = "abcd";
// console.log(c.charCodeAt(0));
