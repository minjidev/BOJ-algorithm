function solution(n, computers) {
    const ch = Array(n).fill(0)
    let cnt = 0
    
    function DFS(L) {
        ch[L] = 1
        
        for (let i=0;i<n;i++) {
            if (ch[i] === 0 && computers[L][i] === 1) {
                DFS(i)
            }
        }
    }
    
    for (let i=0;i<n;i++) {
        if (ch[i] === 1) continue
        
        DFS(i)
        cnt += 1
    }
    
    return cnt 
}