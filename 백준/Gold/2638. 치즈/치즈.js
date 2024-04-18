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

const [N, M] = nums.split(" ").map(Number);
const board = arr.map((row) => row.split(" ").map(Number));

// 치즈 내외부를 구분한다.(BFS)
// 2중 for문으로 모든 치즈칸을 보면서 적어도 2군데 이상이 바깥 공기인 경우 치즈를 녹을 대상으로 표시
// 표시한 치즈를 녹인다.
// 모두 녹았는지 확인
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let flag = false;
let time = 0;
let visited = Array.from({ length: N }, () => Array(M).fill(false));

function isOutside(x, y) {
  return x < 0 || y < 0 || x >= N || y >= M;
}

function fill() {
  visited = Array.from({ length: N }, () => Array(M).fill(false));
  const queue = new Queue();
  queue.push([0, 0]);
  visited[0][0] = true;

  while (!queue.isEmpty()) {
    const [x, y] = queue.front();
    queue.pop();

    for (let k = 0; k < 4; k++) {
      const nx = x + dir[k][0];
      const ny = y + dir[k][1];

      if (isOutside(nx, ny) || visited[nx][ny]) continue;
      // 치즈가 아닌 경우 돌면서 외부를 -1로 변경
      if (board[nx][ny] !== 1) {
        visited[nx][ny] = true;
        board[nx][ny] = -1;
        queue.push([nx, ny]);
      }
    }
  }
}

while (true) {
  flag = false; // 녹을 치즈 있는지 확인
  fill(); // 치즈 바깥 채우기

  // 2중 for문 돌면서 치즈인 경우 2면 이상이 -1이면 녹을 대상으로 표시
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] !== 1) continue;

      let cnt = 0;
      for (let k = 0; k < 4; k++) {
        const nx = i + dir[k][0];
        const ny = j + dir[k][1];

        if (isOutside(nx, ny)) continue;
        if (board[nx][ny] === -1) cnt += 1;
      }

      if (cnt >= 2) {
        board[i][j] = 3; // 녹을 치즈
        flag = true;
      }
    }
  }

  // 녹이기
  if (flag) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (board[i][j] === 3) {
          board[i][j] = -1;
        }
      }
    }
  }

  time += 1;

  flag = false;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 1) {
        flag = true;
      }
    }
  }

  if (!flag) break;
}

console.log(time);
