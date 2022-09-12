// 순열 구하기
const getPermutations = function (arr, selectNum) {
  const result = [];
  if (selectNum === 1) {
    return arr.map((val) => [val]);
  } // 1개 선택할 때, 배열의 각 원소를 return

  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)]; // 현재 고정 숫자 제외 모든 값
    const permutations = getPermutations(rest, selectNum - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    result.push(...attached);
  });
  return result;
};

// 소수 구하기
const checkPrime = function (n) {
  let sieve = Array.from({ length: n + 1 })
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i * i <= n; i++) {
    if (sieve[i]) {
      for (let j = 2 * i; j < n + 1; j += i) {
        sieve[j] = false;
      }
    }
  }
  return sieve;
};

function solution(numbers) {
  // numbers에서 selectNum개 뽑아 순열 만들기
  let permutations = numbers.split("").reduce((p, cur, idx, arr) => {
    const each = getPermutations(arr, idx + 1).map((x) => Number(x.join("")));
    p.push(...each);
    return p;
  }, []);
  permutations = Array.from(new Set(permutations));
  const maxVal = Math.max(...permutations);
  const primes = checkPrime(maxVal);

  return permutations.filter((x) => primes[x]).length;
}