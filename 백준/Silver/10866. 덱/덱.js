class Deque {
  constructor() {
    this.deque = [];
  }
  push_front(newElement) {
    this.deque.unshift(newElement);
  }
  push_back(newElement) {
    this.deque.push(newElement);
  }

  pop_front() {
    if (this.empty()) return -1;
    return this.deque.shift();
  }
  pop_back() {
    if (this.empty()) return -1;
    return this.deque.pop();
  }
  size() {
    return this.deque.length;
  }
  empty() {
    return this.size() === 0 ? 1 : 0;
  }
  front() {
    return this.empty() ? -1 : this.deque[0];
  }
  back() {
    return this.empty() ? -1 : this.deque.at(-1);
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +n;
const commands = input.map((row) => row.split(" "));
const deque = new Deque();
const answer = [];

for (let command of commands) {
  // push
  if (command.length === 2) {
    const [c, n] = command;
    deque[c](n);
  } else {
    answer.push(deque[command]());
  }
}

console.log(answer.join("\n"));
