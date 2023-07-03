const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, K] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
const MAX = 100001;
const ch = Array.from({ length: MAX }, () => 0);

// 시간 증가하지 않는 경우(x*2)가 우선순위가 높다 -> q의 앞에 넣기
function bfs() {
  const q = [[N, 0]]; // [위치, 시간]
  ch[N] = 1;

  while (true) {
    const [cur, time] = q.shift();
    if (cur === K) return time;

    for (let nx of [cur - 1, cur + 1, cur * 2]) {
      if (ch[nx] === 1 || nx < 0 || nx >= MAX) continue;

      if (nx === cur * 2) q.unshift([nx, time]); // x*2로 이동 시에 시간 증가 X
      else q.push([nx, time + 1]); // x-1, x+1로 이동 시 시간 증가 O
      ch[nx] = 1;
    }
  }
}

console.log(bfs());
