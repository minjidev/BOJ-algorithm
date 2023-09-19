function isPrime(num) {
    if (num <= 1) return false
    for (let i=2;i<num;i++) {
        if (num % i === 0) return false
    }
    return true
}

function getPermutations(n) {
    const len = n.length
    const ch = Array(len).fill(0)
    const answer = []
    
    function DFS(str) {
        answer.push(+str)
        for (let i=0;i<len;i++) {
            if (ch[i] === 1) continue
            ch[i] = 1
            DFS(str + n[i])
            ch[i] = 0
        }
    }
    DFS('')
    return answer
}

function solution(numbers) {
    // numbers로 가능한 숫자 만들기(순열) -> 소수인 개수 구하기
    return Array.from(new Set(getPermutations(numbers))).filter(num => isPrime(num)).length
}