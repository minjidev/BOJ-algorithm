function solution(tickets) {
    const N = tickets.length
    const ch = []
    const answer = []
    
    tickets.sort()

    function DFS(from, visitedCnt, visitedAirports) {
        // 티켓 모두 사용한 경우 
        if (visitedCnt === N) {
            answer.push(visitedAirports)
        }
        
        // 아닌 경우
        for (let i=0;i<N;i++) {
            const [f, t] = tickets[i]
            
            
            if (!ch[i] && from === f) {
                ch[i] = 1
                DFS(t, visitedCnt + 1, [...visitedAirports, t])
                ch[i] = 0
            }
            
        }
    }
    
    DFS("ICN", 0, ["ICN"])
    return answer.sort()[0]
    
}

