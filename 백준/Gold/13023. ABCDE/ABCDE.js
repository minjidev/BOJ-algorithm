// [13023](https://www.acmicpc.net/problem/13023)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [nums, ...arr] = input;
const [N, M] = nums.split(" ").map(Number);
const friends = arr.map((row) => row.split(" ").map(Number));

// A -> B, B -> C, C -> D, D -> E의 친구 관계가 성립하는지 판단
// DFS로 depth 4까지 내려가는 경우 1, 아니면 0
// 1-0-2-3-4처럼 친구가 항상 순서대로 있는 건 아니기 때문에 각 숫자에서 모두 DFS해야 한다.
const graph = Array.from({ length: N + 1 }, () => []);
let visited;
let flag = false;

for (let [from, to] of friends) {
  graph[from].push(to);
  graph[to].push(from);
}

function DFS(L, cur) {
  if (L >= 4) {
    flag = true;

    return;
  }

  for (let i = 0; i < graph[cur].length; i++) {
    const next = graph[cur][i];

    if (visited[next]) continue;

    visited[next] = true;
    DFS(L + 1, next);
    visited[next] = false;
  }
}

// 각 숫자에서 depth 4까지 내려갈 수 있는지 판단
for (let i = 0; i < N; i++) {
  visited = Array(N + 1).fill(false);

  visited[i] = true;
  DFS(0, i); // depth, 시작 숫자

  if (flag) break;
}
console.log(flag ? 1 : 0);
