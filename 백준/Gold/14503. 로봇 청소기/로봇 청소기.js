const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nums, cur, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = nums.split(" ").map(Number);
let [r, c, d] = cur.split(" ").map(Number);
const board = arr.map((row) => row.split(" ").map(Number));
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
]; // 북, 동, 남, 서
let cleanCount = 0;

while (true) {
  // 현재 칸이 청소되어 있지 않은 경우 현재 칸 청소
  if (board[r][c] === 0) {
    board[r][c] = 2;
    cleanCount += 1;
  }

  let isCleaned = false;

  // 바라보고 있는 방향에서 반시계 방향으로 4방향 확인
  for (let i = 1; i <= 4; i++) {
    const nextDir = (d - i + 4) % 4;
    const nx = r + dir[nextDir][0];
    const ny = c + dir[nextDir][1];

    // 청소되지 않은 칸이 있다면 해당 방향으로 이동하고 다음으로
    if (board[nx][ny] === 0) {
      board[nx][ny] = 2;
      cleanCount += 1;
      isCleaned = true;
      d = nextDir;
      r = nx;
      c = ny;
      break;
    }
  }

  if (isCleaned) continue;

  // 주변 4칸이 모두 이동할 수 없는 경우 현재 방향에서 뒤로 한 칸
  const nx = r + dir[d][0] * -1;
  const ny = c + dir[d][1] * -1;

  // 갈 수 없으면 중단
  if (board[nx][ny] === 1) break;

  r = nx;
  c = ny;
}

console.log(cleanCount);
