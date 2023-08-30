function sum(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0)
}

function solution(queue1, queue2) {
    let sum1 = sum(queue1)
    let sum2 = sum(queue2)
    let p1 = 0 // queue1의 시작점
    let p2 = queue1.length // queue2의 시작점 
    
    const target = (sum1 + sum2) / 2
    const queue = [...queue1, ...queue2]
    const end = queue1.length * 4
    
    for (let count = 0;count < end;count++) {
        if (sum1 === target) {
            return count
        }
        
        // queue1의 합이 작은 경우: p2를 오른쪽으로 한 칸 이동 
        if (sum1 < target) {
            sum1 += queue[p2]
            p2 += 1
        } else {
            // queue1의 합이 큰 경우: p1을 오른쪽으로 한 칸 이동
            sum1 -= queue[p1]
            p1 += 1
        }
    }
    
    return -1;
}
