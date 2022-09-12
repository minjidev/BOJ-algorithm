// 가능한 탐험 순서(순열) 구하기
const getDungeons = function (arr, selectNum) {
        const result = []
        if (selectNum===1) return arr.map((x) => [x]) 
        
        arr.forEach((fixed, idx, origin) => {
            const rest = [...origin.slice(0, idx), ...origin.slice(idx+1)]
            const permutations = getDungeons(rest, selectNum-1)
            const attached = permutations.map((x) => [fixed, ...x])
            result.push(...attached)
        })
        return result 
    }
// 각 경우에 유저가 탐험할 수 있는 최대 던전 수 세기 
const count = function (dungeons, k) {
    let curK = k, cnt = 0
    
    for (let i=0;i<dungeons.length;i++) {
        if (curK >= dungeons[i][0]) {
            curK -= dungeons[i][1]
            cnt += 1
        } else break
    }
    return cnt
} 

function solution(k, dungeons) {
    const cntArr = []
    const possibleWays = getDungeons(dungeons, dungeons.length)
    possibleWays.forEach(d => {
        cntArr.push(count(d, k)) })
    return Math.max(...cntArr)
}