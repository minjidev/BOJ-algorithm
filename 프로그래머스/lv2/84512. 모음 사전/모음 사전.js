function solution(word) {
    const alphabets = ['A' ,'E', 'I', 'O', 'U']
    let result = {}
    let cnt = 0
    
    function DFS(str, length) {
        if (length > 5) return // 5개까지만
        result[str] = cnt // 해당 단어 몇 번째인지
        cnt += 1
        alphabets.forEach(a => DFS(str + a, length + 1))
    }

    DFS('', 0)
    return result[word]
}


