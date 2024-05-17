const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let N = BigInt(fs.readFileSync(filePath).toString().trim());
let answer = BigInt(0);

for (let i = 1; i < N; i++) {
    answer += N * BigInt(i) + BigInt(i);
}

console.log(answer.toString());
