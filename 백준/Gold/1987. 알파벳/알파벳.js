const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [nums, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const [R, C] = nums.split(" ").map(Number);
const board = arr.map((row) => row.split(""));

// DFS
// 전체를 다 돌면 4^(RC) 시간 초과..
// 이전에 간 적 있으면 가지 않는다..? 백트래킹 가지치기
// 이건 객체 같은 걸로 판단
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const als = {};
for (let i = 0; i < 26; i++) {
  const letter = String.fromCharCode(65 + i);
  als[letter] = 0;
}

const visited = Array.from({ length: R }, () => Array(C).fill(false));
let maxMove = 0;

function isOutside(x, y) {
  return x < 0 || y < 0 || x >= R || y >= C;
}

function DFS(x, y, cnt) {
  // 4방향 모두 갈 수 없다면
  let movable = 0;
  for (let i = 0; i < 4; i++) {
    const nx = x + dir[i][0];
    const ny = y + dir[i][1];
    if (isOutside(nx, ny) || visited[nx][ny]) continue;
    if (als[board[nx][ny]] > 0) continue;

    movable += 1;
  }
  if (movable === 0) {
    maxMove = Math.max(cnt, maxMove);
    return;
  }

  for (let i = 0; i < 4; i++) {
    const nx = x + dir[i][0];
    const ny = y + dir[i][1];

    if (isOutside(nx, ny)) continue;
    if (visited[nx][ny]) continue;
    // 방문한 적 없는 알파벳인 경우
    if (als[board[nx][ny]] === 0) {
      visited[nx][ny] = true;
      als[board[nx][ny]] += 1;
      DFS(nx, ny, cnt + 1);
      visited[nx][ny] = false;
      als[board[nx][ny]] -= 1;
    }
  }
}
visited[0][0] = true;
als[board[0][0]] = 1;

DFS(0, 0, 0);
console.log(maxMove + 1);
