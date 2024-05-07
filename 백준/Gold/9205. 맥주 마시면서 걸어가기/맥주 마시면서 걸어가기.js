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
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();
let idx = 0;
let answer = "";
let home, stores, festival;

function isMovable(dep, des) {
  return Math.abs(dep[0] - des[0]) + Math.abs(dep[1] - des[1]) <= 1000;
}

// 페스티벌에 갈 수 있으면 true, 아니면 false 반환
// 20x50=1000이하인 경우 이동 가능
function BFS(storeCnt) {
  const queue = new Queue();
  const visited = Array(storeCnt).fill(false);
  queue.push(home);

  while (!queue.isEmpty()) {
    const des = queue.front();
    queue.pop();

    if (isMovable(des, festival)) return true;

    for (let i = 0; i < storeCnt; i++) {
      if (visited[i]) continue;

      if (isMovable(des, stores[i])) {
        visited[i] = true;
        queue.push(stores[i]);
      }
    }
  }

  return false;
}

for (let i = 0; i < T; i += 1) {
  const N = +input[idx]; // 편의점 개수

  home = input[idx + 1].split(" ").map(Number); // 상근이 집
  stores = input.slice(idx + 2, idx + 2 + N).map((row) => row.split(" ").map(Number)); // 편의점
  festival = input[idx + 2 + N].split(" ").map(Number);

  answer += (BFS(N) ? "happy" : "sad") + "\n";

  // 끝나고 나면 storeCnt 갱신
  idx += N + 3;
}

console.log(answer);