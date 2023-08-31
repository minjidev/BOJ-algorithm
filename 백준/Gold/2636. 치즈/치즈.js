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

const [H, W] = input.split(" ").map(Number); // x, y
const map = arr.map((row) => row.split(" ").map(Number));
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let hour = 0;
let count = 0;

/**
 *  - [0, 0]에서 시작해 bfs
 *  - [nx, ny]가 0이면 bfs 대상 -> queue.push()
 *  - [nx, ny]가 1이면 녹일 대상 -> 0으로 변경
 *  - 이 과정을 치즈가 없을 때까지 반복
 *  */

function BFS() {
  const queue = new Queue();
  const ch = Array.from({ length: H }, () => Array(W).fill(0));
  const cheese = [];
  queue.push([0, 0]);

  while (!queue.isEmpty()) {
    const [x, y] = queue.front();
    queue.pop();

    for (let k = 0; k < 4; k++) {
      const nx = x + dir[k][0];
      const ny = y + dir[k][1];

      if (nx < 0 || ny < 0 || nx >= H || ny >= W) continue;
      if (ch[nx][ny] === 1) continue;

      // bfs 대상
      if (map[nx][ny] === 0) {
        queue.push([nx, ny]);
      } else {
        // 1인 경우 치즈로 인식
        cheese.push([nx, ny]);
      }

      ch[nx][ny] = 1;
    }
  }

  if (!cheese.length) return true;
  count = cheese.length;

  // 치즈 녹이기
  for (let [x, y] of cheese) {
    map[x][y] = 0;
  }

  return false;
}

while (true) {
  if (BFS()) break;

  hour += 1;
}

console.log(hour + "\n" + count);
