const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +t;
const N = +input[0];
const arr1 = input[1].split(" ").map(Number);
const M = +input[2];
const arr2 = input[3].split(" ").map(Number);
const sumMap = new Map();
let count = 0;

// arr1의 모든 누적합을 구하고 이에 대한 개수 저장
for (let i = 0; i < N; i++) {
  let sum = 0;
  for (let j = i; j < N; j++) {
    sum += arr1[j];
    sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
  }
}

// arr2의 모든 누적합을 구하고 sumMap 값과 더해 T를 만들 수 있는 개수를 구한다.
for (let i = 0; i < M; i++) {
  let sum = 0;
  for (let j = i; j < M; j++) {
    sum += arr2[j];
    const target = T - sum;
    if (sumMap.has(target)) {
      count += sumMap.get(target);
    }
  }
}

console.log(count);
