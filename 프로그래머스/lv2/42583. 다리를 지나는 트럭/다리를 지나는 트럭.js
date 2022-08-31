function solution(bridge_length, weight, truck_weights) {
    let bridge = new Array(bridge_length).fill(0), 
        bridge_weight = 0, 
        res = 0
       
    
    while (bridge.length) {
        bridge_weight -= bridge.shift()
        // 대기 트럭 있으면 무게 제한 확인해서 올리기 
        if (truck_weights.length) {
            let truck = truck_weights[0]
            if (bridge_weight+truck<=weight) {
                bridge_weight += truck
                bridge.push(truck_weights.shift())
            } else {
                bridge.push(0)
            }
            
        }
        res += 1 
    }
    return res
}