const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, arr] = input;
const towers = arr.split(" ").map(Number);
const stack = []; // [index, 높이]
const answer = [];

// 탑 하나씩 보면서
for (let i = 0; i < towers.length; i++) {
  const curTowerHeight = towers[i];

  while (stack.length > 0) {
    // 현재 탑보다 높은 탑을 찾을 때까지 스택에서 요소 제거
    const prevTowerHeight = stack.at(-1)[1];

    if (curTowerHeight < prevTowerHeight) break;

    stack.pop();
  }

  // 제거한 후 stack에 남아있는 가장 마지막 값이 레이저 신호 수신할 탑
  if (stack.length === 0) {
    answer.push(0);
  } else {
    const targetTower = stack.at(-1)[0] + 1;
    answer.push(targetTower);
  }

  // 현재 타워 정보를 스택에 넣는다.
  stack.push([i, curTowerHeight]);
}

console.log(answer.join(" "));
