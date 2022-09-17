function solution(numbers, target) {
    const n = numbers.length;
    let res = 0;
    
    function DFS(L, sum) {
        if (L>n) return
        if (L===n) {
            if(sum===target) res += 1
        }
        else {
            DFS(L+1, sum+numbers[L])
            DFS(L+1, sum-numbers[L])
        }
    }
    DFS(0, 0)
    return res
}