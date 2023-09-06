function solution(numbers, target) {
    const len = numbers.length
    let cnt = 0
    function DFS(L, sum) {
        if (L === len) {
            if (sum === target) cnt += 1
        } else {
            DFS(L+1, sum + numbers[L])
            DFS(L+1, sum - numbers[L])
        }
    }
    
    DFS(0, 0)
    return cnt
}