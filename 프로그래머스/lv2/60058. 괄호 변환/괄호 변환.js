function reverseStr(str) {
    return str.substring(1, str.length - 1).split('').map(ch => ch === '(' ? ')' : '(').join('')
}


function solution(p) {
    function DFS(u) {
        if (u === '') return ''
        let sum = 0
        let first = ""
        let second = ""
        
        // 1. 입력은 균형잡힌 괄호인가 
        for (let i=0;i<u.length;i++) {
            sum += u[i] === '(' ? 1 : -1

            if (sum === 0) {
                first = u.substring(0, i+1)
                second = u.substring(i+1)
                break
            }
        }
       
        // 2. u는 올바른 괄호인가
        // 올바른 괄호라면 
        if (first[0] === '(') return first + DFS(second)
        // 올바른 괄호가 아니라면 
        let str = ''
        str += `(${DFS(second)})` + reverseStr(first)
                return str

    }
    
    return DFS(p)
}