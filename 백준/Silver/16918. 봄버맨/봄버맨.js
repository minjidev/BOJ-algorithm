const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [nums, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const [R, C, N] = nums.split(" ").map(Number);
const board = arr.map((row) => row.split(""));
const timerBoard = Array.from({ length: R }, () => Array(C).fill(0));
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let elapsedTime = 0;

function explodeBombs() {
  if (elapsedTime <= 1) return;

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (board[i][j] === "O" && timerBoard[i][j] === elapsedTime) {
        // 폭발
        board[i][j] = ".";
        for (let k = 0; k < 4; k++) {
          const nx = i + dir[k][0];
          const ny = j + dir[k][1];

          if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
          if (board[nx][ny] === ".") continue;
          if (timerBoard[nx][ny] === elapsedTime) continue;

          board[nx][ny] = ".";
        }
      }
    }
  }
}

function plantBombs() {
  if (elapsedTime <= 1) return;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (board[i][j] === "O") continue;
      board[i][j] = "O";
      timerBoard[i][j] = elapsedTime + 3;
    }
  }
}

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (board[i][j] === ".") continue;
    timerBoard[i][j] = 3;
  }
}

for (let i = 0; i <= N; i++) {
  // 홀수 초: 폭탄 폭발
  if (elapsedTime % 2 === 1) {
    explodeBombs();
  }
  // 짝수 초: 폭탄 설치
  if (elapsedTime % 2 === 0) {
    plantBombs();
  }
  elapsedTime += 1;
}

console.log(board.map((row) => row.join("")).join("\n"));
