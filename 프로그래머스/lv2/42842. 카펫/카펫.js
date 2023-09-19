function solution(brown, yellow) {
    const size = brown + yellow
    const lens = []
    // 약수 구하기 
    for (let i=1;i<=Math.sqrt(size);i++) {
        if (size % i === 0) lens.push([size/i, i])
    }
    for (let [w, h] of lens) {
        const ySize = (w - 2) * (h - 2) 
        if (size - ySize === brown) return [w, h]
    }
  
}