function solution(genres, plays) {
    /** 
    * 장르별 합 : { 장르 : 플레이 횟수 }를 구해서 많이 재생된 장르 순으로 sort
    * 장르별 재생된 곡 : { 장르: [[idx, 횟수]] }
    * 재생된 장르를 배열로 만들어서 for문 돌면서 곡 배열을 횟수 순으로 정렬. 
    * 한 번 더 돌면서 해당 장르의 곡 순서를 answer에 push 
    */
    const sum = {}
    const songs = {}
    for (let i=0;i<genres.length;i++) {
        const gen = genres[i]
        const play = plays[i]
        sum[gen] = (sum[gen] || 0) + play
        songs[gen] = (songs[gen] || [])
        songs[gen].push([i, play])
    }
    
    const sortedTypes = Object.keys(sum).sort((key1, key2) => sum[key2] - sum[key1]) 
    const sortedSongs = sortedTypes.reduce((acc, type) => {
        acc.push(...songs[type].sort(([i1], [i2]) => i1 - i2)
                 .sort(([i1, p1], [i2, p2]) => p2 - p1).slice(0, 2))
        return acc
    }, [])

    return sortedSongs.map(([idx, _]) => idx)
  
}

