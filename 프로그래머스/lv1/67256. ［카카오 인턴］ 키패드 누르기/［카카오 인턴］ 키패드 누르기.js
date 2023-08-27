function solution(numbers, hand) {
    // 세로는 아래에서부터 [0, 1, 2, 3], 가로는 [1, 0, 1]
    const position = [0, 3, 3, 3, 2, 2, 2, 1, 1, 1]
    const curPos = {'L': [0, 1], 'R': [0, 1]}
    const key = hand === 'right' ? 'R' : 'L'
    
    return numbers.map(num => {
        if (/[147]/.test(num)) {
            curPos['L'] = [position[num], 1]
            return 'L'
        }
        if (/[369]/.test(num)) {
            curPos['R'] = [position[num], 1]
            return 'R'
        }
        
        const disL = Math.abs(position[num] - curPos['L'][0]) + curPos['L'][1]
        const disR = Math.abs(position[num] - curPos['R'][0]) + curPos['R'][1]
        if (disL === disR) {
            curPos[key] = [position[num], 0]
            return key
        }
        
        if (disL < disR) {
            curPos['L'] = [position[num], 0]
            return 'L'
        }
        curPos['R'] = [position[num], 0]
        return 'R'
    }).join('')
}