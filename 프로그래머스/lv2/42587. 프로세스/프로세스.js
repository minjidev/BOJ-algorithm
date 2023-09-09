function solution(priorities, location) {
    let maxVal = Math.max(...priorities)
    const tasks = Array.from({length: priorities.length}, (val, idx) => [idx, priorities[idx]])
    let order = 0
    
    while (tasks.length > 0) {
        const [idx, val] = tasks.shift()
        // 가장 우선순위가 높다면 
        if (maxVal <= val) {
            order += 1
            if (idx === location) return order
            maxVal = Math.max(...tasks.map(([_, val]) => val))
        } else {
            tasks.push([idx, val])
        }
    }

}