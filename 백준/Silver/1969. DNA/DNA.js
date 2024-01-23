const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [nums, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = nums.split(" ").map(Number);
const DNAs = arr.map((row) => row.split(""));
const nucleotide = ["A", "C", "G", "T"];
let answer = "";
let hammingDistance = 0;

for (let i = 0; i < M; i++) {
  const count = Array(4).fill(0); // [A, C, G, T]
  for (let j = 0; j < N; j++) {
    count[nucleotide.indexOf(DNAs[j][i])] += 1;
  }
    
  const max = Math.max(...count);
  answer += nucleotide[count.indexOf(max)];
  hammingDistance += N - max;
}

console.log([answer, hammingDistance].join("\n"));
