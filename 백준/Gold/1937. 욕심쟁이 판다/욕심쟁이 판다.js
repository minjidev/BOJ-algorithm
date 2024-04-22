const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +n;
const board = input.map((row) => row.split(" ").map(Number));
// 판다가 이동할 수 있는 칸 수를 DP 테이블에 저장
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const dp = Array.from({ length: N }, () => Array(N).fill(0));

let maxCount = 0;

function isOutside(x, y) {
  return x < 0 || y < 0 || x >= N || y >= N;
}

function DFS(x, y) {
  // 방문한 경우
  if (dp[x][y] !== 0) return dp[x][y];

  dp[x][y] = 1;

  for (let i = 0; i < 4; i++) {
    const nx = x + dir[i][0];
    const ny = y + dir[i][1];

    if (isOutside(nx, ny)) continue;
    if (board[x][y] < board[nx][ny]) {
      // 도착지에서부터 1씩 증가하면서 돌아오기
      dp[x][y] = Math.max(dp[x][y], DFS(nx, ny) + 1);
    }
  }

  return dp[x][y];
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    const count = DFS(i, j); // 현재 칸에서 이동 가능한 칸 수

    maxCount = Math.max(maxCount, count);
  }
}

console.log(maxCount);
