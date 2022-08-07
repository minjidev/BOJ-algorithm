function solution(num) {
    var cnt = 0;
    if (num==1) return 0;
    while (cnt<500) {
        cnt+=1;
        if (num%2==0) {
            num/=2;
            num = parseInt(num);
        } else if (num%2!=0) {
            num = num*3+1;
        } if (num==1) {
            return cnt
        } 
    }
    return -1;
}