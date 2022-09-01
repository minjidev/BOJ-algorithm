const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
function sol(n, arr) {
  let res = new Array(n).fill(-1);

  stack = [];
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];

    while (stack.length && stack.at(-1)[1] < cur) {
      res[stack.pop()[0]] = cur;
    }
    stack.push([i, cur]);
  }
  return res.join(" ");
}

let arr = input[1].split(" ").map((item) => +item);
console.log(sol(+input[0], arr));