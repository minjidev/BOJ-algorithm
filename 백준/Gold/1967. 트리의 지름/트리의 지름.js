const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +n;
const arr = input.map((row) => row.split(" ").map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
let visited = Array(N + 1).fill(false);
let maxLen = 0;
let endNode = 0;

for (let [s, e, w] of arr) {
  graph[s].push([e, w]); // s에서 e로 w의 가중치를 가지는 간선 연결
  graph[e].push([s, w]);
}

function DFS(node, len) {
  // 각 노드 방문하면서 길이가 더 긴 경우 지름 갱신
  if (maxLen < len) {
    maxLen = len;
    endNode = node;
  }

  // 연결된 노드 방문
  for (let i = 0; i < graph[node].length; i++) {
    const [nextNode, weight] = graph[node][i];

    if (visited[nextNode]) continue;
    visited[nextNode] = true;
    DFS(nextNode, len + weight);
  }
}

visited[1] = true;
DFS(1, 0); // 루트에서 가장 멀리 있는 노드 구하기

visited = Array(N + 1).fill(false);
visited[endNode] = true;
maxLen = 0;
DFS(endNode, 0); // endNode에서 가장 멀리 있는 노드 구하기

console.log(maxLen);
