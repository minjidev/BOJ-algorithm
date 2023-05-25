const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +n;
const commands = arr.map((com) => com.split(" "));
const answer = [];

class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  push(newElement) {
    this.queue[this.tail] = newElement;
    this.tail += 1;
  }

  pop() {
    if (this.empty()) return -1;

    const front = this.queue[this.head];
    this.head += 1;
    return front;
  }

  size() {
    return Math.abs(this.head - this.tail);
  }

  empty() {
    return this.head === this.tail ? 1 : 0;
  }

  front() {
    return this.empty() ? -1 : this.queue[this.head];
  }

  back() {
    return this.empty() ? -1 : this.queue[this.tail - 1];
  }
}

const q = new Queue();

for (let [com, num] of commands) {
  if (com === "push") q.push(num);
  else answer.push(q[com]());
}

console.log(answer.join("\n"));
