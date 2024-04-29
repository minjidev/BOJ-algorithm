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
let [A, B, C] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

// bfs로 연결된 노드 간 물 이동하면서 A가 0이 되는 경우 C 값 찾기
// 이동 가능한 경우는 A->B, A->C, B->A, B->C, C->A, C->B
// visited는 A, B의 물 양을 체크
const answer = [];
const visited = Array.from({ length: A + 1 }, () => Array(B + 1).fill(false));
const queue = new Queue();

function pour(a, b) {
  if (visited[a][b]) return;

  visited[a][b] = true;
  queue.push([a, b]);
}

function BFS() {
  queue.push([0, 0]);
  visited[0][0] = true;
  let water = 0;

  while (!queue.isEmpty()) {
    const [a, b] = queue.front();
    const c = C - a - b;
    queue.pop();

    if (a === 0) {
      answer.push(c);
    }

    // A -> B
    water = Math.min(a, B - b);
    pour(a - water, b + water);

    // A -> C
    water = Math.min(a, C - c);
    pour(a - water, b);

    // B -> A
    water = Math.min(b, A - a);
    pour(a + water, b - water);

    // B -> C
    water = Math.min(b, C - c);
    pour(a, b - water);

    // C -> A
    water = Math.min(c, A - a);
    pour(a + water, b);

    // C -> B
    water = Math.min(c, B - b);
    pour(a, b + water);
  }

  return answer.sort((a, b) => a - b);
}

const possibleCs = BFS();
console.log(possibleCs.join(" "));
