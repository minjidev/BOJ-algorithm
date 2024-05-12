// [2285/우체국](https://www.acmicpc.net/problem/2285)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, ...arr] = input;
const N = +n;
const towns = arr.map((row) => row.split(" ").map(Number)); // [위치, 인구 수]
let sum = 0;
let answer = 0;

// 인구 총합의 중간값이 되는 지점에 우체국의 위치를 놓는다.
// 누적된 인구수가 전체 합/2 을 넘어가는 지점을 찾는다.

// 위치 기준 오름차순
towns.sort((a, b) => a[0] - b[0]);

const totalPop = towns.map(([, p]) => p).reduce((acc, cur) => acc + cur, 0);
const mid = totalPop / 2;

for (let [loc, pop] of towns) {
  sum += pop;
  if (sum >= mid) {
    answer = loc;
    break;
  }
}

console.log(answer);
