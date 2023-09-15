function solution(progresses, speeds) {
   const leftDays = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]))
   const answer = []
   let maxVal = leftDays[0]
   let cnt = 0
   
   for (let day of leftDays) {
       if (maxVal < day) {
           maxVal = day
           answer.push(cnt)
           cnt = 1
       } else {
           cnt += 1
       }
   }
    answer.push(cnt)
    
    return answer
}