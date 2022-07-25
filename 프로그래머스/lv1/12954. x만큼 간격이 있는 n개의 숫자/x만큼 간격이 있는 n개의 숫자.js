function solution(x, n) {
    var res = [];
    var cnt = 0;
    var addition = x;
    while (cnt<n) {
        res.push(addition);
        addition += x;
        cnt += 1;
    }
    return res;
}