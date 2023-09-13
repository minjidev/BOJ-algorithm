function solution(array, commands) {
    // (i-1)부터 j까지 자르고 정렬 -> k번째 숫자 
    return commands.map(([i, j, k]) => array.slice(i-1, j).sort((a, b) => a - b)[k-1])
}