function isPrime (n) {
    if (n<=1) return false
    for (let i=2;i<n;i++) {
        if (n%i===0) return false
    }
    return true
}

function solution(nums) {
    let answer = 0
    function DFS(L, sum, cnt) {
        if (L>nums.length) return
        if (cnt>3) return
        if (L===nums.length) {
            if (cnt===3) {
                if (isPrime(sum)) answer++
            }
        } else {
            DFS(L+1, sum+nums[L], cnt+1)
            DFS(L+1, sum, cnt)
        }
    }
    DFS(0, 0, 0)
    return answer
}