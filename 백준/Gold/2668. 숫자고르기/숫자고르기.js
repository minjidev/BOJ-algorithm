const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +n;
const nums = [0, ...input.map(Number)];
const answer = [];
let ch;

function DFS(start, next) {
  // 시작 숫자로 돌아오면 true, 아니면 false
  if (ch[next] === 0) {
    ch[next] = 1;
    return DFS(start, nums[next]);
  } else {
    if (start === next) return true;
    return false;
  }
}

for (let i = 1; i <= N; i++) {
  ch = Array(N + 1).fill(0);
  if (DFS(i, i)) answer.push(i);
}

console.log([answer.length, ...answer].join("\n"));
