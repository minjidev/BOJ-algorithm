function solution(n) {
    var sorted = (n+'').split('').sort().reverse().join('');
    return +sorted
}