// [15486/퇴사 2](https://www.acmicpc.net/problem/15486)
// [참고](https://charles098.tistory.com/104)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, ...arr] = input;
const N = +n;
const MAX = 1500000;
const schedule = arr.map((row) => row.split(" ").map(Number));
const dp = Array(MAX + 1).fill(0);
/**
 * - dp[i] = i일까지 누적한 최대 이익
 * - 오늘까지의 이익은
 *      - 어제까지 상담해서 모은 이익 또는
 *      - (이전 날짜 + 상담 기간 = 오늘)인 경우 해당 상담 이익
 *          - 이때 상담이 끝나는 날짜는 (시작일 + T - 1)
 *          - 예를 들어 1일에 시작해 3일이 걸린다면 1, 2, 3일에 끝난다. (1 + 3 - 1)
 *          - 이에 대한 이익이 생기는 시점은 바로 다음날인 (시작일 + T)일
 * - 따라서 첫째날에는 아무런 이익이 없다. 당일에 상담을 끝내도 다음 날이 돼야 이익이 생기기 때문.
 * - 왜 dp[i] = Math.max(dp[i-1], dp[i])가 아닌거지?
 *      - dp[i]는 이미 그 날짜에 가능한 최대 이익을 반영하고 있다. 따라서 i일에 상담을 하지 않는 경우,
 *   단순히 i-1일의 이익을 그대로 사용하는 게 아니라, 이후 날짜에 대한 계산에도 영향을 줄 수 있는 최대 이익 갱신 필요
 * */

for (let i = 0; i < N; i++) {
  const [time, price] = schedule[i];
  // i일 상담을 하는 경우: 현재까지 이익 + 상담 이익과 기존 값 가운데 최댓값으로 갱신
  dp[i + time] = Math.max(dp[i + time], dp[i] + price);
  // i일에 상담을 하지 않는 경우: 현재까지의 누적 이익과 기존 값 가운데 최댓값으로 갱신
  dp[i + 1] = Math.max(dp[i], dp[i + 1]);
}

console.log(dp[N]);
