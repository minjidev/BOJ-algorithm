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
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [input, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, V] = input.split(" ").map(Number);
const nodes = arr.map((row) => row.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => []);

for (let [from, to] of nodes) {
  graph[from].push(to);
  graph[to].push(from);
}

for (let nodes of graph) {
  nodes.sort((a, b) => a - b);
}

function getDFS() {
  const ch = Array(N + 1).fill(0);
  const path = [];

  function DFS(v) {
    for (let i = 0; i < graph[v].length; i++) {
      const nv = graph[v][i];

      if (ch[nv] === 0) {
        ch[nv] = 1;
        path.push(nv);
        DFS(nv);
      }
    }
  }

  ch[V] = 1;
  path.push(V);
  DFS(V);

  console.log(path.join(" "));
}

function getBFS() {
  const ch = Array(N + 1).fill(0);
  const path = [];
  const queue = new Queue();

  ch[V] = 1;
  path.push(V);
  queue.push(V);

  while (!queue.isEmpty()) {
    const v = queue.front();
    queue.pop();

    for (let i = 0; i < graph[v].length; i++) {
      const nv = graph[v][i];

      if (ch[nv] === 0) {
        ch[nv] = 1;
        path.push(nv);
        queue.push(nv);
      }
    }
  }

  console.log(path.join(" "));
}

getDFS();
getBFS();
