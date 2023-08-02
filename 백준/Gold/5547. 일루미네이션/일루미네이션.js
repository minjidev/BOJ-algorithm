class Queue {
  constructor() {
    this.dat = [];
    this.head = 0;
    this.tail = 0;
  }

  push(item) {
    this.dat[this.tail++] = item;
  }

  pop() {
    this.head++;
  }

  front() {
    return this.dat[this.head];
  }

  rear() {
    return this.dat[this.tail - 1];
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [nums, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [W, H] = nums.split(" ").map(Number);
const board = arr.map((row) => row.split(" ").map(Number));

/**
 * 집의 각 면에서 외부와 닿아있는 부분, 배치도를 벗어나는 부분을 센다.
 *  - 헷갈리는 것: 항상 x가 행, y가 열로 움직인다. : [x, y] = [height(세로), width(가로)]
 *  - DFS: 홀수/짝수이냐에 따라 다르게 6방향 확인
 *  - 1. 내부와 외부를 구분 -> 0이면서 바깥이랑 맞닿은 경우를 외부로 본다.
 *  - 2. 1인 경우 돌면서 배치도 벗어나는 경우 +1
 *  - 3. 외부와 맞닿은 경우 +1
 *  */

const dir = {
  even: [
    [-1, -1],
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 1],
    [-1, 0],
  ],
  odd: [
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 0],
  ],
};

// console.log(board);

function checkOutdoor() {
  const ch = Array.from({ length: H }, () => Array(W).fill(0));

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (board[i][j] === 1) continue;
      if (ch[i][j] === 1) continue;

      const q = new Queue();
      const outsideHomeArea = [];
      let isOutdoor = false;

      q.push([i, j]);
      ch[i][j] = 1;

      while (!q.isEmpty()) {
        const [x, y] = q.front();
        q.pop();
        outsideHomeArea.push([x, y]);

        // 아래로 이동하므로 x+1 해줘야 한다
        const key = (x + 1) % 2 === 0 ? "even" : "odd";

        for (let k = 0; k < 6; k++) {
          // 원래랑 반대로 이동
          const nx = x + dir[key][k][1];
          const ny = y + dir[key][k][0];

          if (nx < 0 || ny < 0 || nx >= H || ny >= W) {
            isOutdoor = true;
            continue;
          }

          if (board[nx][ny] === 1 || ch[nx][ny] === 1) continue;

          q.push([nx, ny]);
          ch[nx][ny] = 1;
        }
      }

      // 하나라도 바깥쪽과 맞닿아있는 경우 -1로 변경
      if (isOutdoor) {
        for (const [x, y] of outsideHomeArea) {
          board[x][y] = -1;
        }
      }
    }
  }
}

function getWallsToIlluminate() {
  const ch = Array.from({ length: H }, () => Array(W).fill(0));

  let answer = 0;

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (board[i][j] !== 1 || ch[i][j] === 1) continue;

      // bfs
      const q = new Queue();
      q.push([i, j]);
      ch[i][j] = 1;

      while (!q.isEmpty()) {
        const [x, y] = q.front();
        const key = (x + 1) % 2 === 0 ? "even" : "odd";
        q.pop();

        for (let k = 0; k < 6; k++) {
          const nx = x + dir[key][k][1];
          const ny = y + dir[key][k][0];

          // 배치도 바깥쪽 -> bfs 중단
          if (nx < 0 || ny < 0 || nx >= H || ny >= W) {
            answer += 1;
            continue;
          }

          // 외부 -> bfs 중단
          if (board[nx][ny] === -1) {
            answer += 1;
            continue;
          }

          if (ch[nx][ny] === 0 && board[nx][ny] === 1) {
            ch[nx][ny] = 1;
            q.push([nx, ny]);
          }
        }
      }
    }
  }
  console.log(answer);
}

checkOutdoor();
getWallsToIlluminate();
