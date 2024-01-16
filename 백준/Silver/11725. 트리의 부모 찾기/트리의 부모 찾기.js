const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +n;
const pairs = arr.map((row) => row.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
const ch = Array(N + 1).fill(0);
const parents = Array(N + 1).fill(0);

for (let [s, e] of pairs) {
  graph[s].push(e);
  graph[e].push(s);
}

function DFS(v) {
  for (let i = 0; i < graph[v].length; i++) {
    const nv = graph[v][i];

    if (ch[nv]) continue;

    ch[nv] = 1;
    parents[nv] = v;
    DFS(nv);
  }
}

DFS(1);
console.log(parents.slice(2).join("\n"));
