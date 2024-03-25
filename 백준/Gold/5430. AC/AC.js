const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +n;
for (let i = 0; i < N; i++) {
  const [commands, l, arr] = input.slice(i * 3, i * 3 + 3);
  const p = JSON.parse(arr);

  let isReversed = false;
  let isError = false;

  // 함수 수행
  for (let command of commands) {
    if (command === "R") {
      // 뒤집기
      isReversed = !isReversed;
      continue;
    }

    if (command === "D") {
      if (p.length > 0) {
        if (isReversed) {
          p.pop();
        } else {
          p.shift();
        }
      } else {
        // 빈 배열인 경우 에러 발생
        isError = true;
        break;
      }
    }
  }

  if (isError) {
    console.log("error");
  } else {
    console.log(JSON.stringify(isReversed ? p.reverse() : p));
  }
}
