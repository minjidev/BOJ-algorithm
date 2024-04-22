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
const arr = input.slice(0, M).map((row) => row.split(" ").map(Number));
const [A, B] = input[M].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

let s = 0;
let e = 0;
let maxWeight = 0;

for (let [from, to, w] of arr) {
  graph[from].push([to, w]);
  graph[to].push([from, w]);

  e = Math.max(e, w);
}

function BFS(curWeight) {
  const queue = new Queue();
  const visited = Array(N + 1).fill(false);
  visited[A] = true;
  queue.push(A);

  while (!queue.isEmpty()) {
    const cur = queue.front();
    queue.pop();

    if (cur === B) return true;

    for (let [next, limit] of graph[cur]) {
      if (visited[next] || limit < curWeight) continue;
      visited[next] = true;
      queue.push(next);
    }
  }

  return false;
}

while (s <= e) {
  const mid = Math.floor((s + e) / 2);

  if (BFS(mid)) {
    s = mid + 1;
    maxWeight = mid;
  } else {
    e = mid - 1;
  }
}

console.log(maxWeight);
