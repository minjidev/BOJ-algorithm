const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, k, ...cards] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, K] = [n, k].map(Number);

// n개 중 k개 선택해 만들 수 있는 정수 개수 구하기(순열)

// 만든 정수인지 확인하는 배열 : 최대 크기 999897 -> 1.000.000
// 각 숫자 개수 저장해두고 사용할 때마다 1씩 빼는 걸로 하자. 값이 있으면 사용해도 되고 0이면 안됨
// const nums = Array.from({ length: 1000000 }).fill(0);
const nums = [];
const ch = Array.from({ length: 100 }).fill;
let cnt = 0;

for (let i = 0; i < cards.length; i++) {
  if (ch[cards[i]]) continue;
  ch[cards[i]] = cards.filter((card) => card === cards[i]).length;
}

function DFS(L, num) {
  if (L === K) {
    // 확인해서 개수 세기
    // if (!nums[num]) {
    if (!nums.includes(num)) {
      cnt++;
      //   nums[num] = 1;
      nums.push(num);
    }
  } else {
    // 정수 만들기
    for (let i = 0; i < N; i++) {
      const nx = cards[i];
      if (ch[nx]) {
        ch[nx] -= 1; // 몇 번째 숫자를 이미 사용했는지 저장 필요
        DFS(L + 1, num + nx);
        ch[nx] += 1;
      }
    }
  }
}

DFS(0, "");
console.log(cnt);
