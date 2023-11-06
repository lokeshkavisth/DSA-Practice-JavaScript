// const arr = [1, 2, 4, 5, 6, 7, 8];

// const result = arr.some((element, index) => arr.indexOf(element) !== index);

// console.log(result);

////////////

// function calculateProfit(price) {
//   let minPrice = price[0];
//   let maxProfit = 0;

//   for (let i = 1; i < price.length; i++) {
//     if (price[i] < minPrice) {
//       minPrice = price[i];
//     } else {
//       const potentialProfit = price[i] - minPrice;
//       if (potentialProfit > maxProfit) {
//         maxProfit = potentialProfit;
//       }
//     }
//   }
//   return maxProfit;
// }

// const price = [1, 2, 4, 7, 8, 6, 3];
// console.log(calculateProfit(price));

///////////////

// function findLongString(str) {
//   let long = 0;

//   for (let i = 0; i < str.length; i++) {
//     let substring = "";
//     for (let j = i; j < str.length; j++) {
//       const a = str[j];
//       if (substring.includes(a)) {
//         break;
//       }
//       substring += a;
//       if (substring.length > long) {
//         long = substring.length;
//       }
//     }
//   }

//   return long;
// }

// const inputString = "aadefbcabcbb";
// const longestLength = findLongString(inputString);
// console.log(longestLength);

let x = "silent",
  y = "listen";

const sortedCharacters = x
  .split("")
  .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

const sortedCharacters2 = y
  .split("")
  .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

if (x.length !== y.length) return false;
if (x === y) return true;
