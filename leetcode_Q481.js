let n = 6698;
const magicalString = function (n) {
  let ind = 12;
  let s = "1221121221221121122";
  while (s.length < n) {
    const end = s.substring(s.length - 1) === "2" ? "1" : "2";
    s = parseInt(s.substring(ind, ind + 1)) === 2 ? s + end + end : s + end;
    ind++;
  }
  return (s.slice(0, n).match(/[1]/g) || []).length;
};

console.log(magicalString(n));
