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
let [nums, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = nums.split(" ").map(Number);
const connected = input.slice(0, N - 1).map((row) => row.split(" ").map(Number));
const nodes = input.slice(N - 1).map((row) => row.split(" ").map(Number));
const graph = Array.from({ length: N + 1 }, () => []);

const dist = [];

for (let [from, to, weight] of connected) {
  graph[from].push([to, weight]);
  graph[to].push([from, weight]);
}

function BFS(s, e) {
  const visited = Array.from({ length: N + 1 }, () => false);
  const queue = new Queue();
  queue.push([s, 0]);
  visited[s] = true;

  while (!queue.isEmpty()) {
    const [x, dis] = queue.front();
    queue.pop();

    // 도착
    if (x === e) {
      return dis;
    }

    for (let [nx, d] of graph[x]) {
      if (visited[nx]) continue;

      visited[nx] = true;
      queue.push([nx, dis + d]);
    }
  }
}

for (let [s, e] of nodes) {
  dist.push(BFS(s, e));
}

console.log(dist.join("\n"));
