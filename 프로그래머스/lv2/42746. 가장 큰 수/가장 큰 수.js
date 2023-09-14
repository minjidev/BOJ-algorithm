function solution(numbers) {
    const num = numbers.map(n => n + '').sort((a, b) => {
       return (b + a) - (a + b)
    }).join('')
    return num[0] === "0" ? "0" : num
}