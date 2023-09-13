function solution(clothes) {
    // clothes 종류별로 개수 저장, (각 개수 + 1)을 곱해서 -1
    const types = {}
    for (let [name, type] of clothes) {
        types[type] = (types[type] || 0) + 1
    }
    
    return Object.values(types).reduce((acc, cnt) => acc * (cnt+1), 1) - 1
}