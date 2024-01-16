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
const pairs = arr.map((row) => row.split(" ").map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
const hackedComputers = Array(N + 1).fill(0);

for (let [s, e] of pairs) {
  graph[e].push(s);
}

function hack(v) {
  const ch = Array(N + 1).fill(0);
  const queue = new Queue();
  let hacked = 0;

  ch[v] = 1;
  queue.push(v);

  while (!queue.isEmpty()) {
    const x = queue.front();
    queue.pop();

    for (let i = 0; i < graph[x].length; i++) {
      const nx = graph[x][i];

      if (ch[nx]) continue;

      ch[nx] = 1;
      hacked += 1;
      queue.push(nx);
    }
  }

  hackedComputers[v] = hacked;
}

for (let i = 1; i < N + 1; i++) {
  hack(i);
}

const max = Math.max(...hackedComputers);
console.log(
  hackedComputers
    .map((cnt, idx) => (cnt === max ? idx : -1))
    .filter((cnt) => cnt > 0)
    .join(" ")
);
