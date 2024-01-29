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
let [nums, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const [M, N] = nums.split(" ").map(Number);
const tomatoes = arr.map((row) => row.split(" ").map(Number));
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

// 모두 익어있으면 0 출력
let sum = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (tomatoes[i][j] === 1) sum += 1;
  }
}

if (sum === N * M) {
  console.log(0);
  return;
}

function BFS() {
  while (!queue.isEmpty()) {
    const [x, y] = queue.front();
    queue.pop();

    for (let k = 0; k < 4; k++) {
      const nx = x + dir[k][0];
      const ny = y + dir[k][1];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

      if (tomatoes[nx][ny] === 0) {
        tomatoes[nx][ny] = tomatoes[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}

// 토마토 익히기
const queue = new Queue();
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (tomatoes[i][j] === 1) {
      queue.push([i, j]);
    }
  }
}

BFS();

// 모두 익었는지 확인
let maxDays = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (tomatoes[i][j] === 0) {
      console.log(-1);
      return;
    } else {
      maxDays = Math.max(maxDays, tomatoes[i][j]);
    }
  }
}

console.log(maxDays - 1);
