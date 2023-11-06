let haystack = "sadbutsad",
  needle = "sad";

const strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr(haystack, needle));
