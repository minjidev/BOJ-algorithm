// [14226/이모티콘](https://www.acmicpc.net/problem/14226)
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
let S = +fs.readFileSync(filePath).toString().trim();

// BFS로 S개 이모티콘을 화면에 만드는 데 걸리는 시간의 최솟값을 구한다.
function BFS() {
    const queue = new Queue();
    const visited = Array.from({ length: 1001 }, () => Array(1001).fill(false));
    visited[0][1] = true; // visited[클립보드 이모지 개수][화면 이모지 개수]
    queue.push([0, 1, 0]); // [클립보드, 화면, 시간]

    while (!queue.isEmpty()) {
        let [clipboard, screen, time] = queue.front();

        queue.pop();

        if (screen === S) {
            console.log(time);
            return;
        }

        for (let i = 0; i < 3; i++) {
            let nc = clipboard;
            let ns = screen;

            if (i === 0) {
                nc = screen;
            }

            if (i === 1) {
                ns += clipboard;
            }

            if (i === 2) {
                ns -= 1;
            }

            if (visited[nc][ns]) continue;
            if (nc < 0 || ns < 0 || nc > 1000 || ns > 1000) continue;

            visited[nc][ns] = true;
            queue.push([nc, ns, time + 1]);
        }
    }
}

BFS();
