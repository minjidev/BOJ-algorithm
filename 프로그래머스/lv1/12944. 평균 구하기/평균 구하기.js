function solution(arr) {
    var sumVal = 0;
    for (i=0;i<arr.length;i++) {
        sumVal += arr[i];
    }
    return sumVal/arr.length
}