const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +n;
const arr = input.split(" ").map(Number);
const LIS = [];

// 이진 탐색으로 현재 숫자가 들어갈 수 있는 가장 낮은 위치를 찾는다.
function bisectLeft(arr, x) {
  let s = 0;
  let e = arr.length;

  while (s <= e) {
    const mid = Math.floor((s + e) / 2);

    if (arr[mid] < x) s = mid + 1;
    else e = mid - 1;
  }

  return s;
}

// 배열의 각 요소가 스택에 들어가거나 교체된다.
// 이때 내가 들어갈 수 있는 가장 작은 idx에 들어가는 형태
for (let num of arr) {
  const idx = bisectLeft(LIS, num);

  if (idx === LIS.length) {
    LIS.push(num);
  } else {
    LIS[idx] = num;
  }
}

console.log(LIS.length);
