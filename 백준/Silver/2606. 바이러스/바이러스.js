const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input.shift());
let m = Number(input.shift());
const network = input.map((v) => v.split(" ").map(Number));

let ch = Array.from({ length: n + 1 }, () => 0);
let answer = 0;
let graph = Array.from(Array(n + 1), () => Array()); // 인접 리스트

for ([a, b] of network) {
  graph[a].push(b);
  graph[b].push(a);
}

function DFS(v) {
  for (let i = 0; i < graph[v].length; i++) {
    nv = graph[v][i];
    if (ch[nv] === 0) {
      ch[nv] = 1;
      answer++;
      DFS(nv);
    }
  }
  return answer;
}

ch[1] = 1;
console.log(DFS(1));
