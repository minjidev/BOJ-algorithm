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
const [M, N] = n.split(" ").map(Number);
const boxes = arr.map((row) => row.split(" ").map(Number));

const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
/**
 * 토마토가 익은 경우(1) 큐에 넣고 BFS -> BFS 돌 때마다 1씩 더해주기
 *
 * BFS 다 돌고 나왔을 때
 * 1. 만약 안 익은 토마토가 있다면(0) 익지 못하는 상황 -> -1 출력
 * 2. 다 익었는데
 *  2-1. 최댓값이 1이라면 애초에 다 익어있는 상황이므로 -> 0 출력
 *  2-2. 최댓값은 기본 값이 1부터 시작하므로 -> 최댓값 -1
 * */

function BFS() {
  while (!q.isEmpty()) {
    const [x, y] = q.front();
    q.pop();

    for (let k = 0; k < 4; k++) {
      const nx = x + dir[k][0];
      const ny = y + dir[k][1];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

      if (boxes[nx][ny] === 0) {
        // 다음 칸 = 현재 칸 + 1 하여 날짜를 더한다.
        boxes[nx][ny] = boxes[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }
}

const q = new Queue();
// 시작점 큐에 넣기
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (boxes[i][j] === 1) q.push([i, j]);
  }
}

// 시작점에서부터 연쇄적으로 토마토 익음
BFS();

let maxVal = Number.MIN_SAFE_INTEGER;
// 결과 확인
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    // 안 익은 토마토가 있으면
    if (boxes[i][j] === 0) {
      console.log(-1);
      return;
    } else {
      maxVal = Math.max(maxVal, boxes[i][j]);
    }
  }
}

console.log(maxVal - 1);
