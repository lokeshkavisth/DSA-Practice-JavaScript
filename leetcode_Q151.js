let s = "the    sky is blue";
const reverseWords = function (s) {
  let b = s.split(" "),
    c = [];
  b.map((e) => {
    if (e.length > 0) {
      c.unshift(e);
    }
  });
  console.log(c.join(" "));
};

reverseWords(s);
