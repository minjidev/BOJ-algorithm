const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +t;
const N = +input[0];
const arr1 = input[1].split(" ").map(Number);
const M = +input[2];
const arr2 = input[3].split(" ").map(Number);
let count = 0;

// 각 배열의 누적합 저장
const aSum = [];
const bSum = [];

for (let i = 0; i < N; i++) {
  let sum = 0;
  for (let j = i; j < N; j++) {
    sum += arr1[j];
    aSum.push(sum);
  }
}

for (let i = 0; i < M; i++) {
  let sum = 0;
  for (let j = i; j < M; j++) {
    sum += arr2[j];
    bSum.push(sum);
  }
}

aSum.sort((a, b) => a - b);
bSum.sort((a, b) => a - b);

// 이분탐색으로 B = T - A가 되는 구간 찾기
// bisectLeft(arr, x): 정렬된 배열에서 해당 index 또는 해당 값이 들어갈 자리
// bisectRight(arr, x): 정렬된 배열에서 해당 index + 1 또는 해당 값이 들어갈 자리
function bisectLeft(arr, x) {
  let s = 0;
  let e = arr.length;

  while (s < e) {
    let mid = Math.floor((s + e) / 2);

    if (arr[mid] < x) s = mid + 1;
    else e = mid;
  }

  return s;
}

function bisectRight(arr, x) {
  let s = 0;
  let e = arr.length;

  while (s < e) {
    let mid = Math.floor((s + e) / 2);

    if (arr[mid] <= x) s = mid + 1;
    else e = mid;
  }

  return s;
}

for (let a of aSum) {
  const cur = T - a;
  const left = bisectLeft(bSum, cur);
  const right = bisectRight(bSum, cur);
  count += right - left;
}

console.log(count);
