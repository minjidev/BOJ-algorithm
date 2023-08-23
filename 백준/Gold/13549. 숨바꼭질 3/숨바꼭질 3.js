const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, K] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const MAX = 100000 + 1;
const ch = Array.from({ length: MAX }).fill(0);
const dis = Array.from({ length: MAX }).fill(0);
function BFS() {
  const queue = [];
  queue.push(N);
  ch[N] = 1;

  while (true) {
    const x = queue.shift();
    if (x === K) return dis[x];

    for (let nx of [x - 1, x + 1, x * 2]) {
      if (nx < 0 || nx >= MAX || ch[nx] === 1) continue;

      if (nx === x * 2) {
        if (nx === K) return dis[x];
        dis[nx] = dis[x];
        queue.unshift(nx);
      } else {
        if (nx === K) return dis[x] + 1;
        dis[nx] = dis[x] + 1;
        queue.push(nx);
      }
      ch[nx] = 1;
    }
  }
}

console.log(BFS());
