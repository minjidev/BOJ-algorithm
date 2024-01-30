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
const [M, N, H] = nums.split(" ").map(Number);
const boxes = arr.map((row) => row.split(" ").map(Number));
const tomatoes = [];
const dir = [
  [-1, 0, 0],
  [1, 0, 0],
  [0, -1, 0],
  [0, 1, 0],
  [0, 0, -1],
  [0, 0, 1],
];

for (let i = 0; i < H; i++) {
  tomatoes.push(boxes.slice(i * N, i * N + N));
}

let sum = 0;
for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (tomatoes[i][j][k] === 1) sum += 1;
    }
  }
}

if (sum === N * M * H) {
  console.log(0);
  return;
}

function BFS() {
  while (!queue.isEmpty()) {
    const [h, x, y] = queue.front();
    queue.pop();

    for (let k = 0; k < 6; k++) {
      const nh = h + dir[k][0];
      const nx = x + dir[k][1];
      const ny = y + dir[k][2];

      if (nh < 0 || nx < 0 || ny < 0) continue;
      if (nh >= H || nx >= N || ny >= M) continue;

      if (tomatoes[nh][nx][ny] === 0) {
        tomatoes[nh][nx][ny] = tomatoes[h][x][y] + 1;
        queue.push([nh, nx, ny]);
      }
    }
  }
}

const queue = new Queue();
for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (tomatoes[i][j][k] === 1) queue.push([i, j, k]);
    }
  }
}

BFS();

let max = 0;
for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (tomatoes[i][j][k] === 0) {
        console.log(-1);
        return;
      } else {
        max = Math.max(max, tomatoes[i][j][k]);
      }
    }
  }
}

console.log(max - 1);
