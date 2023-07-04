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
const [N, M, T] = input.split(" ").map(Number);
const board = arr.map((row) => row.split(" ").map(Number));
let answer = "Fail";
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const ch = Array.from({ length: N }, () => Array(M).fill(0));
const chGram = Array.from({ length: N }, () => Array(M).fill(0));

function bfs() {
  const queue = new Queue();
  queue.push([0, 0, 0, false]); // [x, y, time, hasGram]
  ch[0][0] = 1;

  while (!queue.isEmpty()) {
    const [x, y, time, hasGram] = queue.front();
    queue.pop();
    if (time > T) break;

    for (let i = 0; i < 4; i++) {
      const nx = x + dir[i][0];
      const ny = y + dir[i][1];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

      if (nx === N - 1 && ny === M - 1) return time + 1;
      if (hasGram ? chGram[nx][ny] === 1 : ch[nx][ny] === 1) continue;
      if (!hasGram && board[nx][ny] === 1) continue;

      const gram = hasGram || board[nx][ny] === 2;
      queue.push([nx, ny, time + 1, gram]);
      if (hasGram) chGram[nx][ny] = 1;
      else ch[nx][ny] = 1;
    }
  }

  return "Fail";
}

console.log(bfs());
