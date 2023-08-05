const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, M, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = [N, M].map(Number);
const map = arr.map((row) => row.split(" ").map(Number));
const ch = Array(n + 1).fill(0);
const nodes = Array.from({ length: n + 1 }, () => []);
let answer = 0;

// 인접 리스트
for (let [from, to] of map) {
  nodes[from].push(to);
  nodes[to].push(from);
}

function DFS(v) {
  for (let nv of nodes[v]) {
    if (ch[nv] === 1) continue;

    ch[nv] = 1;
    answer += 1;
    DFS(nv);
  }
}

ch[1] = 1;
DFS(1);
console.log(answer);
