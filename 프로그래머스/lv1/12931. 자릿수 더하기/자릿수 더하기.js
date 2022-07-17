function solution(n)
{
    var res = 0;
    while (n>0) {
        res += n%10;
        n = parseInt(n/10);
    }

    return res;
}