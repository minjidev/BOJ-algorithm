function solution(d, budget) {
    d.sort((a, b) => a-b)
    let cnt = 0, r = 0
    while (budget-d[r]>=0) {
        budget-= d[r]
        r++
        cnt++
    } 
    return cnt
}