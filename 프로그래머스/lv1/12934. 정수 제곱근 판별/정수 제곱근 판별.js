function solution(n) {
    x = Math.floor(Math.sqrt(n));
    if (x**2===n) {
        return (x+1)**2
    } else {
        return -1
    }
}