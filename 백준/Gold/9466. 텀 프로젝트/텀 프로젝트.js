const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
let T = +t;

let index = 0;
let teamed = 0;
let visited = [];
let finished = [];
let graph = [];
let answer = "";

while (T > 0) {
  const N = +input[index];

  const tmp = input[index + 1].split(" ").map(Number);
  graph = [0, ...tmp];
  visited = Array(N + 1).fill(false);
  finished = Array(N + 1).fill(false);

  for (let j = 1; j <= N; j++) {
    if (visited[j]) continue;

    DFS(j);
  }

  answer += `${N - teamed}\n`;

  index += 2;
  T -= 1;
  teamed = 0;
}

// for문에서 연결된 노드로 이동
function DFS(node) {
  visited[node] = true;
  const next = graph[node];

  if (!visited[next]) {
    DFS(next);
  } else if (!finished[next]) {
    // 사이클인 경우
    // next 노드부터 현재 노드까지 한 사이클의 개수 세기
    for (let i = next; i != node; i = graph[i]) {
      teamed += 1;
    }
    teamed += 1;
  }

  finished[node] = true;
}

console.log(answer);
