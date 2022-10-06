const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "prac.txt";
let input = fs.readFileSync(filePath).toString().trim();

const [n, k] = input.split(" ").map(Number);
const MOD = 1000000000;

const dp = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
dp[0][0] = 1; // 0개로 0을 만드는 경우의 수 1
for (let l = 1; l <= k; l++) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      dp[l][i] += dp[l - 1][i - j];
      dp[l][i] %= MOD;
    }
  }
}

console.log(dp[k][n]);
