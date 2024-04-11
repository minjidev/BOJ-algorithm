const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [nums, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

// 두 공유기 사이의 거리를 기준으로 이분탐색
// 공유기 사이 거리 최소값 = s, 최대값 = e
// 중간값인 mid가 공유기 사이 거리 값인 경우, 놓을 수 있는 공유기 개수와 설치해야 하는 개수 C를 비교하며 범위를 좁힌다.
// 설치 가능한 개수 < C -> 간격을 좁히고,  설치 가능한 개수 > C -> answer에 현재 값 저장하고, 간격을 넓힌다.

const [N, C] = nums.split(" ").map(Number);
const houses = arr.map(Number);

houses.sort((a, b) => a - b);

let s = 1;
let e = houses[N - 1] - houses[0];
let maxDis = 0;

while (s <= e) {
  const mid = Math.floor((s + e) / 2);

  // 공유기 사이 간격이 mid일 때 설치 가능한 공유기 개수 구하기
  let prev = houses[0];
  let cnt = 1; // 가장 왼쪽 집에는 무조건 설치
  for (let cur of houses) {
    // 두 공유기가 서로 mid 이상 떨어져있다면 설치
    if (cur - prev >= mid) {
      cnt += 1;
      prev = cur;
    }
  }

  // 더 설치해야 하는 경우 간격을 좁힌다
  if (cnt < C) {
    e = mid - 1;
  } else {
    // C 이상 설치한 경우 간격을 넓히면서 최소 거리를 찾는다.
    maxDis = mid;
    s = mid + 1;
  }
}

console.log(maxDis);
