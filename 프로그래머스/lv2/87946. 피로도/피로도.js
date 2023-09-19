function solution(k, dungeons) {
    // DFS로 방문할 수 있는 가능한 순서로 돌면서 각 던전 방문할 때 감소한 피로도, cnt 넘겨주기 
    const N = dungeons.length
    const ch = Array(N).fill(0)
    let maxVal = Number.MIN_SAFE_INTEGER
    
    function DFS(hp, cnt) {
        maxVal = Math.max(maxVal, cnt) 
        
        for (let i=0;i<N;i++) {
            const [min, damage] = dungeons[i]
            
            if (ch[i] === 1 || hp < min) continue
            
            ch[i] = 1
            DFS(hp - damage, cnt + 1)
            ch[i] = 0
        }
    }
    
    DFS(k, 0)
    return maxVal
}