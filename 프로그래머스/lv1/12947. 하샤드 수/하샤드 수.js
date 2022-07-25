function solution(x) {
    sum = (x+'').split('').map(x=>Number(x)).reduce((a,b)=>a+b);
    if (x%sum===0) {
        return true;
    } 
    return false;
}