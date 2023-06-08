const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = n.split(" ").map(Number);
const DNAs = arr.map((row) => row.split(""));

const nucle = ["A", "C", "G", "T"]; // 사전 순
let answer = "";
let distance = 0;

// M번째 위치에서 가장 많이 사용된 알파벳을 M번째 위치에 넣기
for (let i = 0; i < M; i++) {
  const cntArr = Array.from({ length: 4 }).fill(0);
  for (let j = 0; j < N; j++) {
    cntArr[nucle.indexOf(DNAs[j][i])] += 1;
  }

  // 가장 많은 알파벳 M번째 위치에 넣기
  const idx = cntArr.indexOf(Math.max(...cntArr));
  answer += nucle[idx];
  // hamming distance 더하기
  distance += N - cntArr[idx];
}

console.log([answer, distance].join("\n"));
