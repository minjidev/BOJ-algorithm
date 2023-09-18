function solution(sizes) {
    // 가로, 세로 중 작은 값(세로)/큰 값(가로) 구분해서 각각의 최댓값을 곱한 값 
    sizes.map(size => size.sort((a, b) => a - b))
    let maxH = 0
    let maxW = 0
    
    for (let [h, w] of sizes) {
        maxH = Math.max(maxH, h)
        maxW = Math.max(maxW, w)
    }

    return maxH * maxW
}