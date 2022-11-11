function solution(N, number) {
    const possibleNums = Array.from({length:9}, ()=>new Set())
    // N을 1~8번 사용해 number 만들 수 있는지 확인 
    for (let i=1;i<9;i++) {
        // 사칙연산 없이 N을 i개 사용
        possibleNums[i].add(Number(String(N).repeat(i)))
        for (let j=1;j<i;j++) {
            for (let el1 of possibleNums[j]) {
                for (let el2 of possibleNums[i-j]) {
                    // 더해서 i가 되는 횟수들의 배열을 사칙연산 
                    possibleNums[i].add(el1+el2)
                    possibleNums[i].add(el1-el2)
                    possibleNums[i].add(el1*el2)
                    possibleNums[i].add(Math.floor(el1/el2))
                }
            }
        }
        // i번 사용했을 때 number를 만든 경우
        if (possibleNums[i].has(number)) {
            return i
        }
    }
    // N을 1~8번 사용했는데 number을 만들지 못한 경우 
    return -1
}