const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = n.split(" ").map(Number);
const pref = arr.map((row) => row.split(" ").map(Number));
let answer = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < M; i++) {
  for (let j = 0; j < M; j++) {
    if (i === j) continue;
    for (let k = 0; k < M; k++) {
      if (i === k || j === k) continue;
      // 치킨 세 개 선택했을 때 각 학생 돌면서 최댓값 더하기
      let sum = 0;
      for (let l = 0; l < N; l++) {
        sum += Math.max(pref[l][i], pref[l][j], pref[l][k]);
      }
      answer = Math.max(sum, answer);
    }
  }
}

console.log(answer);