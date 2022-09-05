function solution(answers) {
    const s1 = [1, 2, 3, 4, 5],
          s2 = [2, 1, 2, 3, 2, 4, 2, 5],
          s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let scores = [0, 0, 0]
    answers.forEach((x, idx) => {
        if (x===s1[idx%s1.length]) scores[0] += 1
        if (x===s2[idx%s2.length]) scores[1] += 1
        if (x===s3[idx%s3.length]) scores[2] += 1
    })
    
    let maxVal = Math.max(...scores), result = [];
    for (let i=0;i<scores.length;i++) {
        if (maxVal === scores[i]) result.push(i+1)
    }
    
    return result
}