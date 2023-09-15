function solution(s){
    let sum = 0
    if (s[0] === ')') return false
    for (let ch of s) {
        sum += ch === '(' ? 1 : -1
        if (sum < 0) return false
    }
    
    return sum === 0? true : false
}