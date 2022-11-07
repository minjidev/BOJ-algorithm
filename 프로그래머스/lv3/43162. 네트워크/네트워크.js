function solution(n, computers) {
    let ch = Array.from({length: n}, () => false)
    let cnt = 0
    
    function DFS(i) {
        ch[i] = true 
        // 다음 노드가 방문한 적 없고, 연결되어 있는 경우 
        for (let j=0;j<computers[i].length;j++) {
            if (!ch[j] && computers[i][j]===1) {
                DFS(j)
            }
        }
    }
    
    for (let i=0;i<computers.length;i++) {
        if (!ch[i]) {
            DFS(i)
            cnt++
        }
    }
    
    return cnt
}