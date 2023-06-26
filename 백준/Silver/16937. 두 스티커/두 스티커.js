const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [hw, cnt, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [h, w] = hw.split(" ").map(Number);
const n = +cnt;
const stickers = arr.map((row) => row.split(" ").map(Number));
const lengthArr = stickers.map(([a, b]) => a + b);
const sizeArr = stickers.map(([a, b]) => a * b);

const long = Math.max(h, w);
const short = Math.min(h, w);
let sum = 0;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = 0; k < 2; k++) {
      if (stickers[i][k] > long) continue;
      for (let l = 0; l < 2; l++) {
        if (stickers[j][k] > long) continue;
        const one = stickers[i][k];
        const two = stickers[j][l];

        if (one + two <= long) {
          if (lengthArr[i] - one <= short && lengthArr[j] - two <= short) {
            sum = Math.max(sum, sizeArr[i] + sizeArr[j]);
          }
        }

        if (one + two <= short) {
          if (lengthArr[i] - one <= long && lengthArr[j] - two <= long) {
            sum = Math.max(sum, sizeArr[i] + sizeArr[j]);
          }
        }
      }
    }
  }
}

console.log(sum);
