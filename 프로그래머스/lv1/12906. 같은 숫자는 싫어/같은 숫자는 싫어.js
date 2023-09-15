function solution(arr) {
    // 이전 숫자랑 같으면 continue, 아니면 answer에 push
    const answer = [arr[0]]
    for (let i=1;i<arr.length;i++) {
        if (arr[i] === arr[i-1]) continue
        answer.push(arr[i])
    }
    return answer
}