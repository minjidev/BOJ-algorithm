function solution(bridge_length, weight, truck_weights) {
    /** 
    * bridge_length길이의 배열 bridge 만들기 
    * 시간이 흐를때마다 
        - shift() -> 값이 0이 아니면 passed에 push -> 만약 passed.length === truck_weights.length와 같으면 return time 
        - 만약 truck이 있고, sum + 다음 트럭 무게 <= weight : 다음 트럭 push, 아니면 0 push 
        - 빼고 넣고 할 때 weightSum에 무게 빼고 더하기 
    */
    const bridge = Array(bridge_length).fill(0)
    const passed = []
    const trucksLen = truck_weights.length
    let time = 0
    let weightSum = 0 
    
    while (true) {
        // 앞을 빼고 
        time += 1
        const passedTruck = bridge.shift()
        weightSum -= passedTruck
        if (passedTruck > 0) passed.push(passedTruck)
        if (passed.length === trucksLen) return time
        
        // 뒤에 넣기 
        if (truck_weights.length && weightSum + truck_weights[0] <= weight) {
            weightSum += truck_weights[0]
            bridge.push(truck_weights.shift())
        } else bridge.push(0)        
    }
    

}