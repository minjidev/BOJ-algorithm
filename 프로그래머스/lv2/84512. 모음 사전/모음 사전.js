function solution(word) {
    // 어떻게 DFS 중단하고 값을 반환하지? 변수 cnt에 갱신하고 flag로 탈출 
    // 중복을 허용하는 순열 
    const alphabets = ['A' ,'E', 'I', 'O', 'U']
    let cnt = 0
    let flag = 0
    
    function DFS(str) {
        if (flag) return // 값을 찾으면 중단
        cnt += 1 // 몇 번째인지 세기
        if (str === word) {
            flag = 1
            return
        }
        if (str.length >= 5) return // 5개까지만 탐색
        
        for (let alphabet of alphabets) {
            DFS(str + alphabet)
        }
    }
    
    DFS('')
    return cnt - 1 // 빈 문자열 센 거 빼기
}


