const getPermutations = function (arr, selectNum) {
  const result = [];

  if (selectNum === 1) return arr.map((val) => [val]);

  arr.forEach((fixed, idx, origin) => {
    const rest = arr;
    const permutations = getPermutations(rest, selectNum - 1);
    const attached = permutations.map((val) => [fixed, ...val]);
    result.push(...attached);
  });
  return result;
};


function solution(word) {
    const alphabets = ["A", 'E', 'I', 'O', 'U']
    const dict = alphabets.reduce((dict, val, idx, arr) => {
        const each = getPermutations(arr, idx+1).map((val)=> val.join(''))
        dict.push(...each)
        return dict
    }, [])
    
    dict.sort()
    return dict.indexOf(word)+1
}


