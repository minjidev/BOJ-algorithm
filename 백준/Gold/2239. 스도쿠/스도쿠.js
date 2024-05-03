const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const board = input.map((row) => row.split("").map(Number));
let flag = false;
// 각 0 위치를 배열에 저장하고 가능한 모든 숫자를 넣어본다.
// 들어갈 수 있는 숫자는 가로줄, 세로줄, 그리고 3*3에 없는 숫자
// 그 경우에 다른 좌표들도 마찬가지로 검사하면서 하나씩 채운다.
// 가능한 경우의 수는 9^(81)에서 가지치기

const zeros = [];

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (board[i][j] === 0) {
      zeros.push([i, j]);
    }
  }
}

function isPossible(x, y, num) {
  for (let i = 0; i < 9; i++) {
    // 행 검사
    if (board[i][y] === num) return false;
    // 열 검사
    if (board[x][i] === num) return false;
  }

  // 구역 검사
  const nx = Math.floor(x / 3) * 3; // x 시작점
  const ny = Math.floor(y / 3) * 3; // y 시작점

  // 시작점 기준 3x3 격자 검사
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[nx + i][ny + j] === num) return false;
    }
  }

  return true;
}

function DFS(L) {
  if (flag) return; // 처음 완성되는 경우에서 중단
  if (L === zeros.length) {
    // 완성된 경우
    console.log(board.map((row) => row.join("")).join("\n"));
    flag = true;
    return;
  }

  // 현재 좌표
  const [x, y] = zeros[L];

  for (let i = 1; i < 10; i++) {
    if (isPossible(x, y, i)) {
      board[x][y] = i;
      DFS(L + 1);
      board[x][y] = 0;
    }
  }
}

DFS(0);
