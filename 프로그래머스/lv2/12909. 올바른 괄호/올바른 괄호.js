function solution(s){
    s = s.split('')
    let stack = []
    if (s[0]===')') return false
    
    for (let i=0;i<s.length;i++) {
        if (s[i]==='(') stack.push(0)
        else {
            if(s.length) stack.pop()
        }
    }

    return stack.length===0 ? true : false
}