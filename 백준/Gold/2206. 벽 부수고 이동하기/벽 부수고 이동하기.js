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
const board = arr.map((row) => row.split("").map(Number));
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const ch = Array.from({ length: 1001 }, () => Array.from({ length: 1001 }, () => [0, 0]));

function isOutside(x, y) {
  return x < 0 || y < 0 || x >= N || y >= M;
}

// 방문 체크 + 벽을 부쉈는지에 대한 체크
// ch[][][0]: 벽을 부수지 않은 경우 방문 처리
// ch[][][1]: 벽을 부순 경우 방문 처리
function BFS() {
  const queue = new Queue();
  queue.push([0, 0, 0, 1]); // x, y, break 횟수, 거리
  ch[0][0][0] = 1;

  while (!queue.isEmpty()) {
    const [x, y, breakCnt, dis] = queue.front();
    queue.pop();

    if (x === N - 1 && y === M - 1) {
      console.log(dis);
      return;
    }

    for (let k = 0; k < 4; k++) {
      const nx = x + dir[k][0];
      const ny = y + dir[k][1];

      if (isOutside(nx, ny)) continue;

      if (ch[nx][ny][breakCnt] === 0) {
        // 벽이 아닌 경우
        if (board[nx][ny] === 0) {
          ch[nx][ny][breakCnt] = 1;
          queue.push([nx, ny, breakCnt, dis + 1]);
        } else {
          // 벽인 경우
          if (breakCnt === 0) {
            // 아직 벽을 부수지 않았다면 다음 벽을 부수고 이동
            ch[nx][ny][breakCnt] = 1;
            queue.push([nx, ny, 1, dis + 1]);
          }
        }
      }
    }
  }

  console.log(-1);
}

BFS();
