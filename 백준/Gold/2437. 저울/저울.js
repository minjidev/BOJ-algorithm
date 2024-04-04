const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.split(" ").map(Number);

arr.sort((a, b) => a - b);

let acc = 1;
for (let cur of arr) {
  // 누적합보다 새로운 추가 큰 경우
  if (acc < cur) {
    break;
  }

  acc += cur;
}

console.log(acc);
