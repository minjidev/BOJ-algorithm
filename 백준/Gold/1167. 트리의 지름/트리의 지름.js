const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +n;

// grpah에 [nextNode, dist] 저장
// 루트 노드에서 가장 멀리 있는 노드 구하기
// 해당 노드에서 가장 멀리 있는 노드까지의 거리 구하기

const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < N; i++) {
  const [s, ...row] = arr[i].split(" ").map(Number);

  for (let j = 0; j < row.length; j += 2) {
    if (row[j] === -1) break;
    const e = row[j];
    const dist = row[j + 1];
    graph[s].push([e, dist]);
  }
}

let end = 0;
let maxDis = 0;
let visited = Array(N + 1).fill(false);

function DFS(node, dist) {
  if (maxDis < dist) {
    maxDis = dist;
    end = node;
  }

  for (let i = 0; i < graph[node].length; i++) {
    const [nextNode, d] = graph[node][i];
    if (visited[nextNode]) continue;

    visited[nextNode] = true;
    DFS(nextNode, dist + d);
  }
}

visited[1] = true;
DFS(1, 0);

visited = Array(N + 1).fill(false);
visited[end] = true;
maxDis = 0;
DFS(end, 0);

console.log(maxDis);
