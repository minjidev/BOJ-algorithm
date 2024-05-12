// [2212/센서](https://www.acmicpc.net/problem/2212)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k, arr] = input;
const N = +n;
const K = +k;
const sensors = arr.split(" ").map(Number);
const diff = [];
let minLen = 0;

sensors.sort((a, b) => a - b);

// 각 센서 간 거리
for (let i = 0; i < N - 1; i++) {
  diff.push(sensors[i + 1] - sensors[i]);
}

// 센서 간 거리 오름차순
diff.sort((a, b) => a - b);

// 최소 구간 더하기
for (let i = 0; i < N - K; i++) {
  minLen += diff[i];
}

console.log(minLen);
