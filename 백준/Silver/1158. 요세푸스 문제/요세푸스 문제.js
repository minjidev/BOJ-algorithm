let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, K] = fs.readFileSync(filePath).toString().split(" ").map(Number);

const people = Array.from({ length: N }, (val, idx) => idx + 1);
const answer = [];
let idx = 0;
while (people.length) {
  idx = (idx + K - 1) % people.length;

  answer.push(+people.splice(idx, 1));
}

console.log(`<${answer.join(", ")}>`);
