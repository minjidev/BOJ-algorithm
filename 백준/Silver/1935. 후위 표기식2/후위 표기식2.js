const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ex, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const nums = input.map(Number);
const stack = [];
// let expression = ex
//   .replace(/[A-Z]/g, (match) => nums[match.charCodeAt(0) - 65])
//   .split("");
let expression = [];
for (let ch of ex) {
  if (/[A-Z]/.test(ch)) {
    expression.push(nums[ch.charCodeAt(0) - 65]);
  } else {
    expression.push(ch);
  }
}

function calculate(num1, num2, operator) {
  const first = +num1;
  const second = +num2;
  if (operator === "+") return first + second;
  else if (operator === "-") return first - second;
  else if (operator === "*") return first * second;
  else if (operator === "/") return first / second;
}

for (const current of expression) {
  // 연산자인 경우
  if (["+", "-", "*", "/"].includes(current)) {
    const num1 = stack.pop();
    const num2 = stack.pop();
    stack.push(calculate(num2, num1, current));
  } else {
    // 숫자인 경우
    stack.push(current);
  }
}

console.log(stack[0].toFixed(2));
