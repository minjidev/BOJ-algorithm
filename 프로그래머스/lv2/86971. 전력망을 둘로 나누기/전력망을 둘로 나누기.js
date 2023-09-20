function solution(n, wires) {
    // 먼저 양방향 그래프 만들고, 
    // wires 순서대로 각 요소 BFS 돌고 차이 구한다. 각 BFS 돌기 전 다른 요소는 체크해서 못 가게 하기 
    
    const graph = Array.from({ length: wires.length + 2 }, () => [])
    let minVal = Number.MAX_SAFE_INTEGER
    for (let [s, e] of wires) {
        graph[s].push(e)
        graph[e].push(s)
    }
    
    function BFS(cur, other) {
        // 연결된 개수 세서 리턴
        const q = []
        const ch = Array(wires.length + 2).fill(0)
        let cnt = 1
        
        ch[other] = 1
        ch[cur] = 1
        q.push(cur)
        
        while (q.length) {
            const x = q.shift()
            
            for (let i=0;i<graph[x].length;i++) {
                const nx = graph[x][i]
                if (ch[nx] === 1) continue
                
                ch[nx] = 1
                q.push(nx)
                cnt += 1
            }
        }
        return cnt
    }
    
    for (let [s, e] of wires) {
        const first = BFS(s, e)
        const second = BFS(e, s)
        minVal = Math.min(minVal, Math.abs(first - second))
    }
    return minVal
}