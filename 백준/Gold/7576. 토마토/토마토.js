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
let [input, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input.split(" ").map(Number);
const board = arr.map((row) => row.split(" ").map(Number));

const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

// 이미 모든 토마토가 익어있는 상태
let zeroCount = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 0) zeroCount += 1;
  }
}

if (zeroCount === 0) {
  console.log(0);
  return;
}

function BFS(i, j) {
  while (!queue.isEmpty()) {
    const [x, y] = queue.front();

    queue.pop();

    for (let k = 0; k < 4; k++) {
      const nx = x + dir[k][0];
      const ny = y + dir[k][1];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

      if (board[nx][ny] === 0) {
        board[nx][ny] = board[x][y] + 1;

        queue.push([nx, ny]);
      }
    }
  }
}

// 아닌 경우
const queue = new Queue();

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 1) {
      queue.push([i, j]);
    }
  }
}

BFS();

let max = Number.MIN_SAFE_INTEGER;
// 확인
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 0) {
      console.log(-1);
      return;
    } else {
      max = Math.max(max, board[i][j]);
    }
  }
}

console.log(max - 1);
