function solution(phone_book) {
    phone_book.sort()
    
    for (let i=1;i<phone_book.length;i++) { 
        // 현재 값이 다음 값의 접두어인지 확인
        if (phone_book[i].indexOf(phone_book[i-1]) === 0) return false
    }
    return true 
}