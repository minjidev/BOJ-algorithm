function solution(n) {
    var sorted = (n+'').split('').sort((a,b)=>b-a);
    return parseInt(sorted.join(''));
}