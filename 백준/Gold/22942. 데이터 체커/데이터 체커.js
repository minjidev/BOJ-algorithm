// [22942](https://www.acmicpc.net/problem/22942)
// [참고](https://velog.io/@leetaekyu2077/Python-%EB%B0%B1%EC%A4%80-22942%EB%B2%88-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%B2%B4%EC%BB%A4)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 원의 왼쪽 끝, 오른쪽 끝을 괄호의 (,)라고 생각해보자.
// 교차점이 없다는 것은 한 원이 다른 원의 내부에 있거나 외부에 있다. 따라서 괄호 쌍이 맞는 경우와 같다.

const [n, ...arr] = input;
const N = +n;
const coordinates = arr.map((row) => row.split(" ").map(Number));
const circles = [];
const stack = [];

for (let i = 0; i < N; i++) {
  const [x, r] = coordinates[i];
  // 원의 왼쪽 끝, 오른쪽 끝을 현재 원 index와 함께 저장한다.
  circles.push([i, x - r]);
  circles.push([i, x + r]);
}

circles.sort((a, b) => a[1] - b[1]); // x좌표 기준 오름차순

// 원 하나씩 돌면서 확인해보기
for (let c of circles) {
  if (stack.length > 0) {
    // 동일한 원이라면 하나의 () 완성하여 pop
    if (stack.at(-1)[0] === c[0]) stack.pop();
    // 아니면 다음 좌표에서 빠지지 않게 현재 좌표 넣어주기
    else stack.push(c);
  }

  // stack이 비어 있으면
  else stack.push(c); // [index, 끝 좌표]
}

console.log(stack.length > 0 ? "NO" : "YES");
