const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b, c, d, e, f] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

for (let i = -999; i <= 999; i++) {
  for (let j = -999; j <= 999; j++) {
    if (a * i + b * j === c && d * i + e * j === f) {
      console.log([i, j].join(" "));
      break;
    }
  }
}