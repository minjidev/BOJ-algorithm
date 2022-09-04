function solution(nums) {
    let count = nums.reduce((obj, cur) => {
        if (!obj[cur]) {
            obj[cur] = 0
        }
        obj[cur] += 1
        return obj
    }, {})
   
    return Math.min(Object.keys(count).length, nums.length/2)
}