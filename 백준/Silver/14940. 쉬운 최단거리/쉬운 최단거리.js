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

const [N, M] = n.split(" ").map(Number);
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const map = arr.map((row) => row.split(" ").map(Number));
const q = new Queue();
const ch = Array.from({ length: N }, () => Array(M).fill(0));
const dis = Array.from({ length: N }, () => Array(M).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 2) {
      q.push([i, j]);
      ch[i][j] = 1;
      dis[i][j] = 0;

      while (!q.isEmpty()) {
        const [x, y] = q.front();
        q.pop();

        for (let i = 0; i < 4; i++) {
          const nx = x + dir[i][0];
          const ny = y + dir[i][1];

          if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

          if (map[nx][ny] === 1 && ch[nx][ny] === 0) {
            dis[nx][ny] = dis[x][y] + 1;
            ch[nx][ny] = 1;
            q.push([nx, ny]);
          }
        }
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1 && ch[i][j] === 0) dis[i][j] = -1;
  }
}

console.log(dis.map((row) => row.join(" ")).join("\n"));
