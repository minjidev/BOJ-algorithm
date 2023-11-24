function solution(info, edges) {
    const N = info.length
    const graph = Array.from({ length: N }, () => [])
    let maxSheep = 0
    
    for (let [from, to] of edges) {
        graph[from].push(to)
    }
    
    // 현재 노드, [양, 늑대], 다음 방문할 정점들
    function DFS(cur, count, nextNodes) {
        const [s, w] = [...count]
        const nextCount = info[cur] === 0 ? [s + 1, w] : [s, w + 1]
        
        const [sheep, wolf] = nextCount
        if (maxSheep <= sheep) maxSheep = sheep
        if (sheep <= wolf) return 
        
        // 방문할 노드 리스트에 현재 노드의 자식 노드 넣어주기
        const next = [...nextNodes.filter(el => el !== cur), ...graph[cur]]
 
        for (let node of next) {
            DFS(node, nextCount, next)
        }
        
    }
    
    DFS(0, [0, 0], [0])
    return maxSheep
    
}