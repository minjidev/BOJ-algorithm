function solution(bridge_length, weight, truck_weights) {
    let bridge = new Array(bridge_length).fill(0), // bridge_length만큼 0 채우기 
        w_bridge = 0,
        res = 0
    
    while (bridge.length) {
        w_bridge -= bridge.shift()
        
        // 대기 트럭 있으면 weight 제한 확인해서 bridge에 올리기
        if (truck_weights.length) {
            let first = truck_weights[0]
            if (w_bridge + first <= weight) {
                bridge.push(truck_weights.shift())
                w_bridge += first
            } else bridge.push(0)
        }
        // 1초마다 트럭이 다리 위에서 이동
        res += 1     
    }
    return res 
}