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

const N = Number(n);
const nodes = arr.map((row) => row.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
const ch = Array.from({ length: N + 1 }).fill(0);
const parents = Array.from({ length: N + 1 }).fill(0);

for (let [from, to] of nodes) {
  graph[from].push(to);
  graph[to].push(from);
}

const queue = new Queue();
queue.push(1);
ch[1] = 1;

while (!queue.isEmpty()) {
  const v = queue.front();
  queue.pop();

  for (let i = 0; i < graph[v].length; i++) {
    const nv = graph[v][i];

    if (ch[nv] === 0) {
      ch[nv] = 1;
      parents[nv] = v;
      queue.push(nv);
    }
  }
}

console.log(parents.slice(2).join("\n"));
