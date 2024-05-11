// [13164/행복 유치원](https://www.acmicpc.net/problem/13164)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [nums, arr] = input;
const [N, K] = nums.split(" ").map(Number);
const students = arr.split(" ").map(Number);
const diff = [];
let minCost = 0;

// 각 원생의 키 차이를 구한다.
for (let i = 0; i < N - 1; i++) {
  diff.push(students[i + 1] - students[i]);
}

diff.sort((a, b) => a - b);

// 전체 키 차이(N-1) 중 조를 나누는 막대를 놓을 K-1개를 제외: (N-1) - (K-1) = N-K
// N-K개의 키 차이를 더한다.
for (let i = 0; i < N - K; i++) {
  minCost += diff[i];
}

console.log(minCost);
