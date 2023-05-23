class Stack {
  constructor() {
    this.stack = [];
  }

  push(newElement) {
    this.stack.push(newElement);
  }

  pop() {
    if (this.empty()) return -1;
    return this.stack.pop();
  }

  size() {
    return this.stack.length;
  }

  empty() {
    return this.stack.length === 0 ? 1 : 0;
  }

  top() {
    if (this.empty()) return -1;
    return this.stack.at(-1);
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const commands = arr.map((command) => command.split(" "));

const stack = new Stack();
let answer = [];

for (let [com, num] of commands) {
  if (com === "push") {
    stack.push(num);
  } else {
    answer.push(stack[com]());
  }
}

console.log(answer.join("\n"));
