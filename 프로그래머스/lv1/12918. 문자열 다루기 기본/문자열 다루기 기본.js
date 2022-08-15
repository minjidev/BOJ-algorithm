function solution(s) {
    const digit_only = string => [...string].every(c => '0123456789'.includes(c));
    
    return (s.length === 4 || s.length === 6) && digit_only(s) 
}