const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [nums, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, H] = nums.split(" ").map(Number);
const arr = input.map(Number);
const top = [];
const bottom = [];

for (let i = 0; i < N; i++) {
  if (i % 2 === 0) top.push(arr[i]);
  else bottom.push(arr[i]);
}

top.sort((a, b) => a - b);
bottom.sort((a, b) => a - b);

function lowerBound(arr, target) {
  let s = 0;
  let e = arr.length;

  while (s < e) {
    const mid = Math.floor((s + e) / 2);

    if (arr[mid] < target) {
      s = mid + 1;
    } else {
      e = mid;
    }
  }

  return s;
}

let minBreaks = Number.MAX_SAFE_INTEGER;
let minCount = 0;

// H의 각 구간에서 종유석과 석순 개수 구하기
for (let i = 1; i <= H; i++) {
  const breakCount = N - lowerBound(top, i) - lowerBound(bottom, H - i + 1);

  if (breakCount < minBreaks) {
    minBreaks = breakCount;
    minCount = 1;
  } else if (breakCount === minBreaks) {
    minCount += 1;
  }
}

console.log(minBreaks, minCount);
