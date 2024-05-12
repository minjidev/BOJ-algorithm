// [1092/배](https://www.acmicpc.net/problem/1092)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, a, m, b] = input;
const N = +n;
const cranes = a.split(" ").map(Number);
const M = +m;
const boxes = b.split(" ").map(Number);
const visited = Array(M).fill(false);

let minTime = 0;

cranes.sort((a, b) => b - a);
boxes.sort((a, b) => b - a);

// 가장 무거운 박스가 크레인 최대 무게 제한보다 크면 불가능
if (boxes[0] > cranes[0]) {
  console.log(-1);
  return;
}

function isAllMoved() {
  return visited.filter((v) => !v).length === 0;
}

// 박스 무게가 크레인 무게 제한보다 같거나 작으면 담을 수 있고, 아니면 continue
while (true) {
  for (let c of cranes) {
    for (let i = 0; i < M; i++) {
      const box = boxes[i];
      if (c < box || visited[i]) continue;

      visited[i] = true;
      break;
    }
  }

  minTime += 1;

  // 모두 방문하면 중단
  if (isAllMoved()) break;
}

console.log(minTime);
