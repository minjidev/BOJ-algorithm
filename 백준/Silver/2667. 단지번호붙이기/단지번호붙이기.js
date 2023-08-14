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
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(n);
const board = arr.map((row) => row.split("").map(Number));
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let answer = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 1) {
      board[i][j] = 0;
      const count = BFS(i, j);
      answer.push(count);
    }
  }
}

function BFS(x, y) {
  const queue = new Queue();
  let count = 1;
  queue.push([x, y]);

  while (!queue.isEmpty()) {
    const [x, y] = queue.front();
    queue.pop();

    for (let k = 0; k < 4; k++) {
      const nx = x + dir[k][0];
      const ny = y + dir[k][1];

      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
      if (board[nx][ny] === 0) continue;

      board[nx][ny] = 0;
      count += 1;
      queue.push([nx, ny]);
    }
  }

  return count;
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join("\n"));
