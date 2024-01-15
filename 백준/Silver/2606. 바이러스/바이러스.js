const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [c, p, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [computerCnt, pairCnt] = [c, p].map(Number);
const pairs = arr.map((row) => row.split(" ").map(Number));
const graph = Array.from({ length: computerCnt + 1 }, () => []);
const ch = Array(computerCnt + 1).fill(0);
let answer = 0;

// 연결 그래프
for (let [s, e] of pairs) {
  graph[s].push(e);
  graph[e].push(s);
}

// DFS
function DFS(v) {
  for (let i = 0; i < graph[v].length; i++) {
    const nv = graph[v][i];

    if (ch[nv]) continue;

    ch[nv] = 1;
    answer += 1;
    DFS(nv);
  }
}

ch[1] = 1;
DFS(1);
console.log(answer);
