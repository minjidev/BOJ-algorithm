/** 
    1. n을 k진수로 변환 : toString
    2. .split(0)해서 각 요소가 소수인지 판단 -> 개수 세기 
*/

function isPrime(n) {
    if (n <= 1) return false
    
    for (let i=2;i<Math.floor(Math.sqrt(n))+1;i++) {
        if (n%i===0) return false
    }
    return true
}

function solution(n, k) {
    const num = n.toString(k)
    const arr = num.split(0)
    let answer = 0
    
    for (let n of arr) {
        if (isPrime(n)) answer++
    }
    
    return answer
}