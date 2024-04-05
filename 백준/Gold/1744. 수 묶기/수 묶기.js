const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +n;
const arr = input.map(Number);
const positives = [];
const negatives = [];

let sum = 0;

for (let i = 0; i < N; i++) {
  const cur = arr[i];
  if (cur > 1) positives.push(arr[i]);
  else if (cur <= 0) negatives.push(arr[i]);
  else sum += cur;
}

positives.sort((a, b) => b - a);
negatives.sort((a, b) => a - b);

const pLen = positives.length;
const nLen = negatives.length;

// 양수 묶기
for (let i = 0; i < pLen; i += 2) {
  if (i + 1 >= pLen) sum += positives[i]; // 끝인 경우
  else sum += positives[i] * positives[i + 1];
}

// 음수 묶기
for (let i = 0; i < nLen; i += 2) {
  if (i + 1 >= nLen) sum += negatives[i]; // 끝인 경우
  else sum += negatives[i] * negatives[i + 1];
}

console.log(sum);
