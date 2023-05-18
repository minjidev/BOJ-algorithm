const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [total, pairCount, ...pairs] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const totalCnt = +total;
const connectedPairs = pairs.map((pair) => pair.split(" ").map(Number));

let graph = Array.from({ length: totalCnt + 1 }, () => []);
let ch = Array.from({ length: totalCnt + 1 }, () => 0);
let answer = 0;

for (let [s, e] of connectedPairs) {
  graph[s].push(e);
  graph[e].push(s);
}

function DFS(v) {
  for (let i = 0; i < graph[v].length; i++) {
    const nv = graph[v][i];
    if (ch[nv] === 0) {
      answer++;
      ch[nv] = 1;
      DFS(nv);
    }
  }
}

ch[1] = 1;
DFS(1);
console.log(answer);