function solution(today, terms, privacies) {
    const termsObj = terms.reduce((acc, cur) => {
        const [type, period] = cur.split(' ')
        acc[type] = +period 
        return acc
    }, {})
    
    const tDate = new Date(today)
    
    const expiredPrivacies = privacies.map((p, i) => {
        const [date, type] = p.split(' ')
        const pDate = new Date(date)
        pDate.setMonth(pDate.getMonth() + termsObj[type])
        // 오늘 기준으로 유효기간이 지난 경우 
        return pDate <= tDate? i+1 : undefined
    }).filter(p => p !== undefined)
    
    return expiredPrivacies

    

}