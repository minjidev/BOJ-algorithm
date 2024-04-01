const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +n;
const board = arr.map((row) => row.split(" ").map(Number));
const dir = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];
let curX = 0;
let curY = 0;
let answer = 0;
let consumed = 0;
let sharkSize = 2;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    // 상어 시작 위치
    if (board[i][j] === 9) {
      curX = i;
      curY = j;
      board[i][j] = 0;
      break;
    }
  }
}

while (true) {
  const result = BFS();

  if (!result) {
    console.log(answer);
    break;
  }

  [curX, curY, minDis] = result;
  answer += minDis;
  board[curX][curY] = 0;
  consumed += 1;

  // 상어 크기와 먹은 양이 같아지면
  if (consumed >= sharkSize) {
    sharkSize += 1;
    consumed = 0;
  }
}

function isOutside(x, y) {
  return x < 0 || y < 0 || x >= N || y >= N;
}

function BFS() {
  // 상어가 이동 가능한 경로 탐색
  const queue = [[curX, curY]];

  // 거리 배열
  const dis = Array.from({ length: N }, () => Array(N).fill(-1));
  dis[curX][curY] = 0;

  const fishToEat = [];

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let k = 0; k < 4; k++) {
      const nx = x + dir[k][0];
      const ny = y + dir[k][1];

      if (isOutside(nx, ny)) continue;
      // 상어가 이동 가능한 경우(물고기가 상어 크기보다 작거나 같으면서 방문 X)
      if (board[nx][ny] <= sharkSize && dis[nx][ny] === -1) {
        dis[nx][ny] = dis[x][y] + 1;
        queue.push([nx, ny]);

        // 먹을 물고기가 있는 경우
        if (0 < board[nx][ny] && board[nx][ny] < sharkSize) {
          fishToEat.push([nx, ny, dis[nx][ny]]);
        }
      }
    }
  }

  // 먹을 물고기가 없는 경우
  if (fishToEat.length === 0) return null;

  // 거리순, x좌표, y좌표 순으로 정렬
  fishToEat.sort((a, b) => a[2] - b[2] || a[0] - b[0] || a[1] - b[1]);
  return fishToEat[0];
}
