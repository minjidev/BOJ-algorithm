function solution(arr)
{
    let arr_new = [arr[0]];
    for (let i=0;i<arr.length-1;i++) {
        if (arr[i]!==arr[i+1]) {
            arr_new.push(arr[i+1])
        }
    }
    return arr_new
}