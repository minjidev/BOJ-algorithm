// [1918/후위 표기식](https://www.acmicpc.net/problem/1918)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");
const stack = [];
let answer = "";

for (let ch of input) {
  // 알파벳이라면 바로 출력한다.
  if (ch >= "A" && ch <= "Z") answer += ch;
  // (은 우선 순위가 높기 때문에 바로 넣는다.
  else if (ch === "(") stack.push(ch);
  // )은 (가 나올때까지 꺼낸다.
  else if (ch === ")") {
    while (stack.length > 0 && stack.at(-1) !== "(") {
      answer += stack.pop();
    }
    stack.pop();
  }

  // *, /는 동일한 우선순위인 *, /를 모두 꺼낸 다음 넣는다.
  else if (ch === "*" || ch === "/") {
    while (stack.length > 0 && (stack.at(-1) === "*" || stack.at(-1) === "/")) {
      answer += stack.pop();
    }

    stack.push(ch);
  }

  // +, -는 동일하거나 높은 우선순위를 가진 모든 요소를 꺼낸 다음 넣는다. 이때 (는 꺼내지 않는다.
  else if (ch === "+" || ch === "-") {
    while (stack.length > 0 && stack.at(-1) !== "(") {
      answer += stack.pop();
    }

    stack.push(ch);
  }
}

// 다 돌고 난 후 stack에 남은 연산자가 있다면 모두 꺼낸다.
if (stack.length > 0) {
  while (stack.length > 0) {
    answer += stack.pop();
  }
}

console.log(answer);
