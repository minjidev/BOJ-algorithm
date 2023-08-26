function getRank(win) {
    return 7 - win || 6
}

function solution(lottos, win_nums) {
    let count = 0
    for (let num of lottos) {
        if (win_nums.includes(num)) count += 1
    }
    
    if (lottos.includes(0)) {
        const best = count + lottos.filter(el => el === 0).length
        const worst = count || 1
        return [getRank(best), getRank(worst)]
        
    } else {
        const rank =  getRank(count || 1)
        return [rank, rank]
    }
}