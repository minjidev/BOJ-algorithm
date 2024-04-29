const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [nums, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, H] = nums.split(" ").map(Number);
const connected = input.map((row) => row.split(" ").map(Number));
const graph = Array.from({ length: 40 }, () => Array(40).fill(false));
let minCount = 4;

for (const [x, y] of connected) {
  // x행에서 y열 -> y+1열 연결
  graph[x][y] = true;
}

function check() {
  // 현재 사용한 가로선을 가지고 사다리타기 -> 각 세로선마다 가로 확인
  for (let i = 1; i <= N; i++) {
    let col = i;
    for (let j = 1; j <= H; j++) {
      if (col <= N && graph[j][col]) col += 1;
      else if (col > 0 && graph[j][col - 1]) col -= 1;
    }

    if (i !== col) return false;
  }

  return true;
}

// depth, 현재 행, 현재 열
function DFS(L, cur, row) {
  if (L > 3) return;
  if (minCount < L) return;
  if (check()) {
    minCount = L;
    return;
  }

  // 사다리 [행, 열] 조합으로 선택
  for (let i = cur; i <= H; i++) {
    for (let j = 1; j <= N; j++) {
      // 만약 현재 그어진 선이 있거나 양 옆에 연결된 선이 있는 경우 넘어가기
      if (graph[i][j] || graph[i][j - 1] || graph[i][j + 1]) continue;

      // 아니라면 선택
      graph[i][j] = true;
      DFS(L + 1, i, j);
      graph[i][j] = false;
    }
  }
}

DFS(0, 0, 0);

if (minCount === 4) {
  console.log(-1);
  return;
}

console.log(minCount);
