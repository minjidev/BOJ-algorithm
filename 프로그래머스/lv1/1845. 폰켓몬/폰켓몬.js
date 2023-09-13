function solution(nums) {
    // 종류(Set.size)와 nums.length/2 를 비교
    // 종류가 더 많으면 길이 리턴, 아니면 종류 리턴. 같으면 아무거나 리턴
    const types = new Set(nums).size
    const len = nums.length/2
    return len <= types ? len : types
}