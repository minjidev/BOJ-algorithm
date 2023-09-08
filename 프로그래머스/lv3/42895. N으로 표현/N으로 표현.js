const calFunc = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, (a, b) => Math.floor(a / b)]

function getPossibleNums(cnt, dp, N) {
    let result = new Set() // 만들 수 있는 숫자 
    result.add(+String(N).repeat(cnt))
    
    for (let i=1;i<cnt;i++) {
        for (let func of calFunc) {
            for (const item1 of dp[i].values()) {
                for (const item2 of dp[cnt-i].values()) {
                    result.add(func(item1, item2))
                }
                
            }
        }
    }
    
    return result
}

function solution(N, number) {
    if (N === number) return 1 // 현재 숫자인 경우
    
    // dp[i] : 숫자 N을 i번 사용해서 만들 수 있는 숫자
    const dp = [] 
    dp[1] = new Set([N]) // 1번 사용은 그냥 그 숫자
    
    for (let i=2;i<=8;i++) {
        dp[i] = getPossibleNums(i, dp, N) // 사용 개수, dp배열, 숫자
        
        if (dp[i].has(number)) return i // 타겟 숫자 찾으면 return 
    }
    
    return -1
}