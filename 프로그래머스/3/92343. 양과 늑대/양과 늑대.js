function solution(info, edges) {
    const N = info.length
    const graph = Array.from({ length: N }, () => [])
    let maxSheep = 0
    
    for (let [from, to] of edges) {
        graph[from].push(to)
    }
    
    // 현재 노드, 양, 늑대, 다음 방문할 정점들
    function DFS(cur, sheep, wolf, nextNodes) {
        if (info[cur] === 0) {
            sheep += 1
            if (maxSheep < sheep) maxSheep = sheep
        } else {
            wolf += 1
        }
        
        // 양이 잡아먹히는 경우
        if (sheep <= wolf) return 
        
        // 방문할 노드 리스트에 현재 노드의 자식 노드 넣어주기
        const next = [...nextNodes, ...graph[cur]]
        next.splice(next.indexOf(cur), 1)
 
        for (let node of next) {
            DFS(node, sheep, wolf, next)
        }
        
    }
    
    DFS(0, 0, 0, [0])
    return maxSheep
    
}