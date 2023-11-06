/* check weather a given word is an exceeding word */
// exceeding word = words in increasing order

function findExceedingWord(str) {
  for (let i = 0; i < str.length - 1; i++) {
    const asciiOne = str.charCodeAt(i);
    const asciiTwo = str.charCodeAt(i + 1);

    if (asciiOne >= asciiTwo) {
      return false;
    }
  }
  return true;
}

const str = "abcd";
const output = findExceedingWord(str);
console.log(output);
