const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nums, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const [R, C, T] = nums.split(" ").map(Number);
const board = arr.map((row) => row.split(" ").map(Number));
const dirUp = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
]; // 위쪽으로 4방향
const dirDown = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

// 공기청정기 행 확인
const purifier = [];
for (let i = 0; i < R; i++) {
  if (board[i][0] === -1) {
    purifier.push(i);
  }
}

function isOutside(x, y) {
  return x < 0 || y < 0 || x >= R || y >= C;
}

function spread() {
  // 동시에 확산하기 위해 각 위치마다 확산되는 미세먼지 양 계산
  const spreaded = Array.from({ length: R }, () => Array(C).fill(0));

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      const cur = board[i][j];
      if (cur <= 0) continue;

      let count = 0;
      const d = Math.floor(cur / 5);
      for (let k = 0; k < 4; k++) {
        const nx = i + dirUp[k][0];
        const ny = j + dirUp[k][1];

        if (isOutside(nx, ny) || board[nx][ny] === -1) continue;

        count += 1;
        // 4방향 증가량 더하기
        spreaded[nx][ny] += d;
      }
      // 현재 위치는 (증가량 * 개수) 만큼 빼기
      spreaded[i][j] = spreaded[i][j] - d * count;
    }
  }

  // 확산
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      board[i][j] += spreaded[i][j];
    }
  }
}

function cleanUp() {
  let curDir = 0;
  let curX = purifier[0];
  let curY = 1;
  let prev = 0;

  // 위쪽 방향 청소
  while (true) {
    const nx = curX + dirUp[curDir][0];
    const ny = curY + dirUp[curDir][1];

    // 처음 위치로 오면 종료
    if (curX === purifier[0] && curY === 0) {
      break;
    }

    // 격자를 벗어나면 방향 변경
    if (isOutside(nx, ny)) {
      curDir += 1;
      continue;
    }

    // 변수 값 swap하고 이동
    [board[curX][curY], prev] = [prev, board[curX][curY]];
    curX = nx;
    curY = ny;
  }
}

function cleanDown() {
  let curDir = 0;
  let curX = purifier[1];
  let curY = 1;
  let prev = 0;

  // 아래쪽 방향 청소
  while (true) {
    const nx = curX + dirDown[curDir][0];
    const ny = curY + dirDown[curDir][1];

    // 처음 위치로 오면 종료
    if (curX === purifier[1] && curY === 0) {
      break;
    }

    // 격자를 벗어나면 방향 변경
    if (isOutside(nx, ny)) {
      curDir += 1;
      continue;
    }

    // 변수 값 swap하고 이동
    [board[curX][curY], prev] = [prev, board[curX][curY]];
    curX = nx;
    curY = ny;
  }
}

// T초 동안
let sec = 0;
while (sec < T) {
  // 미세먼지 확산
  spread();

  // 공기청정기 바람
  cleanUp();
  cleanDown();

  sec += 1;
}

// 방에 남은 미세먼지 양 구하기
let dustLeft = 0;
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (board[i][j] <= 0) continue;

    dustLeft += board[i][j];
  }
}

console.log(dustLeft);
