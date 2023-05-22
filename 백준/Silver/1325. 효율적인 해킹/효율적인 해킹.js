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

const [n, m] = N.split(" ").map(Number);
let pairs = arr.map((row) => row.split(" ").map(Number));

let graph = Array.from({ length: n + 1 }, () => []);
let hacked = Array.from({ length: n + 1 }, () => 0);

for (let [s, e] of pairs) {
  graph[e].push(s);
}

// 각 노드에서 해킹할 수 있는 컴퓨터 수 세기
for (let i = 1; i <= n; i++) {
  const ch = Array.from({ length: n + 1 }, () => 0);
  const q = new Queue();
  let cnt = 1;
  let max = Number.MIN_SAFE_INTEGER;

  ch[i] = 1;
  q.push(i);

  while (!q.isEmpty()) {
    const v = q.front();
    q.pop();

    for (let i = 0; i < graph[v].length; i++) {
      const nv = graph[v][i];
      if (ch[nv] === 0) {
        ch[nv] = 1;
        cnt += 1;
        q.push(nv);
      }
    }
  }

  hacked[i] = cnt;
}

const maxVal = Math.max(...hacked);
const bestOptions = hacked
  .map((num, idx) => (num === maxVal ? idx : -1))
  .filter((num) => num > 0);

console.log(bestOptions.join(" "));
