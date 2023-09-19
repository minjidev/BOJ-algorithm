function getOrder(length) {
    const arr = Array.from({ length }, (_, idx) => idx)
    const ch = Array(length).fill(0)
    const answer = []
    function DFS(L, order) {
        if (L === length) answer.push(order)
        for (let i=0;i<length;i++) {
            if (ch[i] === 1) continue
            ch[i] = 1
            DFS(L + 1, [...order, arr[i]])
            ch[i] = 0
        }
    }
    DFS(0, [])
    return answer
}


function solution(k, dungeons) {
    // 방문할 순서를 순열로 정하기(L===n일때)
    // 그 순서대로 각 던전에서 if (k>=d[0]) -> k-d[1]하면서 cnt 증가
    const orders = getOrder(dungeons.length)
    let maxVal = Number.MIN_SAFE_INTEGER
    
    for (let order of orders) {
        let cnt = 0
        let hp = k
        for (let o of order) {
            const [min, damage] = dungeons[o]
            if (hp < min) break
            hp -= damage
            cnt += 1
        }
        
        if (maxVal < cnt) maxVal = cnt
    }
    return maxVal
}