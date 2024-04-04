const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +n;
const dragonCurves = arr.map((row) => row.split(" ").map(Number));
const dir = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];
const MAX_LEN = 101;
const visited = Array.from({ length: MAX_LEN }, () => Array(MAX_LEN).fill(0));

let dirToGo = [];
let sx = 0;
let sy = 0;

function drawDragonCurves() {
  // 방향 거꾸로 돌면서 따라서 이동
  for (let i = dirToGo.length - 1; i >= 0; i--) {
    const curDir = (dirToGo[i] + 1) % 4;

    const nx = sx + dir[curDir][0];
    const ny = sy + dir[curDir][1];

    if (nx < 0 || ny < 0 || nx >= MAX_LEN || ny >= MAX_LEN) continue;
    visited[nx][ny] = 1;
    dirToGo.push(curDir);
    sx = nx;
    sy = ny;
  }
}

function countSqures() {
  let count = 0;

  for (let i = 0; i < MAX_LEN - 1; i++) {
    for (let j = 0; j < MAX_LEN - 1; j++) {
      if (visited[i][j] && visited[i + 1][j] && visited[i][j + 1] && visited[i + 1][j + 1]) {
        count += 1;
      }
    }
  }

  console.log(count);
}

// 각 드래곤 커브를 돌면서 표시
for (let [y, x, d, g] of dragonCurves) {
  dirToGo = [d];
  visited[x][y] = 1;
  sx = x + dir[d][0];
  sy = y + dir[d][1];
  visited[sx][sy] = 1;

  // g번 돌면서 그리기
  for (let i = 0; i < g; i++) {
    drawDragonCurves();
  }
}

countSqures();
