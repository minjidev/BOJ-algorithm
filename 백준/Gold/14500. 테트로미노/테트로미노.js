const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nums, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = nums.split(" ").map(Number);
const board = arr.map((row) => row.split(" ").map(Number));
const dir = [
  [0, -1],
  [0, 1],
  [1, 0],
  [-1, 0],
];
ch = Array.from({ length: N }, () => Array(M).fill(0));

let maxSum = 0;

function isOutside(x, y) {
  return x < 0 || y < 0 || x >= N || y >= M;
}

// 4개 DFS
function DFS(x, y, L, sum) {
  if (L >= 4) {
    maxSum = Math.max(maxSum, sum);
    return;
  }

  for (let d = 0; d < 4; d++) {
    const nx = x + dir[d][0];
    const ny = y + dir[d][1];

    if (isOutside(nx, ny)) continue;

    if (!ch[nx][ny]) {
      ch[nx][ny] = 1;
      DFS(nx, ny, L + 1, sum + board[nx][ny]);
      ch[nx][ny] = 0;
    }
  }

  ch[x][y] = 0;
}

// ㅗ 모양 중앙점 기준으로 3개 값 더하기
function T(x, y) {
  for (let i = 0; i < 4; i++) {
    let sum = board[x][y];
    // 한 방향 제외
    for (let d = 0; d < 4; d++) {
      if (d === i) continue;

      const nx = x + dir[d][0];
      const ny = y + dir[d][1];

      if (isOutside(nx, ny)) continue;

      sum += board[nx][ny];
    }

    maxSum = Math.max(maxSum, sum);
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    ch[i][j] = 1;
    DFS(i, j, 1, board[i][j]);
    ch[i][j] = 0;
    T(i, j);
  }
}

console.log(maxSum);
