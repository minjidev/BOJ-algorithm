function solution(numbers, hand) {
    let result = ''
    const hands = [0, 'L', 0, 'R', 'L', 0, 'R', 'L', 0, 'R']
    const curPos = {'L': '*', 'R': '#'}
    const middle = {2: [3, 1, 0, 1, 2, 1, 2, 3, 2, 3], 
                   5: [2, 2, 1, 2, 1, 0, 1, 2, 1, 2],
                   8: [1, 3, 2, 3, 2, 1, 2, 1, 0, 1],
                   0: [0, 4, 3, 4, 3, 2, 3, 2, 1, 2]}
    
    const isRightHanded = hand === 'right'
    
    for (let num of numbers) {
        // 양쪽 
        if (hands[num]) {
            curPos[hands[num]] = num // 이동 
            result += hands[num]
        } else {
            // 중앙 : 거리 계산 -> 같으면 손 확인 
            const leftDis = isNaN(curPos['L']) ? middle[num][0] + 1 : middle[num][curPos['L']]
            const rightDis = isNaN(curPos['R']) ? middle[num][0] + 1 : middle[num][curPos['R']]
            
            // 오른손이 더 가까우면
            if (rightDis < leftDis) {
                curPos['R'] = num
                result += 'R'
            } else if (leftDis < rightDis) {
                // 왼손이 더 가까우면 
                curPos['L'] = num
                result += 'L'
            } else {
                // 오른손잡이면
                if (isRightHanded) {
                    curPos['R'] = num
                    result += 'R'
                }
                // 왼손잡이면
                else {
                    curPos['L'] = num
                    result += 'L'
                }
            }
        }
    }
    
    return result
}