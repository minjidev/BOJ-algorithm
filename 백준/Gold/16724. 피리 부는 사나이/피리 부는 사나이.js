// [16724](https://www.acmicpc.net/problem/16724)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [num, ...arr] = input;
const [N, M] = num.split(" ").map(Number);
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const board = arr.map((row) =>
  row.split("").map((el) => {
    if (el == "U") return 0;
    if (el === "R") return 1;
    if (el === "D") return 2;
    if (el === "L") return 3;
  })
);
const visited = Array.from({ length: N }, () => Array(M).fill(0));
let safeZoneCount = 0;

function isOutside(x, y) {
  return x < 0 || y < 0 || x >= N || y >= M;
}

function DFS(x, y) {
  visited[x][y] = 1;

  const curDir = board[x][y];
  const nx = x + dir[curDir][0];
  const ny = y + dir[curDir][1];

  if (isOutside(nx, ny)) return;

  // 사이클 형성
  if (visited[nx][ny] === 1) safeZoneCount += 1;

  // 방문하지 않은 경우
  if (visited[nx][ny] === 0) DFS(nx, ny);

  // 이미 만들어진 사이클 표시
  visited[x][y] = 2;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (visited[i][j] === 0) DFS(i, j);
  }
}

console.log(safeZoneCount);
