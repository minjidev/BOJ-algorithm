const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = n.split(" ").map(Number);
const nums = arr.split(" ").map(Number);
nums.sort((a, b) => a - b);
let answer = 0;

// 재귀 근데 몇 번 내려가야할지 안 정해져있음
function DFS(L, num) {
  // 숫자가 완성되면
  if (num > N) return;
  else {
    for (let i = 0; i < K; i++) {
      answer = Math.max(num, answer);
      DFS(L + 1, 10 * num + nums[i]);
    }
  }
}

DFS(0, 0);
console.log(answer);