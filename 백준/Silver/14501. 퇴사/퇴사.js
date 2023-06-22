const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [num, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +num;
const schedule = arr.map((row) => row.split(" ").map(Number));
let maxVal = Number.MIN_SAFE_INTEGER;

function DFS(date, pSum) {
  // 퇴사일이면
  if (date === n) {
    maxVal = Math.max(maxVal, pSum);
    return;
  }

  // 퇴사일 이전이면
  const [t, p] = schedule[date];

  // date 포함 : 상담 가능한 경우(퇴사일 이전)
  if (t + date <= n) DFS(date + t, pSum + p);
  // date 포함 X
  DFS(date + 1, pSum);
}

for (let i = 0; i < n; i++) {
  DFS(i, 0);
}

console.log(maxVal);