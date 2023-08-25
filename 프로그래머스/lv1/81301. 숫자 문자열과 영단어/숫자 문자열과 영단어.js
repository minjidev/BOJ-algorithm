function solution(s) {
    const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    for (let i=0;i<nums.length;i++) {
        s = s.split(nums[i])
        s = s.join(i)
    }
    
    return Number(s)
}