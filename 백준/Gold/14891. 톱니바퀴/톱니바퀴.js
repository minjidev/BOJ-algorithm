const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const gears = input.slice(0, 4).map((row) => row.split("").map(Number));
const N = +input[4];
const commands = input.slice(5).map((row) => row.split(" ").map(Number));
const GEAR_COUNT = 4;
const GEAR_LEN = 8;

function shouldRotate(gear1, gear2) {
  return gear1[2] !== gear2[6];
}

function rotate(gear, dir) {
  if (dir === 1) {
    // 시계방향
    return [gear[GEAR_LEN - 1], ...gear.slice(0, GEAR_LEN - 1)];
  } else {
    // 반시계방향
    return [...gear.slice(1), gear[0]];
  }
}

for (let [gear, dir] of commands) {
  gear -= 1;
  const rotateDir = Array(GEAR_COUNT).fill(0);
  rotateDir[gear] = dir;
  // 회전할 톱니바퀴 확인
  for (let i = gear - 1; i >= 0; i--) {
    // 왼쪽
    if (shouldRotate(gears[i], gears[i + 1])) rotateDir[i] = -rotateDir[i + 1];
    else break;
  }

  for (let i = gear + 1; i < GEAR_COUNT; i++) {
    // 오른쪽
    if (shouldRotate(gears[i - 1], gears[i])) rotateDir[i] = -rotateDir[i - 1];
    else break;
  }

  // 회전
  for (let i = 0; i < GEAR_COUNT; i++) {
    if (rotateDir[i] === 0) continue;
    gears[i] = rotate(gears[i], rotateDir[i]);
  }
}

// 점수 계산
let scores = 0;
for (let i = 0; i < GEAR_COUNT; i++) {
  scores += gears[i][0] * 2 ** i;
}

console.log(scores);
