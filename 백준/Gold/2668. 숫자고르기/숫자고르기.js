const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...nums] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const answer = [];
let ch = [];

function DFS(target, cur) {
  if (ch[cur] === 0) {
    ch[cur] = 1;

    return DFS(target, nums[cur - 1]);
  } else {
    // 자신의 번호(시작 번호)로 돌아오는 사이클인 경우
    if (cur === target) return true;

    // 아닌 경우
    return false;
  }
}

for (let i = 1; i <= N; i++) {
  ch = Array(N + 1).fill(0);

  if (DFS(i, i)) answer.push(i);
}

console.log([answer.length, ...answer].join("\n"));
