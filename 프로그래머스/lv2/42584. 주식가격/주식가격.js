function solution(prices) {
    const len = prices.length
    const answer = []
    // 가격이 떨어지기 전까지 개수를 구하는 것. 
    // 2중 for문 돌면서 뒤에 크거나 같은 값 개수를 세다가 크면 break 
    // 1초가 흐르고 같은지를 확인
    for (let i=0;i<len;i++) {
        let cnt = 0
        for (let j=i+1;j<len;j++) {
            cnt += 1
            if (prices[i] <= prices[j]) continue
            else break
        }
        answer.push(cnt)
    }
    return answer
}