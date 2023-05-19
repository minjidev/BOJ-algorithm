const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [nums, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, v] = nums.split(" ").map(Number);
const pairs = arr.map((pair) => pair.split(" ").map(Number));
let graph = Array.from({ length: n + 1 }, () => []);
let dfsPath = [];
let bfsPath = [];

// 인접 리스트
for (let [s, e] of pairs) {
  graph[s].push(e);
  graph[e].push(s);
}

graph = graph.map((v) => v.sort((a, b) => a - b));

function getDFSPath(v) {
  let ch = Array.from({ length: n + 1 }, () => 0);
  ch[v] = 1;
  dfsPath.push(v);

  function DFS(v) {
    for (let i = 0; i < graph[v].length; i++) {
      const nv = graph[v][i];
      if (ch[nv] === 0) {
        ch[nv] = 1;
        dfsPath.push(nv);
        DFS(nv);
      }
    }
  }

  DFS(v);
}

function getBFSPath(v) {
  let q = [];
  let ch = Array.from({ length: n + 1 }, () => 0);

  ch[v] = 1;
  bfsPath.push(v);
  q.push(v);

  while (q.length) {
    const v = q.shift();
    for (let i = 0; i < graph[v].length; i++) {
      const nv = graph[v][i];
      if (ch[nv] === 0) {
        ch[nv] = 1;
        bfsPath.push(nv);
        q.push(nv);
      }
    }
  }
}

getDFSPath(v);
getBFSPath(v);

console.log(dfsPath.join(" "));
console.log(bfsPath.join(" "));
