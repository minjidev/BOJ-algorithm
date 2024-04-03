const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nums, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
// 시작점 잡고 4방향 돌면서 이동 -> 다음 시작점
// 시작점은 정해져있기 때문에 DFS는 index만 넘겨주면 된다.
const [N, M] = nums.split(" ").map(Number);
let board = arr.map((row) => row.split(" ").map(Number));
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const dirType = [0, [0], [0, 2], [0, 1], [0, 1, 2], [0, 1, 2, 3]];
const cctv = [];
let minSize = Number.MAX_SAFE_INTEGER;

// cctv 위치 저장
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 0 || board[i][j] === 6) continue;

    cctv.push([i, j]);
  }
}

function watch(x, y, type, startDir) {
  const dirToWatch = dirType[type];

  for (let d of dirToWatch) {
    const curDir = (startDir + d) % 4;
    let sx = x;
    let sy = y;

    // 해당 방향으로 벽을 만날 때까지 탐색
    while (true) {
      const nx = sx + dir[curDir][0];
      const ny = sy + dir[curDir][1];

      sx = nx;
      sy = ny;

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) break;
      if (board[nx][ny] === 6) break;
      if (board[nx][ny] !== 0) continue;

      board[nx][ny] = -1; // 방문 표시
    }
  }
}

function DFS(L) {
  if (L === cctv.length) {
    // 사각지대 최소 크기 찾기
    let size = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (board[i][j] === 0) {
          size += 1;
        }
      }
    }

    minSize = Math.min(minSize, size);
    return;
  }

  // 현재 순서 cctv 4방향 확인
  const [x, y] = cctv[L];

  for (let k = 0; k < 4; k++) {
    const tmp = [...board.map((row) => [...row])];

    // cctv에 따라 영역 탐색
    watch(x, y, board[x][y], k);

    // 다음 cctv
    DFS(L + 1);

    board = [...tmp.map((row) => [...row])];
  }
}

DFS(0);
console.log(minSize);
