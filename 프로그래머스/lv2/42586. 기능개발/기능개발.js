function solution(progresses, speeds) {
    // 각각 걸리는 시간을 저장하고, queue에 저장.
    // queue에서 뒤의 날짜가 걸리는 시간이 작거나 같으면 같이 배포, 아니면 따로 배포 시작
    const queue = progresses.map((prog, i) => Math.ceil((100 - progresses[i]) / speeds[i]))
    let maxVal = queue[0]
    let cnt = 1
    const answer = []
    
    for (let i=1;i<queue.length;i++) {
        if (queue[i] <= maxVal) {
            cnt += 1
        } else {
            answer.push(cnt)
            maxVal = queue[i]
            cnt = 1
        }
    }
    answer.push(cnt)
    return answer
}