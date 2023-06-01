const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = n.split(" ").map(Number);
const flavors = arr.map((row) => row.split(" ").map(Number));
let cnt = 0;
// 섞어먹으면 안 되는 조합
const flavorsNotToMix = Array.from({ length: N + 1 }, () =>
  Array(N + 1).fill(0)
);

for (let [a, b] of flavors) {
  flavorsNotToMix[a][b] = true;
  flavorsNotToMix[b][a] = true;
}

for (let i = 1; i <= N; i++) {
  for (let j = i + 1; j <= N; j++) {
    if (flavorsNotToMix[i][j]) continue;
    for (let k = j + 1; k <= N; k++) {
      if (flavorsNotToMix[j][k] || flavorsNotToMix[i][k]) continue;
      cnt++;
    }
  }
}
console.log(cnt);
