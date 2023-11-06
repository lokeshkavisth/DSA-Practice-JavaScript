let s = "cbaebabacd",
  p = "ba";

// const findAnagrams = function (s, p) {
//   // let a = s.match(p);
//   console.log(s.match(/[${p}]g/));
// };

// findAnagrams(s, p);
// console.log(findAnagrams(s, p));

// var rgxp = new RegExp(p + "g");
// console.log(s.match(rgxp));

// let myString = "Tata Nexon EV tata";
// let myVariable = "Tata";
let myReg = new RegExp(p, "gi");
let myMatch = s.match(myReg);
console.log(myMatch);
