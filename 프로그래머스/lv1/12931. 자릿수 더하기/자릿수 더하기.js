function solution(n)
{
    n = n.toString();
    res = 0;
    for (var i=0; i<n.length; i++) {
        res += parseInt(n[i]);
    }

    return res;
}