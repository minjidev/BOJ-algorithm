// [12100/2048 (Easy)](https://www.acmicpc.net/problem/12100)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, ...arr] = input;
const N = +n;
let board = arr.map((row) => row.split(" ").map(Number));
let maxNum = 0;

function deepCopy(arr) {
  return arr.map((row) => [...row]);
}

function rotate(board) {
  let rotated = Array.from({ length: N }, () => Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      rotated[j][N - 1 - i] = board[i][j];
    }
  }

  return rotated;
}

function simulate(dir) {
  // 현재 주어진 방향으로 기울이기
  let rotated = board;
  // 1. dir만큼 회전
  for (let i = 0; i < dir; i++) {
    rotated = rotate(rotated);
  }

  // 2. 아래로 떨어뜨리기
  let tmp = Array.from({ length: N }, () => Array(N).fill(0));
  for (let i = 0; i < N; i++) {
    // 한 열을 아래에서부터 올라오면서 확인. 열인 i는 고정.
    let tmpEnd = N - 1;
    let prev = null;

    for (let j = N - 1; j >= 0; j--) {
      const cur = rotated[j][i];

      if (cur === 0) continue; // 0 이면 아무것도 하지 않는다.
      if (prev === null) prev = cur;
      else if (prev === cur) {
        // 같으면 합쳐준다.
        tmp[tmpEnd][i] = prev * 2;
        tmpEnd -= 1;
        prev = null;
      } else {
        // 다르면 prev만 넣고 넘어간다.
        tmp[tmpEnd][i] = prev;
        tmpEnd -= 1;
        prev = cur;
      }
    }

    // 열을 다 돌고 prev에 저장된 값이 있으면 넣어준다.
    if (prev !== null) {
      tmp[tmpEnd][i] = prev;
    }
  }

  rotated = tmp;

  // 3. 4-dir만큼 회전하여 배열 되돌리기
  for (let i = 0; i < 4 - dir; i++) {
    rotated = rotate(rotated);
  }

  board = rotated;
}

function getMaxBlock() {
  let maxBlock = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (maxBlock < board[i][j]) {
        maxBlock = board[i][j];
      }
    }
  }

  return maxBlock;
}

function DFS(L) {
  // 5번까지 했으면
  if (L === 5) {
    const maxBlock = getMaxBlock();
    maxNum = Math.max(maxNum, maxBlock);
    return;
  }

  // 그 전이면 4방향으로 기울여보기
  for (let i = 0; i < 4; i++) {
    const copy = deepCopy(board); // 현재 보드 상태 기억
    simulate(i); // 현재 방향 전달
    DFS(L + 1);
    board = copy;
  }
}

DFS(0);
console.log(maxNum);
