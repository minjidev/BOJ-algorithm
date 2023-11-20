function doWork(boxes, currentCnt, currentPointer, cap) {
    for (let i=currentPointer;i>=0;i--) {
        // 모두 배달/수거 가능한 경우
        if (currentCnt + boxes[i] <= cap) {
            currentCnt += boxes[i]
            boxes[i] = 0
            currentPointer -= 1
        } else {
            // 일부만 가능한 경우(더 이상 적재 불가하므로 break)
            boxes[i] -= cap - currentCnt
            currentPointer = i
            break
        }
    }
    
    return currentPointer
}


function solution(cap, n, deliveries, pickups) {
    /**
        각 포인터가 유효할 때까지 loop
        while문 돌면서 뒤에서부터 제거해나간다.
        한 루프에 배달/수거 최대로 제거하고 Math.max(배달 최대 거리, 수거 최대 거리) * 2    
    */
    let deliveryP = n-1
    let pickupP = n-1
   
    let minDistance = 0
    
    while (deliveryP >= 0 || pickupP >= 0) {
        let deliveryCnt = 0
        let pickupCnt = 0
     
        // 배열 끝 기준 0이 아닌 인덱스에서 시작
        while (deliveries[deliveryP] === 0) {
            deliveryP -= 1
        }
        
         while (pickups[pickupP] === 0) {
            pickupP -= 1
        }
        
        // 거리 계산
        minDistance += Math.max(deliveryP + 1, pickupP + 1) * 2

        // 배달
        deliveryP = doWork(deliveries, deliveryCnt, deliveryP, cap)
        
        // 수거
        pickupP = doWork(pickups, pickupCnt, pickupP, cap)     
    }
    
    return minDistance
}