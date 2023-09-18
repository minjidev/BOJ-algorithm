function solution(answers) {
    const s1 = [1, 2, 3, 4, 5]
    const s2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let scores = Array(4).fill(0)
    
    for (let i=0;i<answers.length;i++) {
        const a = answers[i]
        scores[1] += (a === s1[i%s1.length])
        scores[2] += (a === s2[i%s2.length])
        scores[3] += (a === s3[i%s3.length])
    }
    
    const maxS = Math.max(...scores)
    const bestS = [1, 2, 3].filter(s => scores[s] === maxS)
    return bestS
}