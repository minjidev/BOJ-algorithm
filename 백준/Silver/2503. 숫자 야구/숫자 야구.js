const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +n;
const response = arr.map((row) => row.split(" ").map(Number));

let answer = 0;

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    if (i === j) continue;
    for (let k = 1; k < 10; k++) {
      if (i === k || j === k) continue;
      // 현재 만든 숫자
      const curNum = i * 100 + j * 10 + k;
      const curNumStr = String(curNum);

      let sameCnt = 0;
      // 각 입력마다 스트라이크, 볼 개수 맞는지 확인
      for (let l = 0; l < N; l++) {
        let cnt = [0, 0]; // [스트라이크, 볼]
        for (let m = 0; m < curNumStr.length; m++) {
          const curResponseNum = String(response[l][0])[m]; // 응답 중 현재 숫자
          // 스트라이크
          if (curResponseNum === curNumStr[m]) {
            cnt[0]++;
          }
          // 볼
          else if (curNumStr.includes(curResponseNum)) cnt[1]++;
        }

        if (cnt[0] !== response[l][1] || cnt[1] !== response[l][2]) break;
        // 값이 모두 일치하면 패스
        sameCnt++;
      }

      if (sameCnt === N) answer++;
    }
  }
}

console.log(answer);
