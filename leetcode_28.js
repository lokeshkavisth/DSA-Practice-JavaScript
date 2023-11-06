const strStr = function (haystack, needle) {
  if (needle == "") return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (needle[0] == haystack[i]) {
      const n = needle.length;
      const str = haystack.substring(i, n + i);

      if (str == needle) return i;
    }
  }
  return -1;
};

const haystack = "sadbutsad",
  needle = "sad";

// const haystack = "hello",
//   needle = "ll";

console.log(strStr(haystack, needle));
