const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +n;
const board = arr.map((row) => row.split(" ").map(Number));
let maxNum = 0;

function deepCopy(arr) {
  return arr.map((row) => [...row]);
}

function rotate(board) {
  let rotated = Array.from({ length: N }, () => Array(N).fill(0));

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      rotated[y][N - 1 - x] = board[x][y];
    }
  }

  return rotated;
}

function simulate(dir, board) {
  let rotated = board;

  // 시계방향 90도 회전
  for (let i = 0; i < dir; i++) {
    rotated = rotate(rotated);
  }

  let tmp = Array.from({ length: N }, () => Array(N).fill(0));

  // 떨어뜨리기
  for (let i = 0; i < N; i++) {
    let tmpEnd = N - 1;
    let prev = null;

    for (let j = N - 1; j >= 0; j--) {
      // 아래에서부터
      const cur = rotated[j][i];

      if (cur === 0) continue;

      if (prev === null) {
        prev = cur;
      } else if (prev === cur) {
        // 값이 같으면 합쳐서 떨어뜨리기
        tmp[tmpEnd][i] = cur * 2;
        tmpEnd -= 1;
        prev = null;
      } else {
        // 값이 다르면 이전 값 떨어뜨리기
        tmp[tmpEnd][i] = prev;
        tmpEnd -= 1;
        prev = cur;
      }
    }

    if (prev !== null) {
      tmp[tmpEnd][i] = prev;
      tmpEnd -= 1;
    }
  }

  rotated = tmp;

  // 되돌리기
  for (let i = 0; i < 4 - dir; i++) {
    rotated = rotate(rotated);
  }

  return rotated;
}

function calculateSum(board) {
  let maxNum = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (maxNum < board[i][j]) {
        maxNum = board[i][j];
      }
    }
  }
  return maxNum;
}

function DFS(L, board) {
  if (L >= 5) {
    const curMax = calculateSum(board);

    maxNum = Math.max(maxNum, curMax);
    return;
  }

  for (let i = 0; i < 4; i++) {
    const simulated = simulate(i, deepCopy(board));

    DFS(L + 1, deepCopy(simulated));
  }
}

for (let i = 0; i < 4; i++) {
  DFS(0, deepCopy(board));
}

console.log(maxNum);
