const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [nums, ...words] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, K] = nums.split(" ").map(Number);
const alpha = Array.from({ length: 26 }, () => false);
const basics = "acint";
let maxCount = 0;

// 알파벳 뽑기(조합): a, c, i, n, t는 필수

if (K < 5) {
  console.log(0);
  return;
}

for (let ch of basics) {
  alpha[ch.charCodeAt() - 97] = true;
}

DFS(0, 0);
console.log(maxCount);

function checkReadableWordsCount() {
  let readable = 0;

  for (let word of words) {
    let flag = true;
    for (let ch of word) {
      if (!alpha[ch.charCodeAt() - 97]) {
        flag = false;
        break;
      }
    }
    if (flag) readable += 1;
  }

  return readable;
}

function DFS(L, s) {
  if (L > K - 5) return;
  if (L === K - 5) {
    maxCount = Math.max(maxCount, checkReadableWordsCount());
    return;
  }

  for (let i = s; i < 26; i++) {
    if (alpha[i]) continue; // 미리 포함시켰으면 보지 않기
    alpha[i] = true;
    DFS(L + 1, i + 1);
    alpha[i] = false;
  }
}
