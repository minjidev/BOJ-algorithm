function solution(n) {
    let num = [];
    while (n>0) {
        num.push(n%10);
        n = Math.floor(n/10);
    }
    
    return num.sort((a,b)=>b-a).join('')*1;

}