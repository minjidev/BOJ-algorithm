const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, k, ...cards] = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +n;
const K = +k;

const answer = new Set();
const ch = Array(N).fill(0);

function DFS(L, numStr) {
  if (L === K) {
    answer.add(numStr);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (ch[i]) continue;

    ch[i] = 1;
    DFS(L + 1, numStr + cards[i]);
    ch[i] = 0;
  }
}

DFS(0, "");
console.log(answer.size);
