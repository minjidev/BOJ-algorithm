function solution(brown, yellow) {
    const totalArea = brown + yellow, divisors = []
    for (let i=2;i*i<=totalArea;i++) {
        if (totalArea%i===0) divisors.push([totalArea/i, i]) // 약수 구하기 
    }
    
    for (let i=0;i<divisors.length;i++) {
        const [w, h] = divisors[i];
        const border = 2*((w-2)+(h-2))+4
        if (brown === border) return [w, h]  
    }
}