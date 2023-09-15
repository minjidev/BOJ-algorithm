function solution(s){
    let sum = 0
    if (s[0] === ')') return false
    for (let ch of s) {
        sum += ch === '(' ? 1 : -1
        if (sum < 0) return false
    }
    
    if (sum === 0 && s[0] === '(') return true
    return false
}