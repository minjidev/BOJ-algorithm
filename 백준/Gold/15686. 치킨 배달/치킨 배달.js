// M개의 치킨집만 남겨뒀을 때, 도시의 치킨 거리 최솟값 구하기
// 치킨집 가운데 1~M개 남겨뒀을 때 치킨 거리 구하기
class Queue {
  constructor() {
    this.data = [];
    this.head = 0;
    this.tail = 0;
  }
  push(item) {
    this.data[this.tail++] = item;
  }
  pop() {
    this.head++;
  }
  front() {
    return this.data[this.head];
  }
  rear() {
    return this.data[this.tail - 1];
  }
  isEmpty() {
    return this.head === this.tail;
  }
  size() {
    return Math.abs(this.head - this.tail);
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = n.split(" ").map(Number);
const board = arr.map((row) => row.split(" ").map(Number));
const selected = [];
let minChickenDis = Number.MAX_SAFE_INTEGER;

// 치킨 집 좌표 배열에 저장 -> 이걸로 조합 뽑기
// 폐업하지 않을 가게를 뽑으면, 나머지는 폐업하는 가게
// 그 경우에 치킨 거리를 구해본다. 치킨 거리는 각 집 1로부터 선택된 치킨 가게들과의 거리를 비교
const chickens = [];
const houses = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 1) houses.push([i, j]);
    if (board[i][j] === 2) chickens.push([i, j]);
  }
}

// N^2 * BFS 시간초과
function getTotalChickenDis() {
  let chickenDis = 0;
  for (const [hx, hy] of houses) {
    let minDis = Number.MAX_SAFE_INTEGER;
    for (const [cx, cy] of selected) {
      const dis = Math.abs(hx - cx) + Math.abs(hy - cy);
      minDis = Math.min(minDis, dis);
    }

    chickenDis += minDis;
  }

  return chickenDis;
}

// 폐업시키지 않을 집 M개 뽑기
function DFS(L, start) {
  if (L === M) {
    minChickenDis = Math.min(minChickenDis, getTotalChickenDis());
  }

  for (let i = start; i < chickens.length; i++) {
    const [x, y] = chickens[i];
    if (board[x][y] === -1) continue;

    selected.push([x, y]);
    DFS(L + 1, i + 1);
    selected.pop();
  }
}

DFS(0, 0);

console.log(minChickenDis);
