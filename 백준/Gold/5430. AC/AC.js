// [5430](https://www.acmicpc.net/problem/5430)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = input.shift();
let answer = "";
let isReversed = false;
let arr = null;
let cmds = "";

for (let i = 0; i < T; i++) {
  cmds = input[i * 3];
  arr = JSON.parse(input[i * 3 + 2]).map(Number);
  isReversed = false;

  answer += runCommand() + "\n";
}

function runCommand() {
  for (let cmd of cmds) {
    if (cmd === "R") isReversed = !isReversed;
    else if (cmd === "D") {
      if (arr.length > 0) {
        if (isReversed) arr.pop();
        else arr.shift();
      } else {
        return "error";
      }
    }
  }

  return JSON.stringify(isReversed ? arr.reverse() : arr);
}

console.log(answer);
