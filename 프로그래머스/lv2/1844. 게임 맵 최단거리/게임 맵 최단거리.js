function solution(maps) {
  const n = maps.length,
    m = maps[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let q = [[0, 0, 1]];


  while (q.length) {
    [x, y, cnt] = q.shift();
    // 도착 위치에 도착한 경우
    if (x === n - 1 && y === m - 1) return cnt;

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
        maps[nx][ny] = 0; // 다시 가지 못하도록 0으로 변경
        q.push([nx, ny, cnt + 1]);
      }
    }
  }
  // 반복문 안에서 도착 위치에 도달하지 못한 경우
  return -1;
}
