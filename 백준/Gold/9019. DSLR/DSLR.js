// [9019](https://www.acmicpc.net/problem/9019)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [t, ...arr] = input;
const T = +t;
const tc = arr.map((row) => row.split(" ").map(Number));
const MAX = 10000;
const commands = ["D", "S", "L", "R"];
let visited = null; // 이미 방문한 숫자는 다시 방문하지 않는다.
let answer = "";

for (let i = 0; i < T; i++) {
  visited = Array(MAX).fill(false);
  const command = BFS(tc[i]);

  answer += `${command}\n`;
}

function calculate(cur, cmd) {
  let next = null;

  if (cmd === "D") next = (cur * 2) % MAX;
  else if (cmd === "S") next = cur > 0 ? cur - 1 : MAX - 1;
  else if (cmd === "L") next = (cur % 1000) * 10 + Math.floor(cur / 1000);
  else if (cmd === "R") next = Math.floor(cur / 10) + (cur % 10) * 1000;

  return next;
}

function BFS([from, to]) {
  const queue = [];

  queue.push([from, ""]); // [현재 숫자, 명령어]
  visited[from] = true;

  while (queue.length > 0) {
    const [cur, cmd] = queue.shift();

    // 목표 숫자 만들었으면
    if (cur === to) {
      return cmd;
    }

    // 계산
    for (let i = 0; i < 4; i++) {
      const curCmd = commands[i];
      const next = calculate(cur, curCmd);

      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, cmd + curCmd]);
      }
    }
  }
}

console.log(answer);
