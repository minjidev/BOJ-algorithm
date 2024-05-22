// [17471/게리맨더링](https://www.acmicpc.net/problem/17471)
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
const [n, arr, ...adj] = input;
const N = +n;
const population = arr.split(" ").map(Number);
const graph = adj.map((row) => row.split(" ").map((x) => x - 1));
const selected = Array(N).fill(false);
const totalPopulation = population.reduce((acc, cur) => acc + cur, 0);

let minDiff = Number.MAX_SAFE_INTEGER;

// 조합 -> BFS 가능한 경우 -> 최솟값 찾기
function isAdjacent(arr) {
    const queue = new Queue();
    const visited = Array(N).fill(false);
    const sect = selected[arr[0]];
    let cnt = 0;

    visited[arr[0]] = true;
    queue.push(arr[0]);

    while (!queue.isEmpty()) {
        const x = queue.front();
        queue.pop();
        cnt += 1;

        for (let i = 1; i < graph[x].length; i++) {
            const nx = graph[x][i];
            if (visited[nx]) continue;

            // 같은 영역인 경우
            if (sect === selected[nx]) {
                visited[nx] = true;
                queue.push(nx);
            }
        }
    }

    return cnt === arr.length;
}

// BFS로 연결되어 있는지 확인
function check() {
    const first = [];
    const second = [];
    for (let i = 0; i < N; i++) {
        if (selected[i]) first.push(i);
        else second.push(i);
    }

    if (first.length === 0 || second.length === 0) return false;

    return isAdjacent(first) && isAdjacent(second);
}

// 인구 차이값 구하기
function calculateDiff() {
    let p1 = 0;

    for (let i = 0; i < N; i++) {
        if (selected[i]) p1 += population[i];
    }

    return Math.abs(totalPopulation - 2 * p1);
}

function DFS(L, s) {
    // 1개 이상 선택
    if (L >= 1) {
        // 모두 연결되어 있다면 최솟값 갱신
        if (check()) {
            const diff = calculateDiff();

            minDiff = Math.min(minDiff, diff);
        }
    }

    for (let i = s; i < N; i++) {
        if (selected[i]) continue;

        selected[i] = true;
        DFS(L + 1, i + 1);
        selected[i] = false;
    }
}

// 1~N개 조합 구하기
DFS(0, 0);

console.log(minDiff === Number.MAX_SAFE_INTEGER ? -1 : minDiff);
