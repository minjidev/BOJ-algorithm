function solution(citations) {
    const len = citations.length
    const maxVal = citations.sort((a, b) => b - a)[0]
    // h가 가능한 최댓값부터 반대로 확인(i가 h)
    for (let i=maxVal;i>=0;i--) {
        if (i > len) continue
        let cnt = 0
        for (let j=0;j<len;j++) {
            // i편 이상인 값 세기 
            if (i <= citations[j]) cnt += 1
        } 
        // i번 이상이면 
        if (i <= cnt) return i
    }

}