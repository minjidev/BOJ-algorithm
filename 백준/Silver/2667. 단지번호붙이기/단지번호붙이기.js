const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "prac.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = Number(input.shift());
const board = input.map((v) => v.split("").map(Number));
// console.log("board: ", board);
let cntArr = [];
let ch = Array.from(Array(n), () => Array(n).fill(0)); // 방문 확인 배열
// 매번 새로 돌아야하므로 내부에 cnt 선언하기
function BFS(x, y) {
  let cnt = 1;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  queue = [];
  queue.push([x, y]);

  ch[x][y] = 1;
  while (queue.length) {
    let [x, y] = queue.shift();
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < n &&
        board[nx][ny] === 1 &&
        ch[nx][ny] === 0
      ) {
        ch[nx][ny] = 1;
        cnt++;
        queue.push([nx, ny]);
      }
    }
  }
  cntArr.push(cnt);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 1 && ch[i][j] === 0) {
      BFS(i, j);
    }
  }
}

cntArr.sort((a, b) => a - b);
console.log(cntArr.length);
cntArr.forEach((x) => console.log(x));
