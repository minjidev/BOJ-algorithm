const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = N.split(" ").map(Number);
let board = arr.map((row) => row.split("").map(Number));

function BFS(n, m, board) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let q = [];
  let dis = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  q.push([0, 0]);
  dis[0][0] = 1;
  board[0][0] = 0;

  while (q.length) {
    const [x, y] = q.shift();

    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx === n - 1 && ny === m - 1) {
        return dis[x][y] + 1;
      }

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && board[nx][ny] === 1) {
        q.push([nx, ny]);
        board[nx][ny] = 0;
        dis[nx][ny] = dis[x][y] + 1;
      }
    }
  }
}

console.log(BFS(n, m, board));
