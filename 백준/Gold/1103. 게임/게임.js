const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, ...arr] = input;
const [N, M] = n.split(" ").map(Number);
const board = arr.map((row) => row.split("").map((x) => (isNaN(x) ? 0 : +x)));

// H가 나오거나 밖으로 나가면 종료
// 움직일 수 있는 최대 거리 DFS
// dp[x][y]는 (x, y)에서 움직일 수 있는 최대 거리
// 무한히 갈 수 있는 경우는? 사이클이 생기는 경우

const dp = Array.from({ length: N }, () => Array(M).fill(-1));
const visited = Array.from({ length: N }, () => Array(M).fill(false));
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let flag = false;

function isOutside(x, y) {
  return x < 0 || y < 0 || x >= N || y >= M;
}

function DFS(x, y) {
  if (flag) return "a";

  if (isOutside(x, y)) return 0;
  if (board[x][y] === 0) return 0;

  // 사이클인 경우 무한 루프
  if (visited[x][y]) {
    flag = true;
    return;
  }

  // 이전에 방문한 경우
  if (dp[x][y] !== -1) return dp[x][y];

  // 방문하지 않은 경우
  const cur = board[x][y];
  dp[x][y] = 0;
  visited[x][y] = true;

  for (let k = 0; k < 4; k++) {
    const nx = x + dir[k][0] * cur;
    const ny = y + dir[k][1] * cur;

    // 4방향 돌면서 (x, y)에서 움직일 수 있는 최대 거리 갱신
    dp[x][y] = Math.max(dp[x][y], DFS(nx, ny) + 1);
  }

  visited[x][y] = false;

  return dp[x][y];
}

const maxDis = DFS(0, 0);

console.log(flag ? -1 : maxDis);
