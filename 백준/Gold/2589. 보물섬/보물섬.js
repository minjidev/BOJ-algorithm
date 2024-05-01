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
let [num, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [R, C] = num.split(" ").map(Number);
const board = input.map((row) => row.split(""));
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let maxDis = 0;

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (board[i][j] === "L") {
      maxDis = Math.max(maxDis, getDist(i, j));
    }
  }
}

function isOutside(x, y) {
  return x < 0 || y < 0 || x >= R || y >= C;
}

function getDist(sx, sy) {
  const queue = new Queue();
  const visited = Array.from({ length: R }, () => Array(C).fill(false));
  let curMaxDis = 0;
  queue.push([sx, sy, 0]);
  visited[sx][sy] = true;

  while (!queue.isEmpty()) {
    const [x, y, dis] = queue.front();
    queue.pop();

    if (curMaxDis < dis) {
      curMaxDis = dis;
    }

    for (let k = 0; k < 4; k++) {
      const nx = x + dir[k][0];
      const ny = y + dir[k][1];

      if (isOutside(nx, ny)) continue;
      if (board[nx][ny] === "W" || visited[nx][ny]) continue;

      queue.push([nx, ny, dis + 1]);
      visited[nx][ny] = true;
    }
  }

  return curMaxDis;
}

console.log(maxDis);
