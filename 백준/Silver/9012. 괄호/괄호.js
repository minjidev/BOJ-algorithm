const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +n;
const ps = arr.map((pair) => pair.split(""));

const answer = [];

for (let i = 0; i < N; i++) {
  const stack = [];
  for (let [idx, p] of ps[i].entries()) {
    stack.push(p);

    if (p === ")") {
      if (idx === 0) {
        break;
      }
      if (stack.at(-2) === "(") {
        stack.pop();
        stack.pop();
      }
    }
  }
  if (stack.length === 0) answer.push("YES");
  else answer.push("NO");
}

console.log(answer.join("\n"));
