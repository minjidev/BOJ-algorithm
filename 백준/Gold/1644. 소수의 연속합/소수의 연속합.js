const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = +fs.readFileSync(filePath).toString().trim();
const primeNumbers = [];
// N이하 소수 구하기
function getPrimeNumbers() {
  const primes = Array(N + 1).fill(true);
  primes[0] = false;
  primes[1] = false;

  // 에라토스테네스의 체
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (primes[i]) {
      // i의 배수 제외
      for (let j = i * i; j <= N; j += i) {
        primes[j] = false;
      }
    }
  }

  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) primeNumbers.push(i);
  }
}

getPrimeNumbers();

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
