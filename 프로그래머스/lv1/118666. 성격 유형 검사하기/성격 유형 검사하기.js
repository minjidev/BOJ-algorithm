function solution(survey, choices) {
   // 각 유형 점수 계산 
    const type = {'R': 0, "T": 0, "C":0, "F": 0, "J": 0, "M": 0
                    , "A": 0, "N": 0}
    const scores = [0, 3, 2, 1, 0, 1, 2, 3]
    const pairs = ['RT', 'CF', 'JM', 'AN']
    
    for (let i=0;i<survey.length;i++) {
        const [dis, agr] = survey[i].split('')
        
        type[choices[i] <=3 ? dis : agr] += scores[choices[i]]
    }
    // 둘 중 더 높은 점수가 있으면 높은 성격 유형. 아니면 사전 순 
    return pairs.map(([a, b]) => type[a] < type[b] ? b : a).join('')
    
}