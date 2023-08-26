class Queue {
  constructor() {
    this.data = [];
    this.head = 0;
    this.tail = 0;
  }
  push(item) {
    this.data[this.tail++] = item;
  }
  pop() {
    this.head++;
  }
  front() {
    return this.data[this.head];
  }
  rear() {
    return this.data[this.tail - 1];
  }
  isEmpty() {
    return this.head === this.tail;
  }
  size() {
    return Math.abs(this.head - this.tail);
  }
}
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [input, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
/**
 * 1. 0인 구간 가운데 3개 선정 (3중 for문이 나을 듯)
 * 2. 2인 경우 q에 넣어서 bfs 돌리면서 2로 바꾸고
 * 3. 전체 탐색하면서 0인 곳 개수 세서 최댓값 찾기
 */

const [N, M] = input.split(" ").map(Number); // x, y
const map = arr.map((row) => row.split(" ").map(Number));
const zeroNodes = [];
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 0) {
      zeroNodes.push([i, j]);
    }
  }
}

const len = zeroNodes.length;
let maxSize = Number.MIN_SAFE_INTEGER;

// 3개 뽑기 : map[zeroNodes[i].x , zeroNodes[i].y]
for (let i = 0; i < len; i++) {
  for (let j = i + 1; j < len; j++) {
    for (let k = j + 1; k < len; k++) {
      const [[ix, iy], [jx, jy], [kx, ky]] = [
        zeroNodes[i],
        zeroNodes[j],
        zeroNodes[k],
      ];

      map[ix][iy] = 1;
      map[jx][jy] = 1;
      map[kx][ky] = 1;
      BFS();
      map[ix][iy] = 0;
      map[jx][jy] = 0;
      map[kx][ky] = 0;
    }
  }
}

function BFS() {
  let count = 0;
  const ch = Array.from({ length: N }, () => Array(M).fill(0));
  const queue = new Queue();
  let mapCopy = Array.from({ length: N }, () => Array(M).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      mapCopy[i][j] = map[i][j];
      if (map[i][j] === 2) queue.push([i, j]);
    }
  }

  while (!queue.isEmpty()) {
    const [x, y] = queue.front();
    ch[x][y] = 1;
    queue.pop();

    for (let k = 0; k < 4; k++) {
      const nx = x + dir[k][0];
      const ny = y + dir[k][1];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (ch[nx][ny] === 0 && map[nx][ny] === 0) {
        ch[nx][ny] = 1;
        mapCopy[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (mapCopy[i][j] === 0) count += 1;
    }
  }

  maxSize = Math.max(maxSize, count);
}

console.log(maxSize);
