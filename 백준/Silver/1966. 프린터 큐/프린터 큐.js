const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +n;

let documents = Array.from({ length: N }, () => []);
for (let i = 0; i < input.length; i++) {
  documents[Math.floor(i / 2)].push(input[i].split(" ").map(Number));
}

let answer = [];

for (let document of documents) {
  let cnt = 1;
  const idx = document[0][1]; // 몇 번째 문서
  const order = Array.from({ length: document[1].length }, (val, idx) => idx); // 순서 배열
  const arr = document[1]; // 문서 배열

  while (true) {
    const popped = arr.shift();
    const poppedOrder = order.shift();
    // 해당하는 order인지 확인
    const maxVal = Math.max(...arr);
    if (poppedOrder === idx && popped >= maxVal) {
      answer.push(cnt);
      break;
    } else {
      if (popped < maxVal) {
        arr.push(popped);
        order.push(poppedOrder);
      } else {
        cnt++;
      }
    }
  }
}
console.log(answer.join("\n"));
