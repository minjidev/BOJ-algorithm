function solution(n, lost, reserve) {
    // 가진 개수 객체로 만들고, left 돌면서 빼주기. n - left 를 반환
    // 체육복 가져온 학생이 도난당한 경우 제거하고 시작
    const filteredReserve = reserve.filter(r => !lost.includes(r)).sort()
    const filteredLost = lost.filter(l => !reserve.includes(l)).sort()
                                               
    let left = filteredLost.length
    const cnt = filteredReserve.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 2
        return acc
    } , {})
    
    for (let l of filteredLost) {
        // 2개 이상일 때만 빌려주기 
        if (cnt[l-1] >=2) {
            cnt[l-1] -= 1
            left -= 1
        }
        else if (cnt[l+1] >=2) {
            cnt [l+1] -= 1
            left -= 1
        }
        
     }
    return n - left
}