const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [nums, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = nums.split(" ").map(Number);
const arr = input.split(" ").map(Number);
// 블루레이 크기로 이분탐색
// 블루레이 크기의 최소값 = 1, 최대값은 arr의 합
// 크기에 따라 넣을 수 있는 레코드 모두 넣으면서 확인
// 개수가 M개보다 작으면 크기를 늘리고, 아니면 줄이기
let s = Math.max(...arr);
let e = arr.reduce((acc, cur) => acc + cur, 0);

let minSize = e;

while (s < e) {
  const mid = Math.floor((s + e) / 2); // 블루레이 크기
  let sum = 0;
  let count = 1;

  for (let i = 0; i < N; i++) {
    if (sum + arr[i] > mid) {
      sum = arr[i];
      count += 1;
      continue;
    }

    sum += arr[i];
  }

  if (count > M) {
    s = mid + 1;
  } else {
    e = mid;
    minSize = mid;
  }
}

console.log(minSize);
