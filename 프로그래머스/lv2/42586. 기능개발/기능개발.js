function solution(progresses, speeds) {
    let left_days = progresses.map((it, idx) => Math.ceil((100-it)/speeds[idx]))
    let cur = left_days[0],
        cnt = 1,
        res = []

    for (let i=1;i<progresses.length;i++) {
        // 만약 뒷 날짜가 현재보다 작거나 같다면 같이 배포
        if (cur >= left_days[i]) {
            cnt++;
        } else { // 아니라면 현재까지 작업 모두 배포하고 다음부터 체크 
            res.push(cnt)
            cur = left_days[i]
            cnt = 1
        }
        
    }
    res.push(cnt)
    return res
}