function solution(users, emoticons) {
    /** 
        1. 이모티콘마다 다른 할인율을 적용했을 때, 유저 이모티콘 구매 비용과 서비스 가입 여부를 확인
        2. 전체 구매 비용, 서비스 가입자 수를 확인
        3. 서비스 가입자 수가 더 많거나 || (가입자 수는 같고 && 이모티콘 구매비용 더 많으면) 답 교체 
    */
    const discountRate = [10, 20, 30, 40]
    let maxSubCnt = Number.MIN_SAFE_INTEGER
    let maxSum = Number.MIN_SAFE_INTEGER
    
    function DFS(L, userSum) {
        if (L >= emoticons.length) {
            let sum = userSum.reduce((a, b) => a + b, 0)
            let sub = 0
            for (let i=0;i<users.length;i++) {
                // 이모티콘 플러스 서비스 가입자 확인
                if (userSum[i] >= users[i][1]) {
                    sub += 1
                    sum -= userSum[i]
                } 
            }
            
            if (maxSubCnt < sub) {
                maxSubCnt = sub
                maxSum = sum
            } else if (maxSubCnt === sub && maxSum < sum) {
                maxSum = sum
            } 
        }
        
        else {
            // 4가지 확인율 적용 체크
            for (let i=0;i<4;i++) {
                const currentDiscountRate = discountRate[i]
                const nextSum = [...userSum]
                
                
                for (let j=0;j<users.length;j++) {
                    const [rate, price] = users[j]
                    // 할인율이 높은 경우 구매
                    if (rate <= currentDiscountRate) {
                        nextSum[j] += emoticons[L] * (1 - currentDiscountRate * 0.01)  
                    }
                }
                
                DFS(L+1, nextSum)
                
            }
        }
    }
    
    DFS(0, Array(users.length).fill(0))
    return [maxSubCnt, maxSum]
    
}