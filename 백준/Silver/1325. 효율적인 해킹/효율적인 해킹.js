const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = N.split(" ").map(Number);
let pairs = arr.map((row) => row.split(" ").map(Number));

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

let graph = Array.from({ length: n + 1 }, () => []);
let answer = Array.from({ length: n + 1 }, () => 0);

for (let [s, e] of pairs) {
  graph[e].push(s);
}

for (let i = 1; i <= n; i++) {
  let ch = Array.from({ length: n + 1 }, () => 0);
  let q = new Queue();
  let cnt = 0;
  let max = 0;

  q.push(i);
  ch[i] = 1;
  cnt += 1;

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

  max = Math.max(max, cnt);
  if (max === cnt) answer[i] = cnt;
}

const maxVal = Math.max(...answer);
const bestOptions = answer
  .map((num, idx) => (num === maxVal ? idx : -1))
  .filter((num) => num > 0);

console.log(bestOptions.join(" "));
