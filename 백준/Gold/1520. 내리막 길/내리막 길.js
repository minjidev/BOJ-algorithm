const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nums, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = nums.split(" ").map(Number);
const MAX = 501;
const board = input.map((row) => row.split(" ").map(Number));
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
// 현재 좌표 (x, y)에서 목적지까지 도달하는 경로의 수
const dp = Array.from({ length: MAX }, () => Array(MAX).fill(-1));
let cnt = 0;

function isOutside(x, y) {
  return x < 0 || y < 0 || x >= N || y >= M;
}

function DFS(x, y) {
  if (x === N - 1 && y === M - 1) return 1; // 도착하면 하나의 가능한 경로가 있다는 뜻으로 1을 반환
  if (dp[x][y] !== -1) return dp[x][y]; // 방문한 적 있으면 가능한 경로 반환

  // 방문한 적 없으면 초기화하여 계산하기
  dp[x][y] = 0;

  for (let k = 0; k < 4; k++) {
    const nx = x + dir[k][0];
    const ny = y + dir[k][1];

    if (isOutside(nx, ny)) continue;
    // 다음으로 이동 가능한 경우, 다음 위치에서 목적지까지 갈 수 있는 경로의 수를 현재에 더해준다.
    if (board[nx][ny] < board[x][y]) {
      dp[x][y] += DFS(nx, ny);
    }
  }

  // 모든 탐색 마친 후 현재 위치에서 목적지까지 도달하는 경로의 수를 반환
  // 이후에 재계산하지 않고 메모이제이션 된 값을 사용
  return dp[x][y];
}

const answer = DFS(0, 0);
console.log(answer);
