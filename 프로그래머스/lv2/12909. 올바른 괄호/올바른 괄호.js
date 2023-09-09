function solution(s){
    // 개수가 맞고, 시작이 (인 경우 올바른 괄호
    let sum = 0
    for (let ch of s) {
        sum += ch === '(' ? 1 : -1
        if (sum < 0) return false
    }
    if (sum === 0) return true
    return false
}