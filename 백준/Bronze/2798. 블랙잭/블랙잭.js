const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [nums, arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = nums.split(" ").map(Number);
const cards = arr.split(" ").map(Number);
let minVal = Number.MAX_SAFE_INTEGER;
let diff = Number.MAX_SAFE_INTEGER;
let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    for (let k = 0; k < N; k++) {
      if (k === j || k === i) continue;
      const sum = cards[i] + cards[j] + cards[k];
      diff = M - sum;

      if (diff < 0) continue;
      if (diff < minVal) {
        minVal = diff;
        answer = sum;
      }
    }
  }
}

console.log(answer);