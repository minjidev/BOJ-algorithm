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
const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +N;
const board = arr.map((row) => row.split("").map(Number));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const answer = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 1) {
      const q = new Queue();
      q.push([i, j]);
      board[i][j] = 0;
      let cnt = 1;

      while (!q.isEmpty()) {
        const [x, y] = q.front();
        q.pop();

        for (let i = 0; i < dx.length; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];

          if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
            board[nx][ny] = 0;
            q.push([nx, ny]);
            cnt += 1;
          }
        }
      }

      answer.push(cnt);
    }
  }
}
answer.sort((a, b) => a - b);
console.log([answer.length, ...answer].join("\n"));
