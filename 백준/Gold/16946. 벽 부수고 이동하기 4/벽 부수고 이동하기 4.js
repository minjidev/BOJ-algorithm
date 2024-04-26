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
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = n.split(" ").map(Number);
const board = input.map((row) => row.split("").map(Number));

const visited = Array.from({ length: N }, () => Array(M).fill(false));
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function isOutside(x, y) {
  return x < 0 || y < 0 || x >= N || y >= M;
}

// 0 묶음 찾고, 주변 1들에 0 개수 더해주기
function BFS(sx, sy) {
  const queue = new Queue();
  const walls = [];
  let count = 1;
  queue.push([sx, sy]);
  visited[sx][sy] = true;

  while (!queue.isEmpty()) {
    const [x, y] = queue.front();
    queue.pop();

    for (let k = 0; k < 4; k++) {
      const nx = x + dir[k][0];
      const ny = y + dir[k][1];

      if (isOutside(nx, ny)) continue;

      if (!visited[nx][ny] && board[nx][ny] === 0) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
        count += 1;
      } else if (!visited[nx][ny] && board[nx][ny] !== 0) {
        walls.push([nx, ny]);
        visited[nx][ny] = true;
      }
    }
  }

  for (let i = 0; i < walls.length; i++) {
    const [x, y] = walls[i];
    board[x][y] += count;
    visited[x][y] = false;
  }
}

// 0 묶음 찾기
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j] && board[i][j] === 0) {
      BFS(i, j);
    }
  }
}

console.log(board.map((row) => row.map((x) => x % 10).join("")).join("\n"));
