function solution(clothes) {
    let map = new Map()
    for (let i=0;i<clothes.length;i++) {
        item = clothes[i][0]
        type = clothes[i][1]
        
        map.set(type, (map.get(type) || 0)+1)
        
    }

    let cnt = 1;   
    map.forEach((v, k) => cnt *= (v+1))
    return cnt-1
}