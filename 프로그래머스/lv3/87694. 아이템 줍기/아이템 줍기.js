function solution(rectangle, characterX, characterY, itemX, itemY) {
    let answer = 0;
    const maxSize = 101;
    // 좌표 간 거리가 붙어있지 않도록 2배
    let board = Array.from({ length: maxSize }, () => Array(maxSize).fill(-1));
    let rectDoubled = rectangle.map((el) => el.map((v) => v * 2));

    rectDoubled.forEach(([x1, y1, x2, y2]) => {
        for (let i=x1;i<x2+1;i++) {
            for (let j=y1;j<y2+1;j++) {
                // 직사각형 내부인 경우
                if (x1<i && i<x2 && y1<j && j<y2) {
                    board[i][j]=0
                } else if(board[i][j]!==0) {
                    // x1, x2, y1, y2는 테두리
                    // 직사각형의 내부가 아닐 때, 즉 테두리인 경우 1 채우기
                    board[i][j] = 1
                }
            }
        }
    })

    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;

    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    const q = [[characterX, characterY, 0]];
    board[characterX][characterY] = 0;
    // BFS로 테두리 탐색
    while (q.length) {
        const [curX, curY, cnt] = q.shift();
        // 아이템에 도착하면 cnt 반환
        if (curX === itemX && curY === itemY) {
            return cnt/2;
        }
        // 4방향 탐색하면서 이동 가능한 다음 지점 탐색
        for (let i = 0; i < 4; i++) {
            const nx = curX + dx[i];
            const ny = curY + dy[i];

            if (
                nx >= 0 &&
                nx < maxSize &&
                ny >= 0 &&
                ny < maxSize &&
                board[nx][ny] === 1
            ) {
                q.push([nx, ny, cnt + 1]);
                board[nx][ny] = 0;
            }
        }
    }
}
