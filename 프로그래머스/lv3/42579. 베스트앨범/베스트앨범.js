function solution(genres, plays) {
  let plays_obj = {}, result = [];
  // {장르 : 플레이 수}
  let count = genres.reduce((obj, cur, idx) => {
    if (!obj[cur]) {
      obj[cur] = [];
    }
    obj[cur].push(plays[idx]);
    return obj;
  }, {});
    
  const sum_plays = (arr) => arr.reduce((acc, cur) => acc + cur, 0); // 배열 합 

  const sortable = Object.entries(count);
  sortable.forEach((v) => v[1].sort((a, b) => b - a)); // 재생횟수 정렬
  let g_sorted = sortable.sort((a, b) => sum_plays(b[1]) - sum_plays(a[1])); // 장르 정렬
  g_sorted = g_sorted.map((x) => x[1]);

    
  for (let i = 0; i < g_sorted.length; i++) {
    const first = g_sorted[i][0], second = g_sorted[i][1];
      
    result.push(plays.indexOf(first)); // 첫 번째는 무조건 push
    if (g_sorted[i].length > 1) {
      if (first === second) result.push(plays.indexOf(second, result.at(-1) + 1)); // 첫 번째, 두 번째가 같은 경우
      else result.push(plays.indexOf(second));
    }
  }
  return result;
}

