// 최대 공약수 
function gcd (a, b) {
    if (b===0) return a
    return gcd(b, a%b)
    
}

function solution(w, h) {
    const area = w*h
    // 대각선이 지나는 사각형의 개수 : w+h-gcd(w, h)
    const cutRect = w+h-gcd(w, h)
    return area - cutRect
}