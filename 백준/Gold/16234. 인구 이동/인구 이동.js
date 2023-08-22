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
const [N, L, R] = n.split(" ").map(Number);
const countries = arr.map((row) => row.split(" ").map(Number));
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let flag = 0;
let answer = 0;
while (true) {
  // if (flag) break;
  // 경계 공유하는 각 영역
  const units = Array.from({ length: N }, () => Array(N).fill(0));
  const ch = Array.from({ length: N }, () => Array(N).fill(0));
  // 각 unit에 해당하는 index에 [total, len] 저장
  const unitResult = Array.from({ length: N * N }, () => [0, 0]);
  let currentUnit = 0;
  let total = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // 각 unit 찾기
      if (ch[i][j] === 1) continue;

      const q = new Queue();
      q.push([i, j]);
      ch[i][j] = 1;
      units[i][j] = currentUnit;
      unitResult[currentUnit][0] += countries[i][j];
      unitResult[currentUnit][1] += 1;

      while (!q.isEmpty()) {
        const [x, y] = q.front();
        q.pop();

        for (let k = 0; k < 4; k++) {
          const nx = x + dir[k][0];
          const ny = y + dir[k][1];

          if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;

          const diff = Math.abs(countries[x][y] - countries[nx][ny]);

          if (diff >= L && diff <= R && ch[nx][ny] === 0) {
            ch[nx][ny] = 1;
            units[nx][ny] = currentUnit;
            unitResult[currentUnit][0] += countries[nx][ny];
            unitResult[currentUnit][1] += 1;
            q.push([nx, ny]);
          }
        }
      }

      currentUnit++;
    }
  }

  // units 순서대로 BFS -> countries 배열 변경 -> 이 과정을 while 돌아야 한다.

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // units[i][j]가 0이면 -> unitResult[0][0]/unitResult[0][1] 값을 넣어주기
      const idx = units[i][j];
      total += idx;
      countries[i][j] = Math.floor(unitResult[idx][0] / unitResult[idx][1]);
    }
  }
  if (total === (N * N * (N * N - 1)) / 2) {
    console.log(answer);
    return;
  }
  answer++;
}
