class Queue {
    constructor() {
        this.head = 0
        this.tail = 0
        this.data = []
    }
    push(item) {
        this.data[this.tail++] = item
    }
    pop() {
        this.head++
    }
    front() {
        return this.data[this.head]
    }
    rear() {
        return this.data[this.tail - 1]
    }
    isEmpty() {
        return this.head === this.tail
    }
    size() {
        return Math.abs(this.head - this.tail)
    }
}

function solution(begin, target, words) {    
    const ch = {}
    const queue = new Queue()
    ch[begin] = 1
    queue.push([begin, 0]) // [단어, 변경 횟수]
    
    
    function isNext(current, next) {
        // current가 next로 넘어갈 수 있는지, 즉 1글자 차이인지 확인 
        let cnt = 0
        const len = current.length
        for (let i=0;i<len;i++) {
            if (current[i] !== next[i]) cnt +=1 
        }
        return cnt === 1
    }
    
    while (!queue.isEmpty()) {
        const [curw, count] = queue.front()
        queue.pop()
        
        for (let nw of words) {
            if (ch[nw]) continue
            if (isNext(curw, nw)) {
                if (nw === target) return count + 1
                ch[nw] = 1
                queue.push([nw, count + 1])
            }
        }
    }
    return 0
}
