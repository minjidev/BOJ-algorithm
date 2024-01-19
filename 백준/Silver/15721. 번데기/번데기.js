const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [A, T, C] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let round = 0;
let cnt = 0;
let answer = 0;

while (true) {
  round++;
  const arr = [0, 1, 0, 1];
  // 게임 규칙에 따른 문장 생성
  for (let i = 0; i < round + 1; i++) arr.push(0);
  for (let i = 0; i < round + 1; i++) arr.push(1);

  // 해당 문장 각각을 검사 
  for (const x of arr) {
    if (x === C) cnt++;
    if (cnt === T) {
      console.log(answer);
      return;
    }

    answer++;
    answer %= A;
  }
}