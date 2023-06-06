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
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const [M, N, H] = n.split(" ").map(Number);
const boxes = arr.map((row) => row.split(" ").map(Number));

const dir = [
  [-1, 0, 0],
  [1, 0, 0],
  [0, -1, 0],
  [0, 1, 0],
  [0, 0, -1],
  [0, 0, 1],
];

// 3차원 배열로 만들기
const layeredBoxes = Array.from({ length: H }, (val, idx) =>
  boxes.slice(idx * N, idx * N + N)
);

const q = new Queue();

// bfs
function BFS() {
  while (!q.isEmpty()) {
    const [h, x, y] = q.front();
    q.pop();

    for (let k = 0; k < 6; k++) {
      const nh = h + dir[k][0];
      const nx = x + dir[k][1];
      const ny = y + dir[k][2];

      if (nx < 0 || ny < 0 || nh < 0 || nx >= N || ny >= M || nh >= H) continue;

      if (layeredBoxes[nh][nx][ny] === 0) {
        // 다음 칸 = 현재 칸 + 1 하여 날짜를 더한다.
        layeredBoxes[nh][nx][ny] = layeredBoxes[h][x][y] + 1;
        q.push([nh, nx, ny]);
      }
    }
  }
}

// 토마토가 익은 경우(1인 경우) 큐에 넣기
for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (layeredBoxes[i][j][k] === 1) {
        q.push([i, j, k]);
      }
    }
  }
}

BFS();

let maxVal = Number.MIN_SAFE_INTEGER;
// 결과 확인
for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      // 만약 익지 않은 토마토가 있다면
      if (layeredBoxes[i][j][k] === 0) {
        console.log(-1);
        return;
      } else {
        // 최댓값 구하기
        maxVal = Math.max(maxVal, layeredBoxes[i][j][k]);
      }
    }
  }
}

console.log(maxVal - 1);
