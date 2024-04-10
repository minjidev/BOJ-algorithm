const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = +fs.readFileSync(filePath).toString().trim();
const primeNumbers = [];

// N이하 소수 구하기
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

for (let i = 2; i <= N; i++) {
  if (isPrime(i)) {
    primeNumbers.push(i);
  }
}

// 투포인터로 연속된 누적합 구하기
let s = 0;
let e = 0;
let cnt = 0;
let sum = primeNumbers[s];

while (e < primeNumbers.length) {
  if (sum >= N) {
    if (sum === N) {
      cnt += 1;
    }

    sum -= primeNumbers[s];
    s += 1;
  } else {
    e += 1;
    sum += primeNumbers[e];
  }
}

console.log(cnt);
