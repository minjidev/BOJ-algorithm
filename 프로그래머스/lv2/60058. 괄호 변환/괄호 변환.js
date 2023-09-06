function solution(p) {
    
    function DFS(u) {
        if (u === '') return ''
        let sum = 0
        let first = ""
        let second = ""
        // 1. 입력은 균형잡힌 괄호인가 
        for (let i=0;i<u.length;i++) {
            if (u[i] === '(') sum -=1
            else sum += 1

            if (sum === 0) {
                first = u.substring(0, i+1)
                second = u.substring(i+1)
                break
            }
        }
        

        // 2. u는 올바른 괄호인가
        const q = []
        for (let i=0;i<first.length;i++) {
            if (first[i] === '(') q.push(first[i])
            else q.pop()
        }
        // 올바른 괄호라면 
        if (q.length === 0) return first + DFS(second)
        // 아니라면 
        let str = ''
        str += `(${DFS(second)})` + [...first.substring(1, first.length-1)].map(ch => ch === '(' ? ')' : '(').join('')
        return str
        
        
    }
    return DFS(p)
}