function getRank(win) {
    return 7 - win || 6
}

function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1]
    let worst = 0
    let zeroCount = 0
    
    for (let i=0;i<6;i++) {
        if (win_nums.includes(lottos[i])) worst   += 1
        if (lottos[i] === 0) zeroCount += 1
    }
    
    return [rank[worst + zeroCount], rank[worst]]
    
   
}