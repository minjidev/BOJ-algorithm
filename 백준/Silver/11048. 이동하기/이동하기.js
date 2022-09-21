const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "prac.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const map = input.map((val) => val.split(" ").map(Number));

let dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    dp[i][j] =
      Math.max(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) +
      map[i - 1][j - 1];
  }
}

console.log(dp[n][m]);
