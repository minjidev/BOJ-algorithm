function solution(begin, target, words) {
    // 문자열 한 개 다른지 확인
    function compareStr(str1, str2) {
        let diff = [...str1].reduce((acc, cur, idx)=> {
            if (cur!==str2[idx]) {
                acc++
            }
            return acc
        }, 0)
        return diff===1
    }
    // BFS
    let q = []
    let visited = []
    
    q.push([begin, 0])
    if (!words.includes(target)) return 0
    
    while (q.length) {
        const [curStr, cnt] = q.shift()
        if (curStr===target) return cnt
        for (let i=0;i<words.length;i++) {
            if(compareStr(curStr, words[i]) && !visited[words[i]]) {
                q.push([words[i], cnt+1])
                visited.push(words[i]) // 방문 표시
            }
        }
        
    }
}
