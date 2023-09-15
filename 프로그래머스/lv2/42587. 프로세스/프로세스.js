function solution(priorities, location) {
  const arr = priorities.map((p, idx) => [idx, p])
  let cnt = 0
  
  while (true) {
      const max = Math.max(...arr.map(([idx, p]) => p))
      const [idx, p] = arr.shift()
      
      if (p < max) arr.push([idx, p]) 
      else {
        cnt += 1
        if (location === idx) return cnt
      }
  }
}