const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +N;
const pairs = arr.map((pair) => pair.split(" ").map(Number));

let graph = Array.from({ length: n + 1 }, () => []);
let ch = Array.from({ length: n + 1 }, () => 0);
let q = [];
let family = [];

// 인접 리스트
for (let [s, e] of pairs) {
  graph[s].push(e);
  graph[e].push(s);
}

ch[1] = 1;
q.push(1);

while (q.length) {
  const v = q.shift();

  for (let i = 0; i < graph[v].length; i++) {
    const nv = graph[v][i];

    if (ch[nv] === 0) {
      ch[nv] = 1;
      family.push([nv, v]); // [자식, 부모]
      q.push(nv);
    }
  }
}

const answer = family
  .sort(([a], [b]) => a - b)
  .map(([child, parent]) => parent);

console.log(answer.join("\n"));
