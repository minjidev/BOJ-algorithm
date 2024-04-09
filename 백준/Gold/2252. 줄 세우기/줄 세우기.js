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
const [nums, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = nums.split(" ").map(Number);
const students = input.map((row) => row.split(" ").map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
const inDepth = Array(N + 1).fill(0);
const queue = new Queue();
const path = [];

for (let [s, e] of students) {
  graph[s].push(e);
  inDepth[e] += 1;
}

for (let i = 1; i <= N; i++) {
  if (inDepth[i] === 0) {
    queue.push(i);
    path.push(i);
  }
}

while (!queue.isEmpty()) {
  const cur = queue.front();
  queue.pop();

  for (let i = 0; i < graph[cur].length; i++) {
    const next = graph[cur][i];
    inDepth[next] -= 1;

    if (inDepth[next] === 0) {
      queue.push(next);
      path.push(next);
    }
  }
}

console.log(path.join(" "));
