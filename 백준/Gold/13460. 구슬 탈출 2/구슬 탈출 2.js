const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nums, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = nums.split(" ").map(Number);
const board = input.map((row) => row.split(""));
let rx = 0;
let ry = 0;
let bx = 0;
let by = 0;

const dir = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

// 시작점
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === "R") {
      rx = i;
      ry = j;
    }

    if (board[i][j] === "B") {
      bx = i;
      by = j;
    }
  }
}

// 구슬 움직이기: 벽에 닿거나 구멍에 도착하기 전까지 이동
function move(x, y, curDir) {
  const [dx, dy] = curDir;
  let count = 0;

  while (true) {
    // 구멍에 도착하면 멈추기
    if (board[x][y] === "O") break;
    // 다음이 벽이면 멈추기
    if (board[x + dx][y + dy] === "#") break;

    x += dx;
    y += dy;
    count += 1;
  }

  return [x, y, count];
}

function BFS() {
  const q = [];
  const visited = new Set();
  q.push([rx, ry, bx, by, 1]);
  visited.add(`${rx},${ry},${bx},${by}`);

  while (q.length > 0) {
    const [rx, ry, bx, by, cnt] = q.shift();

    if (cnt > 10) break;

    for (let k = 0; k < 4; k++) {
      let [nrx, nry, rMoveCnt] = move(rx, ry, dir[k]);
      let [nbx, nby, bMoveCnt] = move(bx, by, dir[k]);

      // 파란 구슬이 들어가면 이 방향은 더 이상 보지 X
      if (board[nbx][nby] === "O") continue;
      if (board[nrx][nry] === "O") return cnt;

      // 같은 방향으로 이동해서 겹치는 경우 뒤에 있는 구슬 한 칸씩 물러주기
      if (nrx === nbx && nry === nby) {
        if (rMoveCnt > bMoveCnt) {
          nrx -= dir[k][0];
          nry -= dir[k][1];
        } else {
          nbx -= dir[k][0];
          nby -= dir[k][1];
        }
      }

      // 방문하지 않은 경우 큐에 넣기
      if (!visited.has(`${nrx},${nry},${nbx},${nby}`)) {
        visited.add(`${nrx},${nry},${nbx},${nby}`);
        q.push([nrx, nry, nbx, nby, cnt + 1]);
      }
    }
  }

  return -1;
}

console.log(BFS());
