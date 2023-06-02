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
let N = +fs.readFileSync(filePath).toString().trim();

const q = new Queue();
for (let i = 0; i < N; i++) {
  q.push(i + 1);
}

while (q.size() > 1) {
  q.pop();
  q.push(q.front());
  q.pop();
}

console.log(q.front());
