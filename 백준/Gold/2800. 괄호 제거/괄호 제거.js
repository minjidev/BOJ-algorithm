// [2800](https://www.acmicpc.net/problem/2800)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
const N = input.length;

const stack = [];
const pairs = [];
const excluded = Array(N).fill(false);
let answer = new Set();

// 쌍 구하기
for (let i = 0; i < N; i++) {
  const ch = input[i];
  if (ch === "(") stack.push(i);
  else if (ch === ")") {
    const openIndex = stack.pop();

    pairs.push([openIndex, i]);
  }
}

// 제외할 괄호쌍을 구하는 조합
function DFS(L, start) {
  if (L >= 1) {
    // 해당 개수인 경우 괄호 제거한 새로운 문자열 생성
    let newStr = "";

    for (let i = 0; i < N; i++) {
      if (excluded[i]) continue;
      newStr += input[i];
    }

    answer.add(newStr);
  }

  // 백트래킹
  for (let i = start; i < pairs.length; i++) {
    // input의 어떤 index를 선택할건지
    const [opening, closing] = pairs[i];
    excluded[opening] = true;
    excluded[closing] = true;

    DFS(L + 1, i + 1);

    excluded[opening] = false;
    excluded[closing] = false;
  }
}

DFS(0, 0);

console.log([...answer].sort().join("\n"));
