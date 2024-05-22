// [16928/뱀과 사다리 게임](https://www.acmicpc.net/problem/16928)

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
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, ...arr] = input;
const [N, M] = n.split(" ").map(Number);
const moves = arr.map((row) => row.split(" ").map(Number));
const board = Array(101).fill(0);
let minCount = Number.MAX_SAFE_INTEGER;

// 사다리와 뱀 저장
for (let [from, to] of moves) {
    board[from] = to;
}

// 각 주사위 1~6까지를 돌려보면서 100번에 도착했을 때 최소횟수 구하기
function BFS() {
    const queue = new Queue();
    const visited = Array(101).fill(false);

    visited[1] = true;
    queue.push([1, 0]);

    while (!queue.isEmpty()) {
        const [x, count] = queue.front();
        queue.pop();

        // 도착한 경우
        if (x === 100) {
            console.log(count);
            return;
        }

        // 주사위 굴려보기
        for (let i = 1; i <= 6; i++) {
            let nx = x + i;

            // 100을 넘어가면 보지 않기
            if (nx > 100) continue;

            // 뱀이나 사다리 아니라면 점프
            while (board[nx] !== 0) {
                nx = board[nx];
            }

            if (visited[nx]) continue;

            visited[nx] = true;
            queue.push([nx, count + 1]);
        }
    }
}

BFS();
