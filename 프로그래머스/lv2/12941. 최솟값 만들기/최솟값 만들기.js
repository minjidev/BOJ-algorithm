function solution(A,B){
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    var sum = A.map((v, i) => v*B[i]).reduce((a,b)=>a+b);

    return sum;
}