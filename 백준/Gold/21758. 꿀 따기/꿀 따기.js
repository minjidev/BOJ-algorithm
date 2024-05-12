// [21758/꿀 따기](https://www.acmicpc.net/problem/21758)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, arr] = input;

const N = +n;
const honey = arr.split(" ").map(Number);
let maxHoney = 0;
const acc = Array(N).fill(0);

// 누적합 구하기
acc[0] = honey[0];
for (let i = 1; i < N; i++) {
  acc[i] = honey[i] + acc[i - 1];
}

// 벌-벌-꿀통인 경우
for (let i = 1; i < N - 1; i++) {
  // 가장 왼쪽에 한 마리 고정, 다른 한 마리를 이동하면서 최댓값 찾기
  const totalHoney = acc[N - 1] - honey[0] - honey[i] + (acc[N - 1] - acc[i]);
  maxHoney = Math.max(maxHoney, totalHoney);
}

// 꿀통-벌-벌인 경우
for (let i = 1; i < N - 1; i++) {
  // 가장 오른쪽에 한 마리 고정, 다른 한 마리를 이동하면서 최댓값 찾기
  const totalHoney = acc[N - 2] - honey[i] + acc[i - 1];
  maxHoney = Math.max(maxHoney, totalHoney);
}

// 벌-꿀통-벌인 경우
for (let i = 1; i < N - 1; i++) {
  // 가장 왼쪽, 가장 오른쪽에 고정하고 벌통이 움직일 때 최댓값 찾기
  const totalHoney = acc[i] - honey[0] + acc[N - 2] - acc[i - 1];
  maxHoney = Math.max(maxHoney, totalHoney);
}

console.log(maxHoney);
