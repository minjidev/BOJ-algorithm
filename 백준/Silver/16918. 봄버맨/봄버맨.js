const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [r, c, n] = N.split(" ").map(Number);
const board = arr.map((row) => row.split(""));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let time = 1;
let timeBoard = Array.from({ length: r }, () => Array(c).fill(0));

// 폭탄 설치 시간 추가
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (board[i][j] === "O") timeBoard[i][j] = 3;
  }
}

while (time <= n) {
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      // 빈 자리에 새로운 폭탄 설치
      if (time % 2 === 0 && board[i][j] === ".") {
        board[i][j] = "O";
        timeBoard[i][j] = time + 3;
      }

      if (time % 2 === 1 && time === timeBoard[i][j]) {
        board[i][j] = ".";
        // bfs 돌면서 3초 지난 경우 폭탄 폭발
        for (let k = 0; k < dx.length; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];

          if (
            nx >= 0 &&
            nx < r &&
            ny >= 0 &&
            ny < c &&
            board[nx][ny] === "O" &&
            time !== timeBoard[nx][ny]
          ) {
            // 자기자신 포함 4방향
            board[nx][ny] = ".";
            timeBoard[nx][ny] = 0;
          }
        }
      }
    }
  }
  time += 1;
}

console.log(board.map((row) => row.join("")).join("\n"));
