function solution(phone_book) {
    const obj = {}
    for (let p of phone_book) {
        obj[p] = 1
    }
    
    for (let p of phone_book) { 
        for (let i=0;i<p.length;i++) {
            const num = p.substring(0, i)
            if (obj[num] && num !== p) return false
        }
       
    }
    return true // 다 돌고 나오면 true 
}