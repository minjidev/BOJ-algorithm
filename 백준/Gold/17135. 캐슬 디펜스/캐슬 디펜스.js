// [17135](https://www.acmicpc.net/problem/17135)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [nums, ...arr] = input;
const [N, M, D] = nums.split(" ").map(Number);
const board = arr.map((row) => row.split(" ").map(Number));
const archerPos = []; // 궁수 위치
let enemies = []; // 적
let copy = []; // 원본 배열 복사

let maxKill = 0;
let killCount = 0;

// 4. loop 조건: 적이 모두 제외 될때까지

// 1. 궁수 조합을 구한다.
function DFS(L, start) {
  if (L === 3) {
    killCount = 0;
    killEnemies();

    maxKill = Math.max(maxKill, killCount);

    return;
  }

  // 가로 길이 중 3개 선택
  for (let i = start; i < M; i++) {
    archerPos.push(i);
    DFS(L + 1, i + 1);
    archerPos.pop();
  }
}

DFS(0, 0);

function copyMap() {
  copy = [...board.map((row) => [...row])];
}

// 2. 궁수 공격
function killEnemies() {
  // 각 궁수 위치 잡을 때마다 보드 복사
  copyMap();

  // 공격
  while (true) {
    // 적이 모두 제외됐으면 중단
    if (allDead()) break;

    // 적 배열 초기화
    initEnemies();
    attack();
    moveEnemies();
  }
}

function initEnemies() {
  enemies = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (copy[i][j] === 1) enemies.push([i, j]);
    }
  }
}

function allDead() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (copy[i][j] === 1) return false;
    }
  }

  return true;
}

function attack() {
  const targets = []; // 죽일 적

  // 각 궁수를 돌면서 공격할 적 구하기
  for (let i = 0; i < 3; i++) {
    // 현재 궁수 좌표
    const possibleTargets = []; // 사정 거리 내 적

    const curArcherPos = [N, archerPos[i]];

    for (let j = 0; j < enemies.length; j++) {
      // 사정 거리 내에 있는 적 구하기
      const curEnemyPos = enemies[j];

      const dist = getDis(curArcherPos, curEnemyPos);

      if (dist <= D) {
        possibleTargets.push([...curEnemyPos, dist]);
      }
    }

    // 거리, y좌표 순으로 오름차순
    possibleTargets.sort((a, b) => a[2] - b[2] || a[1] - b[1]);
    // 공격할 적이 있는 경우
    if (possibleTargets.length > 0) {
      const [tx, ty, dis] = possibleTargets[0];
      targets.push([tx, ty]);
    }
  }

  // 공격
  const visited = new Set();
  for (let i = 0; i < targets.length; i++) {
    const [tx, ty] = targets[i];
    if (visited.has(`${tx},${ty}`)) continue;

    // 공격한 적 없으면 공격
    visited.add(`${tx},${ty}`);
    copy[tx][ty] = 0;
    killCount += 1;
  }
}

function getDis(from, to) {
  return Math.abs(from[0] - to[0]) + Math.abs(from[1] - to[1]);
}

// 3. 적군 이동
function moveEnemies() {
  // 적을 아래로 이동
  for (let i = N - 1; i >= 0; i--) {
    for (let j = 0; j < M; j++) {
      if (copy[i][j] === 0) continue;

      // 현재 자리 0으로
      copy[i][j] = 0;
      // 마지막 행이 아닌 경우 다음 자리 1로
      if (i !== N - 1) copy[i + 1][j] = 1;
    }
  }
}

console.log(maxKill);
