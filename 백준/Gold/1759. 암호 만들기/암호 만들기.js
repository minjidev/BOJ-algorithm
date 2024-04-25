const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [L, C] = n.split(" ").map(Number);
const arr = input.split(" ");
let answer = "";

arr.sort();

// 백트래킹 - 순열
// 정렬되어 있지 않거나 모음 1개 이상 && 자음 2개 이상이 아닌 경우 return
function check(code) {
  let vCount = 0;

  for (let ch of code) {
    if ("aeiou".includes(ch)) vCount += 1;
  }

  if (vCount >= 1 && code.length - vCount >= 2) return true;
  return false;
}

function DFS(start, code) {
  if (code.length === L) {
    // 가능성 있는지 확인
    if (check(code)) answer += code + "\n";
    return;
  }

  for (let i = start; i < C; i++) {
    DFS(i + 1, code + arr[i]);
  }
}

DFS(0, "");

console.log(answer);
