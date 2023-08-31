
/** 
    - 2명 이상이 주문한 2개 이상의 조합 
    - 각 course 돌면서 course 개수만큼 order의 조합 만들기(DFS)
    - 구한 조합 돌면서 [조합]의 개수 증가시키기  ** 오름차순 정렬 필요 
    - 각 개수에 해당하는 최댓값 찾아서 -> 최댓값에 해당하는 조합 answer.push()
    - answer.sort() 오름차순 
*/

// 조합 구하기 
function combination(str, num) {
    const arr = str.split('')
    let answer = []
    function DFS(n, start, comb) {
        if (n === num) { 
            answer.push(comb.split(''))
        }
        else {
            for (let i=start;i<arr.length;i++) {
                DFS(n+1, i+1, comb + arr[i])
            }
        }
    }
    DFS(0, 0, '')
    return answer
}

function solution(orders, course) {
    const orderCount = {}
    
    // 각 메뉴 조합에 대한 개수 구하기 
    for (let num of course) {
        for (let order of orders) {
            // 조합 구하기 
            const comb = combination(order, num)
            for (let c of comb) {
                // 구한 조합 sort하여 동일한 순서 유지 
                const word = c.sort().join('')
                // 해당 조합에 count 추가 
                orderCount[word] = (orderCount[word] || 0) + 1
            }
        }
    }
    const answer = []
    
    // 조합 개수마다 최댓값 찾아서 answer에 push
    for (let num of course) {
        let maxCount = Number.MIN_SAFE_INTEGER
        // 개수에 해당하는 최대 count 
        for (let [key, value] of Object.entries(orderCount)) {
            if (key.length === num) {
                maxCount = Math.max(maxCount, value)
            }
        }
        if (maxCount === 1) continue
        // 해당 개수의 조합이면서 최대 count인 경우 
        for (let [key, value] of Object.entries(orderCount)) {
            if (key.length === num && value === maxCount) {
                answer.push(key)
            }
        }
    }
    
    console.log(orderCount)
    return answer.sort()
}

