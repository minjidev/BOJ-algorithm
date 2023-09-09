function solution(bridge_length, weight, truck_weights) {
    /** 
    *   bridge_length 길이의 큐 bridge 만들기 
    *   weight이하 && bridge_length이하까지 큐에 추가 
    *   아니라면 큐에 0 넣으면서 계속 밀기. 추가할 때는 다리 길이 유지 위해 shift() 
    *   전체 bridge에 올라간 무게가 0이면 반복문 종료 
    */
    const bridge = Array.from({length: bridge_length}, () => 0)
    
    // 첫 번째 트럭 올리기
    let weightSum = truck_weights[0]
    let time = 1
    bridge.push(truck_weights.shift())
    bridge.shift()
    
    while (weightSum > 0) {
        // 다리 맨 앞을 빼고, 시간이 1초 흐른다. (앞을 빼면서 가능한 경우 바로 다음 트럭을 올려줘야해서 먼저 수행)
        weightSum -= bridge.shift()
        time += 1 
        // 다음 트럭이 다리에 올라갈 수 있다면 
        if (truck_weights.length > 0 && weightSum + truck_weights[0] <= weight) {
            weightSum += truck_weights[0]
            bridge.push(truck_weights.shift())
        } else {
            // 못 올라간다면 무게 더하지 않기 위해 0 넣어주기 
            bridge.push(0)
        }
    }
    return time
    
}