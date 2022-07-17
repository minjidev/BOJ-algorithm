function solution(arr) {
    var filtered = arr.filter((element)=>element!=Math.min(...arr));
    return filtered.length ? filtered : [-1];
}