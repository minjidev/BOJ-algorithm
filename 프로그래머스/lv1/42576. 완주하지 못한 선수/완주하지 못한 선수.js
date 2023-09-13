function solution(participant, completion) {
    // participant 돌면서 개수 저장하고, completion 돌면서 1씩 빼고, 0이 아니면 key를 return 
    const obj = {}
    for (let i=0;i<participant.length;i++) {
        const p = participant[i]
        obj[p] = (obj[p] || 0) + 1
        
        if (i<=completion.length-1) {
            const c = completion[i]
            obj[c] = (obj[c] || 0) - 1   
        }
    }
    
    return Object.keys(obj).filter(key => obj[key] !== 0).join('')
    
    

}   