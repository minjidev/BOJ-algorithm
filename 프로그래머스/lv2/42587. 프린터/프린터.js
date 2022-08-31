function solution(priorities, location) {
    let waiting_list = priorities.map((it, idx) => [it, idx]),
        res = []
    
    priorities.sort((a, b) => b-a)
    while (waiting_list.length) {
        let removed = waiting_list.shift()
        if (removed[0] === priorities[0]) {
            res.push(removed[1])
            priorities.shift()
        } else {
            waiting_list.push(removed)
        }
    }
    return res.indexOf(location)+1
}