const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "prac.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = input.shift().split(" ").map(Number);
const board = input.map((v) => v.split("").map(Number));

const q = [];
let answer = 0;

let dis = Array.from(Array(n), () => Array(m).fill(0)); // 거리 배열
let ch = Array.from(Array(n), () => Array(m).fill(0)); // 방문 확인 배열
// 출발 위치 넣어주기
q.push([0, 0]);
dis[0][0] = 1;
ch[0][0] = 1;

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function BFS(x, y) {
  while (q.length) {
    let [x, y] = q.shift();
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m && 
        board[nx][ny] === 1 &&
        ch[nx][ny] === 0
      ) {
        ch[nx][ny] = 1;
        dis[nx][ny] = dis[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }
  return dis[n - 1][m - 1];
}
console.log(BFS(0, 0));

